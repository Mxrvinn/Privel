const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt")
const app = express();
const mysql = require("mysql");
const cookieParser = require("cookie-parser");
const session = require("express-session");
var nodemailer = require('nodemailer');
var cookieSession = require('cookie-session')
var Hogan = require("hogan.js")
var validator = require('validator');

require('dotenv').config();
//Routes
require('./routes/LoginAndRegister')(app);

require('./routes/friends')(app);


require('./routes/documenthandling')(app);
require('dotenv').config({path: __dirname + '/.env'})


if(process.env.DB_HOST){
    console.log(".ENV FILE IS CONFIGURED!")
}

const { 
    v1: uuidv1,
    v4: uuidv4,
} = require('uuid');
var fs = require("fs")

var template = fs.readFileSync("./email/email.hjs" , "utf-8");
var compiledTemplate = Hogan.compile(template);

var template2 = fs.readFileSync("./email/bugreport.hjs" , "utf-8");
var compiledTemplate2 = Hogan.compile(template2)



const mongoose = require("mongoose")
const Document = require("./Document");
const { url } = require("inspector");
const { send } = require("process");
const { response } = require("express");
const { findOneAndRemove } = require("./Document");
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

app.set('trust proxy', true)
mongoose.connect("mongodb://localhost/docssafer", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

const io = require("socket.io")(3002, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
})


const defaultValue = ""

io.on("connection", socket => {
  socket.on("get-document", async documentId => {
    const document = await findOrCreateDocument(documentId)
    socket.join(documentId)
    socket.emit("load-document", document.data)

    socket.on("send-changes", delta => {
      socket.broadcast.to(documentId).emit("receive-changes", delta)
    })

    socket.on("save-document", async data => {
      await Document.findByIdAndUpdate(documentId, { data })
    })
  })
})

async function findOrCreateDocument(id) {
  if (id == null) return

  const document = await Document.findById(id)
  if (document) return document
  return await Document.create({ _id: id, data: defaultValue })
}




//DB credentials
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
const saltRounds = 10;

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));


app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 24 * 60 * 60 * 1000
}))

app.listen(3001, () => {
    console.log("Running on port 3001");
})

//checker if its numeric
function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

//Delete Row Function
const deleterow = (table, id) =>{
    db.query(
        "DELETE FROM " + table + " WHERE id = ?",
        id,
        (err, result) => {
            if(err){
                console.log(err)
            } else {
                console.log("DELETED ROW");
            }
        }
    )
}




//Check if changepw link is valid
app.post("/api/changepwauth", (req, res) => {
    var process = req.body.process
    process = process.id
    db.query(
        "SELECT * FROM changepw WHERE process = ?",
        process,
        (err, result) => {
            if(err){
                res.send({error: "Something went wrong please try again!"})
            }else{
                if(result.length > 0){
                    res.send({succes: "This Link is valid!"})
                }else{
                    res.send({error: "This link is invalid"})
                }
            }
        }
    )
})

app.post("/api/search", (req, res) => {
    const searchfield = req.body.searchfield
    const currentuser = req.session.userId
    if(!currentuser){
        res.send({error: "Not logged in"})
    }else{
        const sqlInsert = "SELECT * FROM user WHERE username LIKE '" + "%" + searchfield + "%" +"'"
        db.query(sqlInsert, [], (err, result) =>{
            if(err){
                res.send({error: "Something went wrong"});
                console.log(err)
            }else{
                res.send({succes: result})
            }
        });
        
    }
})

