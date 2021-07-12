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
    //Api to call to destroy cookie
    app.post("/api/destroycookie", (req, res) => {
        //Destroy Cookie
        req.session = null
        res.clearCookie("userId", {path: '/'})
        res.send({ 'clearSession': 'success' })
    })


}