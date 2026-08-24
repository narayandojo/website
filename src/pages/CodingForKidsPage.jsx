import React, { useState } from "react";
import { motion } from "framer-motion";

function CodingForKidsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const projects = [
    { title: "Rock Band", color: "bg-yellow-400" },
    { title: "Lost in Space", color: "bg-cyan-400" },
    { title: "Ghost Buster", color: "bg-pink-400" },
    { title: "Chat Bot", color: "bg-green-400" },
    { title: "Paint App", color: "bg-orange-400" },
    { title: "Boat Race", color: "bg-purple-400" },
  ];

  const faqs = [
    {
      question: "Who can join this course?",
      answer:
        "This course is suitable for beginners and students aged 7 years and above.",
    },
    {
      question: "Do I need prior coding knowledge?",
      answer:
        "No. The course starts from the basics, making it perfect for beginners.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes. A certificate will be provided after successful completion.",
    },
    {
      question: "How are the classes conducted?",
      answer:
        "Students get recorded lessons along with live doubt-solving sessions.",
    },
    {
      question: "Which programming language is used?",
      answer:
        "Students learn coding through Scratch in a fun and interactive way.",
    },
  ];

  return (
    <div className="bg-gray-50 text-[#0f172a]">

      {/* HERO */}
      <section className="py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              FUNTECH KIDS CODING
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-6">
              Coding for Kids
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Learn coding by creating games, animations, and interactive
              stories using Scratch. Build creativity, logical thinking,
              confidence, and problem-solving skills while having fun.
            </p>

            <div className="flex flex-wrap gap-4">

              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full transition">
                Know More
              </button>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition">
                Enroll Now
              </button>

            </div>

          </motion.div>

          <motion.img
            src="/stemkids.png"
            alt="Coding for Kids"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full max-w-md lg:max-w-lg mx-auto"
          />

        </div>

      </section>

      {/* ABOUT */}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-white py-16 md:py-24"
      >

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
            About the Program
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <img
              src="/aboutkids.png"
              alt="Kids Learning"
              className="w-64 sm:w-80 mx-auto"
            />

            <p className="text-lg leading-9 text-gray-700">
              This one-week coding program introduces children to programming
              through fun and engaging projects using{" "}
              <span className="bg-yellow-300 px-2 rounded font-semibold">
                Animations
              </span>
              ,{" "}
              <span className="bg-yellow-300 px-2 rounded font-semibold">
                Stories
              </span>{" "}
              and{" "}
              <span className="bg-yellow-300 px-2 rounded font-semibold">
                Games
              </span>
              . Students learn Scratch programming while improving creativity,
              logical thinking, and problem-solving abilities.
            </p>

          </div>

        </div>

      </motion.section>

      {/* PROJECTS */}

      <section className="py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-4">
            What Will You Build?
          </h2>

          <p className="text-center text-gray-600 mb-14">
            Exciting projects that make learning coding fun.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`${project.color} rounded-2xl shadow-xl p-8 text-center`}
              >
                <h3 className="text-2xl font-bold text-white">
                  {index + 1}. {project.title}
                </h3>
              </motion.div>
            ))}

          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-12 text-center font-semibold text-gray-700">

            <p>🎥 7 Recorded Sessions</p>

            <p>👨‍🏫 1:1 Live Doubt Session</p>

          </div>

          <div className="text-center mt-10">

            <button className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-full shadow-lg transition">
              Buy Now
            </button>

          </div>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="bg-white py-16 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
            Why Kids Love This Course
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-blue-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="font-bold mb-3">Game Development</h3>
              <p>Create exciting games with Scratch.</p>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="font-bold mb-3">Logical Thinking</h3>
              <p>Improve creativity and problem-solving skills.</p>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="font-bold mb-3">Certificate</h3>
              <p>Receive a certificate after course completion.</p>
            </div>

            <div className="bg-pink-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="font-bold mb-3">Hands-on Learning</h3>
              <p>Build projects while learning coding concepts.</p>
            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="py-16 md:py-24">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-semibold">{faq.question}</span>

                  <span className="text-2xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-700 to-purple-700 py-16 text-center text-white">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your Coding Journey Today
        </h2>

        <p className="text-lg mb-8">
          Learn coding through games, animations, and fun projects.
        </p>

        <button className="bg-white text-blue-700 px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition">
          Enroll Now
        </button>

      </section>

    </div>
  );
}

export default CodingForKidsPage;