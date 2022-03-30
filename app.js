const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/user.route");
const authRouter = require("./routes/auth.route");
const petRouter = require("./routes/pet.route");
const { auth } = require("./middlewares");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/users", auth, usersRouter);
app.use("/pets", auth, petRouter);

//TODO: catch 404 and forward to error handler
app.use((req, res, next) => {
  next(new AppError(404, "Not Found!"));
});

// TODO: error handler
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500);
  switch (err.status) {
    case 404:
      return res.render("error/404");
    case 500:
      return res.render("error/500");
    case 401:
      return res.render("error/401");
    default:
      return res.send("Error");
  }
});

module.exports = app;
