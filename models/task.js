const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create rating schema here to embed in ratings property of task
const ratingSchema = new Schema({
  rating: {type: Number, min: 1, max:5, default: 3} // Maybe unrequire if it messes with creating new task
})

const taskSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // set select element to have 'Chore' and 'Hobby' as options
  category: { type: String, required: true },
  priority: { type: Number, min: 1, max: 5 }, // maybe set required if Chore is chosen
  difficulty: { type: Number, min: 1, max: 5 }, // maybe set required if Chore is chosen, maybe make a property of ratingSchema?
  length: { type: String }, // maybe set required if Hobby is chosen
  people: { type: String },
  ratings: [ratingSchema],
});

module.exports = mongoose.model("Task", taskSchema);
