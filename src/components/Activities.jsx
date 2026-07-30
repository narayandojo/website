import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaTrophy, FaBolt, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

function Activities() {
  const navigate = useNavigate();

  // Animation variants
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
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute top-20 left-10"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute top-40 right-20"></div>
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping absolute bottom-20 left-1/2"></div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative z-10"
      >
        <p className="text-purple-500 font-semibold tracking-widest">
          GET INVOLVED
        </p>

        <h2 className="text-4xl font-bold mt-2">
          Fun{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 bg-clip-text text-transparent">
            Activities
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Exciting events and challenges that bring STEM to life.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 relative z-10"
      >

        {/* Workshops */}
        <motion.div
          variants={card}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/workshops")}
          className="cursor-pointer border-2 border-blue-500 rounded-xl p-6 bg-white flex gap-4 shadow-lg hover:shadow-2xl transition group"
        >
          <FaCalendarAlt className="text-blue-600 text-2xl mt-1 group-hover:rotate-12 transition" />
          <div>
            <h3 className="font-semibold text-lg">Workshops</h3>
            <p className="text-gray-600 text-sm">
              Hands-on weekend workshops on trending tech.
            </p>
          </div>
        </motion.div>

        {/* Hackathons */}
        <motion.div
          variants={card}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/hackathons")}
          className="cursor-pointer border-2 border-purple-500 rounded-xl p-6 bg-white flex gap-4 shadow-lg hover:shadow-2xl transition group"
        >
          <FaTrophy className="text-purple-600 text-2xl mt-1 group-hover:rotate-12 transition" />
          <div>
            <h3 className="font-semibold text-lg">Hackathons</h3>
            <p className="text-gray-600 text-sm">
              Competitive coding events and challenges.
            </p>
          </div>
        </motion.div>

        {/* STEM Challenges */}
        <motion.div
          variants={card}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/challenges")}
          className="cursor-pointer border-2 border-gray-400 rounded-xl p-6 bg-white flex gap-4 shadow-lg hover:shadow-2xl transition group"
        >
          <FaBolt className="text-gray-700 text-2xl mt-1 group-hover:rotate-12 transition" />
          <div>
            <h3 className="font-semibold text-lg">STEM Challenges</h3>
            <p className="text-gray-600 text-sm">
              Weekly creative problem-solving challenges.
            </p>
          </div>
        </motion.div>

        {/* Innovation Projects */}
        <motion.div
          variants={card}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/projects")}
          className="cursor-pointer border-2 border-green-500 rounded-xl p-6 bg-white flex gap-4 shadow-lg hover:shadow-2xl transition group"
        >
          <FaRocket className="text-green-600 text-2xl mt-1 group-hover:rotate-12 transition" />
          <div>
            <h3 className="font-semibold text-lg">Innovation Projects</h3>
            <p className="text-gray-600 text-sm">
              Build real-world solutions from scratch.
            </p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Activities;