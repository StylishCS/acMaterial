const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 255,
    },
    password: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 255,
    },
    createdBy: {
      type: User,
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
exports.User = User;
