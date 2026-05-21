import React from "react";
import { useParams, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import {
    Clock,
    BookOpen,
    Award,
    CheckCircle,
    User,
} from "lucide-react";

export default function CourseDetails() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [mode, setMode] = useState("");

    const courses = [
        {
            title: "Digital Marketing",
            subtitle: "Learn SEO, Social Media, Google Ads & more.",
            duration: "4 Months",
            level: "Beginner",
            mode: "Online / Offline",
            qualification: "Degree/B.Tech",
            location: "LB Nagar, Hyderabad",
        },
        {
            title: "Web Development",
            subtitle: "Build modern websites and web applications.",
            duration: "6 Months",
            level: "Beginner",
            mode: "Online / Offline",
            qualification: "Degree/B.Tech",
            location: "LB Nagar, Hyderabad",
        },
        {
            title: "Data Analytics",
            subtitle: "Turn data into insights and decisions.",
            duration: "4 Months",
            level: "Intermediate",
            mode: "Online / Offline",
            qualification: "Degree/B.Tech",
            location: "LB Nagar, Hyderabad",
        },
        {
            title: "Graphic Design",
            subtitle: "Create stunning visuals and brand identities.",
            duration: "3 Months",
            level: "Beginner",
            mode: "Online / Offline",
            qualification: "Degree/B.Tech",
            location: "LB Nagar, Hyderabad",
        },
        {
            title: "Python Programming",
            subtitle: "Learn Python from basics to advanced level.",
            duration: "4 Months",
            level: "Beginner",
            mode: "Online / Offline",
            qualification: "Degree/B.Tech",
            location: "LB Nagar, Hyderabad",
        },
        {
            title: "Artificial Intelligence & Machine Learning",
            subtitle: "Learn AI & ML with real-world projects.",
            duration: "4 Months",
            level: "Intermediate",
            mode: "Online / Offline",
            qualification: "Degree/B.Tech",
            location: "LB Nagar, Hyderabad",
        },
        {
            title: "Java Programming",
            subtitle: "Build robust applications using Java.",
            duration: "6 Months",
            level: "Intermediate",
            mode: "Online / Offline",
            qualification: "Degree/B.Tech",
            location: "LB Nagar, Hyderabad",
        },
        {
            title: "Soft Skills Training",
            subtitle: "Improve communication & leadership.",
            duration: "1 Month",
            level: "Beginner",
            mode: "Offline",
            qualification: "10th Pass/12th Pass/Any Degree",
            location: "LB Nagar, Hyderabad",
        },
        {
            title: "General Duty Assistant (Healthcare)",
            subtitle: "Patient care, hygiene, vital monitoring and hospital assistance.",
            duration: "3 Months",
            level: "Beginner",
            mode: "Offline",
            qualification: "10th / 12th Pass",
            location: "LB Nagar, Hyderabad",
        },
        {
            title: "Caregiver / Elder Care Assistant (Healthcare)",
            subtitle: "Elderly care, daily living support and emergency response.",
            duration: "3 Months",
            level: "Beginner",
            mode: "Offline",
            qualification: "10th / 12th Pass",
            location: "LB Nagar, Hyderabad",
        },
        {
            title: "Hospital Front Office & Billing (Healthcare)",
            subtitle: "Patient handling, appointments, billing and communication skills.",
            duration: "2-3 Months",
            level: "Beginner",
            mode: "Offline",
            qualification: "10th / 12th Pass",
            location: "LB Nagar, Hyderabad",
        },
    ];

    const course = courses[id];
    const handleRegister = async () => {
        if (!name || !email || !phone || !mode) {
            return alert("Please fill all fields");
        }

        try {
            await axios.post("https://prs-uidd.onrender.com/api/courses/register", {
                name,
                email,
                phone,
                course: course.title,
                mode,
            });

            alert("✅ Registered Successfully");

            setName("");
            setEmail("");
            setPhone("");
            setMode("");
        } catch (err) {
            console.log(err);
            alert("❌ Registration Failed");
        }
    };
    if (!course) return <div>Course Not Found</div>;

    return (
        <div className="bg-[#F5F7FA] min-h-screen flex flex-col">

            {/* ================= NAVBAR ================= */}
            <Navbar/>

            {/* ================= CONTENT ================= */}
            <div className="px-4 md:px-12 py-6 flex-1">

                {/* BREADCRUMB */}
                <p className="text-sm text-gray-500 mb-4">
                    <Link to="/">Home</Link> ›{" "}
                    <Link to="/courses">Courses</Link> ›{" "}
                    <span className="text-[#D4AF37]">{course.title}</span>
                </p>

                <div className="flex flex-col lg:flex-row gap-6">

                    {/* LEFT */}
                    <div className="w-full lg:w-2/3">

                        {/* HERO */}
                        <div className="bg-[#0A2540] text-white rounded-xl p-6 flex justify-between items-center">
                            <div>
                                <span className="bg-[#D4AF37] text-xs px-3 py-1 rounded">
                                    ⭐ POPULAR
                                </span>

                                <h1 className="text-3xl font-bold mt-3">
                                    {course.title}
                                </h1>

                                <p className="text-[#D4AF37] mt-1">
                                    {course.subtitle}
                                </p>

                                <p className="text-sm mt-3 text-gray-300 max-w-md">
                                    {course.title === "General Duty Assistant (Healthcare)" && "Get trained in essential healthcare support skills and become a certified General Duty Assistant ready for hospital employment."}
                                    {course.title === "Caregiver / Elder Care Assistant (Healthcare)" && "Develop compassionate caregiving skills and become certified to provide professional elderly care services."}
                                    {course.title === "Hospital Front Office & Billing (Healthcare)" && "Master hospital administration skills and become proficient in patient management and medical billing procedures."}
                                    {!["General Duty Assistant (Healthcare)", "Caregiver / Elder Care Assistant (Healthcare)", "Hospital Front Office & Billing (Healthcare)"].includes(course.title) && "Learn with industry experts and build real-world projects."}
                                </p>

                                <div className="flex gap-2 mt-4 flex-wrap">
                                    {course.title === "General Duty Assistant (Healthcare)" && ["Healthcare Training", "Patient Care", "Job Ready", "Certificate"].map((tag, i) => (
                                        <span key={i} className="text-xs bg-white/10 px-3 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                    {course.title === "Caregiver / Elder Care Assistant (Healthcare)" && ["Elderly Care", "Compassionate Care", "Certified Training", "Job Placement"].map((tag, i) => (
                                        <span key={i} className="text-xs bg-white/10 px-3 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                    {course.title === "Hospital Front Office & Billing (Healthcare)" && ["Hospital Admin", "Medical Billing", "Patient Management", "Career Growth"].map((tag, i) => (
                                        <span key={i} className="text-xs bg-white/10 px-3 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                    {!["General Duty Assistant (Healthcare)", "Caregiver / Elder Care Assistant (Healthcare)", "Hospital Front Office & Billing (Healthcare)"].includes(course.title) && ["Beginner Friendly", "Projects", "Placement", "Certificate"].map((tag, i) => (
                                        <span key={i} className="text-xs bg-white/10 px-3 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* <img src={courseImg} className="w-56" /> */}
                        </div>

                        {/* DETAILS */}
                        <div className="bg-white rounded-xl mt-6 p-5">

                            <h3 className="font-semibold mb-2">Course Overview</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                {course.title === "General Duty Assistant (Healthcare)" && "This comprehensive course trains you to become a skilled General Duty Assistant in healthcare settings. Learn essential patient care techniques, medical terminology, infection control, and emergency response procedures to provide quality healthcare support."}
                                {course.title === "Caregiver / Elder Care Assistant (Healthcare)" && "This specialized course prepares you for a rewarding career in elderly care. Learn compassionate caregiving techniques, understand age-related health conditions, master daily living assistance skills, and develop emergency response capabilities for senior care."}
                                {course.title === "Hospital Front Office & Billing (Healthcare)" && "Master the essential skills needed for hospital administration and patient coordination. Learn patient management, appointment scheduling, medical billing procedures, insurance processing, and effective communication in healthcare environments."}
                                {!["General Duty Assistant (Healthcare)", "Caregiver / Elder Care Assistant (Healthcare)", "Hospital Front Office & Billing (Healthcare)"].includes(course.title) && `This course helps you master ${course.title} with real-world projects.`}
                            </p>

                            <h3 className="font-semibold mb-3">What You Will Learn</h3>

                            <div className="grid grid-cols-2 gap-3 text-sm">
                                {course.title === "General Duty Assistant (Healthcare)" && [
                                    "Patient Care & Hygiene",
                                    "Vital Signs Monitoring",
                                    "Medical Terminology",
                                    "Infection Control",
                                    "Emergency Response",
                                    "Hospital Procedures",
                                    "Patient Mobility Assistance",
                                    "Documentation Skills"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-[#D4AF37]" />
                                        {item}
                                    </div>
                                ))}
                                {course.title === "Caregiver / Elder Care Assistant (Healthcare)" && [
                                    "Elderly Care Techniques",
                                    "Age-Related Health Issues",
                                    "Daily Living Assistance",
                                    "Nutrition & Meal Prep",
                                    "Medication Management",
                                    "Emergency Response",
                                    "Communication Skills",
                                    "Safety & Fall Prevention"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-[#D4AF37]" />
                                        {item}
                                    </div>
                                ))}
                                {course.title === "Hospital Front Office & Billing (Healthcare)" && [
                                    "Patient Registration",
                                    "Appointment Scheduling",
                                    "Medical Billing",
                                    "Insurance Processing",
                                    "Communication Skills",
                                    "Record Management",
                                    "Customer Service",
                                    "Healthcare Administration"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-[#D4AF37]" />
                                        {item}
                                    </div>
                                ))}
                                {!["General Duty Assistant (Healthcare)", "Caregiver / Elder Care Assistant (Healthcare)", "Hospital Front Office & Billing (Healthcare)"].includes(course.title) && ["Core Concepts", "Industry Tools", "Projects", "Best Practices"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-[#D4AF37]" />
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <h3 className="font-semibold mt-6 mb-3">Course Syllabus</h3>

                            {course.title === "General Duty Assistant (Healthcare)" && [
                                { module: "Introduction to Healthcare", topics: "Healthcare System, Role of GDA, Professional Ethics" },
                                { module: "Patient Care Fundamentals", topics: "Personal Hygiene, Bed Making, Patient Comfort" },
                                { module: "Vital Signs & Monitoring", topics: "Temperature, Pulse, Blood Pressure, Respiration" },
                                { module: "Medical Terminology", topics: "Common Medical Terms, Abbreviations, Documentation" },
                                { module: "Infection Control", topics: "Hand Hygiene, PPE Usage, Sterilization" },
                                { module: "Emergency Response", topics: "Basic Life Support, First Aid, Emergency Procedures" },
                                { module: "Nutrition & Diet", topics: "Patient Feeding, Special Diets, Hydration" },
                                { module: "Clinical Practice", topics: "Hospital Ward Procedures, Patient Mobility, Discharge Planning" }
                            ].map((m, i) => (
                                <div key={i} className="border rounded-lg p-3 mb-2 flex justify-between">
                                    <span>Module {i + 1} - {m.module}</span>
                                    <span className="text-sm text-gray-500">{m.topics}</span>
                                </div>
                            ))}
                            {course.title === "Caregiver / Elder Care Assistant (Healthcare)" && [
                                { module: "Introduction to Elderly Care", topics: "Aging Process, Caregiver Role, Ethical Considerations" },
                                { module: "Health Conditions in Elderly", topics: "Common Age-Related Diseases, Chronic Conditions" },
                                { module: "Daily Living Assistance", topics: "Personal Care, Mobility Support, Home Safety" },
                                { module: "Nutrition & Meal Preparation", topics: "Elderly Nutrition, Special Diets, Feeding Assistance" },
                                { module: "Medication Management", topics: "Medication Administration, Side Effects, Record Keeping" },
                                { module: "Communication & Psychology", topics: "Effective Communication, Mental Health, Family Support" },
                                { module: "Emergency & Safety", topics: "Fall Prevention, Emergency Response, First Aid" },
                                { module: "Practical Training", topics: "Hands-on Care Skills, Case Studies, Role-playing" }
                            ].map((m, i) => (
                                <div key={i} className="border rounded-lg p-3 mb-2 flex justify-between">
                                    <span>Module {i + 1} - {m.module}</span>
                                    <span className="text-sm text-gray-500">{m.topics}</span>
                                </div>
                            ))}
                            {course.title === "Hospital Front Office & Billing (Healthcare)" && [
                                { module: "Healthcare Administration", topics: "Hospital Operations, Front Office Role, Professional Ethics" },
                                { module: "Patient Registration", topics: "Patient Information, Admission Process, Documentation" },
                                { module: "Appointment Management", topics: "Scheduling, Calendar Management, Follow-ups" },
                                { module: "Communication Skills", topics: "Patient Interaction, Phone Etiquette, Conflict Resolution" },
                                { module: "Medical Billing Basics", topics: "Billing Codes, Insurance Types, Claim Process" },
                                { module: "Insurance Processing", topics: "Health Insurance, Claim Submission, Denials" },
                                { module: "Record Management", topics: "Medical Records, Filing Systems, Data Privacy" },
                                { module: "Advanced Administration", topics: "Software Tools, Reporting, Quality Assurance" }
                            ].map((m, i) => (
                                <div key={i} className="border rounded-lg p-3 mb-2 flex justify-between">
                                    <span>Module {i + 1} - {m.module}</span>
                                    <span className="text-sm text-gray-500">{m.topics}</span>
                                </div>
                            ))}
                            {!["General Duty Assistant (Healthcare)", "Caregiver / Elder Care Assistant (Healthcare)", "Hospital Front Office & Billing (Healthcare)"].includes(course.title) && ["Basics", "Intermediate", "Advanced", "Projects"].map((m, i) => (
                                <div key={i} className="border rounded-lg p-3 mb-2 flex justify-between">
                                    <span>Module {i + 1} - {m}</span>
                                    <span className="text-sm text-gray-500">5 Topics</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-full lg:w-1/3 space-y-5">

                        {/* HIGHLIGHTS */}
                        <div className="bg-white rounded-xl p-5">
                            <h3 className="font-semibold mb-3">Course Highlights</h3>
                            <p><Clock size={14} className="inline mr-2" /> {course.duration}</p>
                            <p><BookOpen size={14} className="inline mr-2" /> {course.mode}</p>
                            <p><Award size={14} className="inline mr-2" /> Certificate</p>
                            <p><User size={14} className="inline mr-2" /> {course.level}</p>
                            <p className="mt-2 text-sm text-gray-500"><strong>Qualification:</strong> {course.qualification}</p>

                            {/* <h2 className="text-xl font-bold text-[#D4AF37] mt-4">
                                {course.price}
                            </h2> */}
                        </div>

                        {/* TRAINING DETAILS */}
                        <div className="bg-white rounded-xl p-5">
                            <h3 className="font-semibold mb-3">Training Details</h3>
                            <p><strong>Mode:</strong> {course.mode}</p>
                            {course.mode === "Online / Offline" && (
                                <>
                                    <p><strong>Online:</strong> Morning and Evening</p>
                                    <p><strong>Offline:</strong> Morning and Evening</p>
                                </>
                            )}
                            {course.mode === "Offline" && (
                                <p><strong>Offline:</strong> Morning and Evening</p>
                            )}
                            <p><strong>Location:</strong> {course.location}</p>
                        </div>

                        {/* FORM */}
                        <div className="bg-white rounded-xl p-5">
                            <h3 className="font-semibold mb-3">Register</h3>

                            <input
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full mb-3 p-2 border rounded"
                            />
                            <input
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mb-3 p-2 border rounded"
                            />
                            <input
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full mb-3 p-2 border rounded"
                            />

                            <input value={course.title} readOnly className="w-full mb-3 p-2 border bg-gray-100 rounded" />

                            <select
                                value={mode}
                                onChange={(e) => setMode(e.target.value)}
                                className="w-full mb-3 p-2 border rounded"
                            >
                                <option>Select Mode</option>
                                <option>Online</option>
                                <option>Offline</option>
                            </select>

                            <button
                                onClick={() => {
                                    console.log("CLICKED");
                                    handleRegister();
                                }}
                                className="w-full bg-[#D4AF37] text-white py-2 rounded"
                            >
                                Register Now →
                            </button>
                        </div>

                    </div>

                </div>
            </div>

            {/* ================= FOOTER ================= */}
            <Footer/>

        </div>
    );
}