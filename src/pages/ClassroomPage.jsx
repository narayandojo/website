import React from "react";
import { motion } from "framer-motion";

function ClassroomPage() {

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* HERO */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">
          🏫 Coding for Classroom
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Choose the best STEM module for your classroom and empower students with real-world skills.
        </p>
      </div>

      {/* MODULE 1 */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show"
        className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-blue-400 mb-6">
          MODULE 1 - Learn by Doing
        </h2>

        <p className="text-gray-300 mb-6">
          Learn each concept through hands-on experiments using real hardware and real-life projects.
        </p>

        <ul className="space-y-2 text-gray-400 mb-6">
          <li>✔ 15 Days live classes (2 hrs/day)</li>
          <li>✔ Kit with 20+ components + E-Book</li>
          <li>✔ Skills: Electronics, Coding, Arduino, Sensors</li>
          <li>✔ Real-life project building</li>
          <li>✔ Certificate based on performance</li>
        </ul>

        <div className="bg-white text-black p-6 rounded-xl">
          💰 Price: ₹1999 (1-3 Kits) | ₹1899 (4-7) | ₹1850 (7+)
        </div>
      </motion.div>

      {/* MODULE 2 */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show"
        className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-purple-400 mb-6">
          MODULE 2 - Learn by Simulating
        </h2>

        <p className="text-gray-300 mb-6">
          Learn coding and electronics using simulation without hardware.
        </p>

        <ul className="space-y-2 text-gray-400 mb-6">
          <li>✔ 10 Days live classes</li>
          <li>✔ Simulation-based learning</li>
          <li>✔ Same skills: Coding, Arduino, Sensors</li>
          <li>✔ Project building on simulator</li>
        </ul>

        <div className="bg-white text-black p-6 rounded-xl">
          💰 Price: ₹199 | ₹150 | ₹100 per candidate
        </div>
      </motion.div>

      {/* MODULE 3 */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show"
        className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          MODULE 3 - Learn with Instructor
        </h2>

        <p className="text-gray-300 mb-6">
          Train instructors to teach students using both hardware and simulation.
        </p>

        <ul className="space-y-2 text-gray-400 mb-6">
          <li>✔ Instructor training</li>
          <li>✔ 12–15 days classes</li>
          <li>✔ Complete teaching content</li>
          <li>✔ One instructor can teach full class</li>
        </ul>

        <div className="bg-white text-black p-6 rounded-xl">
          💰 Price: ₹199 + ₹1999 (with kit)
        </div>
      </motion.div>

      {/* BENEFITS */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show"
        className="text-center py-20 px-6">

        <h2 className="text-3xl font-bold mb-6">
          WHAT YOU GET
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Certificate, real-world project experience, and opportunity to showcase projects on website.
        </p>

      </motion.div>

      {/* FAQ */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show"
        className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-10">
          FAQs
        </h2>

        <div className="space-y-6 text-gray-300">

          <div>
            <h4 className="font-semibold">Who can join?</h4>
            <p>Minimum class 7th and above.</p>
          </div>

          <div>
            <h4 className="font-semibold">Will certificate be provided?</h4>
            <p>Yes, based on project performance.</p>
          </div>

          <div>
            <h4 className="font-semibold">Do we need hardware?</h4>
            <p>No, simulation option is available.</p>
          </div>

        </div>
      </motion.div>

    </div>
  );
}

export default ClassroomPage;