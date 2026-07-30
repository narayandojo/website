import React from "react";
import { useNavigate } from "react-router-dom";

function StemKits() {
  const navigate = useNavigate();

  return (
    <section
      id="shop"
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute top-20 left-20"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute top-40 right-20"></div>
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping absolute bottom-20 left-1/2"></div>
      </div>

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
        <p className="text-orange-500 font-semibold tracking-widest">
          SHOP & LEARN
        </p>

        <h2 className="text-4xl font-bold mt-2">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 bg-clip-text text-transparent">
            STEM Kits
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Hands-on kits designed to make learning fun.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6 relative z-10">

        {/* CARD 1 */}
        <div
          onClick={() => navigate("/arduino-kit")}
          className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 group"
        >
          <img
            src="/kit1.png"
            alt="Arduino Kit"
            className="rounded-t-xl group-hover:scale-105 transition duration-300"
          />

          <div className="p-6">
            <h3 className="font-semibold text-lg mb-2">
              Arduino Tinker Kit
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Complete electronics kit with Arduino board, LEDs,
              wires and project guide.
            </p>

            <p className="text-blue-600 font-bold text-xl mb-4">
              ₹1,499
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/arduino-kit");
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-orange-400 text-white py-2 rounded-lg hover:scale-105 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          onClick={() => navigate("/robotics-kit")}
          className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 group"
        >
          <img src="/kit2.png" alt="Robotics Kit" className="rounded-t-xl" />

          <div className="p-6">
            <h3 className="font-semibold text-lg mb-2">
              Robotics Builder Kit
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Build your own robot car with motors and sensors.
            </p>

            <p className="text-blue-600 font-bold text-xl mb-4">
              ₹2,499
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/robotics-kit");
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-orange-400 text-white py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div
          onClick={() => navigate("/ai-kit")}
          className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 group"
        >
          <img src="/kit3.png" alt="AI Kit" className="rounded-t-xl" />

          <div className="p-6">
            <h3 className="font-semibold text-lg mb-2">
              AI Explorer Kit
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Raspberry Pi based kit with AI tutorials.
            </p>

            <p className="text-blue-600 font-bold text-xl mb-4">
              ₹3,299
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/ai-kit");
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-orange-400 text-white py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* CARD 4 */}
        <div
          onClick={() => navigate("/web-kit")}
          className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 group"
        >
          <img src="/kit4.png" alt="Web Kit" className="rounded-t-xl" />

          <div className="p-6">
            <h3 className="font-semibold text-lg mb-2">
              Web Dev Learning Kit
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              HTML, CSS learning kit.
            </p>

            <p className="text-blue-600 font-bold text-xl mb-4">
              ₹999
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/web-kit");
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-orange-400 text-white py-2 rounded-lg"
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