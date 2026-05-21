import React from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import hero from "../assets/about-hero.png";

import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";


import {
    Target,
    Eye,
    Users,
    BookOpen,
    Briefcase,
    Award,
    GraduationCap,
    TrendingUp,
} from "lucide-react";

import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function About() {
    const navigate = useNavigate();
    return (
        <div className="bg-[#F5F7FA] min-h-screen">

            {/* ================= NAVBAR ================= */}
            {
            <Navbar />}

            {/* ================= HERO ================= */}
            <div className="flex flex-col md:flex-row bg-[#0A2540] text-white h-auto md:h-[240px]">

                {/* LEFT */}
                <div className="w-full md:w-1/2 px-4 md:px-16 flex flex-col justify-center py-8 md:py-0">
                    {/* TITLE */}
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        About <span className="text-[#D4AF37]">Us</span>
                    </h1>
                    {/* BREADCRUMB */}
                    <p className="text-sm mt-2 flex items-center">
                        <Link to="/" className="text-gray-300 hover:text-[#D4AF37] transition">
                            Home
                        </Link>
                        <span className="mx-2 text-gray-400">›</span>
                        <span className="text-[#D4AF37]">
                            About Us
                        </span>
                    </p>
                    {/* DESCRIPTION */}
                    <p className="text-sm mt-4 text-gray-300 max-w-md leading-relaxed">
                        Empowering learners with skills, knowledge and confidence
                        to achieve their dreams and build successful careers.
                    </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full md:w-1/2">
                    <img src={hero} className="w-full h-48 md:h-full object-cover" />
                </div>
            </div>

            {/* ================= MISSION / VISION ================= */}
            <div className="px-4 md:px-16 mt-6">
                <div className="bg-white rounded-xl shadow-sm flex flex-col md:flex-row p-4 md:p-6">

                    {/* Mission */}
                    <div className="flex items-center gap-4 w-full md:w-1/2 mb-4 md:mb-0">
                        <div className="bg-[#0A2540] p-4 rounded-full text-[#D4AF37]">
                            <Target />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Our Mission</h3>
                            <p className="text-sm text-gray-600">
                                To provide high-quality training and career support that empowers individuals to gain in-demand skills and achieve long-term success.
                            </p>
                        </div>
                    </div>

                    <div className="hidden md:block w-[1px] bg-gray-200 mx-6"></div>

                    {/* Vision */}
                    <div className="flex items-center gap-4 w-full md:w-1/2">
                        <div className="bg-[#0A2540] p-4 rounded-full text-[#D4AF37]">
                            <Eye />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Our Vision</h3>
                            <p className="text-sm text-gray-600">
                                To be a leading educational institute recognized for shaping careers, transforming lives, and building a skilled workforce for the future.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* ================= WHY + STATS ================= */}
            <div className="px-4 md:px-16 mt-6 flex flex-col md:flex-row gap-6 md:gap-10">

                {/* LEFT */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl font-semibold mb-2">
                        Why PRS Career Crafts?
                    </h2>

                    <p className="text-gray-600 mb-5">
                        We focus on practical learning, real-world projects and personalized guidance to ensure every student reaches their full potential.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { icon: Users, text: "Industry Expert Trainers" },
                            { icon: BookOpen, text: "Practical & Hands-on Learning" },
                            { icon: Briefcase, text: "Placement Assistance" },
                            { icon: Award, text: "Certified Courses" },
                            { icon: GraduationCap, text: "Flexible Online & Offline Batches" },
                            { icon: TrendingUp, text: "Lifetime Access to Materials" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="bg-[#0A2540] text-white p-2 rounded-full">
                                    <item.icon size={16} />
                                </div>
                                <p className="text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT STATS */}
                <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { num: "100+", label: "Courses", sub: "Designed for Success", icon: GraduationCap },
                        { num: "5000+", label: "Students Trained", sub: "Across India", icon: Users },
                        { num: "50+", label: "Expert Trainers", sub: "Industry Professionals", icon: Award },
                        { num: "95%", label: "Success Rate", sub: "Students Placed", icon: TrendingUp },
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-xl p-3 md:p-5 text-center shadow-sm">

                            <div className="flex justify-center mb-2">
                                <div className="bg-[#0A2540] text-white p-2 md:p-3 rounded-full">
                                    <item.icon size={16} md:size={18} />
                                </div>
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-[#D4AF37]">
                                {item.num}
                            </h3>

                            <p className="text-xs md:text-sm font-medium">{item.label}</p>

                            <p className="text-xs text-gray-500">{item.sub}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= TEAM ================= */}
            {/* <div className="px-4 md:px-16 mt-8">
                <h2 className="text-xl font-semibold mb-5">Our Team</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    {[
                        {
                            img: team1,
                            name: "Prakash Singh",
                            role: "Founder & CEO",
                            desc: "10+ years of experience in training and career development.",
                        },
                        {
                            img: team2,
                            name: "Neha Sharma",
                            role: "Head of Training",
                            desc: "Expert in designing industry-oriented training programs.",
                        },
                        {
                            img: team3,
                            name: "Amit Verma",
                            role: "Placement Manager",
                            desc: "Dedicated to student placement and career growth.",
                        },
                        {
                            img: team4,
                            name: "Pooja Mehta",
                            role: "Student Support Head",
                            desc: "Ensures smooth learning experience for every student.",
                        },
                    ].map((m, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-sm flex flex-col sm:flex-row items-center p-3 gap-3 hover:shadow-md transition"
                        >
                            <img
                                src={m.img}
                                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                            />

                            <div className="text-center sm:text-left">
                                <h4 className="text-sm font-semibold">{m.name}</h4>

                                <p className="text-[#D4AF37] text-xs font-medium">
                                    {m.role}
                                </p>

                                <p className="text-xs text-gray-600 mt-1">
                                    {m.desc}
                                </p>

                                <div className="flex justify-center sm:justify-start gap-2 mt-2 text-[#0A2540]">
                                    <FaLinkedinIn size={12} />
                                    <FaTwitter size={12} />
                                    <FaFacebookF size={12} />
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div> */}

            {/* ================= CTA ================= */}
            <Footer/>

        </div>
    );
}