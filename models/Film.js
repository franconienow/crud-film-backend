const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  release: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  banner: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Film", FilmSchema);