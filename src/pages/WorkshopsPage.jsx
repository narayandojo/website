import React from "react";
import { useNavigate } from "react-router-dom";

function WorkshopsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">

      {/* HERO */}
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          🚀 Our Workshops
        </h1>

        <p className="text-gray-400">
          Explore our exciting coding programs for students
        </p>
      </div>

      {/* SECTION 1 - CODING FOR KIDS */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        <h2
          onClick={() => navigate("/coding-for-kids")}
          className="text-3xl font-bold mb-6 text-blue-400 cursor-pointer hover:underline"
        >
          💻 Coding for Kids
        </h2>

        <p className="text-gray-300 mb-6">
          Fun-based learning using Scratch, games, and beginner-friendly coding.
        </p>

        <div
          onClick={() => navigate("/coding-for-kids")}
          className="cursor-pointer bg-white text-black p-6 rounded-xl shadow-lg hover:scale-105 transition hover:bg-gray-100"
        >
          👉 Click to explore Coding for Kids
        </div>

      </div>

      {/* SECTION 2 - WINTER OF CODE */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        <h2
          onClick={() => navigate("/winter-of-code")}
          className="text-3xl font-bold mb-6 text-purple-400 cursor-pointer hover:underline"
        >
          ❄ Winter of Code
        </h2>

        <p className="text-gray-300 mb-6">
          Intensive coding bootcamp where students build real-world projects,
          participate in hackathons, and learn advanced tools.
        </p>

        <div
          onClick={() => navigate("/winter-of-code")}
          className="cursor-pointer bg-white text-black p-6 rounded-xl shadow-lg hover:scale-105 transition hover:bg-gray-100"
        >
          👉 Click to explore Winter of Code
        </div>

      </div>

      {/* SECTION 3 - CODING FOR CLASSROOM */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        <h2
          onClick={() => navigate("/classroom")}
          className="text-3xl font-bold mb-6 text-orange-400 cursor-pointer hover:underline"
        >
          🏫 Coding for Classroom
        </h2>

        <p className="text-gray-300 mb-6">
          Structured curriculum designed for schools to integrate coding
          into daily learning with guided modules.
        </p>

        <div
          onClick={() => navigate("/classroom")}
          className="cursor-pointer bg-white text-black p-6 rounded-xl shadow-lg hover:scale-105 transition hover:bg-gray-100"
        >
          👉 Click to explore Classroom Program
        </div>

      </div>

    </div>
  );
}

export default WorkshopsPage;