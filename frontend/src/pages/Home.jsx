import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import heroImg from "../assets/hero.png";

import { LogIn, X, Monitor, Users, Award, Briefcase } from "lucide-react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const navigate = useNavigate();

    // 🔥 STATES
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));

    // 🔥 LOGIN FUNCTION
    const handleLogin = async () => {
        try {
            const res = await axios.post(
                "https://prs-uidd.onrender.com/api/auth/login",
                { email, password }
            );

            // 🔥 SAVE USER DATA
            localStorage.setItem("user", JSON.stringify({
                email,
                name: name || email   // fallback if name not available
            }));

            if (res.data.role === "admin") {
                navigate("/admin-dashboard");
            } else {
                alert("Login successful");
                setShowLogin(false);
                window.location.reload(); // 🔥 refresh UI
            }
        } catch (err) {
            alert("Login failed");
        }
    };

    const [registerError, setRegisterError] = useState("");

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

    // 🔥 REGISTER FUNCTION
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

    return (
        <div className="font-sans bg-white">
            {/* ================= NAVBAR ================= */}
            <Navbar />

            {/* ================= HERO ================= */}
            <div className="relative h-[85vh] w-full overflow-hidden">

                <img src={heroImg} className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-lightMove"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-6">
                    <p className="text-[#D4AF37] tracking-widest text-sm mb-3">
                        EMPOWERING FUTURES
                    </p>

                    <h1 className="text-white text-4xl md:text-[60px] font-bold leading-tight">
                        Shaping Careers.<br />
                        <span className="text-[#D4AF37]">Building Futures.</span>
                    </h1>

                    <p className="text-gray-200 mt-5 max-w-xl text-base md:text-lg">
                        Professional Training for a Better Tomorrow.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => navigate("/courses")}
                            className="bg-[#D4AF37] text-white px-6 md:px-8 py-3 rounded-lg hover:bg-[#B8952A] transition-colors"
                        >
                            Explore Courses →
                        </button>

                        <button
                            onClick={() => setShowRegister(true)}
                            className="border border-white text-white px-6 md:px-8 py-3 rounded-lg hover:bg-white hover:text-black"
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            </div>

            {/* ================= LOGIN MODAL ================= */}
            {showLogin && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

                    <div className="bg-white w-[350px] p-6 rounded-xl relative">

                        <button onClick={() => setShowLogin(false)} className="absolute right-3 top-3">
                            <X size={20} />
                        </button>

                        <div className="flex justify-center mb-3">
                            <img src={logo} className="h-[100px]" />
                        </div>

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

                        <div className="flex justify-center mb-3">
                            <img src={logo} className="h-[100px]" />
                        </div>

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

            {/* ================= FEATURE STRIP ================= */}
            <div className="bg-[#0A2540] text-white py-6 px-4 md:px-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#D4AF37] p-3 rounded-full"><Monitor size={20} /></div>
                        <p className="text-sm font-medium">Wide Range of Courses</p>
                    </div>

                    <div className="hidden md:block h-10 w-[1px] bg-gray-500"></div>

                    <div className="flex items-center gap-4">
                        <div className="bg-[#D4AF37] p-3 rounded-full"><Users size={20} /></div>
                        <p className="text-sm font-medium">Online & Offline Training</p>
                    </div>

                    <div className="hidden md:block h-10 w-[1px] bg-gray-500"></div>

                    <div className="flex items-center gap-4">
                        <div className="bg-[#D4AF37] p-3 rounded-full"><Award size={20} /></div>
                        <p className="text-sm font-medium">Certified Programs</p>
                    </div>

                    <div className="hidden md:block h-10 w-[1px] bg-gray-500"></div>

                    <div className="flex items-center gap-4">
                        <div className="bg-[#D4AF37] p-3 rounded-full"><Briefcase size={20} /></div>
                        <p className="text-sm font-medium">Placement Assistance</p>
                    </div>
                </div>


            </div>
            <Footer/>

        </div>
    );
}