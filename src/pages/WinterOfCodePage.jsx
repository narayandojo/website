import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function WinterOfCodePage() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">

        <motion.img
          src="/aboutkids.png"
          alt="student"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md mx-auto"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-bold leading-tight">
            WELCOME TO <br />
            <span className="text-blue-400">
              WINTER OF CODE <br /> WITH ELECTRONICS
            </span>
          </h1>

          <button className="mt-8 bg-blue-600 px-6 py-3 rounded-full hover:scale-105 transition">
            Get Started
          </button>
        </motion.div>
      </div>

      {/* ABOUT */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10"
      >
        <div>
          <h2 className="text-3xl font-bold mb-6">ABOUT THE PROGRAM</h2>

          <ul className="space-y-3 text-gray-300">
            <li>📅 Date: 11th Jan - 21 Jan</li>
            <li>⏰ Time: 4 PM - 6 PM</li>
            <li>🌐 Venue: Online</li>
            <li>📝 Deadline: 5th Jan</li>
          </ul>
        </div>

        <div className="bg-blue-900 p-6 rounded-xl text-gray-200">
          A 10 Days Online Winter Course to learn Coding, Arduino,
          Electronics in a fun and simple way by building projects
          and solving real-life problems.
        </div>
      </motion.div>

      {/* WHAT WILL YOU LEARN */}
      <section className="py-24 px-6 bg-white text-black">

        <h2 className="text-4xl font-bold text-center mb-16 text-[#0f172a]">
          WHAT WILL YOU LEARN?
        </h2>

        <div className="grid md:grid-cols-5 gap-10 max-w-7xl mx-auto text-sm">

          {/* ELECTRONICS */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="text-center"
          >
            <div className="bg-pink-400 text-white px-6 py-3 rounded-full inline-block mb-6 shadow-lg">
              ELECTRONICS
            </div>

            <ul className="text-left space-y-3 text-gray-700 leading-relaxed">
              <li>• Ohm's law, voltage, current with the use of Potato & Lemon Batteries</li>
              <li>• How to calculate the right resistor value for any electronic component</li>
              <li>• Tricks to calculate resistor color code & value</li>
              <li>• How to use basic electronic components</li>
            </ul>
          </motion.div>

          {/* CODING */}
          <motion.div whileHover={{ scale: 1.08 }} variants={fadeUp} className="text-center">
            <div className="bg-sky-400 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              CODING
            </div>
            <ul className="text-left space-y-3 text-gray-700 leading-relaxed">
              <li>• Introduction to Coding (What, Why)</li>
              <li>• How to build Algorithms</li>
              <li>• Basic Functions & Conditions in Coding</li>
              <li>• How to write the solution of any problem in coding</li>
              <li>• Basic project on Simulator with coding</li>
            </ul>
          </motion.div>

          {/* ARDUINO */}
          <motion.div whileHover={{ scale: 1.08 }} variants={fadeUp} className="text-center">
            <div className="bg-green-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              ARDUINO
            </div>
            <ul className="text-left space-y-3 text-gray-700 leading-relaxed">
              <li>• Introduction to the Arduino (What, Why)</li>
              <li>• Analog, Digital & Power Pins in the Arduino</li>
              <li>• How to write coding in the Arduino</li>
              <li>• Basic practicals by interfacing Sensors & Actuators with Arduino</li>
            </ul>
          </motion.div>

          {/* SENSOR */}
          <motion.div whileHover={{ scale: 1.08 }} variants={fadeUp} className="text-center">
            <div className="bg-red-400 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              SENSOR & ACTUATOR
            </div>
            <ul className="text-left space-y-3 text-gray-700 leading-relaxed">
              <li>• Introduction to the Sensors & Actuators</li>
              <li>• Basic Sensors & their properties</li>
              <li>• How to interface Sensors & Actuators with Arduino</li>
              <li>• How to create prototype circuits for any problem</li>
            </ul>
          </motion.div>

          {/* PROJECTS */}
          <motion.div whileHover={{ scale: 1.08 }} variants={fadeUp} className="text-center">
            <div className="bg-green-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              PROJECTS
            </div>

            <div className="text-left space-y-3">
              <p className="font-semibold">BASIC</p>
              <p>Arduino circuit projects</p>

              <p className="font-semibold mt-4">ADVANCED</p>
              <p>Complete product with W2H report</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* WHAT YOU NEED */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="text-center py-20">
        <h2 className="text-3xl font-bold mb-6">WHAT WILL YOU NEED?</h2>
        <p className="text-gray-400">Laptop 💻 + Internet 🌐</p>
      </motion.div>

      {/* WHAT YOU GET */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="text-center py-20">
        <h2 className="text-3xl font-bold mb-6">WHAT WILL YOU GET?</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Certificate + Portfolio + Real Project Experience
        </p>

        <button className="mt-8 bg-gradient-to-r from-blue-500 to-orange-400 px-6 py-3 rounded-full hover:scale-110 transition">
          Buy Now @ ₹499
        </button>
      </motion.div>

      {/* FAQ */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">FAQs</h2>

        <div className="space-y-6 text-gray-300">
          <div>
            <h4 className="font-semibold">Who can join?</h4>
            <p>Anyone interested in coding & electronics.</p>
          </div>

          <div>
            <h4 className="font-semibold">Can kids join?</h4>
            <p>Yes, class 6 and above.</p>
          </div>

          <div>
            <h4 className="font-semibold">Will I get certificate?</h4>
            <p>Yes after project completion.</p>
          </div>
        </div>
      </motion.div>

      {/* BACK */}
      <div className="text-center pb-10">
        <button
          onClick={() => navigate("/workshops")}
          className="text-blue-400 underline"
        >
          ← Back to Workshops
        </button>
      </div>

    </div>
  );
}

export default WinterOfCodePage;