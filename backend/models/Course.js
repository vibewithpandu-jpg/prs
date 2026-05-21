import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  course: String,
  mode: String, // Online / Offline
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Course", courseSchema);