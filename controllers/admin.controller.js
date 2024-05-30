const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const { Course } = require("../models/Course");
const { Semester } = require("../models/Semester");
const { Year } = require("../models/Year");
const {
  loginLog,
  logError,
  createAdminLog,
  logAction,
} = require("../utils/logger");

/** Authentication Controllers */
async function adminLoginController(req, res) {
  try {
    const admin = await User.findOne({ username: req.body.username });
    if (!admin) {
      logAction(admin, "Login Attempt", 404, "Username Not Found");
      return res.status(404).json("Wrong Username or password");
    }
    const valid = bcrypt.compareSync(req.body.password, admin.password);
    if (!valid) {
      logAction(admin, "Login Attempt", 401, "Wrong Password");
      return res.status(404).json("Wrong Username or password");
    }
    const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET);
    logAction(admin, "Login Attempt", 200, "Successful Login Attempt");
    return res.status(200).json({ token: token, user: admin });
  } catch (error) {
    logError(error, "Login Attempt");
    return res.status(500).json("INTERNAL SERVER ERROR");
  }
}

async function createAdminController(req, res) {
  try {
    const user = await User.findById(req.userId);
    let admin = await User.findOne({ username: req.body.username });
    if (admin) {
      logAction(user, "Create Admin Attempt", 400, "Username Already Exists");
      return res.status(400).json("Username Already Exists");
    }
    admin = new User({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10),
      createdBy: req.userId,
    });
    await admin.save();
    logAction(
      user,
      "Create Admin Attempt",
      201,
      "Successful Creation of Admin"
    );
    return res.status(201).json(admin);
  } catch (error) {
    logError(error, "Create Admin Attempt");
    return res.status(500).json("INTERNAL SERVER ERROR");
  }
}

/** End of Authentication Controllers */

module.exports = { adminLoginController, createAdminController };
