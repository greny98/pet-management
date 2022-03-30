/**
 * TODO: Seed
 */
// Load env config
const dotenv = require("dotenv");
const envPath = "env/.env.development";
const result = dotenv.config({ path: envPath });

if (result.error) {
  throw result.error;
}

console.log(".env: ", result.parsed);

// Seed
const seedUsers = require("./user");
const mongoose = require("mongoose");

(async function seeds() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log("MongoDB Connected!");
    await seedUsers();
    await mongoose.connection.close();
    console.log("DONE");
  } catch (e) {
    await mongoose.connection.close();
    console.log(e);
  }
})();
