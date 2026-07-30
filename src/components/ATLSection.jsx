import React from "react";

function ATLSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Floating particles (match your theme) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute top-20 left-10"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute top-40 right-20"></div>
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping absolute bottom-20 left-1/2"></div>
      </div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold">
          Atal{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 bg-clip-text text-transparent">
            Tinkering Lab
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Empowering students with innovation, creativity, and hands-on learning.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center relative z-10">

        {/* LEFT SIDE CARD */}
        <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition text-center">

          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-clip-text text-transparent mb-6">
            ATL
          </h1>

          <p className="text-gray-600 text-lg">
            Innovation • Creativity • Technology
          </p>

        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="space-y-6">

          <p className="text-gray-600 leading-relaxed">
            Atal Tinkering Lab is a government initiative by NITI Aayog that promotes innovation by creating workspaces in schools and providing tools like sensors, microcontrollers, and 3D printers.
          </p>

          <p className="text-gray-600 leading-relaxed">
            NarayanDojo offers structured ATL programs with step-by-step guidance and virtual classrooms to help students build real-world solutions and become confident innovators.
          </p>

        </div>

      </div>

    </section>
  );
}

export default ATLSection;