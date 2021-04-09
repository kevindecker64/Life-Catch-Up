const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  stars: { type: Number, min: 0, max: 5, required: true },
  review: { type: String, required: false }, // add regex in the from input to limit length of chars
  people: {}, // maybe dont need if we are embedding ratings in Person Schema
});

module.exports = mongoose.model("Rating", ratingSchema);
