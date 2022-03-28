const express = require("express");
const authRouter = express.Router();

/*TODO: Render Login */
authRouter.get("/login", function (req, res) {
  res.render("auth/login");
});

/*TODO: Handle Login */
authRouter.post("/login", (req, res, next) => {});

/*TODO: Handle Logout */
authRouter.get("/logout", (req, res, next) => {});

module.exports = authRouter;
