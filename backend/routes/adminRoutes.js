import express from "express";
import User from "../models/User.js";
import Course from "../models/Course.js";

const router = express.Router();

// 🔹 GET ALL USERS
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// 🔹 GET ALL COURSE REGISTRATIONS
router.get("/courses", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});
// ✅ DELETE USER
router.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ msg: "User deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ DELETE COURSE REGISTRATION
router.delete("/courses/:id", async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ msg: "Course deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;