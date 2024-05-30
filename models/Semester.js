const mongoose = require("mongoose");
const { Course } = require("./Course");
const semesterSchema = new mongoose.Schema(
  {
    courses: {
      type: [Course],
      required: true,
      ref: "Course",
    },
  },
  { timestamps: true }
);

const Semester = mongoose.model("Semester", semesterSchema);
exports.Semester = Semester;
