const express = require("express");
const { isAdmin } = require("../middlewares");
const userRouter = express.Router();

/**
 * TODO: Render create user form
 */
userRouter.get("/", isAdmin, (req, res, next) => {});

/**
 * TODO: Render list new user need valid (admin)
 */
userRouter.get("/registration", isAdmin, (req, res, next) => {});

/**
 * TODO: Create User
 */
userRouter.post("/", isAdmin, (req, res, next) => {});

/**
 * TODO: Get detail
 */
userRouter.get("/:id", (req, res, next) => {});

module.exports = userRouter;
