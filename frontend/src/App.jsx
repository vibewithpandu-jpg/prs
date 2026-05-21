import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";

import TrainingMode from "./pages/TrainingMode";
import WhyChooseUs from "./pages/WhyChooseUs"; // ✅ ADD THIS
import Testimonials from "./pages/Testimonials";
import Placement from "./pages/Placement";
import Contact from "./pages/Contact";
import "./index.css";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* COURSES */}
        <Route path="/courses" element={<Courses />} />

        {/* COURSE DETAILS */}
        <Route path="/course/:id" element={<CourseDetails />} />

        {/* TRAINING MODE */}
        <Route path="/training" element={<TrainingMode />} />

        {/* WHY CHOOSE US */}
        <Route path="/why" element={<WhyChooseUs />} /> {/* ✅ ADD THIS */}
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;