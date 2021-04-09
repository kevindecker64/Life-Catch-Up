const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// maybe set ratingSchema here and embed rather than reference from elsewhere

const personSchema = new Schema({
  name: { type: String, required: true },
  chores: [{ type: Schema.Types.ObjectId, ref: "Chore" }],
  hobbies: [{ type: Schema.Types.ObjectId, ref: "Hobby" }],
  ratings: [{ type: Schema.Types.ObjectId, ref: "Hobby" }],
});

module.exports = mongoose.model("Person", personSchema);
