import React from "react";
import { useNavigate } from "react-router-dom";

function SeniorCitizenKitPage() {

  const navigate = useNavigate();

  return (
    <div className="bg-white text-[#0f172a] min-h-screen">

      {/* HERO */}
      <div className="relative h-[350px] flex items-center justify-center text-white overflow-hidden">

        <img
          src="/seniorkit.png"
          alt="Senior Citizen Arduino Kit"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">

          <h1 className="text-5xl font-bold mb-4">
            Arduino Tinker DIY Kits for Senior Citizens
          </h1>

          <p className="text-lg text-gray-200">
            Learning • Creativity • Innovation • Engagement
          </p>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* INTRO */}
        <div className="text-center mb-20">

          <h2 className="text-4xl font-bold text-[#0f2a5f] mb-6">
            Benefits of Arduino Tinker DIY Kits
          </h2>

          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg">
            Arduino Tinker DIY Kits can help senior citizens stay mentally
            active, creative, and socially connected through fun electronics
            and innovation-based activities.
          </p>

        </div>

        {/* BENEFITS */}
        <div className="space-y-20">

          {/* CARD 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <img
              src="/seniorkit.png"
              alt="Learning"
              className="rounded-2xl shadow-xl"
            />

            <div>

              <h3 className="text-3xl font-bold mb-6 text-blue-600">
                Promotes Learning & Curiosity
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Arduino Tinker DIY Kits encourage seniors to explore electronics,
                sensors, robotics, and coding. Learning new concepts keeps the
                mind active and improves overall mental engagement.
              </p>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>

              <h3 className="text-3xl font-bold mb-6 text-purple-600">
                Enhances Problem-Solving Skills
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Building projects and troubleshooting circuits improves
                logical thinking and problem-solving abilities which are
                essential for healthy cognitive aging.
              </p>

            </div>

            <img
              src="/problems.png"
              alt="Problem Solving"
              className="rounded-2xl shadow-xl"
            />

          </div>

          {/* CARD 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <img
              src="/solving.png"
              alt="Coordination"
              className="rounded-2xl shadow-xl"
            />

            <div>

              <h3 className="text-3xl font-bold mb-6 text-orange-500">
                Improves Coordination & Dexterity
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Working with small electronic components and tools helps
                improve hand-eye coordination, motor skills, and dexterity.
              </p>

            </div>

          </div>

          {/* CARD 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>

              <h3 className="text-3xl font-bold mb-6 text-pink-500">
                Provides a Creative Outlet
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Seniors can build innovative projects, sensors, robots,
                and smart systems that encourage creativity and imagination.
              </p>

            </div>

            <img
              src="/creative.png"
              alt="Creativity"
              className="rounded-2xl shadow-xl"
            />

          </div>

          {/* CARD 5 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <img
              src="/social.png"
              alt="Community"
              className="rounded-2xl shadow-xl"
            />

            <div>

              <h3 className="text-3xl font-bold mb-6 text-green-600">
                Reduces Social Isolation
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Participating in group STEM and DIY activities helps seniors
                connect with others, build friendships, and stay socially active.
              </p>

            </div>

          </div>

        </div>

        {/* FINAL CTA */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white p-14 rounded-3xl text-center shadow-2xl">

          <h2 className="text-4xl font-bold mb-6">
            Start Exploring with Arduino Tinker Kits 🚀
          </h2>

          <p className="max-w-3xl mx-auto text-lg mb-8">
            Learn new skills, create innovative projects, and stay engaged
            with hands-on STEM learning activities.
          </p>

          <button
            onClick={() => navigate("/arduino-kit")}
            className="bg-white text-[#0f2a5f] px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300"
          >
            Know More About Arduino Tinker Kit →
          </button>

        </div>

      </div>

    </div>
  );
}

export default SeniorCitizenKitPage;