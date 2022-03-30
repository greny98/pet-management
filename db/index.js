const mongoose = require("mongoose");

module.exports.connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
    console.log("MongoDB Connected!");
  } catch (e) {
    console.log(e);
  }
};
