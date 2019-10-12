const express = require('express');
const mongoose = require('mongoose');
const model = require('../userModel.js');

const router = express.Router();

router.post('/', async (req, res) => {
    console.log('Hello from POST');
    console.log(req.body);
    const email = await model.User.findOne({email: req.body.email});
    if (email) return res.status(404).send('The user with the given email already exist');

    //await model.createUser(req.body.name, req.body.email, req.body.password, req.body.isBoss);

    const user = new model.User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isBoss: req.body.isBoss
    });

    try {
        await user.hashPassword();
        console.log(user.password);
        const result = await user.save();
        res.send(result);
    } catch (err) {
        console.log(err);
    }

});

router.get('/', async (req, res) => {
    console.log('Hello from GET');
    
    try {
        const users = await model.User.find();
        res.send(users);
    } catch (err) {
        console.log(err);
    }

});

module.exports = router;
