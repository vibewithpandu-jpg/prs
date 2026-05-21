import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import heroImg from "../assets/contact.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">

      {/* ================= NAVBAR ================= */}
      <Navbar/>

      {/* ================= HERO ================= */}
      <div className="flex flex-col md:flex-row items-center bg-[#0A2540] text-white">

        {/* LEFT */}
        <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-[#D4AF37]">Us</span>
          </h1>

          <p className="mt-4 text-gray-300 max-w-md">
            We’d love to hear from you! Reach out for queries,
            suggestions or assistance.
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
        Home &gt; <span className="text-[#D4AF37]">Contact Us</span>
      </div>

      {/* ================= MAIN SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 md:px-12 mt-8">

        {/* ================= FORM ================= */}
        <div className="bg-white p-6 rounded-xl shadow col-span-1">
          <h3 className="text-lg font-semibold mb-4">Send Us a Message</h3>

          <input placeholder="Your Name *" className="w-full mb-3 p-2 border rounded" />
          <input placeholder="Your Email *" className="w-full mb-3 p-2 border rounded" />
          <input placeholder="Your Phone *" className="w-full mb-3 p-2 border rounded" />
          <input placeholder="Subject" className="w-full mb-3 p-2 border rounded" />

          <textarea
            placeholder="Your Message *"
            rows={4}
            className="w-full mb-4 p-2 border rounded"
          />

          <button className="bg-[#D4AF37] text-white px-6 py-2 rounded flex items-center gap-2">
            Send Message <Send size={16} />
          </button>
        </div>

        {/* ================= GET IN TOUCH ================= */}
        <div className="bg-[#0A2540] text-white p-6 rounded-xl shadow col-span-1">

          <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>

          <div className="flex gap-3 mb-5">
            <MapPin className="text-[#D4AF37]" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="text-sm text-gray-300">
                PRS Career Crafts <br />
                LB Nagar, Hyderabad <br />
                Telangana, India
              </p>
            </div>
          </div>

          <div className="flex gap-3 mb-5">
            <Phone className="text-[#D4AF37]" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-sm text-gray-300">
                +91 91003 38983 <br />
                
              </p>
            </div>
          </div>

          <div className="flex gap-3 mb-5">
            <Mail className="text-[#D4AF37]" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-sm text-gray-300">
                Prsccs770@gmail.com <br />
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Clock className="text-[#D4AF37]" />
            <div>
              <h4 className="font-semibold">Working Hours</h4>
              <p className="text-sm text-gray-300">
                Mon - Sat: 9AM - 7PM <br />
                Sunday: Closed
              </p>
            </div>
          </div>

        </div>

        {/* ================= MAP ================= */}
        <div className="bg-white p-4 rounded-xl shadow col-span-1">
          <h3 className="font-semibold mb-4">Our Location</h3>

          <iframe
            title="map"
            src="https://maps.google.com/maps?q=LB%20Nagar%20Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[250px] rounded"
          />
        </div>

      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="bg-[#0A2540] text-white mx-12 mt-10 rounded-xl px-10 py-6 flex justify-between items-center">

        <div>
          <h4 className="font-semibold">Call Us</h4>
          <p className="text-sm">+91 91003 38983</p>
        </div>

        <div>
          <h4 className="font-semibold">Email Us</h4>
          <p className="text-sm">Prsccs770@gmail.com</p>
        </div>

        <div>
          <h4 className="font-semibold">WhatsApp</h4>
          <button className="bg-[#D4AF37] px-4 py-1 rounded mt-1">
            Chat Now
          </button>
        </div>

        <div>
          <h4 className="font-semibold">Follow Us</h4>
          <p className="text-sm">LinkedIn • Instagram • YouTube</p>
        </div>

      </div>
     <div className="bg-[#0A2540] text-white mt-10">

  <Footer/>
</div>
    </div>
  );
}