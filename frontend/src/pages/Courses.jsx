import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import hero from "../assets/courses-hero.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Megaphone,
  Code,
  BarChart,
  Palette,
  FileCode,
  Brain,
  Coffee,
  User,
} from "lucide-react";

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const categories = [
    { id: "all", label: "All Courses" },
    { id: "it", label: "IT Courses" },
    { id: "non-it", label: "Non-IT Courses" },
    { id: "medical", label: "Healthcare Courses" },
  ];

  const courses = [
    {
      title: "Digital Marketing",
      desc: "Learn SEO, Social Media, Google Ads & more.",
      icon: Megaphone,
      category: "non-it",
      qualification: "12th Pass",
      tags: ["Non-IT", "Beginner", "4 Months"],
    },
    {
      title: "Full-Stack Web Development",
      desc: "Build modern websites and web applications.",
      icon: Code,
      category: "it",
      qualification: "Degree/B.Tech",
      tags: ["Online", "Beginner", "6 Months"],
    },
    {
      title: "Data Analytics",
      desc: "Turn data into insights and decisions.",
      icon: BarChart,
      category: "it",
      qualification: "Degree/B.Tech",
      tags: ["Online", "Intermediate", "4 Months"],
    },
    {
      title: "Graphic Design",
      desc: "Create stunning visuals and brand identities.",
      icon: Palette,
      category: "non-it",
      qualification: "12th Pass",
      tags: ["Non-IT", "Beginner", "3 Months"],
    },
    {
      title: "Python Programming",
      desc: "Learn Python from basics to advanced level.",
      icon: FileCode,
      category: "it",
      qualification: "Degree/B.Tech",
      tags: ["Offline", "Beginner", "4 Months"],
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      desc: "Learn AI concepts, machine learning models, and real-world applications.",
      icon: Brain,
      category: "it",
      qualification: "Degree/B.Tech",
      tags: ["Offline", "Intermediate", "4 Months"],
    },
    {
      title: "Java Programming",
      desc: "Build robust applications using core Java.",
      icon: Coffee,
      category: "it",
      qualification: "Degree/B.Tech",
      tags: ["Offline", "Intermediate", "6 Months"],
    },
    {
      title: "Soft Skills Training",
      desc: "Improve communication, leadership & more.",
      icon: User,
      category: "non-it",
      qualification: "10th Pass",
      tags: ["Offline", "Beginner", "1 Month"],
    },
    {
      title: "General Duty Assistant (Healthcare)",
      desc: "Patient care, hygiene, vital monitoring and hospital assistance.",
      icon: User,
      category: "medical",
      qualification: "10th / 12th Pass",
      tags: ["Non-IT", "Medical", "3 Months"],
    },
    {
      title: "Caregiver / Elder Care Assistant (Healthcare)",
      desc: "Elderly care, daily living support and emergency response.",
      icon: User,
      category: "medical",
      qualification: "10th / 12th Pass",
      tags: ["Non-IT", "Medical", "3 Months"],
    },
    {
      title: "Hospital Front Office & Billing (Healthcare)",
      desc: "Patient handling, appointments, billing and communication skills.",
      icon: User,
      category: "medical",
      qualification: "10th / 12th Pass",
      tags: ["Non-IT", "Medical", "2-3 Months"],
    },
  ];

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="bg-[#F5F7FA] min-h-screen text-[#0A2540]">

      {/* ================= NAVBAR ================= */}
      <Navbar/>

      {/* ================= HERO (SMALL CLEAN) ================= */}
      <div className="flex flex-col md:flex-row items-center bg-[#0A2540] text-white h-auto md:h-[180px]">

  {/* LEFT */}
  <div className="w-full md:w-1/2 px-4 md:px-16 py-6 md:py-0">
    <h1 className="text-2xl md:text-3xl font-bold">
      Our <span className="text-[#D4AF37]">Courses</span>
    </h1>

    {/* BREADCRUMB */}
    <p className="text-sm mt-2 flex items-center">

      <Link
        to="/"
        className="text-gray-300 hover:text-[#D4AF37] transition"
      >
        Home
      </Link>

      <span className="mx-2 text-gray-400">›</span>

      <span className="text-[#D4AF37]">
        Courses
      </span>

    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="w-full md:w-1/2 h-48 md:h-full">
    <img
      src={hero}
      className="w-full h-full object-cover"
      alt="hero"
    />
  </div>

</div>
      {/* ================= FILTER ================= */}
      <div className="px-4 md:px-16 mt-6">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">
              Explore Our Wide Range of Professional Courses
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Choose from our industry-relevant courses designed to build skills and shape your future.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  selectedCategory === cat.id
                    ? "bg-[#D4AF37] text-black"
                    : "bg-white text-[#0A2540] border border-[#0A2540]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= COURSE GRID ================= */}
      <div className="px-4 md:px-16 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {filteredCourses.map((c, i) => {
          const originalIndex = courses.findIndex(course => course.title === c.title);
          return (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-5 hover:shadow-lg transition duration-300"
          >

            {/* ICON */}
            <div className="mb-4">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg ${
                  i % 2 === 0
                    ? "bg-[#0A2540] text-white"
                    : "bg-[#D4AF37] text-white"
                }`}
              >
                <c.icon size={22} />
              </div>
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-lg">{c.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{c.desc}</p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-3">
              {c.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-100 px-2 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-3">Qualification: {c.qualification}</p>

            {/* PRICE + LINK */}
            <div className="flex justify-between items-center mt-4">
              <Link
                to={`/course/${originalIndex}`}
                className="text-sm text-[#0A2540] font-medium hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>
          );
        })}

      </div>

      {/* ================= CTA ================= */}
      <Footer/>
    </div>
  );
}