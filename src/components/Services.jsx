import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLightbulb, FaTools, FaWifi, FaProjectDiagram } from "react-icons/fa";

function Services() {
  const navigate = useNavigate();

  return (
    <section className="py-20 text-center">

      <h2 className="text-4xl font-bold mb-12 text-[#0f2a5f]">
        OUR SERVICES
      </h2>

      <div className="grid md:grid-cols-4">

        {/* STEM */}
        <div
          onClick={() => navigate("/stem")}
          className="bg-pink-400 text-white p-10 cursor-pointer hover:scale-105 transition duration-300"
        >
          <FaLightbulb className="text-4xl mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-3">STEM</h3>
          <p className="text-sm">
            We provide STEM education instruments to solve real-life problems.
          </p>
          <p className="mt-4 text-sm underline">Read More &gt;</p>
        </div>

        {/* DIY */}
        <div
          onClick={() => navigate("/diy")}
          className="bg-cyan-500 text-white p-10 cursor-pointer hover:scale-105 transition duration-300"
        >
          <FaTools className="text-4xl mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-3">DIY</h3>
          <p className="text-sm">
            Build your own gadgets and become self-dependent.
          </p>
          <p className="mt-4 text-sm underline">Read More &gt;</p>
        </div>

        {/* IoT */}
        <div
          onClick={() => navigate("/iot")}
          className="bg-yellow-400 text-white p-10 cursor-pointer hover:scale-105 transition duration-300"
        >
          <FaWifi className="text-4xl mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-3">IoT</h3>
          <p className="text-sm">
            Learn IoT tools to invent future technology.
          </p>
          <p className="mt-4 text-sm underline">Read More &gt;</p>
        </div>

        {/* AI & ML */}
        <div
          onClick={() => navigate("/ai-ml")}
          className="bg-green-400 text-white p-10 cursor-pointer hover:scale-105 transition duration-300"
        >
          <FaProjectDiagram className="text-4xl mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-3">AI & ML</h3>
          <p className="text-sm">
            Learn AI & ML concepts with real-world problem solving.
          </p>
          <p className="mt-4 text-sm underline">Read More &gt;</p>
        </div>

      </div>

    </section>
  );
}

export default Services;