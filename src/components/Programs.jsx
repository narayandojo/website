import React from "react";

function Programs() {
  return (
    <section
      id="programs"
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >

      {/* Floating AI particles */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute top-20 left-20"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute top-40 right-40"></div>
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping absolute bottom-20 left-1/2"></div>

      </div>

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">

        <p className="text-orange-500 font-semibold tracking-widest">
          WHAT WE OFFER
        </p>

        <h2 className="text-4xl font-bold mt-2">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 bg-clip-text text-transparent">
            Programs
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Structured learning paths designed to take students from beginners
          to confident creators.
        </p>

      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6 relative z-10">

        {/* Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 group">

          <div className="text-4xl mb-4 text-blue-500 group-hover:scale-125 transition">
            💻
          </div>

          <h3 className="text-lg font-semibold mb-3">
            Coding for Kids
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Learn programming fundamentals through fun, interactive
            projects using Scratch, Python, and JavaScript.
          </p>

          <span className="text-blue-600 font-medium group-hover:translate-x-1 transition inline-block">
            Learn More →
          </span>

        </div>

        {/* Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 group">

          <div className="text-4xl mb-4 text-purple-500 group-hover:scale-125 transition">
            🤖
          </div>

          <h3 className="text-lg font-semibold mb-3">
            Robotics & AI Basics
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Build and program robots while exploring the basics
            of artificial intelligence and machine learning.
          </p>

          <span className="text-purple-600 font-medium group-hover:translate-x-1 transition inline-block">
            Learn More →
          </span>

        </div>

        {/* Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 group">

          <div className="text-4xl mb-4 text-blue-500 group-hover:scale-125 transition">
            🌐
          </div>

          <h3 className="text-lg font-semibold mb-3">
            Web Development
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Design and build real websites using HTML, CSS,
            React, and modern web technologies.
          </p>

          <span className="text-blue-600 font-medium group-hover:translate-x-1 transition inline-block">
            Learn More →
          </span>

        </div>

        {/* Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 group">

          <div className="text-4xl mb-4 text-orange-500 group-hover:scale-125 transition">
            🧪
          </div>

          <h3 className="text-lg font-semibold mb-3">
            Innovation Lab Projects
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Work on real-world problems and create prototypes
            using electronics and 3D printing tools.
          </p>

          <span className="text-orange-500 font-medium group-hover:translate-x-1 transition inline-block">
            Learn More →
          </span>

        </div>

      </div>

    </section>
  );
}

export default Programs;