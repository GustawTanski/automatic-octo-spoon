const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const teamModel = require("../models/teamModel");

const router = express.Router();

router.post('/', async (req, res) => {
    const email = await userModel.User.findOne({email: req.body.email});
    const team = await teamModel.Team.findOne({name: req.body.team});
    if (email) return res.status(404).send('The user with the given email already exist');
    if(!team) return res.status(400).send('Provided team does not exist.');

    const user = new userModel.User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isBoss: req.body.isBoss,
        team: team._id
    });

    try {
        await user.hashPassword();
        const result = await user.save();
        res.send(result);
    } catch (err) {
        res.send(err);
    }

});

router.get('/', async (req, res) => {
    try {
        if(req.body.team) {
            const team = await teamModel.Team.findOne({name: req.body.team});
            const users = await userModel.User.find({team: team._id});
            res.send(users);
        }
        const users = await userModel.User.find();
            res.send(users);
    } catch (err) {
        console.log(err);
    }

	try {
		const users = await userModel.User.find();
		res.send(users);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
