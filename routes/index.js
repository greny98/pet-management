let express = require("express");
let router = express.Router();

/**
 * TODO: Get home
 */
router.get("/", (req, res) => {
  res.render("errors/404");
});

module.exports = router;
