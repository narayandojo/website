import React from "react";

function HackathonsPage() {
  const hackathons = [
    {
      title: "AI & Machine Learning Challenge",
      description:
        "Build AI-powered solutions to solve real-world problems using Machine Learning and Artificial Intelligence.",
      icon: "🤖",
      color: "bg-blue-50",
    },
    {
      title: "Web Development Hackathon",
      description:
        "Create responsive websites and web applications using HTML, CSS, JavaScript, and React.",
      icon: "💻",
      color: "bg-green-50",
    },
    {
      title: "Robotics Challenge",
      description:
        "Design and build innovative robots using Arduino, sensors, and electronics.",
      icon: "🦾",
      color: "bg-purple-50",
    },
    {
      title: "IoT Innovation",
      description:
        "Develop smart IoT projects using Arduino, ESP32, Raspberry Pi, and cloud technologies.",
      icon: "📡",
      color: "bg-orange-50",
    },
  ];

  const benefits = [
    {
      title: "Real-World Experience",
      icon: "🚀",
    },
    {
      title: "Certificates",
      icon: "🏅",
    },
    {
      title: "Team Collaboration",
      icon: "🤝",
    },
    {
      title: "Win Exciting Prizes",
      icon: "🎁",
    },
  ];

  return (
    <div className="bg-gray-50 text-[#0f172a]">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 text-white py-16 md:py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            🏆 Hackathons
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Participate in exciting hackathons, solve real-world challenges,
            collaborate with innovators, and build projects that make an impact.
          </p>

        </div>

      </section>

      {/* About */}

      <section className="py-16 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8">
            Why Join Our Hackathons?
          </h2>

          <p className="text-gray-700 text-lg leading-8 text-center max-w-4xl mx-auto">
            NarayanDojo STEM Club Hackathons encourage students to think
            creatively, work as a team, and solve real-world problems using
            technology. Whether you're a beginner or an experienced coder,
            you'll gain practical experience and learn valuable skills.
          </p>

        </div>

      </section>

      {/* Hackathon Categories */}

      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-14">
            Hackathon Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {hackathons.map((item, index) => (
              <div
                key={index}
                className={`${item.color} rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition`}
              >
                <div className="text-5xl mb-5">{item.icon}</div>

                <h3 className="text-xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-7">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Benefits */}

      <section className="py-16 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
            What You'll Gain
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{item.icon}</div>

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-700 to-purple-700 py-16 text-center text-white">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Something Amazing?
        </h2>

        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Register for our upcoming hackathons and showcase your creativity,
          coding skills, and innovative ideas.
        </p>

        <button className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition">
          Register Now
        </button>

      </section>

    </div>
  );
}

export default HackathonsPage;