app.post("/api/getfolders" , (req, res) => {
    const currentuser = req.session.userId
    var site = req.body.site
    const sqlInsert = "SELECT * FROM folders WHERE userid = ?"
    db.query(sqlInsert, [currentuser], (err, result) =>{
        if(err){
            res.send({error: "Something went wrong"});
        }else{
            if(site >= 2){
                var newsite = (site - 1) * 6
                var legthofresult = newsite + 5;
                var senddata = "";
                var nextbutton = "";
                var senddata = ""
                if(result.length < newsite){
                    console.log("Error. You dont have that much documents")
                }else{
                    for(var i = newsite; i <= legthofresult; i++){
                        if(typeof result[i] !== "undefined" && result[i]){
                            senddata = senddata + result[i].title + "/"
                            senddata = senddata + result[i].documents + "/"
                            senddata = senddata + result[i].uuid + "/"
                        }
                        var nextresult = i + 1
                        if(typeof result[nextresult] !== "undefined" && result[nextresult]){
                            nextbutton = "yes"
                        }else{
                            nextbutton = ""
                        }
                    }
                    res.send({folders: senddata, button: nextbutton})
                }

            }else{
                var senddata = "";
                var nextbutton = "no"
                if(typeof result[0] !== "undefined" && result[0]){
                    senddata = senddata + "/" + result[0].title
                    senddata = senddata + "/" + result[0].documents
                    senddata = senddata + "/" + result[0].uuid
                }
                if(typeof result[1] !== "undefined" && result[1]){
                    senddata = senddata + "/" + result[1].title
                    senddata = senddata + "/" + result[1].documents
                    senddata = senddata + "/" + result[1].uuid
                }
                if(typeof result[2] !== "undefined" && result[2]){
                    senddata = senddata + "/" + result[2].title
                    senddata = senddata + "/" + result[2].documents
                    senddata = senddata + "/" + result[2].uuid
                }
                if(typeof result[3] !== "undefined" && result[3]){
                    senddata = senddata + "/" + result[3].title
                    senddata = senddata + "/" + result[3].documents
                    senddata = senddata + "/" + result[3].uuid
                }
                if(typeof result[4] !== "undefined" && result[4]){
                    senddata = senddata + "/" + result[4].title
                    senddata = senddata + "/" + result[4].documents
                    senddata = senddata + "/" + result[4].uuid
                }
                if(typeof result[5] !== "undefined" && result[5]){
                    senddata = senddata + "/" + result[5].title
                    senddata = senddata + "/" + result[5].documents
                    senddata = senddata + "/" + result[5].uuid
                }
                if(typeof result[6] !== "undefined" && result[5]){
                    nextbutton = "yes"
                }
                res.send({folders: senddata , button: nextbutton})                            




            }
            
            
        }
    });
})

app.post("/api/newDocument", (req,res) => {
    const DocName = req.body.docName
    const userId = req.session.userId;
    console.log(userId)
    var username = ""
    const sqlInsert = "SELECT * FROM user WHERE id = ?"
    db.query(sqlInsert, [userId], (err, result) =>{
        if(err){
            res.send({error: "Something went wrong"});
            console.log(err)
        }else{
            username = result[0].username;
            if(DocName == "" || DocName == "undefined"){
                res.send({error: "You have to enter a name!"})
            }else{
                if(userId == "" || userId == "undefinded" || username == ""){
                    res.send({fatalerror: "PUSH"})
                    console.log("FATAL ERROR")
                }else{
                    var uuid = uuidv1();
                    const sqlInsert = "INSERT INTO docs (title, urlid, userid, users, infolder) VALUES (?,?,?,?,?)"
                    db.query(sqlInsert, [DocName, uuid, userId, username, "false"], (err, result) =>{
                        if(err){
                            res.send({error: "Something went wrong please try again"})
                        }else{
                            const sqlInsert = "INSERT INTO teamdocs (title, docid, users) VALUES (?,?,?)"
                            db.query(sqlInsert, [DocName, uuid, ""], (err, result) =>{
                                if(err){
                                    console.log(err)
                                    res.send({error: "Something went wrong please try again"})
                                }else{
                                    res.send({succes: "Document created.You will be redirected", url: uuid})
                                }
                            });
                        }
                    });
                    
                }
            }
            
        }
    });
    
})

//Change the Password
app.post("/api/changepw", (req, res)  => {
    const password = req.body.password;
    const repeatpassword = req.body.repeatpassword;
    var process = req.body.process;
    process = process.id

    if(password === "" || repeatpassword === "" || process === "" || password != repeatpassword){
        res.send({error: "Please fill out all fields"});
    }else{
        db.query(
            "SELECT * FROM changepw WHERE process = ?",
            process,
            (err, result) => {
                if(err){
                    res.send({error: "Something went wrong please try again"});
                    console.log("ERROR HIER")
                } else {
                    const userid = result[0].userid
                    
                    const id = result[0].id

                    bcrypt.hash(password, saltRounds, (err, hash) => {
                        if(err){
                            res.send({error: "Something went wrong please try again"});
                        }else{
                            const sqlInsert = "UPDATE user SET password = ? WHERE id = ?"
                            db.query(sqlInsert, [hash, userid], (err, result) =>{
                                if(err){
                                    res.send({error: "Something went wrong 1"});
                                    console.log(err)
                                }else{
                                    res.send({succes: "Succesfully changed your password.You can now login"})
                                    //WAIT 5 SECONDS SO USER CAN SEE MESSAGE
                                    sleep(10000).then(() => {
                                        deleterow("changepw", id)
                                      });
                                }
                            });
                        }
                    })
                }
            }
        )
    }
})
//Get UserId Cookie even from post function
const getAppCookies = (req) => {
    const rawCookies = req.session.userId
    return rawCookies;
};
app.post("/api/destroycookie", (req, res) => {
    //Destroy Cookie
    req.session = null
    res.clearCookie("userId", {path: '/'})
    res.send({ 'clearSession': 'success' })
})

