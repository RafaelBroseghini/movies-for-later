var express = require("express"),
    router  = express.Router();

router.get("/", (req, res) =>
    res.render("index/main")
)

module.exports = router;