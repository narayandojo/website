import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-between px-16 py-24 text-white bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >

      {/* AI Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute top-20 left-20"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute top-40 right-40"></div>
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping absolute bottom-20 left-1/2"></div>

      </div>

      {/* LEFT CONTENT */}
      <div className="max-w-xl z-10">

        <p className="text-blue-400 mb-4 font-semibold tracking-wide">
          Welcome to NarayanDojo StemClub
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-6">
          Learn, Build &{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 bg-clip-text text-transparent">
            Innovate
          </span>{" "}
          for a Better Future
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          A vibrant community where kids and students create impactful
          solutions through coding, robotics, AI, and hands-on STEM projects.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">

          <button className="bg-gradient-to-r from-purple-500 to-orange-400 px-6 py-3 rounded-full font-semibold hover:scale-105 transition transform shadow-lg shadow-purple-500/30">
            Join Now →
          </button>

          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Explore Programs
          </button>

        </div>

        {/* Stats */}
        <div className="flex gap-12 mt-12">

          <div className="hover:scale-110 transition">
            <h2 className="text-3xl font-bold text-blue-400">500+</h2>
            <p className="text-gray-400">Students</p>
          </div>

          <div className="hover:scale-110 transition">
            <h2 className="text-3xl font-bold text-purple-400">50+</h2>
            <p className="text-gray-400">Projects</p>
          </div>

          <div className="hover:scale-110 transition">
            <h2 className="text-3xl font-bold text-orange-400">20+</h2>
            <p className="text-gray-400">Programs</p>
          </div>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="z-10">

        <img
          src="/stemkids.png"
          alt="stem"
          className="w-[520px] animate-bounce-slow drop-shadow-2xl"
        />

      </div>

    </section>
  );
}

export default Hero;