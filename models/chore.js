const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choreSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  priority: { type: Number, min: 1, max: 5, required: true },
  difficulty: { type: Number, min: 1, max: 5, required: true },
  people: [{ type: Schema.Types.ObjectId, ref: "Person" }],
  ratings: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
  // avgRating: figure out logic finding avg rating,
});

module.exports = mongoose.model("Chore", choreSchema);
