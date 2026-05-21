import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import trainingHero from "../assets/training-hero.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    Monitor,
    Users,
    Repeat,
    CheckCircle,
    Star,
    BookOpen,
    Briefcase,
    Headphones,
    Phone,
} from "lucide-react";

export default function TrainingMode() {
    const navigate = useNavigate();
    return (
        <div className="bg-[#F5F7FA] min-h-screen">

            {/* ================= NAVBAR ================= */}
           <Navbar/>

            {/* ================= HERO ================= */}
            <div className="flex flex-col md:flex-row items-center bg-[#0A2540] text-white">

                {/* LEFT CONTENT */}


                <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10">

                    {/* TITLE */}
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Training <span className="text-[#D4AF37]">Mode</span>
                    </h1>

                    {/* BREADCRUMB */}
                    <p className="text-sm mt-3 flex items-center">

                        <Link
                            to="/"
                            className="text-gray-300 hover:text-[#D4AF37] transition"
                        >
                            Home
                        </Link>

                        <span className="mx-2 text-gray-400">›</span>

                        <span className="text-[#D4AF37]">
                            Training Mode
                        </span>

                    </p>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-gray-300 max-w-md leading-relaxed">
                        Choose the learning mode that suits you best and start
                        your journey towards a successful career.
                    </p>

                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full md:w-1/2 h-48 md:h-[200px]">
                    <img
                        src={trainingHero}
                        alt="training"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>

            {/* ================= CARDS ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 py-10">

                {/* CARD 1 */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Monitor size={40} className="text-[#0A2540]" />

                    <h3 className="font-semibold text-lg mt-4">
                        Online Training
                    </h3>

                    <p className="text-[#D4AF37] text-sm mt-1">
                        Learn from anywhere, anytime.
                    </p>

                    <p className="text-sm text-gray-600 mt-2">
                        Join live interactive sessions, access recorded lectures
                        and study at your own pace.
                    </p>

                    <div className="mt-4 space-y-2 text-sm">
                        <p><CheckCircle size={14} className="inline mr-2 text-[#0A2540]" /> Live Classes by Expert Trainers</p>
                        <p><CheckCircle size={14} className="inline mr-2 text-[#0A2540]" /> Flexible Schedule</p>
                        <p><CheckCircle size={14} className="inline mr-2 text-[#0A2540]" /> Access to Recordings</p>
                        <p><CheckCircle size={14} className="inline mr-2 text-[#0A2540]" /> Doubt Support</p>
                    </div>

                    <button className="mt-5 bg-[#0A2540] text-white px-5 py-2 rounded">
                        Learn More →
                    </button>
                </div>

                {/* CARD 2 */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Users size={40} className="text-[#0A2540]" />

                    <h3 className="font-semibold text-lg mt-4">
                        Offline Training
                    </h3>

                    <p className="text-[#D4AF37] text-sm mt-1">
                        Traditional learning with practical exposure.
                    </p>

                    <p className="text-sm text-gray-600 mt-2">
                        Attend classroom sessions, hands-on workshops
                        and real-world projects.
                    </p>

                    <div className="mt-4 space-y-2 text-sm">
                        <p><CheckCircle size={14} className="inline mr-2 text-[#0A2540]" /> Face-to-Face Interaction</p>
                        <p><CheckCircle size={14} className="inline mr-2 text-[#0A2540]" /> Practical Sessions</p>
                        <p><CheckCircle size={14} className="inline mr-2 text-[#0A2540]" /> Better Focus</p>
                        <p><CheckCircle size={14} className="inline mr-2 text-[#0A2540]" /> Networking</p>
                    </div>

                    <button className="mt-5 bg-[#0A2540] text-white px-5 py-2 rounded">
                        Learn More →
                    </button>
                </div>

                {/* CARD 3 */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Repeat size={40} className="text-[#0A2540]" />

                    <h3 className="font-semibold text-lg mt-4">
                        Hybrid Training
                    </h3>

                    <p className="text-[#D4AF37] text-sm mt-1">
                        Best of online & offline worlds.
                    </p>

                    <p className="text-sm text-gray-600 mt-2">
                        Combine flexibility of online learning with
                        classroom engagement.
                    </p>

                    <div className="mt-4 space-y-2 text-sm">
                        <p><CheckCircle size={14} className="inline mr-2 text-[#0A2540]" /> Online + Offline Sessions</p>
                        <p><CheckCircle size={14} className="inline mr-2 text-[#0A2540]" /> Balanced Learning</p>
                        <p><CheckCircle size={14} className="inline mr-2 text-[#0A2540]" /> All Resources</p>
                        <p><CheckCircle size={14} className="inline mr-2 text-[#0A2540]" /> Personalized Attention</p>
                    </div>

                    <button className="mt-5 bg-[#0A2540] text-white px-5 py-2 rounded">
                        Learn More →
                    </button>
                </div>

            </div>

            {/* ================= FEATURES BAR ================= */}
            <div className="mx-4 md:mx-12 bg-white rounded-xl p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 shadow-sm">

                <div className="flex items-center gap-4">
                    <Star size={30} className="text-[#D4AF37]" />
                    <div>
                        <h3 className="font-semibold">
                            All Training Modes Include
                        </h3>
                        <p className="text-sm text-gray-500">
                            No matter which mode you choose, you get the same quality training.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 md:gap-8 text-sm">
                    <p className="flex items-center gap-2">
                        <Users size={16} /> Expert Trainers
                    </p>
                    <p className="flex items-center gap-2">
                        <BookOpen size={16} /> Updated Materials
                    </p>
                    <p className="flex items-center gap-2">
                        <Briefcase size={16} /> Placement Support
                    </p>
                    <p className="flex items-center gap-2">
                        <Headphones size={16} /> Mentorship
                    </p>
                </div>
            </div>

            {/* ================= CTA ================= */}
            <div className="mx-4 md:mx-12 mt-8 bg-[#0A2540] text-white rounded-xl p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">

                <div className="flex items-center gap-4">
                    <Phone size={28} className="text-[#D4AF37]" />
                    <div>
                        <h3 className="font-semibold">
                            Need Help Choosing the Right Mode?
                        </h3>
                        <p className="text-sm text-gray-300">
                            Our education experts are here to guide you.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <button 
                        onClick={() => navigate("/contact")}
                        className="bg-[#D4AF37] px-6 py-2 rounded text-white"
                    >
                        Talk to an Expert →
                    </button>

                    <button className="border border-white px-6 py-2 rounded">
                        Chat on WhatsApp
                    </button>
                </div>

            </div>
            <Footer/>

        </div>
    );
}