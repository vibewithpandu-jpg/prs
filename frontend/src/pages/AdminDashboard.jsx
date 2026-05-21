import React, { useEffect, useState } from "react";
import axios from "axios";
import { Menu, X } from "lucide-react";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [activeTab, setActiveTab] = useState("users");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersRes = await axios.get("https://prs-uidd.onrender.com/api/admin/users");
      const coursesRes = await axios.get("https://prs-uidd.onrender.com/api/admin/courses");

      setUsers(usersRes.data);
      setCourses(coursesRes.data);
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE USER
  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await axios.delete(`https://prs-uidd.onrender.com/api/admin/users/${id}`);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE COURSE
  const deleteCourse = async (id) => {
    if (!window.confirm("Delete this registration?")) return;

    try {
      await axios.delete(`https://prs-uidd.onrender.com/api/admin/courses/${id}`);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  // LOGOUT
  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen bg-[#F1F5F9]">

      {/* 🔥 MOBILE HEADER */}
      <div className="md:hidden bg-[#0A2540] text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <h2 className="text-lg font-bold">Admin Dashboard</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded text-sm"
          >
            Logout
          </button>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded bg-[#D4AF37] text-black"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 🔥 SIDEBAR */}
      <div className={`fixed md:static top-16 md:top-0 left-0 h-full md:h-auto w-[260px] bg-[#0A2540] text-white p-6 flex flex-col justify-between transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-40 md:z-auto`}>

        <div>
          <h2 className="text-xl font-bold mb-6 hidden md:block">Welcome Admin</h2>

          <ul className="space-y-4">
            <li
              onClick={() => {
                setActiveTab("users");
                setIsSidebarOpen(false);
              }}
              className={`cursor-pointer p-2 rounded ${
                activeTab === "users" ? "bg-[#D4AF37] text-black" : ""
              }`}
            >
              Login Details
            </li>

            <li
              onClick={() => {
                setActiveTab("courses");
                setIsSidebarOpen(false);
              }}
              className={`cursor-pointer p-2 rounded ${
                activeTab === "courses" ? "bg-[#D4AF37] text-black" : ""
              }`}
            >
              Course Registrations
            </li>
          </ul>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 py-2 rounded mt-10 w-full"
        >
          Logout
        </button>
      </div>

      {/* 🔥 OVERLAY for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* 🔥 MAIN CONTENT */}
      <div className="flex-1 p-4 md:p-8 pt-20 md:pt-8">

        {/* USERS TABLE */}
        {activeTab === "users" && (
          <div className="bg-white p-4 md:p-6 rounded-xl shadow">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              Registered Users
            </h2>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id} className="border-b">
                      <td className="p-3">{user.name}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">
                        <button
                          onClick={() => deleteUser(user._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-3">
              {users.map((user) => (
                <div key={user._id} className="bg-gray-50 p-4 rounded-lg border">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{user.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{user.email}</p>
                    </div>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm ml-3"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COURSES TABLE */}
        {activeTab === "courses" && (
          <div className="bg-white p-4 md:p-6 rounded-xl shadow">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              Course Registrations
            </h2>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Phone</th>
                    <th className="p-3 text-left">Course</th>
                    <th className="p-3 text-left">Mode</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((c) => (
                    <tr key={c._id} className="border-b">
                      <td className="p-3">{c.name}</td>
                      <td className="p-3">{c.email}</td>
                      <td className="p-3">{c.phone}</td>
                      <td className="p-3">{c.course}</td>
                      <td className="p-3">{c.mode}</td>
                      <td className="p-3">
                        <button
                          onClick={() => deleteCourse(c._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-3">
              {courses.map((c) => (
                <div key={c._id} className="bg-gray-50 p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{c.name}</h3>
                      <p className="text-sm text-gray-600">{c.email}</p>
                    </div>
                    <button
                      onClick={() => deleteCourse(c._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm ml-3"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Phone:</span>
                      <p className="text-gray-600">{c.phone}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Course:</span>
                      <p className="text-gray-600">{c.course}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="font-medium text-gray-700">Mode:</span>
                      <p className="text-gray-600">{c.mode}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}