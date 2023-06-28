const mongoose = require("mongoose");

async function connectMongo() {
  try {
    await mongoose.connect("mongodb://localhost:27017/DB_movie_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.info("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Connect to MongoDB failed: " + error)
  }
}

module.exports = { connectMongo };
