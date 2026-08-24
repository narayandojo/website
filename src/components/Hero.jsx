import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-6 md:top-20 md:left-20 w-2 h-2 rounded-full bg-blue-400 animate-ping"></div>

        <div className="absolute top-28 right-6 md:top-40 md:right-40 w-2 h-2 rounded-full bg-purple-400 animate-ping"></div>

        <div className="absolute bottom-16 left-1/2 w-2 h-2 rounded-full bg-orange-400 animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-14 md:py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="z-10 w-full max-w-2xl text-center lg:text-left">

          <p className="text-blue-400 text-sm md:text-base font-semibold tracking-wide">
            Welcome to NarayanDojo StemClub
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Learn, Build &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 bg-clip-text text-transparent">
              Innovate
            </span>{" "}
            for a Better Future
          </h1>

          <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
            A vibrant community where kids and students create impactful
            solutions through coding, robotics, AI, and hands-on STEM projects.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-orange-400 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
              Join Now →
            </button>

            <button className="w-full sm:w-auto border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
              Explore Programs
            </button>

          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 text-center">

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-400">
                500+
              </h2>

              <p className="text-gray-400 text-sm md:text-base">
                Students
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-purple-400">
                50+
              </h2>

              <p className="text-gray-400 text-sm md:text-base">
                Projects
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-orange-400">
                20+
              </h2>

              <p className="text-gray-400 text-sm md:text-base">
                Programs
              </p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="z-10 flex justify-center w-full">

          <img
            src="/stemkids.png"
            alt="STEM Kids"
            className="w-64 sm:w-80 md:w-[420px] lg:w-[520px] xl:w-[600px] h-auto animate-bounce-slow drop-shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;