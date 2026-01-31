const { logon, hello } = require("../controllers/main");
const authenticationMiddleware = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.route("/logon").post(logon);
router.route("/hello").get(authenticationMiddleware, hello);

module.exports = router;
