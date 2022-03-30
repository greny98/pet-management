const indexRouter = require("index");
const usersRouter = require("user.route");
const authRouter = require("auth.route");
const petRouter = require("pet.route");
const { auth } = require("./middlewares");

module.exports = function (app) {
  app.use("/", indexRouter);
  app.use("/auth", authRouter);
  app.use("/users", auth, usersRouter);
  app.use("/pets", auth, petRouter);
}