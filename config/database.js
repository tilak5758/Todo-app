const mongoose = require("mongoose");

require("dotenv").config;

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connection successful"))
    .catch((error) => {
      console.log("Issue is DB Connection")
      console.log(error);
      process.exit(1)
    });
};

module.exports = dbConnect;
