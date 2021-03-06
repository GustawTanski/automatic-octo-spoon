const express = require('express');
const mongoose = require('mongoose');
const teamModel = require('../models/teamModel');

const router = express.Router();

router.post('/', async (req, res) => {
    let check = await teamModel.Team.findOne({name: req.body.name});
    if (check) return res.status(404).send('The team already exist');

    const team = new teamModel.Team({
        name: req.body.name,
    });

    try {
        const result = await team.save();
        res.send(result);
    } catch (err) {
        console.log(err);
    }

});

router.get('/', async (req, res) => {    
    try {
        const teams = await teamModel.Team.find();
        res.send(teams);
    } catch (err) {
        console.log(err);
    }

});

module.exports = router;
