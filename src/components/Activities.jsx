import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaTrophy, FaBolt, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

function Activities() {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="activities"
      className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute top-20 left-6 md:left-10"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute top-40 right-6 md:right-20"></div>
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping absolute bottom-20 left-1/2"></div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-20 px-6 relative z-10"
      >
        <p className="text-purple-500 font-semibold tracking-widest text-sm md:text-base">
          GET INVOLVED
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
          Fun{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 bg-clip-text text-transparent">
            Activities
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base md:text-lg">
          Exciting events and challenges that bring STEM to life.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-5 md:px-6 relative z-10"
      >

        {/* Workshops */}
        <motion.div
          variants={card}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/workshops")}
          className="cursor-pointer border-2 border-blue-500 rounded-2xl p-6 bg-white flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 shadow-lg hover:shadow-2xl transition"
        >
          <FaCalendarAlt className="text-blue-600 text-4xl sm:text-3xl" />

          <div>
            <h3 className="font-semibold text-xl">Workshops</h3>
            <p className="text-gray-600 mt-2">
              Hands-on weekend workshops on trending technology.
            </p>
          </div>
        </motion.div>

        {/* Hackathons */}
        <motion.div
          variants={card}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/hackathons")}
          className="cursor-pointer border-2 border-purple-500 rounded-2xl p-6 bg-white flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 shadow-lg hover:shadow-2xl transition"
        >
          <FaTrophy className="text-purple-600 text-4xl sm:text-3xl" />

          <div>
            <h3 className="font-semibold text-xl">Hackathons</h3>
            <p className="text-gray-600 mt-2">
              Competitive coding events and exciting innovation challenges.
            </p>
          </div>
        </motion.div>

        {/* STEM Challenges */}
        <motion.div
          variants={card}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/challenges")}
          className="cursor-pointer border-2 border-gray-400 rounded-2xl p-6 bg-white flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 shadow-lg hover:shadow-2xl transition"
        >
          <FaBolt className="text-gray-700 text-4xl sm:text-3xl" />

          <div>
            <h3 className="font-semibold text-xl">STEM Challenges</h3>
            <p className="text-gray-600 mt-2">
              Weekly creative problem-solving and design challenges.
            </p>
          </div>
        </motion.div>

        {/* Innovation Projects */}
        <motion.div
          variants={card}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/projects")}
          className="cursor-pointer border-2 border-green-500 rounded-2xl p-6 bg-white flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 shadow-lg hover:shadow-2xl transition"
        >
          <FaRocket className="text-green-600 text-4xl sm:text-3xl" />

          <div>
            <h3 className="font-semibold text-xl">Innovation Projects</h3>
            <p className="text-gray-600 mt-2">
              Build real-world STEM solutions from scratch.
            </p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Activities;