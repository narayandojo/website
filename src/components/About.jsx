import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute top-16 left-8 md:top-20 md:left-10"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute top-32 right-8 md:top-40 md:right-20"></div>
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping absolute bottom-16 left-1/2"></div>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center px-6 md:px-10 max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          About{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 bg-clip-text text-transparent">
            NarayanDojo StemClub
          </span>
        </h2>

        <p className="text-gray-500 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          We are a community dedicated to learning and inventing technology
          through innovation, creativity, and hands-on STEM experiences.
        </p>

        {/* Read More Button */}
        <button
          onClick={() => navigate("/about")}
          className="mt-8 bg-gradient-to-r from-blue-500 to-orange-400 text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg"
        >
          Read More →
        </button>

      </div>
    </section>
  );
}

export default About;