const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255,
    },
    password: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
exports.User = User;
