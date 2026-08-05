import React from "react";

function ChallengesPage() {
  const challenges = [
    {
      icon: "🤖",
      title: "Robot Challenge",
      description:
        "Build and program a robot to complete exciting obstacle challenges.",
    },
    {
      icon: "💡",
      title: "Innovation Challenge",
      description:
        "Design creative STEM solutions for real-world problems using your imagination.",
    },
    {
      icon: "💻",
      title: "Coding Challenge",
      description:
        "Create fun games and applications using Scratch, Python, or Arduino.",
    },
    {
      icon: "🚀",
      title: "AI Challenge",
      description:
        "Explore Artificial Intelligence through interactive projects and experiments.",
    },
  ];

  return (
    <div className="bg-gray-50 text-[#0f172a]">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 text-white py-16 md:py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            ⚡ STEM Challenges
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Weekly STEM challenges designed to improve creativity,
            coding, innovation, and problem-solving skills through
            hands-on activities.
          </p>

        </div>

      </section>

      {/* Challenge Cards */}

      <section className="py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
            Weekly Challenges
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >

                <div className="text-6xl mb-5">
                  {challenge.icon}
                </div>

                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  {challenge.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {challenge.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Benefits */}

      <section className="bg-white py-16 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
            Why Join Our Challenges?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-blue-50 rounded-2xl shadow-lg p-8 text-center">

              <div className="text-5xl mb-4">🧠</div>

              <h3 className="text-xl font-bold mb-3">
                Critical Thinking
              </h3>

              <p className="text-gray-600">
                Learn to solve real-life problems with logic and creativity.
              </p>

            </div>

            <div className="bg-orange-50 rounded-2xl shadow-lg p-8 text-center">

              <div className="text-5xl mb-4">🏆</div>

              <h3 className="text-xl font-bold mb-3">
                Earn Recognition
              </h3>

              <p className="text-gray-600">
                Showcase your projects and earn certificates and rewards.
              </p>

            </div>

            <div className="bg-green-50 rounded-2xl shadow-lg p-8 text-center">

              <div className="text-5xl mb-4">🚀</div>

              <h3 className="text-xl font-bold mb-3">
                Future Ready
              </h3>

              <p className="text-gray-600">
                Develop skills needed for tomorrow's technology careers.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-16 text-center text-white">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Take the Challenge?
        </h2>

        <p className="text-lg mb-8">
          Join our STEM challenges and become an innovator.
        </p>

        <button className="bg-white text-red-500 px-10 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition">
          Join Now
        </button>

      </section>

    </div>
  );
}

export default ChallengesPage;