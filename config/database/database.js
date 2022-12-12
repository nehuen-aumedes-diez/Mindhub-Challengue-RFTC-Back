
const mongoose = require("mongoose");

let connection = () => {
  try {
    mongoose.connect(process.env.LINK_DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected");
  } catch (error) {
    console.log(error.message);
  }
};
connection();

