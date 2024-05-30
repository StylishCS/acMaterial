const mongoose = require("mongoose");
const semesterSchema = new mongoose.Schema(
  {
    courses: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      ref: "Course",
    },
  },
  { timestamps: true }
);

const Semester = mongoose.model("Semester", semesterSchema);
exports.Semester = Semester;
