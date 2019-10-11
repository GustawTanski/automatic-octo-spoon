const express = require('express');
const bodyParser = require('body-parser');

const connectdb = require('./users/connectDB');
const model = require('./users/userModel.js');

connectdb.connectToDB();

model.createUser('Mr Bean', 'bean@gmail.com', 'mrbean', 'admin');
