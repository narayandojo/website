import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLightbulb,
  FaTools,
  FaWifi,
  FaProjectDiagram,
} from "react-icons/fa";

function Services() {
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100"
    >
      {/* Heading */}
      <div className="text-center px-6 mb-12 md:mb-16">
        <p className="text-orange-500 font-semibold tracking-widest text-sm md:text-base">
          OUR SERVICES
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f2a5f] mt-2">
          Explore Our Services
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
          Discover exciting learning opportunities in STEM, DIY, IoT, and
          Artificial Intelligence through hands-on projects.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">

        {/* STEM */}
        <div
          onClick={() => navigate("/stem")}
          className="bg-pink-400 text-white rounded-2xl p-8 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center"
        >
          <FaLightbulb className="text-5xl mx-auto mb-5" />

          <h3 className="font-bold text-2xl mb-4">
            STEM
          </h3>

          <p className="text-sm md:text-base leading-relaxed">
            We provide STEM education instruments and activities that help
            students solve real-life problems through innovation.
          </p>

          <p className="mt-6 font-semibold underline">
            Read More →
          </p>
        </div>

        {/* DIY */}
        <div
          onClick={() => navigate("/diy")}
          className="bg-cyan-500 text-white rounded-2xl p-8 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center"
        >
          <FaTools className="text-5xl mx-auto mb-5" />

          <h3 className="font-bold text-2xl mb-4">
            DIY
          </h3>

          <p className="text-sm md:text-base leading-relaxed">
            Build your own gadgets, explore creative ideas, and become a
            confident maker through fun DIY projects.
          </p>

          <p className="mt-6 font-semibold underline">
            Read More →
          </p>
        </div>

        {/* IoT */}
        <div
          onClick={() => navigate("/iot")}
          className="bg-yellow-400 text-white rounded-2xl p-8 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center"
        >
          <FaWifi className="text-5xl mx-auto mb-5" />

          <h3 className="font-bold text-2xl mb-4">
            IoT
          </h3>

          <p className="text-sm md:text-base leading-relaxed">
            Learn Internet of Things technologies and create smart devices for
            future-ready innovation.
          </p>

          <p className="mt-6 font-semibold underline">
            Read More →
          </p>
        </div>

        {/* AI & ML */}
        <div
          onClick={() => navigate("/ai-ml")}
          className="bg-green-400 text-white rounded-2xl p-8 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center"
        >
          <FaProjectDiagram className="text-5xl mx-auto mb-5" />

          <h3 className="font-bold text-2xl mb-4">
            AI & ML
          </h3>

          <p className="text-sm md:text-base leading-relaxed">
            Learn Artificial Intelligence and Machine Learning concepts through
            exciting real-world projects.
          </p>

          <p className="mt-6 font-semibold underline">
            Read More →
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;