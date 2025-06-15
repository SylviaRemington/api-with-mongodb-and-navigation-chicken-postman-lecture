const mongoose = require("mongoose");

const chickenSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  color: { type: String, required: true },
  flavourRating: { type: Number, min: 0, max: 10, required: true },
});

const Chicken = mongoose.model("Chicken", chickenSchema);

module.exports = Chicken;
