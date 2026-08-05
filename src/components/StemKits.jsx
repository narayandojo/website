import React from "react";
import { useNavigate } from "react-router-dom";

function StemKits() {
  const navigate = useNavigate();

  return (
    <section
      id="shop"
      className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-6 md:top-20 md:left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>

        <div className="absolute top-32 right-6 md:top-40 md:right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>

        <div className="absolute bottom-16 left-1/2 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center px-6 mb-12 md:mb-20">

        <p className="text-orange-500 font-semibold tracking-widest text-sm md:text-base">
          SHOP & LEARN
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 bg-clip-text text-transparent">
            STEM Kits
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
          Hands-on STEM kits designed to make learning fun, interactive, and
          engaging for every young innovator.
        </p>

      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

        {/* Card 1 */}
        <div
          onClick={() => navigate("/arduino-kit")}
          className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
        >
          <img
            src="/kit1.png"
            alt="Arduino Kit"
            className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
          />

          <div className="p-6">

            <h3 className="text-xl font-semibold mb-3">
              Arduino Tinker Kit
            </h3>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
              Complete electronics kit with Arduino board, LEDs, wires and
              beginner-friendly project guide.
            </p>

            <p className="text-blue-600 text-2xl font-bold mb-5">
              ₹1,499
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/arduino-kit");
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-orange-400 text-white font-semibold hover:scale-105 transition"
            >
              Add to Cart
            </button>

          </div>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => navigate("/robotics-kit")}
          className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
        >
          <img
            src="/kit2.png"
            alt="Robotics Kit"
            className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
          />

          <div className="p-6">

            <h3 className="text-xl font-semibold mb-3">
              Robotics Builder Kit
            </h3>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
              Build your own robot car with motors, sensors and exciting STEM
              activities.
            </p>

            <p className="text-blue-600 text-2xl font-bold mb-5">
              ₹2,499
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/robotics-kit");
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-orange-400 text-white font-semibold hover:scale-105 transition"
            >
              Add to Cart
            </button>

          </div>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => navigate("/ai-kit")}
          className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
        >
          <img
            src="/kit3.png"
            alt="AI Kit"
            className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
          />

          <div className="p-6">

            <h3 className="text-xl font-semibold mb-3">
              AI Explorer Kit
            </h3>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
              Raspberry Pi based kit packed with AI experiments and tutorials.
            </p>

            <p className="text-blue-600 text-2xl font-bold mb-5">
              ₹3,299
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/ai-kit");
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-orange-400 text-white font-semibold hover:scale-105 transition"
            >
              Add to Cart
            </button>

          </div>
        </div>

        {/* Card 4 */}
        <div
          onClick={() => navigate("/web-kit")}
          className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
        >
          <img
            src="/kit4.png"
            alt="Web Development Kit"
            className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
          />

          <div className="p-6">

            <h3 className="text-xl font-semibold mb-3">
              Web Development Kit
            </h3>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
              Learn HTML, CSS and JavaScript through fun hands-on web projects.
            </p>

            <p className="text-blue-600 text-2xl font-bold mb-5">
              ₹999
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/web-kit");
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-orange-400 text-white font-semibold hover:scale-105 transition"
            >
              Add to Cart
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

export default StemKits;