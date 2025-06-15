const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Chicken = require("./models/chicken");

app.set("view engine", "ejs");

app.use(express.json());

app.post("/chicken-types", async (req, res) => {
  // TODO: Make this request dynamic so a user can use a tool such as postman
  // to send data to the API for saving in the database
  const newChicken = await Chicken.create(req.body);

  console.log(newChicken);
  res.json(newChicken);
});

app.get("/chicken-types", async (req, res) => {
  const chickens = await Chicken.find();

  res.render("chickens", { chickens });
});

app.get("/new-chicken", (req, res) => {
  res.render("newChickenForm");
});

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB Atlas");
  } catch (e) {
    console.error("A problem occured connecting", e);
  }
});
