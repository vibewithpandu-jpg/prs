import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

// ✅ REGISTER COURSE
router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, course, mode } = req.body;

    const newCourse = new Course({
      name,
      email,
      phone,
      course,
      mode,
    });

    await newCourse.save();

    res.json({ msg: "Course Registered Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;