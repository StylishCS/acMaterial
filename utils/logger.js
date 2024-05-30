const { ErrorLog } = require("../models/ErrorLog");
const { Log } = require("../models/Log");

async function logError(err, action) {
  const log = new ErrorLog({
    err: err.message,
    action: action,
  });
  await log.save();
}

async function logAction(user, action, status, message) {
  try {
    const log = new Log({
      action: action,
      user: user,
      status: status,
      message: message,
    });
    await log.save();
  } catch (error) {
    logError(error, "Log Util");
  }
}

module.exports = { logError, logAction };
