import React from "react";
import { motion } from "framer-motion";

function ClassroomPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const modules = [
    {
      title: "MODULE 1 - Learn by Doing",
      color: "text-blue-600",
      bg: "bg-blue-50",
      description:
        "Learn each concept through hands-on experiments using real hardware and real-life projects.",
      features: [
        "15 Days Live Classes (2 Hours/Day)",
        "Kit with 20+ Components + E-Book",
        "Electronics, Coding, Arduino & Sensors",
        "Real-life Project Building",
        "Certificate Based on Performance",
      ],
      price: "₹1999 (1-3 Kits) | ₹1899 (4-7 Kits) | ₹1850 (7+ Kits)",
      icon: "🛠️",
    },
    {
      title: "MODULE 2 - Learn by Simulating",
      color: "text-purple-600",
      bg: "bg-purple-50",
      description:
        "Learn coding and electronics using simulation software without physical hardware.",
      features: [
        "10 Days Live Classes",
        "Simulation-Based Learning",
        "Arduino Programming",
        "Sensors & Electronics",
        "Project Building Using Simulator",
      ],
      price: "₹199 | ₹150 | ₹100 Per Candidate",
      icon: "💻",
    },
    {
      title: "MODULE 3 - Learn with Instructor",
      color: "text-orange-600",
      bg: "bg-orange-50",
      description:
        "Train instructors to teach students using both hardware kits and simulation.",
      features: [
        "Instructor Training",
        "12–15 Days Training",
        "Complete Teaching Content",
        "One Instructor Can Teach Full Classroom",
      ],
      price: "₹199 + ₹1999 (With Kit)",
      icon: "👨‍🏫",
    },
  ];

  return (
    <div className="bg-gray-50 text-[#0f172a]">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-16 md:py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            🏫 Coding for Classroom
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
            Choose the best STEM learning module for your classroom and
            empower students with coding, robotics, electronics, and
            real-world innovation skills.
          </p>

        </div>

      </section>

      {/* MODULES */}

      <section className="py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-6 space-y-10">

          {modules.map((module, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`${module.bg} rounded-3xl shadow-xl p-6 md:p-10`}
            >
              <div className="flex flex-col lg:flex-row justify-between gap-10">

                <div className="flex-1">

                  <div className="text-5xl mb-4">
                    {module.icon}
                  </div>

                  <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${module.color}`}>
                    {module.title}
                  </h2>

                  <p className="text-gray-700 leading-8 mb-6">
                    {module.description}
                  </p>

                  <ul className="space-y-3">

                    {module.features.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-green-600 text-xl mr-3">✔</span>
                        {item}
                      </li>
                    ))}

                  </ul>

                </div>

                <div className="lg:w-80">

                  <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col justify-center">

                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Course Fee
                    </h3>

                    <p className="text-red-600 text-lg font-semibold leading-8">
                      {module.price}
                    </p>

                    <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition">
                      Enroll Now
                    </button>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* BENEFITS */}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 md:py-24 bg-white"
      >

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
            What You Get
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-blue-50 rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="font-bold text-xl mb-3">Certificate</h3>
              <p className="text-gray-600">
                Performance-based completion certificate.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="font-bold text-xl mb-3">Projects</h3>
              <p className="text-gray-600">
                Build exciting real-world STEM projects.
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="font-bold text-xl mb-3">Innovation</h3>
              <p className="text-gray-600">
                Develop creativity and problem-solving skills.
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="font-bold text-xl mb-3">Showcase</h3>
              <p className="text-gray-600">
                Display your projects on our website.
              </p>
            </div>

          </div>

        </div>

      </motion.section>

      {/* FAQ */}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-16 md:py-24"
      >

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            {[
              {
                q: "Who can join this program?",
                a: "Students from Class 7 onwards can participate.",
              },
              {
                q: "Will I receive a certificate?",
                a: "Yes. Certificates are awarded based on project performance.",
              },
              {
                q: "Do I need an Arduino Kit?",
                a: "No. You can choose the simulation module without hardware.",
              },
              {
                q: "Are live classes included?",
                a: "Yes. Every module includes live instructor-led sessions.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="font-bold text-lg mb-2">
                  {faq.q}
                </h3>

                <p className="text-gray-600">
                  {faq.a}
                </p>

              </div>
            ))}

          </div>

        </div>

      </motion.section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-center text-white">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your Classroom STEM Journey
        </h2>

        <p className="text-lg mb-8">
          Empower students with coding, robotics, electronics, and innovation.
        </p>

        <button className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:scale-105 transition">
          Contact Us
        </button>

      </section>

    </div>
  );
}

export default ClassroomPage;