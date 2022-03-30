const express = require("express");
const { wrapAsync } = require("../utils");
const authRouter = express.Router();

/*TODO: Render Login */
authRouter.get("/login", (req, res) => {
  res.render("auth/login");
});

/*TODO: Handle Login */
authRouter.post(
  "/login",
  wrapAsync(async (req, res, next) => {
    console.log(req.body);
  })
);

/*TODO: Handle Logout */
authRouter.get(
  "/logout",
  wrapAsync(async (req, res, next) => {})
);

module.exports = authRouter;
