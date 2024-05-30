var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const { adminLoginController } = require("../controllers/admin.controller");

router.post("/login", adminLoginController);

module.exports = router;
