import express, { Application } from "express";
import feedbackServiceModule from "./feedbackServiceModule/feedbackServiceModule";

const app = express();
const port = process.env.PORT || 3000;

startServices();

const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const connectdb = require('./users/connectDB');
const users = require('./users/routers/users');
const teams = require('./users/routers/teams');
const login = require('./users/routers/login');

const app = express();
/*
if(!config.get('jwtPrivateKey')) {
    console.error('jwtPrivateKey is not defined');
    process.exit(1);
};*/

connectdb.connectToDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', users);
app.use('/teams', teams);
app.use('/login', login);

async function startServices(){
    const feedbackApi = await feedbackServiceModule.init();
    app.use("/", feedbackApi.router);
    console.log("...");
    
    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });
}
