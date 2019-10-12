const config = require('config');
const jwt = require('jsonwebtoken');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const model = require('../models/userModel');

const router = express.Router();

router.post('/', async (req, res) => {
    console.log('Hello from login POST');
    console.log(req.body);

    const user = await model.User.findOne({email: req.body.email});
    if (!user) return res.status(404).send('Invalid email or password');

    const valid = await bcrypt.compare(req.body.password, user.password);
    if(!valid) return res.status(400).send('Invalid email or password');

    const token = jwt.sign({_id: user._id, isBoss: user.isBoss}, 'jwtPrivateKey');

    res.header('x-auth-token', token).send();

});

module.exports = router;
