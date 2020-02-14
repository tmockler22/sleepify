const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Playlist = require("../../models/Playlist");
const validatePlaylistInput = require("../../validation/playlist");

router.post("/create", (req, res) => {
  const { errors, isValid } = validatePlaylistInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newPlaylist = new Playlist({
    title: req.body.title,
    user: req.body.user.id
  });
  console.log(newPlaylist);
  newPlaylist
    .save()
    .then(playlist => User.addPlaylist(playlist._id, playlist.user));

  return res.json({
    success: true,
    playlist: newPlaylist
  });
});
module.exports = router;
