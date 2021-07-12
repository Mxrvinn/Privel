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

    function getBio(username, callback) {

        const sqlInsert = "SELECT * FROM user WHERE username = ?"
        db.query(sqlInsert, [username], (err, result) =>{
            if(err){
                return "Something went wrong"
            }else{
                var firstbio = result[0].firstbio
                callback(firstbio)

            }
        });
    }

    app.post("/api/getfriends", (req, res) => {
        var site = req.body.site
        const userId = req.session.userId;
        db.query(
            "SELECT * from friends WHERE userid = ?",
            userId,
            (err, result) => {
                if(err){
                    res.send({error: "Something went wrong.Please try again later"})
                }else{
                    if(result.length > 0){
                        if(site >= 2){
                            var newsite = (site - 1) * 6
                            var show = newsite - 1;
                            var legthofresult = newsite + 5;
                            var nextbutton = "";
                            var length = result[0].friends
                            
                            length = length.split("+")
                            if(length < newsite){
                                console.log("Error. You dont have that much documents")
                            }else{
                                var senddata = "";
                                var bios = ""
                                for(var i = newsite; i <= length.length; i++){
                                    if(typeof length[i] !== "undefined" && length[i]){
                                        senddata = senddata + length[i] + "/"

                                    }
                                    var nextresult = i + 1
                                    //Check for more than 6 friends
                                    if(typeof result[nextresult] !== "undefined" && result[nextresult]){
                                        nextbutton = "yes"
                                    }else{
                                        nextbutton = "no"
                                    }   
                                }
                                res.send({data: senddata, button : nextbutton, bios: bios})     
                            }
                            
                        }else{
                            var senddata = "";
                            var length = result[0].friends
                            length = length.split("+")
                            var senddata = "";
                            if(typeof length[0] !== "undefined" && length[0]){
                                senddata = senddata + "/" + length[0]

                            }
                            if(typeof length[1] !== "undefined" && length[1]){
                                senddata = senddata + "/" + length[1]


                            }
                            if(typeof length[2] !== "undefined" && length[2]){
                                senddata = senddata + "/" + length[2]


                            }
                            if(typeof length[3] !== "undefined" && length[3]){
                                senddata = senddata + "/" + length[3]


                            }
                            if(typeof length[4] !== "undefined" && length[4]){
                                senddata = senddata + "/" + length[4]

                            }
                            if(typeof length[5] !== "undefined" && length[5]){
                                senddata = senddata + "/" + length[5]


                            }
                            if(typeof length[6] !== "undefined" && length[5]){
                                nextbutton = "yes"

                            }
                            res.send({data: senddata , button : nextbutton})
                        }
                    }else{
                        
                        
                    }
                }
            }
        )
    })

    
}
