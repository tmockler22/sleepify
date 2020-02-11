const express = require("express");
const router = express.Router();
const passport = require('passport');
const User = require('../../models/User');
const Song = require('../../models/Song');
const Artist = require('../../models/Artist');
const keys = require('../../config/keys');

router.get('/', (req, res) => {
  Artist.find()
    .sort({ date: -1 })
    .then(artists => res.json(artists))
    .catch(err => res.status(404).json({ noartistsfound: 'No artists found' }));
});

module.exports = router;
