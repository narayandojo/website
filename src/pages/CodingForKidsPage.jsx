import React, { useState } from "react";
import { motion } from "framer-motion";

function CodingForKidsPage() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white text-[#0f172a]">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">

        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            FUNTECH KIDS CODING
          </h1>

          <h2 className="text-2xl font-semibold mb-6">
            CODING FOR KIDS
          </h2>

          <div className="flex gap-4">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition">
              Know More
            </button>

            <button className="bg-blue-900 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition">
              Enroll Now
            </button>
          </div>
        </motion.div>

        <motion.img
          src="/stemkids.png"
          alt="kids"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md mx-auto"
        />

      </div>

      {/* ABOUT */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show"
        className="text-center py-20 px-6">

        <h2 className="text-4xl font-bold mb-10">
          ABOUT THE PROGRAM
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <img src="/aboutkids.png" alt="kid" className="w-60 mx-auto" />

          <p className="text-lg">
            A one-week program where you learn coding by creating
            <span className="bg-yellow-300 px-1 mx-1">animations</span>,
            <span className="bg-yellow-300 px-1 mx-1">stories</span> and
            <span className="bg-yellow-300 px-1 mx-1">games</span> using Scratch.
            It builds logic, analytical thinking and problem-solving skills.
          </p>

        </div>

      </motion.div>

      {/* PROJECTS */}
      <div className="py-20 px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          WHAT WILL YOU MAKE ?
        </h2>

        <p className="text-gray-600 mb-10">
          Build fun projects while learning basics
        </p>

        <div className="max-w-4xl mx-auto space-y-6">

          {[
            { title: "1. ROCK BAND", color: "bg-yellow-400" },
            { title: "2. LOST IN SPACE", color: "bg-cyan-400" },
            { title: "3. GHOST BUSTER", color: "bg-pink-400" },
            { title: "4. CHATBOT", color: "bg-green-400" },
            { title: "5. PAINT APP", color: "bg-yellow-400" },
            { title: "6. BOAT RACE", color: "bg-cyan-400" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`${item.color} p-6 rounded-lg shadow-lg text-white text-2xl font-bold`}
            >
              {item.title}
            </motion.div>
          ))}

        </div>

        <div className="flex justify-between max-w-3xl mx-auto mt-10 text-sm">
          <p>7 Recorded Sessions</p>
          <p>1:1 Live Doubt Session</p>
        </div>

        <button className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-full hover:scale-105 transition">
          Buy Now
        </button>

      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-10 text-center">
          FAQs
        </h2>

        {[
          "Who can make these projects?",
          "What prior knowledge is needed?",
          "What is minimum age?",
          "Will I get certificate?",
          "Language of session?"
        ].map((q, i) => (

          <div key={i} className="border-b py-4">

            <div
              onClick={() => toggleFAQ(i)}
              className="flex justify-between cursor-pointer"
            >
              <p>{q}</p>
              <span>{openIndex === i ? "-" : "+"}</span>
            </div>

            {openIndex === i && (
              <p className="mt-2 text-gray-600">
                This course is beginner friendly and suitable for students.
              </p>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}

export default CodingForKidsPage;