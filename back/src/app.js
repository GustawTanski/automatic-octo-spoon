const express = require('express');
const bodyParser = require('body-parser');

const connectdb = require('./users/connectDB');

connectdb.connectToDB();