const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  person: { type: String },
  rating: { type: Number, min: 1, max:5 }, 
})

const taskSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, 
  category: { type: String, required: true },
  priority: { type: Number, min: 1, max: 5 }, 
  difficulty: { type: Number, min: 1, max: 5 }, 
  length: String, 
  people: [String],
  ratings: [ratingSchema],
});

module.exports = mongoose.model("Task", taskSchema);
