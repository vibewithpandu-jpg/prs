import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import heroImg from "../assets/placement.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

import {
  FileText,
  Users,
  MessageCircle,
  Briefcase,
  UserCheck,
  Building2,
  TrendingUp,
  Award,
  X,
} from "lucide-react";

export default function Placement() {
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);

  // Register form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // Register function
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

  const handleRegister = async () => {
    if (!validateRegistration()) return;

    try {
      await axios.post(
        "https://prs-uidd.onrender.com/api/auth/register",
        { name, email, password, phone }
      );

      alert("Registered successfully");
      setShowRegister(false);
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
    } catch (err) {
      alert("Registration failed");
    }
  };
  return (
    <div className="bg-[#F5F7FA] min-h-screen">

      {/* ================= NAVBAR ================= */}
      <Navbar />
      
      {/* ================= HERO ================= */}
      <div className="flex flex-col md:flex-row items-center bg-[#0A2540] text-white">

        {/* LEFT */}
        <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            We Don’t Just Train, <br />
            We Help You <span className="text-[#D4AF37]">Get Placed.</span>
          </h1>

          <p className="mt-4 text-gray-300 max-w-md">
            Our dedicated placement cell works tirelessly to connect
            our students with the right opportunities.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 h-48 md:h-[220px]">
          <img
            src={heroImg}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ================= BREADCRUMB ================= */}
      <div className="px-4 md:px-12 mt-6 text-sm text-gray-500">
        Home &gt; <span className="text-[#D4AF37]">Placement Support</span>
      </div>

      {/* ================= FEATURES ================= */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mt-8 text-[#0A2540] px-4">
        Our <span className="text-[#D4AF37]">Placement Assistance</span> Includes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4 md:px-12 mt-8">

        {[
          { icon: FileText, title: "Resume Building", desc: "Get a professional resume that highlights your skills." },
          { icon: Users, title: "Mock Interviews", desc: "Practice real interview questions with experts." },
          { icon: MessageCircle, title: "Soft Skills Training", desc: "Improve communication & personality." },
          { icon: Briefcase, title: "Job Opportunities", desc: "Access to 1000+ job openings." },
          { icon: UserCheck, title: "Career Mentorship", desc: "Guidance from industry experts." },
        ].map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-xl shadow text-center">
            <div className="bg-[#0A2540] text-[#D4AF37] w-12 h-12 flex items-center justify-center rounded-full mx-auto">
              <item.icon size={20} />
            </div>
            <h4 className="font-semibold mt-3">{item.title}</h4>
            <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
          </div>
        ))}

      </div>

      {/* ================= PARTNERS ================= */}
      <h2 className="text-center text-xl md:text-2xl font-bold mt-12 text-[#0A2540] px-4">
        Our Hiring Partners
      </h2>

      <div className="flex justify-center gap-4 md:gap-6 mt-6 flex-wrap px-4 md:px-12">

  {[
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "HCL Tech",
    "Capgemini",
    "Cognizant",
    "Tech Mahindra",
  ].map((company, i) => (
    <div
      key={i}
      className="bg-white px-6 py-4 rounded-xl shadow text-[#0A2540] font-semibold hover:shadow-md transition"
    >
      {company}
    </div>
  ))}

</div>

      {/* ================= STATS ================= */}
      <div className="bg-[#0A2540] text-white mx-4 md:mx-12 mt-10 rounded-xl px-4 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-4 md:gap-0">

        <div className="flex items-center gap-3">
          <Users className="text-[#D4AF37]" />
          <div>
            <h3 className="text-xl font-bold">5000+</h3>
            <p>Students Trained</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Briefcase className="text-[#D4AF37]" />
          <div>
            <h3 className="text-xl font-bold">1000+</h3>
            <p>Students Placed</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <TrendingUp className="text-[#D4AF37]" />
          <div>
            <h3 className="text-xl font-bold">95%</h3>
            <p>Placement Success Rate</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Award className="text-[#D4AF37]" />
          <div>
            <h3 className="text-xl font-bold">200+</h3>
            <p>Hiring Partners</p>
          </div>
        </div>

      </div>

      {/* ================= CTA ================= */}
      <Footer/>

  


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
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        className="w-full mb-3 p-3 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Phone"
        className="w-full mb-3 p-3 border rounded"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 p-3 border rounded"
        value={password}
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
            // Could navigate to login or show login modal
          }}
          className="text-[#0A2540] cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  </div>
)}

    </div>
  );
}