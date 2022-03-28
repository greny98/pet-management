const express = require("express");
const petRouter = express.Router();

/*TODO: List pet of user */
petRouter.get("/", (req, res, next) => {});

/*TODO: Get pet detail and medical history */
petRouter.get("/:id", (req, res, next) => {});

/*TODO: Create new pet */
petRouter.post("/", (req, res, next) => {});

/*TODO: Handle Logout */
petRouter.get("/logout", (req, res, next) => {});

module.exports = petRouter;
