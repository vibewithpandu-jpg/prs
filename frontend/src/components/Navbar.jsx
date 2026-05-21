import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn, X, Menu } from "lucide-react";
import axios from "axios";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  // 🔥 STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [registerError, setRegisterError] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const validateRegistration = () => {
    if (!name || !email || !phone || !password) {
      setRegisterError("Please fill all registration fields.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setRegisterError("Please enter a valid email address.");
      return false;
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      setRegisterError("Phone number must be exactly 10 digits.");
      return false;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
      setRegisterError("Password must be at least 8 chars and include uppercase, lowercase, and a number.");
      return false;
    }

    setRegisterError("");
    return true;
  };

  // 🔥 LOGIN
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://prs-uidd.onrender.com/api/auth/login",
        { email, password }
      );

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify({
          email,
          name: name || email,
        })
      );

      if (res.data.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        alert("Login successful");
        setShowLogin(false);
        window.location.reload();
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  // 🔥 REGISTER
  const handleRegister = async () => {
    if (!validateRegistration()) return;

    try {
      await axios.post(
        "https://prs-uidd.onrender.com/api/auth/register",
        { name, email, password, phone }
      );

      alert("Registered successfully");
      setRegisterError("");
      setShowRegister(false);
    } catch (err) {
      alert("Registration failed");
    }
  };

  // 🔥 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className="flex justify-between items-center px-4 md:px-16 py-3 bg-white shadow-sm relative">
        <img src={logo} className="h-[50px] md:h-[65px]" alt="logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/training">Training Mode</Link></li>
          <li><Link to="/why">Why Choose Us</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/placement">Placement Support</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Right Side */}
        {user ? (
          <div className="hidden md:flex items-center gap-4">
            <span className="text-[#0A2540] font-medium">
              Welcome, {user.name}
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-full"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowLogin(true)}
            className="hidden md:flex items-center gap-2 bg-[#0A2540] text-white px-6 py-2 rounded-full"
          >
            <LogIn size={16} />
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-sm border-t">
          <ul className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</Link></li>
            <li><Link to="/training" onClick={() => setIsMobileMenuOpen(false)}>Training Mode</Link></li>
            <li><Link to="/why" onClick={() => setIsMobileMenuOpen(false)}>Why Choose Us</Link></li>
            <li><Link to="/testimonials" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</Link></li>
            <li><Link to="/placement" onClick={() => setIsMobileMenuOpen(false)}>Placement Support</Link></li>
            <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>

          {/* Mobile Right Side */}
          {user ? (
            <div className="flex flex-col gap-4 p-4 border-t">
              <span className="text-[#0A2540] font-medium">
                Welcome, {user.name}
              </span>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-full w-full"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="p-4 border-t">
              <button
                onClick={() => {
                  setShowLogin(true);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 bg-[#0A2540] text-white px-6 py-2 rounded-full w-full"
              >
                <LogIn size={16} />
                Login
              </button>
            </div>
          )}
        </div>
      )}

      {/* ================= LOGIN MODAL ================= */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

          <div className="bg-white w-[350px] p-6 rounded-xl relative">

            <button onClick={() => setShowLogin(false)} className="absolute right-3 top-3">
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold text-center mb-4">Login</h2>

            <input
              placeholder="Email"
              className="w-full mb-3 p-3 border rounded"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 p-3 border rounded"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin} className="w-full bg-[#0A2540] text-white py-2 rounded">
              Login →
            </button>

            <p className="text-sm text-center mt-4">
              Don’t have an account?{" "}
              <span
                onClick={() => {
                  setShowLogin(false);
                  setShowRegister(true);
                }}
                className="text-[#D4AF37] cursor-pointer"
              >
                Create one
              </span>
            </p>
          </div>
        </div>
      )}

      {/* ================= REGISTER MODAL ================= */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

          <div className="bg-white w-[350px] p-6 rounded-xl relative">

            <button onClick={() => setShowRegister(false)} className="absolute right-3 top-3">
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold text-center mb-4">Register</h2>

            <input
              placeholder="Full Name"
              className="w-full mb-3 p-3 border rounded"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Email"
              className="w-full mb-3 p-3 border rounded"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Phone"
              className="w-full mb-3 p-3 border rounded"
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 p-3 border rounded"
              onChange={(e) => setPassword(e.target.value)}
            />

            {registerError && (
              <p className="text-sm text-red-500 mb-3">{registerError}</p>
            )}

            <button onClick={handleRegister} className="w-full bg-[#0A2540] text-white py-2 rounded">
              Register →
            </button>

            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setShowRegister(false);
                  setShowLogin(true);
                }}
                className="text-[#0A2540] cursor-pointer"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}