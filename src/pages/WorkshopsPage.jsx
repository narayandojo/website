import React from "react";
import { useNavigate } from "react-router-dom";

function WorkshopsPage() {
  const navigate = useNavigate();

  const workshops = [
    {
      title: "Coding for Kids",
      image: "/coding-kids.jpg",
      color: "from-blue-600 to-cyan-500",
      description:
        "Fun-based learning using Scratch, Blockly, games and beginner-friendly programming activities designed for young learners.",
      route: "/coding-for-kids",
      icon: "💻",
    },
    {
      title: "Winter of Code",
      image: "/wintercode.jpg",
      color: "from-purple-600 to-indigo-600",
      description:
        "A 10-day intensive bootcamp where students learn Electronics, Arduino, Coding and build real-world STEM projects.",
      route: "/winter-of-code",
      icon: "❄️",
    },
    {
      title: "Coding for Classroom",
      image: "/classroom.jpg",
      color: "from-orange-500 to-red-500",
      description:
        "A structured coding curriculum designed for schools with lesson plans, projects and teacher support.",
      route: "/classroom",
      icon: "🏫",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}

      <section className="relative h-[450px]">

        <img
          src="/workshop-banner.jpg"
          alt="Workshops"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Workshops
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl">
            Learn Coding, Robotics, Arduino, Electronics and STEM through
            interactive hands-on workshops specially designed for students.
          </p>

        </div>

      </section>

      {/* INTRO */}

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">

        <h2 className="text-4xl font-bold text-[#0f2a5f] mb-6">
          Explore Our Programs
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Whether you are just starting your coding journey or looking to
          build real-world innovation projects, we have a workshop for you.
        </p>

      </section>

      {/* WORKSHOP CARDS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-3 gap-10">

          {workshops.map((workshop, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <img
                src={workshop.image}
                alt={workshop.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <div
                  className={`inline-block px-4 py-2 rounded-full text-white bg-gradient-to-r ${workshop.color} mb-5`}
                >
                  {workshop.icon} {workshop.title}
                </div>

                <p className="text-gray-600 leading-7 mb-8">
                  {workshop.description}
                </p>

                <button
                  onClick={() => navigate(workshop.route)}
                  className={`w-full bg-gradient-to-r ${workshop.color} text-white py-3 rounded-xl font-semibold hover:scale-105 transition`}
                >
                  Explore Workshop →
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* WHY JOIN */}

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0f2a5f] mb-14">
            Why Join Our Workshops?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-blue-50 rounded-2xl p-8 text-center shadow">
              <div className="text-5xl mb-4">👨‍🏫</div>
              <h3 className="font-bold mb-3">Expert Mentors</h3>
              <p className="text-gray-600 text-sm">
                Learn from experienced STEM educators.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 text-center shadow">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="font-bold mb-3">Hands-on Learning</h3>
              <p className="text-gray-600 text-sm">
                Build real electronics and coding projects.
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 text-center shadow">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-bold mb-3">Certificate</h3>
              <p className="text-gray-600 text-sm">
                Receive a completion certificate after the workshop.
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8 text-center shadow">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="font-bold mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Develop creativity and problem-solving skills.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-700 via-purple-700 to-orange-500 text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold mb-6">
            Ready to Start Learning?
          </h2>

          <p className="text-xl mb-10">
            Join our exciting STEM workshops and build the skills needed for the future.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-[#0f2a5f] px-10 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            Contact Us →
          </button>

        </div>

      </section>

    </div>
  );
}

export default WorkshopsPage;