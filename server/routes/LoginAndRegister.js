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
    function isNumeric(value) {
        return /^-?\d+$/.test(value);
    }
    //Register
    app.post("/api/register", (req, res) => { 
        const name = req.body.name;
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const repeatpassword = req.body.repeatpassword;
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(name === ""|| password === "" || email === "" || repeatpassword === ""){
            console.log(name, password, repeatpassword, email, username)
            res.send({error: "Please fill out all fields"});
        }else{
            if(password != repeatpassword){
                res.send({error: "Passwords dont match"});
            } else{
                if(isNumeric(username)){
                    res.send({error: "This is not a valid username"});
                }else{
                    if(format.test(username)){
                        res.send({error: "No special characters"})
                    }else{
                        //Username Check
                        const sqlSelect = "SELECT * FROM user WHERE username = '" + username + "'";
                        var splited = name.split(" ");
                        const firstname = splited[0]
                        const lastname = splited[1]
                        db.query(sqlSelect, (err, result) =>{
                            if(result && result.length){
                                res.send({error: "Username is already taken"});
                            }else{
                                const sqlSelect = "SELECT * FROM user WHERE email = '" + email + "'";
                                db.query(sqlSelect, (err, result) =>{
                                    if(result && result.length){
                                        res.send({error: "Email is already taken"});
                                    }else{
                                        bcrypt.hash(password, saltRounds, (err, hash) => {
                                            if(err){
                                                res.send({error: "Something went wrong please try again"});
                                            }else{
                                                const sqlInsert = "INSERT INTO user (firstname, lastname, username, email, password) VALUES (?,?,?,?,?)"
                                                db.query(sqlInsert, [firstname, lastname, username, email, hash], (err, result) =>{
                                                    
                                                });

                                                res.send({succes: "Sucesfully Registered!"});
                                            }
                                        })
                                    }
                                });


                            }
                        });

                    }

                    
                }
                
            }
    
        }
        
    });

    //Login
    app.post("/api/login", (req, res)  => {
        const username = req.body.username;
        const password = req.body.password;
        if(username === "" || password === ""){
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
                            bcrypt.compare(password, result[0].password , (error, response) =>{
                                if(response){
                                    req.session.userId = (result[0].id)
                                    console.log(req.session.userId)
                                    res.send({succes : "Succesfully registered"})
                                }else{
                                    res.send({error: "Wrong username/password combination"})
                                }
                            })
                        }else{
                            res.send({error: "User does not exist"});
                        }
                    }
                }
            )
        }
    })
}