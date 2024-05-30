const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const { Course } = require("../models/Course");
const { Semester } = require("../models/Semester");
const { Year } = require("../models/Year");
const { loginLog, logError, createAdminLog } = require("../utils/logger");

/** Authentication Controllers */
async function adminLoginController(req, res) {
  try {
    const admin = await User.findOne({ username: req.body.username });
    if (!admin) {
      return res.status(404).json("Wrong Username or password");
    }
    const valid = await bcrypt.compareSync(req.body.password, admin.password);
    if (!valid) {
      return res.status(404).json("Wrong Username or password");
    }
    loginLog(admin);
    const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET);
    return res.status(200).json({ token: token, user: admin });
  } catch (error) {
    logError(error, "Login Controller");
    return res.status(500).json("INTERNAL SERVER ERROR");
  }
}

async function createAdminController(req, res) {
  try {
    let admin = await User.findOne({ username: req.body.username });
    if (admin) {
      return res.status(400).json("Username Already Exists");
    }
    admin = new User({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10),
      createdBy: req.userId,
    });
    await admin.save();
    const user = await User.findById(req.userId);
    createAdminLog(user);
    return res.status(200).json(admin);
  } catch (error) {
    logError(error, "Create Admin Controller");
    return res.status(500).json("INTERNAL SERVER ERROR");
  }
}

module.exports = { adminLoginController, createAdminController };
