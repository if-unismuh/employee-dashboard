var express = require("express");
var router = express.Router();
const { viewSignin, actionSigin, actionLogout } = require("./controller");

router.get("/", viewSignin);
router.post("/", actionSigin);
router.get("/logout", actionLogout);

module.exports = router;