app.post("/api/findfriends", (req, res) => {
    var name = req.body.name
    var userid = req.session.userId
    
    const sqlInsert = "SELECT * FROM user WHERE id != ? AND username LIKE '%" + name + "%'"
    db.query(sqlInsert,[userid] ,  (err, result) =>{
        if(err){
            res.send({error: "Something went wrong"})
        }else{
            var send = ""
            if(result[0]){
                var send = result[0].username + "/"
            }
            if(result[1]){
                var send = send + result[1].username + "/"
            }
            if(result[2]){
                var send = send + result[2].username + "/"
            }
            if(result[3]){
                var send = send + result[3].username + "/"
            }
            if(result[4]){
                var send = send + result[4].username + "/"
            }
            res.send({succes: send})
        }
    });
    
})



app.post("/api/newfolder", (req, res) => {
    var foldername = req.body.folderName
    var userid = req.session.userId
    if(!foldername ){
        res.send({error: "You have to enter a name"})
    }else{
        //DO THIS IS USER IS NOT LOGGED IN
        if(!userid){
            res.send({fatalerror: "Not logged in push!"})
        }else{
            const sqlInsert = "SELECT * FROM user WHERE id = ?"
            db.query(sqlInsert, [userid],  (err, result) =>{
                if(err){
                    console.log("HA")
                    res.send({error: "Something went wrong"})
                }
                if(result.length > 0){
                    var username = result[0].username
                    username = username + "+"
                    var uuid = uuidv1();
                    const sqlInsert = "INSERT INTO folders (title, userid, users, uuid, documents) VALUES (?,?,?,?,?)"
                    db.query(sqlInsert,[foldername, userid, username, uuid, 0] ,  (err, result) =>{
                        if(err){
                            res.send({error: "Something went wrong"})
                        }else{
                            res.send({succes: "Succesfully created a new Document"})
                        }
                    });
                }else{
                    res.send({fatalerror: "Something went wrong please push"})
                }
            });    
        }   
    }
});

