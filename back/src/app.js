const express = require('express');
const bodyParser = require('body-parser');

const connectdb = require('./users/connectDB');
const model = require('./users/userModel.js');
const users = require('./users/routers/routers');

const app = express();

connectdb.connectToDB();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', users);



//model.createUser('Mr Bean', 'bean@gmail.com', 'mrbean', 'admin');

const port = process.env.PORT || 3000;
app.listen(port);
