import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import heroImg from "../assets/test.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Star,
  Briefcase,
  Users,
  Trophy,
  MessageCircle,
  Quote,
} from "lucide-react";

export default function Testimonials() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">

      {/* ================= NAVBAR ================= */}
      <Navbar/>
      {/* ================= HERO ================= */}
      <div className="flex flex-col md:flex-row items-center bg-[#0A2540] text-white">

        {/* LEFT */}
        <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            What Our <span className="text-[#D4AF37]">Students Say</span>
          </h1>

          <p className="text-sm text-gray-500 mb-4">
  <Link to="/">Home</Link> ›{" "}
  <span className="text-[#D4AF37]">Testimonials</span>
</p>

          <p className="mt-4 text-gray-300 max-w-md">
            We take pride in the success of our students. Here's what
            they have to say about their learning journey with us.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 h-48 md:h-[200px]">
          <img
            src={heroImg}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ================= TITLE ================= */}
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold text-[#0A2540]">
          Student <span className="text-[#D4AF37]">Success Stories</span>
        </h2>

        <div className="flex justify-center mt-2 text-[#D4AF37]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill="#D4AF37" />
          ))}
        </div>

        <p className="text-gray-500 mt-3">
          Our students come from different backgrounds, but they all
          have one thing in common – the will to grow.
        </p>
      </div>

      {/* ================= CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-12 mt-10">

        {/* CARD 1 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <Quote className="text-[#D4AF37]" />
          <p className="text-gray-600 mt-3">
            PRS Career Crafts helped me kickstart my digital marketing
            career. The trainers are experts and the practical approach
            is amazing!
          </p>

          <div className="flex items-center mt-5 gap-3">
            <img src="/team1.jpg" className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="font-semibold">Rahul Verma</h4>
              <p className="text-sm text-[#D4AF37]">Digital Marketing</p>
            </div>
          </div>

          <div className="flex mt-2 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#D4AF37" />
            ))}
          </div>

          <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
            <Briefcase size={16} />
            Placed at: TechGrowth Pvt. Ltd.
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <Quote className="text-[#D4AF37]" />
          <p className="text-gray-600 mt-3">
            The Web Development course was well structured and easy to
            follow. I built real-world projects and got great placement
            support.
          </p>

          <div className="flex items-center mt-5 gap-3">
            <img src="/team2.jpg" className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="font-semibold">Sneha Patel</h4>
              <p className="text-sm text-[#D4AF37]">Web Development</p>
            </div>
          </div>

          <div className="flex mt-2 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#D4AF37" />
            ))}
          </div>

          <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
            <Briefcase size={16} />
            Placed at: WebX Solutions
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <Quote className="text-[#D4AF37]" />
          <p className="text-gray-600 mt-3">
            The Data Analytics training gave me a deep understanding of
            tools and techniques. Highly recommended!
          </p>

          <div className="flex items-center mt-5 gap-3">
            <img src="/team3.jpg" className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="font-semibold">Amit Kumar</h4>
              <p className="text-sm text-[#D4AF37]">Data Analytics</p>
            </div>
          </div>

          <div className="flex mt-2 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#D4AF37" />
            ))}
          </div>

          <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
            <Briefcase size={16} />
            Placed at: Insight Analytics
          </div>
        </div>

        {/* CARD 4 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <Quote className="text-[#D4AF37]" />
          <p className="text-gray-600 mt-3">
            Improved my communication skills and confidence. The soft
            skills training was very interactive.
          </p>

          <div className="flex items-center mt-5 gap-3">
            <img src="/team4.jpg" className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="font-semibold">Pooja Sharma</h4>
              <p className="text-sm text-[#D4AF37]">Soft Skills</p>
            </div>
          </div>

          <div className="flex mt-2 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#D4AF37" />
            ))}
          </div>

          <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
            <Briefcase size={16} />
            Placed at: Bright Future Pvt. Ltd.
          </div>
        </div>

      </div>

      {/* ================= STATS ================= */}
      <div className="bg-[#0A2540] text-white mx-12 mt-12 rounded-xl px-10 py-6 flex justify-between">

        <div className="flex items-center gap-3">
          <Users className="text-[#D4AF37]" />
          <div>
            <h3 className="text-xl font-bold">5000+</h3>
            <p>Happy Students</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Trophy className="text-[#D4AF37]" />
          <div>
            <h3 className="text-xl font-bold">95%</h3>
            <p>Success Rate</p>
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
          <MessageCircle className="text-[#D4AF37]" />
          <div>
            <h3 className="text-xl font-bold">700+</h3>
            <p>Positive Reviews</p>
          </div>
        </div>

      </div>
      <div className="bg-[#0A2540] text-white mt-10">

  <Footer/>
</div>
    </div>
  );
}