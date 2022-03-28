let express = require("express");
let router = express.Router();

/**
 * TODO: Get home
 */
router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
