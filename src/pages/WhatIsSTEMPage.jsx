import React from "react";
import { useNavigate } from "react-router-dom";

function WhatIsSTEMPage() {

  const navigate = useNavigate();

  const stemCards = [
    {
      title: "Science",
      icon: "🧪",
      color: "bg-blue-100",
      text: "Understand nature, experiments, observation and scientific thinking."
    },
    {
      title: "Technology",
      icon: "💻",
      color: "bg-purple-100",
      text: "Learn programming, AI, robotics, IoT and modern digital technologies."
    },
    {
      title: "Engineering",
      icon: "⚙️",
      color: "bg-orange-100",
      text: "Design, build and improve innovative solutions for real-world problems."
    },
    {
      title: "Mathematics",
      icon: "📐",
      color: "bg-green-100",
      text: "Develop logical thinking, calculations and analytical problem-solving."
    }
  ];

  const benefits = [
    "Develops Critical Thinking",
    "Improves Creativity",
    "Builds Problem Solving Skills",
    "Encourages Innovation",
    "Hands-on Project Learning",
    "Prepares Students for Future Careers",
    "Boosts Confidence",
    "Improves Teamwork"
  ];

  const careers = [
    "Artificial Intelligence Engineer",
    "Software Developer",
    "Data Scientist",
    "Robotics Engineer",
    "Electronics Engineer",
    "Mechanical Engineer",
    "Space Scientist",
    "Game Developer",
    "Cyber Security Expert",
    "IoT Engineer",
    "Research Scientist",
    "Entrepreneur"
  ];

  return (
    <div className="bg-white text-[#0f172a]">

      {/* HERO */}

      <section className="relative h-[500px]">

        <img
          src="/stem.png"
          alt="STEM Education"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">

          <p className="uppercase tracking-[5px] text-blue-300 mb-4">
            Science • Technology • Engineering • Mathematics
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            What is STEM Education?
          </h1>

          <p className="max-w-3xl text-xl text-gray-200">
            Learn how STEM education develops creativity, innovation,
            problem-solving skills and prepares students for future careers.
          </p>

        </div>

      </section>

      {/* INTRO */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-10">
          Understanding STEM
        </h2>

        <p className="text-lg leading-8 text-gray-700 text-center max-w-4xl mx-auto">
          STEM is an interdisciplinary learning approach that combines
          Science, Technology, Engineering and Mathematics to solve
          real-world problems through innovation, creativity and
          hands-on learning.
        </p>

      </section>

      {/* STEM CARDS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stemCards.map((card, index) => (

            <div
              key={index}
              className={`${card.color} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition hover:-translate-y-2`}
            >

              <div className="text-6xl mb-6">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {card.title}
              </h3>

              <p className="text-gray-700 leading-7">
                {card.text}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* WHY STEM */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Why STEM Education Matters
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {benefits.map((item, index) => (

              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow"
              >
                ✅ {item}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* LEARNING */}

      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="/stem-learning.jpg"
          alt="STEM Learning"
          className="rounded-3xl shadow-xl"
        />

        <div>

          <h2 className="text-4xl font-bold mb-6">
            Project-Based Learning
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            STEM education focuses on learning by doing. Students build
            robots, smart devices, IoT projects, AI applications and
            engineering models while learning scientific concepts.
          </p>

          <p className="text-gray-700 leading-8">
            Instead of memorizing theories, students gain practical
            experience by designing, experimenting and solving real
            challenges.
          </p>

        </div>

      </section>

      {/* CAREERS */}

      <section className="bg-blue-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Careers in STEM
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

            {careers.map((career, index) => (

              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow text-center font-semibold hover:bg-blue-600 hover:text-white transition"
              >
                {career}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-700 via-purple-700 to-orange-500 text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold mb-6">
            Start Your STEM Journey Today 🚀
          </h2>

          <p className="text-xl mb-10">
            Build Robots • Learn Coding • Explore AI • Create IoT Projects
          </p>

          <button
            onClick={() => navigate("/arduino-kit")}
            className="bg-white text-blue-700 px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition"
          >
            Explore STEM Kit →
          </button>

        </div>

      </section>

    </div>
  );
}

export default WhatIsSTEMPage;