app.post("/api/texteditor", (req, res) => {
    //Get Values 
    var documentID = req.body.documentid;
    var currentuserID = getAppCookies(req)
    //Check if values are null
    if(!documentID){
        res.send("KEINE VALUE")
    }else if(!currentuserID){
        res.send("KEINE VALUE")
    }else{
        //Check if documentid is a uuid
        if(!validator.isUUID(documentID)){
            res.send({error: "This is not a UUID"})
        }else{
            //Check if its in db
            db.query(
                "SELECT * FROM docs WHERE urlid = ?",
                documentID,
                (err, result) => {
                    if(err){
                        res.send({error: "Something went wrong please try again"});
                        
                    } else {
                        if(result.length > 0){
                            //Check if you have acces to this doc
                            if(result[0].userid === currentuserID){
                                res.send({succces: "You now have acces to this document"})
                            }else{
                                const accesusers = result[0].users.split("+")
                                const sqlInsert = "SELECT * FROM user WHERE id = ?"
                                db.query(sqlInsert, [currentuserID], (err, result) =>{
                                    if(err){
                                        res.send({fatalerror: "ERROR"})
                                    }else{
                                        if(result.length  > 0 ){
                                            const username = result[0].username
                                            if(accesusers.includes(username)){
                                                res.send({succes: "You now have acces to this document"})
                                            }else{
                                                res.send({error: "You dont have acces"})
                                            }
                                        }else{
                                            res.send({error: "You dont have acces"})
                                        }
                                    }
                                });
                            }
                        }else{
                            //If not handle it as a new document and then insert into database
                            const sqlInsert = "INSERT INTO docs (title, urlid, userid, users) VALUES (?,?,?,?)"
                            db.query(sqlInsert, ["New Doc", documentID, currentuserID, ""], (err, result) =>{
                                if(err){
                                    res.send({error: "Something went wrong"})
                                }
                                if(result.length > 0){
                                    res.send({succes: "Sucesfully inserted"})
                                }
                            });
                        }
                    }
                }
            )
        }
    }
    
})
app.post("/api/follow" , (req, res)=>{
    const currentuser = req.session.userId
    const toadd = req.body.username
    if(!currentuser){
        res.send({error: "Something went wrong"})
    }else{
        const sqlInsert = "SELECT * FROM friends WHERE userid = ?"
        db.query(sqlInsert,[currentuser] ,  (err, result) =>{
            if(err){
                res.send({error: "Something went wrong"})
            }else{
                if(result.length > 0){
                    //GET FRIENDLIST STRING
                    const sqlInsert = "SELECT * FROM friends WHERE userid = ?"
                    db.query(sqlInsert,[currentuser] ,  (err, result) =>{
                        if(err){
                            res.send({error: "Something went wrong"})
                        }else{
                            //CHANGE FRIENDLIST STRING
                            var friendlist = result[0].friends
                            var friendlist2 = friendlist + toadd +  "+"
                            //INSERT NEW FRIEND LIST
                            const sqlInsert = "UPDATE friends SET friends = ? WHERE userid = ?"
                            db.query(sqlInsert,[friendlist2, currentuser] ,  (err, result) =>{
                                if(err){
                                    res.send({error: "Something went wrong"})
                                }else{
                                    
                                    res.send({succes: "Everything fine"})
                                }
                            });
                        }
                    });
                }else{
                    //NEW ENTRY FOR FIRST TIME ADDING A PERSON
                    const sqlInsert = "INSERT INTO friends (userid) VALUES (?)";
                    db.query(sqlInsert,[currentuser] ,  (err, result) =>{
                        if(err){
                            res.send({error: "Something went wrong"})
                        }else{
                            var friendlist =  toadd +  "+"
                            //INSERT NEW FRIEND LIST
                            const sqlInsert = "UPDATE friends SET friends = ? WHERE userid = ?"
                            db.query(sqlInsert,[friendlist, currentuser] ,  (err, result) =>{
                                if(err){
                                    res.send({error: "Something went wrong"})
                                }else{
                                    res.send({succes: "Everything fine"})
                                }
                            });
                        }
                    });
                }
                
            }
        });



        
        
    }


})
app.post("/api/profilepage" , (req, res) => {
    const id = req.body.id
    const currentuserid = req.session.userId
    if(!id){
        res.send({username: "UNKNOWN", email: "UNKNOWN", website: "UNKNOWN", firstbio: "UNKNOWN", longbio: "UNKNOWN", secbio: "UNKNOWN", instagram: "UNKNOWN", twitter: "UNKNOWN", github: "UNKNOWN", facebook: "UNKNOWN"})
    }else{
        const sqlInsert = "SELECT * from user WHERE username = ?"
        db.query(sqlInsert, [id], (err, result) =>{
        if(err){
            res.send({error: "Something went wrong"})
        }
        if(result.length > 0){
            res.send({firstname: result[0].firstname, lastname:result[0].lastname, username: result[0].username, email: result[0].email, firstbio: result[0].firstbio, secbio: result[0].secbio, longbio: result[0].longbio, website: result[0].website, instagram: result[0].instagram, twitter: result[0].twitter, github: result[0].github, facebook: result[0].facebook})
        }else{
            res.send({username: "UNKNOWN", email: "UNKNOWN", website: "UNKNOWN", instagram: "UNKNOWN",firstbio: "UNKNOWN", longbio: "UNKNOWN", secbio: "UNKNOWN",  longbio: "UNKNOWN", twitter: "UNKNOWN", github: "UNKNOWN", facebook: "UNKNOWN"})
        }
        });
    }
})
app.post("/api/followcheck" , (req, res) => {
    const currentuserid = req.session.userId
    const user = req.body.username
    const sqlInsert = "SELECT * FROM friends WHERE userid = ?"
    db.query(sqlInsert, [currentuserid], (err, result) =>{
        if(err){
            res.send({error: "Something went wrong"})
        }
        if(result.length > 0){
            const friendlist = result[0].friends

            
            if(friendlist.includes(user)){

                res.send({follow:"You are following the user"})
            }
        }
    });
    
    
})

