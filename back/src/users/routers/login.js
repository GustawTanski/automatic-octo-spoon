const config = require('config');
const jwt = require('jsonwebtoken');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userModel = require('../models/userModel');
const teamModel = require('../models/teamModel');

const router = express.Router();

router.post('/', async (req, res) => {
    let team = await teamModel.Team.findOne({name: req.body.team});
    const user = await userModel.User.findOne({email: req.body.email});

    if (!user) return res.status(404).send('Invalid email or password');
    if(!team) return res.status(400).send('The team does not exist');

    const valid = await bcrypt.compare(req.body.password, user.password);
    if(!valid) return res.status(400).send('Invalid email or password');

    const token = jwt.sign({_id: user._id, isBoss: user.isBoss}, 'jwtPrivateKey');

    res.header('x-auth-token', token).send(team.name);

});

module.exports = router;
