const { ErrorLog } = require("../models/ErrorLog");
const { Log } = require("../models/Log");

async function logError(err, controller) {
  const log = new ErrorLog({
    err: err.message,
    controller: controller,
  });
  await log.save();
}
async function loginLog(user) {
  try {
    const log = new Log({
      action: "User Logged In",
      user: user,
    });
    await log.save();
  } catch (error) {
    logError(error, "Log Util");
  }
}
async function createAdminLog(user) {
  try {
    const log = new Log({
      action: "Admin Created",
      user: user,
    });
    await log.save();
  } catch (error) {
    logError(error, "Log Util");
  }
}

module.exports = { loginLog, logError, createAdminLog };
