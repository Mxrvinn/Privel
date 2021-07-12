module.exports = function(app){
    const express = require("express");
    const bodyParser = require("body-parser");
    const cors = require("cors");
    const bcrypt = require("bcrypt")
    const router = express.Router();
    const mysql = require("mysql");
    const cookieParser = require("cookie-parser");
    const session = require("express-session");
    var cookieSession = require('cookie-session')
    require('dotenv').config({path: __dirname + '/.env'})


    const { 
        v1: uuidv1,
        v4: uuidv4,
    } = require('uuid');

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
    //Long Request to get the docs
    app.post("/api/getdocs", (req, res) => {
        var site = req.body.site
        site = site.site
        const userId = req.session.userId;
        const infolder = "false"
        db.query(
            "SELECT * from docs WHERE userid = ? AND infolder = 'false' ",
            userId,
            (err, result) => {
                if(err){
                    res.send({error: "Something went wrong.Please try again later"})
                }else{
                    if(result.length > 0){
                        //site = 2
                        //result.length = 3 MINIMUM ist 1
                        //das heißt es gibt 3 Einträge
                        //Seite mal minus 1 mal 5 währen 5
                        //Wenn das größer als die Einträge sind dann return error message
                        //so viele wieviel gezeigt wurden minus result.length
                        //diese anzahl dann zurückschicken
                        //Mit vorschleife aber merken result fängt hier bei null an obwohl length 1 ist
                        if(site >= 2){
                            var newsite = (site - 1) * 6
                            var show = newsite - 1;
                            var legthofresult = newsite + 5;
                            var senddata = "";
                            var nextbutton = "";
                            if(result.length < newsite){
                                console.log("Error. You dont have that much documents")
                            }else{
                                for(var i = newsite; i <= legthofresult; i++){
                                    if(typeof result[i] !== "undefined" && result[i]){
                                        senddata = senddata + "/" + result[i].title
                                        senddata = senddata + "/" + result[i].users
                                        senddata = senddata + "/" + result[i].urlid
                                    }
                                    var nextresult = i + 1
                                    if(typeof result[nextresult] !== "undefined" && result[nextresult]){
                                        nextbutton = "yes"
                                    }else{
                                        nextbutton = ""
                                    }
                                }
                                senddata = senddata + "/" + nextbutton
                                res.send({data: senddata})
                            }
                        }else{
                            //Just return result von 0 bis 4
                            var senddata = "";
                            if(typeof result[0] !== "undefined" && result[0]){
                                senddata = senddata + "/" + result[0].title
                                senddata = senddata + "/" + result[0].users
                                senddata = senddata + "/" + result[0].urlid
                            }
                            if(typeof result[1] !== "undefined" && result[1]){
                                senddata = senddata + "/" + result[1].title
                                senddata = senddata + "/" + result[1].users
                                senddata = senddata + "/" + result[1].urlid
                            }
                            if(typeof result[2] !== "undefined" && result[2]){
                                senddata = senddata + "/" + result[2].title
                                senddata = senddata + "/" + result[2].users
                                senddata = senddata + "/" + result[2].urlid
                            }
                            if(typeof result[3] !== "undefined" && result[3]){
                                senddata = senddata + "/" + result[3].title
                                senddata = senddata + "/" + result[3].users
                                senddata = senddata + "/" + result[3].urlid
                            }
                            if(typeof result[4] !== "undefined" && result[4]){
                                senddata = senddata + "/" + result[4].title
                                senddata = senddata + "/" + result[4].users
                                senddata = senddata + "/" + result[4].urlid
                            }
                            if(typeof result[5] !== "undefined" && result[5]){
                                senddata = senddata + "/" + result[5].title
                                senddata = senddata + "/" + result[5].users
                                senddata = senddata + "/" + result[5].urlid
                            }
                            if(typeof result[6] !== "undefined" && result[5]){
                                senddata = senddata + "/" + "yes"
                            }
                            res.send({data: senddata})
                        }
                    }else{
                        res.send({error: "You dont have any docs"})
                    }
                }
            }
        )
    })
    

    app.post("/api/updatedoc", (req,res) => {
        const documentName = req.body.docName
        const documentid = req.body.docid
        var users = req.body.users
        const userid = req.session.userId
        //Replace firsttest mit username
 
        
        if(documentName === "" || documentName === "undefined"){
            res.send({error: "You have to enter a name"})
        }else{
            if(documentid === "" || documentid === "undefined"){
                res.send({fatalerror: "ERROR"})
            }else{
            const sqlInsert = "SELECT * FROM docs WHERE urlid = ?"
            db.query(sqlInsert, [documentid], (err, result) =>{
                if(err){
                   res.send({fatalerror: "ERROR"})
                }else{
                    if(result.length > 0){
                        //CHeck if its your Doc
                        if(result[0].userid !== userid){
                            res.send({fatalerror: "NOT YOUR DOC"})
                        }else{
                            const docid = result[0].id
                            //YES IT IS IN DB
                            //CHECK IF USER IS LOGGED IN
                            //GET USERNAME
                            const sqlInsert = "SELECT * FROM user WHERE id = ?"
                            db.query(sqlInsert, [userid], (err, result) =>{
                                if(err){
                                    res.send({fatalerror: "ERROR"})
                                }else{
                                    if(result.length > 0){
                                        if(users === ""){
                                            users = result[0].username
                                        }
                                        //UPDATE DOCUMENT
                                        const sqlInsert = "UPDATE docs SET title = ?, users = ? WHERE id = ?"
                                        db.query(sqlInsert, [documentName, users, docid], (err, result) =>{
                                            if(err){
                                                res.send({fatalerror: "ERROR"})
                                            }else{
                                                const sqlInsert = "SELECT * FROM user WHERE id = ?"
                                                db.query(sqlInsert, [userid], (err, result) =>{
                                                    if(err){
                                                        res.send({fatalerror: "ERROR"})
                                                    }else{
                                                        var username = result[0].username
                                                        var users2 = users
                                                        if(users2.includes(username + "+")){
                                         
                                                            users = users2.replace(username + "+" , "")
                                                            const sqlInsert = "UPDATE teamdocs SET users = ? ,title = ? WHERE docid = ?"
                                                            db.query(sqlInsert, [users, documentName, documentid], (err, result) =>{
                                                                if(err){
                                                                    res.send({fatalerror: "ERROR"})
                                                                }else{
                                                                    
                                                                    res.send({succes: "Your Document got updated"})
                                                                }
                                                            });
                                                        }else{
                                                            if(users2.includes(username)){
                                                                users = users2.replace(username, "");
                                                                console.log(users2)
                                                                const sqlInsert = "UPDATE teamdocs SET users = ? ,title = ? WHERE docid = ?"
                                                                db.query(sqlInsert, [users, documentName, documentid], (err, result) =>{
                                                                    if(err){
                                                                        res.send({fatalerror: "ERROR"})
                                                                    }else{
                                                                        
                                                                        res.send({succes: "Your Document got updated"})
                                                                    }
                                                                });
                                                                
                                                            }else{
                                                                const sqlInsert = "UPDATE teamdocs SET users = ? ,title = ? WHERE docid = ?"
                                                                db.query(sqlInsert, [users, documentName, documentid], (err, result) =>{
                                                                    if(err){
                                                                        res.send({fatalerror: "ERROR"})
                                                                    }else{
                                                                        
                                                                        res.send({succes: "Your Document got updated"})
                                                                    }
                                                                });
                                                            }
                                                        }
                                                    }
                                                });
                                            }
                                        });
                                    }else{
                                        res.send({fatalerror: "NOT LOGGED IN"})
                                    }
                                }
                            });

                        }
                    }else{
                        console.log("THIS DOC DOES NOT EXIST")
                    }
                }
            });
            }
            

        }
    })

    app.post("/api/doccheckedit", (req,res) => {
        const documentid = req.body.documentid
        const userid = req.session.userId
        if(documentid == "" || documentid == "undefined" || documentid == undefined){
            res.send({fatalerror: "This is not a valid id"})
        }else{
            const sqlInsert = "SELECT * FROM docs WHERE urlid = ?"
            db.query(sqlInsert, [documentid], (err, result) =>{
                if(err){
                    res.send({fatalerror: "Something went wrong please try again"})
                }else{
                    if(result.length > 0){
                        if(result[0].userid !== userid){
                            res.send({fatalerror: "NOT YOUR DOC"})
                        }else{
                            res.send({docName: result[0].title, users: result[0].users.split("+")})
                        }
                    }else{
                        res.send({fatalerror: "THIS DOC DOES NOTE EXIST"})
                    }
                }
            });
        }
        
    })
    app.post("/api/deletedoc" , (req, res) => {
        const docurl = req.body.docurl
        const userid = req.session.userId
        if(docurl == "" || userid == ""){
            res.send({error: "Something went wrong please try again"})

        }else{
            const sqlInsert = "SELECT * FROM user WHERE id = ?"
            db.query(sqlInsert,[userid], (err, result) =>{
                if(err){
                    res.send({error: "Something went wrong"})
                    console.log("HERE 1")
                }else{
                    if(result.length > 0){
                        const username = result[0].username
                        //Check if doc exists then delete it
                        const sqlInsert = "SELECT * FROM docs WHERE urlid = ?"
                        db.query(sqlInsert,[docurl], (err, result) =>{
                            if(err){
                                res.send({error: "Something went wrong"})
                                console.log("HERE 2")
                            }else{
                                if(result.length > 0){
                                    const sqlInsert = "DELETE FROM docs WHERE urlid = ?"
                                    db.query(sqlInsert,[docurl], (err, result) =>{
                                        if(err){
                                            res.send({error: "Something went wrong"})
                                            console.log("HERE 3")
                                        }else{
                                            const sqlInsert = "DELETE FROM teamdocs WHERE docid = ?"
                                            db.query(sqlInsert,[docurl], (err, result) =>{
                                                if(err){
                                                    res.send({error: "Something went wrong"})
                                                    console.log("HERE 3")
                                                }else{
                                                    res.send({succes: "Succefully deleted you will be redirected shortly"})
                                                }
                                            });
                                        }
                                    });
                                }else{
                                    res.send({error: "No document found"})
                                }
                            }
                        });
                    }else{
                        res.send({error: "No user found"})
                    }
                    
                    
                }
            });
        }
    })

   

    app.post("/api/teamdocuments", (req,res) => {
        const userid = req.session.userId
        var site = req.body.site
        site = site.site
        var username = ""
        
        if(userid == "" || userid == "undefined"){
            res.send({fatalerror: "You are not logged in"})
        }else{
            
            
            //GET USERNAME
            const sqlInsert = "SELECT * FROM user WHERE id = ?"
            db.query(sqlInsert,[userid], (err, result) =>{
                if(err){
                    console.log(err)
                    res.send({fatalerror: "No username found"})
                    username = result[0].username
                }else{
                    username = result[0].username
                    //Neue DB TeamDocs genau gleich nur man macht nur die namen von den leute hind ie hinzugefügt wurden und nicht den ersteller
                    const sqlInsert = "SELECT * FROM teamdocs WHERE users LIKE '%" + username + "%'"
                    db.query(sqlInsert,[username], (err, result) =>{
                        

                        var newsite = (site - 1) * 6
                        var show = newsite - 1;
                        var legthofresult = newsite + 5;
                        var senddata = "";
                        var nextbutton = "";
                        
                        if(site >= 2){
                            var newsite = (site - 1) * 6
                            var show = newsite - 1;
                            var legthofresult = newsite + 5;
                            var senddata = "";
                            var nextbutton = "";
                            if(result.length < newsite){
                                console.log("Error. You dont have that much documents")
                            }else{
                                for(var i = newsite; i <= legthofresult; i++){
                                    if(typeof result[i] !== "undefined" && result[i]){
                                        senddata = senddata + "/" + result[i].title
                                        senddata = senddata + "/" + result[i].docid
                                        senddata = senddata + "/" + result[i].users.split("+").length 
                                    }
                                    var nextresult = i + 1
                                    if(typeof result[nextresult] !== "undefined" && result[nextresult]){
                                        nextbutton = "yes"
                                    }else{
                                        nextbutton = ""
                                    }
    
                                }
                                senddata = senddata + "/" + nextbutton
                                res.send({data: senddata})
                            }
                        }else{
                            var senddata = "";
                            if(typeof result[0] !== "undefined" && result[0]){
                                senddata = senddata + "/" + result[0].title
                                senddata = senddata + "/" + result[0].docid
                                senddata = senddata + "/" + result[0].users.split("+").length 
                            }
                            if(typeof result[1] !== "undefined" && result[1]){
                                senddata = senddata + "/" + result[1].title
                                senddata = senddata + "/" + result[1].docid
                                senddata = senddata + "/" + result[1].users.split("+").length 
                                
                            }
                            if(typeof result[2] !== "undefined" && result[2]){
                                senddata = senddata + "/" + result[2].title
                                senddata = senddata + "/" + result[2].docid
                                senddata = senddata + "/" + result[2].users.split("+").length 
                            }
                            if(typeof result[3] !== "undefined" && result[3]){
                                senddata = senddata + "/" + result[3].title
                                senddata = senddata + "/" + result[3].docid
                                senddata = senddata + "/" + result[3].users.split("+").length 
                            }
                            if(typeof result[4] !== "undefined" && result[4]){
                                senddata = senddata + "/" + result[4].title
                                senddata = senddata + "/" + result[4].docid
                                senddata = senddata + "/" + result[4].users.split("+").length 
                            }
                            if(typeof result[5] !== "undefined" && result[5]){
                                senddata = senddata + "/" + result[5].title
                                senddata = senddata + "/" + result[5].docid
                                senddata = senddata + "/" + result[5].users.split("+").length 
                            }
                            if(typeof result[6] !== "undefined" && result[5]){
                                senddata = senddata + "/" + "yes"
                            }
                            
                            res.send({data: senddata})
                            
                        }
        
                    });
                }
            });
            
        }
        
            
        
    })

    

    
    
    
}