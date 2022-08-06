const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected succefully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb;
