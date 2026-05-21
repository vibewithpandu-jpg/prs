import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import chooseImg from "../assets/choose.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function WhyChooseUs() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">

      {/* ================= NAVBAR ================= */}
       <Navbar/>



      {/* ================= IMAGE SECTION ================= */}
      <div className="px-4 md:px-12 py-6">

      <div className="w-full">
  <div className="w-full bg-[#F5F7FA] flex justify-center">
  <img
    src={chooseImg}
    alt="Why Choose Us"
    className="w-full max-w-[1400px] h-auto object-contain"
  />
</div>
</div>

      </div>
<Footer/>
    </div>
  );
}