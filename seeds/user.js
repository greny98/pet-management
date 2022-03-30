/**
 * TODO: Seed 1 admin, 3 user
 */
const UserModel = require("../models/user.model");

async function seedAdmin() {
  await UserModel.create({
    username: "my_admin",
    password: "12345678",
    name: "Admin",
    phone: "012345678",
    admin: true,
  });
}

module.exports = async () => {
  await seedAdmin();
};
