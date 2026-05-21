import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

// 🔥 ADMIN EMAILS (ONLY THESE GET DASHBOARD)
const admins = ["admin1@gmail.com", "admin2@gmail.com"];


// ✅ REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashed,
    });

    await user.save();

    res.json({ message: "User Registered" });
  } catch (err) {
    res.status(500).json(err);
  }
});


// ✅ LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("👉 LOGIN DATA:", email, password);

  const admins = [
    { email: "admin1@gmail.com", password: "123456" },
    { email: "admin2@gmail.com", password: "123456" },
  ];

  try {
    const isAdmin = admins.find(
      (a) =>
        a.email.toLowerCase() === email.toLowerCase().trim() &&
        a.password === password.trim()
    );

    if (isAdmin) {
      console.log("✅ ADMIN LOGIN");
      return res.json({ role: "admin" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      console.log("❌ USER NOT FOUND");
      return res.status(400).json({ msg: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      console.log("❌ WRONG PASSWORD");
      return res.status(400).json({ msg: "Wrong password" });
    }

    console.log("✅ USER LOGIN");
    res.json({ role: "user" });

  } catch (err) {
    console.error("❌ LOGIN ERROR:", err);
    res.status(500).json({ msg: "Internal server error" });
  }
});

export default router;