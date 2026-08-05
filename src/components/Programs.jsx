import React from "react";

function Programs() {
  return (
    <section
      id="programs"
      className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Floating AI Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute top-16 left-6 md:top-20 md:left-20"></div>

        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute top-32 right-6 md:top-40 md:right-40"></div>

        <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping absolute bottom-16 left-1/2"></div>
      </div>

      {/* Heading */}
      <div className="text-center mb-12 md:mb-20 px-6 relative z-10">

        <p className="text-orange-500 font-semibold tracking-widest text-sm md:text-base">
          WHAT WE OFFER
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 bg-clip-text text-transparent">
            Programs
          </span>
        </h2>

        <p className="text-gray-500 text-base md:text-lg mt-4 max-w-2xl mx-auto">
          Structured learning paths designed to take students from beginners
          to confident creators.
        </p>

      </div>

      {/* Program Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-6 relative z-10">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">

          <div className="text-5xl text-blue-500 mb-5 group-hover:scale-125 transition-transform">
            💻
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Coding for Kids
          </h3>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
            Learn programming fundamentals through fun, interactive projects
            using Scratch, Python, and JavaScript.
          </p>

          <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition inline-block">
            Learn More →
          </span>

        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">

          <div className="text-5xl text-purple-500 mb-5 group-hover:scale-125 transition-transform">
            🤖
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Robotics & AI Basics
          </h3>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
            Build and program robots while exploring the basics of Artificial
            Intelligence and Machine Learning.
          </p>

          <span className="text-purple-600 font-semibold group-hover:translate-x-2 transition inline-block">
            Learn More →
          </span>

        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">

          <div className="text-5xl text-blue-500 mb-5 group-hover:scale-125 transition-transform">
            🌐
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Web Development
          </h3>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
            Design and build responsive websites using HTML, CSS, React, and
            modern web technologies.
          </p>

          <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition inline-block">
            Learn More →
          </span>

        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">

          <div className="text-5xl text-orange-500 mb-5 group-hover:scale-125 transition-transform">
            🧪
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Innovation Lab Projects
          </h3>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
            Solve real-world problems and create innovative prototypes using
            electronics, IoT, robotics, and 3D printing.
          </p>

          <span className="text-orange-500 font-semibold group-hover:translate-x-2 transition inline-block">
            Learn More →
          </span>

        </div>

      </div>
    </section>
  );
}

export default Programs;