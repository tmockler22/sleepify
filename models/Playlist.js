const mongoose = require('mongoose');
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  songs: [{
    type: Schema.Types.ObjectId,
    ref: 'songs'
  }]
});

module.exports = mongoose.model('playlists', PlaylistSchema);