app.post("/api/unfollow" , (req, res) => {
    const currentuserid = req.session.userId
    var username = req.body.username
    const sqlInsert = "SELECT * FROM friends WHERE userid = ?"
    db.query(sqlInsert, [currentuserid], (err, result) =>{
        if(err){
            res.send({error: "Something went wrong"})
        }
        if(result.length > 0){
            var friendlist = result[0].friends
            friendlist = friendlist.replace(username + "+", "")
            const sqlInsert = "UPDATE friends SET friends = ? WHERE userid = ?"
            db.query(sqlInsert, [friendlist, currentuserid], (err, result) =>{
                if(err){
                    res.send({error: "Something went wrong"})
                }else{
                    res.send({succes: "Everything fine"})
                }
            });
        }
    });
})

app.post("/api/settings" , (req, res) => {
    const id = req.session.userId
    if(!id){
        res.send({username: "UNKNOWN", email: "UNKNOWN", website: "UNKNOWN", instagram: "UNKNOWN",firstbio: "UNKNOWN", longbio: "UNKNOWN", secbio: "UNKNOWN",  longbio: "UNKNOWN", twitter: "UNKNOWN", github: "UNKNOWN", facebook: "UNKNOWN"})
    }else{
        const sqlInsert = "SELECT * from user WHERE id = ?"
        db.query(sqlInsert, [id], (err, result) =>{
        if(err){
            res.send({error: "Something went wrong"})
        }
        if(result.length > 0){
            res.send({firstname: result[0].firstname, lastname:result[0].lastname, username: result[0].username, email: result[0].email, firstbio: result[0].firstbio, secbio: result[0].secbio, longbio: result[0].longbio, website: result[0].website, instagram: result[0].instagram, twitter: result[0].twitter, github: result[0].github, facebook: result[0].facebook})
        }else{
            res.send({username: "UNKNOWN", email: "UNKNOWN", website: "UNKNOWN", instagram: "UNKNOWN",firstbio: "UNKNOWN", longbio: "UNKNOWN", secbio: "UNKNOWN",  longbio: "UNKNOWN", twitter: "UNKNOWN", github: "UNKNOWN", facebook: "UNKNOWN"})
        }
    });
    }
})
app.post("/api/selfcheck" , (req, res) => {
    const id = req.session.userId
    const username = req.body.username
    const sqlInsert = "SELECT * FROM user WHERE id = ?"
    db.query(sqlInsert, [id], (err, result) =>{
        if(err){
            res.send({error: "Something went wrong"})
        }
        if(result.length > 0){
            const selfusername = result[0].username
            if(selfusername == username){
                res.send({self: "This is you!"})
            }
        }
    }); 
    
    
})



app.post("/api/updateprofile" , (req, res) => {
    const currentuser = req.session.userId
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const firstbio = req.body.firstbio
    const secbio = req.body.secbio
    const website = req.body.website
    const github = req.body.github
    const twitter = req.body.twitter
    const instagram = req.body.instagram
    const facebook = req.body.facebook
    const email = req.body.email
    const longbio = req.body.longbio
    if(!firstname || !lastname){
        res.send({error: "Your Name can not be empty"})
    }else{
        if(firstbio.length > 35 || secbio.length > 35){
            res.send({error: "Your Bio is to long"})
        }else{
            const sqlInsert = "UPDATE user SET firstname = ?, lastname = ?, firstbio = ?, secbio = ?, longbio = ?, website = ?, instagram = ?, github = ?, facebook = ?, twitter = ?, email = ? WHERE id = ?"
            db.query(sqlInsert,[firstname, lastname,firstbio,secbio,longbio, website, instagram, github, facebook, twitter, email, currentuser] ,  (err, result) =>{
                if(err){
                    res.send({error: "Something went wrong"})
                }else{
                    res.send({succes: "Succesfully updated your Profile"})
                }
            });
        }
    }
})

app.get("/api/check" ,(req, res) => {
    if(req.session.userId) {
        const userId = req.session.userId;
        var error = "";
        var username = "";
        db.query(
            "SELECT * FROM user WHERE id = ?",
            userId,
            (err, result) => {
                if(err){
                    console.log("HIER1")
                    res.send({error: "Error"})
                } else {
                    if(result.length > 0){
                        res.send({loggedin: userId, username: result[0].username , firstname: result[0].firstname, lastname: result[0].lastname, email: result[0].email})
                    }else{
                        console.log("HIER2")

                        res.send({error: "Error"})
                    }
                }
            }
        )
    }else{

        res.send({error: "Please Login to use this Website"});
    }
})

