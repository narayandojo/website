import React from "react";

function ATLSection() {
  return (
    <section
      className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute top-16 left-6 md:top-20 md:left-10"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute top-32 right-6 md:top-40 md:right-20"></div>
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping absolute bottom-16 left-1/2"></div>
      </div>

      {/* Heading */}
      <div className="text-center px-6 mb-12 md:mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Atal{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 bg-clip-text text-transparent">
            Tinkering Lab
          </span>
        </h2>

        <p className="text-gray-500 text-base md:text-lg mt-4 max-w-2xl mx-auto">
          Empowering students with innovation, creativity, and hands-on learning.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-6 md:px-8 items-center relative z-10">

        {/* Left Card */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition text-center">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-clip-text text-transparent mb-6">
            ATL
          </h1>

          <p className="text-gray-600 text-base md:text-lg">
            Innovation • Creativity • Technology
          </p>

        </div>

        {/* Right Content */}
        <div className="space-y-6 text-center md:text-left">

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Atal Tinkering Lab is a government initiative by NITI Aayog that
            promotes innovation by creating workspaces in schools and providing
            tools like sensors, microcontrollers, robotics kits, and 3D
            printers for experiential learning.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            NarayanDojo offers structured ATL programs with step-by-step
            guidance, virtual classrooms, and project-based learning to help
            students build real-world solutions and become confident innovators.
          </p>

        </div>

      </div>
    </section>
  );
}

export default ATLSection;