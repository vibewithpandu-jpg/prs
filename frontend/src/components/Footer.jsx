import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#0A2540] text-white mt-10">

      {/* ================= MAIN FOOTER ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10 py-10">

        {/* LEFT */}
        <div>
          <h2 className="text-lg font-semibold">PRS Career Crafts</h2>
          <p className="text-sm text-gray-300 mt-3">
            Shaping careers and building futures with expert training.
          </p>
        </div>

        {/* EXPLORE */}
        <div>
          <h3 className="text-[#D4AF37] font-semibold mb-3">Explore</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/training">Training Mode</Link></li>
            <li><Link to="/placement">Placement Support</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-[#D4AF37] font-semibold mb-3">Contact</h3>

          <p className="text-sm text-gray-300">
            📍 Sri Bhadradri Plaza,<br />
            Laxminagar Colony, LB Nagar,<br />
            Hyderabad<br />
            Landmark: Kamineni Hospital
          </p>

          <p className="text-sm text-gray-300 mt-2">
            📞 <a href="tel:+919100338983">+91 91003 38983</a>
          </p>

          <p className="text-sm text-gray-300">
            📧 <a href="mailto:Prsccs770@gmail.com">Prsccs770@gmail.com</a>
          </p>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-[#D4AF37] font-semibold mb-3">Newsletter</h3>

          <input
            placeholder="Your email"
            className="px-3 py-2 rounded text-black w-full mb-2"
          />

          <button className="bg-[#D4AF37] px-4 py-2 rounded text-white w-full">
            Join
          </button>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-gray-600 text-center py-3 text-sm text-gray-300">
        © 2026 PRS Career Crafts. All rights reserved.
      </div>
    </div>
  );
}