app.post("/api/bugreports" ,(req, res) => {
    const fullname = req.body.name
    const email = req.body.email
    const message = req.body.message
    if(!fullname || !email || !message){
        res.send({error: "Please fill out all fields"})
    }else{
        const sqlInsert = "INSERT INTO bugreports (fullname,email,message) VALUES (?,?,?)";
        db.query(sqlInsert,[fullname, email, message] ,  (err, result) =>{
            if(err){
                res.send({error: "Something went wrong"})
            }else{
                res.send({succes: "Sucesfully reported a Bug! Thank you!"})
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.GMAIL_NAME,
                        pass: process.env.GMAIL_PASSWORD
                    }
                });
    
                var mailOptions = {
                //Change link
                        
                    from: process.env.GMAIL_NAME,
                    to: email,
                    subject: 'Thank you!',
                    html: compiledTemplate2.render({username: fullname, report: message})
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
            }
        });
    }
})

//Get Reset Link
app.post("/api/passwordreset", (req, res)  => {
    const username = req.body.username;
    if(username === ""){
        res.send({error: "Please fill out all fields"});
    }else{
        db.query(
            "SELECT * FROM user WHERE username = ?",
            username,
            (err, result) => {
                if(err){
                    res.send({error: "Something went wrong please try again"});
                } else {
                    if(result.length > 0){
                        res.send({succes : "We have send you a email with a link"})

                        var link = "http://localhost:3000/change–password/process?id=";

                        var uuid = uuidv1();
                        var link = link + uuid;
                        const userid = result[0].id

                        const sqlInsert = "INSERT INTO changepw (process, userid) VALUES (?,?)"
                        db.query(sqlInsert, [uuid, userid],(err, result) =>{
                            if(err){
                                console.log(err)
                            }
                        });

                        const email = result[0].email;
                        var transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                              user: process.env.GMAIL_NAME,
                              pass: process.env.GMAIL_PASSWORD
                            }
                        });
    
                        var mailOptions = {
                            //Change link
                        
                            from: process.env.GMAIL_NAME,
                            to: email,
                            subject: 'Reset Password ',
                            html: compiledTemplate.render({username: username, link: link})
                        };
                        transporter.sendMail(mailOptions, function(error, info){
                            if (error) {
                              console.log(error);
                        } else {
                              console.log('Email sent: ' + info.response);
                        }
                        });

                    }else{
                        db.query(
                            "SELECT * FROM user WHERE email = ?",
                            username,
                            (err, result) => {
                                if(err){
                                    res.send({error: "Something went wrong please try again"});
                                } else {
                                    if(result.length > 0){
                                        res.send({succes : "We have send you a email with a link"})
                                        var link = "http://localhost:3000/change–password/process?id=";

                                        var username = result[0].username
                                        var uuid = uuidv1();
                                        var link = link + uuid;
                                        const userid = result[0].id

                                        const sqlInsert = "INSERT INTO changepw (process, userid) VALUES (?,?)"
                                        db.query(sqlInsert, [uuid, userid], (err, result) =>{
                                            if(err){
                                                console.log(err)
                                            }
                                        });
                                        let transporter = nodemailer.createTransport({
                                            host: 'smtp.gmail.com',
                                            port: 587,
                                            secure: false,
                                            requireTLS: true,
                                            auth: {
                                                user: process.env.GMAIL_NAME,
                                                pass: process.env.GMAIL_PASSWORD
                                            }
                                        });
                    
                                        var mailOptions = {
                                        
                                            from: process.env.GMAIL_NAME,
                                            to: username,
                                            subject: 'Reset Password',
                                            html: compiledTemplate.render({username: username, link: link})
                                            
                                        };
                                          
                                        transporter.sendMail(mailOptions, function(error, info){
                                            if (error) {
                                              console.log(error);
                                        } else {
                                              console.log('Email sent: ' + info.response);
                                        }
                                        });
                                        
                                    }else{
                                        res.send({error: "User does not exist"});
                                    }
                                }
                            }
                        )
                    }
                }
            }
        )
    }
})




