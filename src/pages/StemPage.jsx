import React from "react";
import { useNavigate } from "react-router-dom";

function StemPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-[#0f172a]">

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">STEM Learning</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Science, Technology, Engineering & Mathematics for real-world innovation
        </p>
      </div>

      {/* ARDUINO INTRO */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Arduino Tinker Kit is an Educational Kit based on the STEM concepts.
            It helps you create{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-400">
              innovative and creative
            </span>{" "}
            solutions for real-life problems.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
             This kit is specially designed for the beginner or starter to understand the basic STEM concept. So, with this kit, you will also get an E-Book with 20+ basic to advanced activities or Projects, and also you will get the free virtual classes each weekend by our mentors to solve your problems and also to give you new ideas.
          </p>

          {/* SHIPPING */}
          <div className="flex items-center gap-4 mt-8 bg-blue-50 p-5 rounded-xl shadow-sm">
            <div className="text-3xl">🛒</div>
            <div>
              <p className="font-semibold text-blue-700">
                Free Shipping in India
              </p>
              <p className="text-gray-600 text-sm">
                Delivery: 3–5 business days
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/arduino-kit")}
            className="mt-8 bg-gradient-to-r from-blue-600 to-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Explore Kit →
          </button>
        </div>

        <img src="/kit.jpg" className="rounded-xl shadow-lg" />
      </div>

      {/* WHAT YOU GET */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <img src="/kit-items.jpg" className="rounded-xl shadow-lg" />

        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-700">
            What you will get inside the Kit
          </h2>

          <ol className="space-y-2 text-gray-700 text-sm list-decimal ml-5">
            <li>Arduino Uno</li>
            <li>USB Cable</li>
            <li>Wooden Base</li>
            <li>Screw & Nuts</li>
            <li>Screwdriver</li>
            <li>Breadboard</li>
            <li>Push Buttons</li>
            <li>RGB LED</li>
            <li>LED Pack</li>
            <li>LDR Sensor</li>
            <li>Servo Motor</li>
            <li>Ultrasonic Sensor</li>
            <li>7 Segment Display</li>
            <li>PIR Sensor</li>
            <li>DC Motor</li>
            <li>Battery</li>
            <li>Connector</li>
            <li>Potentiometer</li>
            <li>Resistor Kit</li>
            <li>Jumper Wires</li>
            <li>Buzzer</li>
            <li>E-Book</li>
          </ol>
        </div>
      </div>

      {/* WHAT YOU CAN DO */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-700">
            What you can do with this Kit
          </h2>

          <p className="text-gray-700">
            This kit has no limit although we will provide you with an “Idea and activity e-book “ for your reference from where you will get to know about 20+ basic to advanced level activities and their step by step project implementation process in actual, you can create more projects at your own as much as you think
          </p>
        </div>

        <img src="/idea-book.png" className="rounded-xl shadow-lg" />
      </div>

      {/* WHAT YOU WILL LEARN */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <img src="/kit-learn.jpg" className="rounded-xl shadow-lg" />

        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-700">
            What you will learn with this kit
          </h2>

          <ol className="list-decimal ml-5 space-y-2 text-gray-700">
            <li>Microcontroller Programming</li>
            <li>Sensor Applications</li>
            <li>Basic Electronics</li>
            <li>Problem Solving</li>
            <li>Smart Product Prototyping</li>
          </ol>
        </div>
      </div>

      {/* UNBOXING */}
      <div className="text-center py-20">

        <h2 className="text-3xl font-bold mb-10 text-blue-700">
          UN-BOXING
        </h2>

        <iframe
          className="w-[90%] md:w-[700px] h-[400px] mx-auto rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/8C9lNOh76cQ"
          allowFullScreen
        />
      </div>

      {/* STEM CATEGORIES */}
      <div className="bg-gray-50 py-20 text-center">

        <h2 className="text-3xl font-bold mb-10">What is STEM?</h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">

          <div className="p-6 bg-white rounded-xl shadow">Science</div>
          <div className="p-6 bg-white rounded-xl shadow">Technology</div>
          <div className="p-6 bg-white rounded-xl shadow">Engineering</div>
          <div className="p-6 bg-white rounded-xl shadow">Mathematics</div>

        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-20">

        <h2 className="text-3xl font-bold mb-6">
          Start Your STEM Journey 🚀
        </h2>

        <button
          onClick={() => navigate("/arduino-kit")}
          className="bg-gradient-to-r from-purple-600 to-orange-400 text-white px-8 py-4 rounded-full hover:scale-105 transition"
        >
          Buy Arduino Kit
        </button>
      </div>

    </div>
  );
}

export default StemPage;