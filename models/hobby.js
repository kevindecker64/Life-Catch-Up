const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hobbySchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  // date: {type: Date, required: true},
  length: { type: String, required: false },
  people: [{ type: Schema.Types.ObjectId, ref: "Person" }],
  ratings: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
  // avgRating: figure out later
});

module.exports = mongoose.model("Hobby", hobbySchema);
