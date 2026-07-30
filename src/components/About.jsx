import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute top-20 left-10"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute top-40 right-20"></div>
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping absolute bottom-20 left-1/2"></div>
      </div>

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl font-bold">
          About{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 bg-clip-text text-transparent">
            NarayanDojo StemClub
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
          We are a community dedicated to learning and inventing technology with innovation.
        </p>

        {/* 🔥 Redirect Button */}
        <button
          onClick={() => navigate("/about")}
          className="mt-6 bg-gradient-to-r from-blue-500 to-orange-400 text-white px-6 py-2 rounded-full hover:scale-105 transition shadow-lg"
        >
          Read More →
        </button>
      </div>
    </section>
  );
}

export default About;