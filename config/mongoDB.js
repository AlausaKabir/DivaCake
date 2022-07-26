const mongoose = require("mongoose");
const { MongoDB } = require("./keys");

const MongoConnection = async () => {
  if (MongoDB === "development") {
    mongoUrl = "mongodb://localhost:27017/DivaCake";
  } else {
    mongoUrl = MongoDB || "mongodb://localhost:27017/DivaCake";
  }
  return (
    mongoose.connect(mongoUrl),
    {
      userNewParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = MongoConnection;
