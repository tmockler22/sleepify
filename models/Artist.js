const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  songs: [{
    type: Schema.Types.ObjectId,
    ref: 'songs'
  }],
  imageUrl: {
    type: String,
    required: true
  }
});

// db.artists.insertMany([
//   { name: "Jack Johnson", imageUrl: "https://sleepify-dev.s3.us-east-2.amazonaws.com/artists/jack_johnson.jpg" },
//   { name: "John Mayer", imageUrl: "https://sleepify-dev.s3.us-east-2.amazonaws.com/artists/jack_johnson.jpg" },
//   { name: "Cat Stevens", imageUrl: "https://sleepify-dev.s3.us-east-2.amazonaws.com/artists/cat_stevens.jpg" }
// ]); 

module.exports = mongoose.model('artists', ArtistSchema);