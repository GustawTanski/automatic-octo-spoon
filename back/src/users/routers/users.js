const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const teamModel = require("../models/teamModel");

const router = express.Router();

router.post("/", async (req, res) => {
	console.log("Hello from POST");
	console.log(req.body);
	const email = await userModel.User.findOne({ email: req.body.email });
	const team = await teamModel.Team.findOne({ name: req.body.team });
	if (email) return res.status(404).send("The user with the given email already exist");
	if (!team) return res.status(400).send("Provided team does not exist.");

	const user = new userModel.User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		isBoss: req.body.isBoss,
		team: team._id
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

router.get("/", async (req, res) => {
	console.log("Hello from GET");

	try {
		const users = await userModel.User.find();
		res.send(users);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
