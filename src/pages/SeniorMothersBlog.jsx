import React from "react";
import { useNavigate } from "react-router-dom";

function SeniorMothersBlog() {

  const navigate = useNavigate();

  return (

    <div className="bg-white text-[#0f172a]">

      {/* ================= HERO ================= */}

      <section className="relative h-[420px] md:h-[550px] overflow-hidden">

        <img
          src="/motherday1.png"
          alt="Senior Mothers Arduino Kit"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white px-6 max-w-5xl">

            <p className="uppercase tracking-[5px] text-pink-300 mb-6">
              STEM • Arduino • DIY • Lifelong Learning
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Empowering Senior Mothers with Arduino Tinker DIY Kits
            </h1>

            <p className="text-lg md:text-2xl text-gray-200">
              Helping Senior Mothers Learn, Create and Stay Mentally Active
            </p>

          </div>

        </div>

      </section>

      {/* ================= BLOG INFO ================= */}

      <section className="max-w-6xl mx-auto px-6 py-12">

        <div className="flex flex-wrap gap-6 text-gray-500 justify-center">

          <span>📅 May 6, 2023</span>

          <span>📝 Updated: May 7, 2023</span>

          <span>⏱ 3 min read</span>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center text-[#0f2a5f] mb-8">

          Technology Has No Age Limit

        </h2>

        <p className="text-lg text-gray-700 leading-8 text-center max-w-4xl mx-auto">

          Arduino Tinker DIY Kits provide senior mothers with a fun,
          creative and meaningful way to learn electronics,
          programming and innovation. These hands-on activities
          encourage lifelong learning while keeping the mind active,
          improving confidence and creating memorable moments
          with children and grandchildren.

        </p>

      </section>

      {/* ================= STATS ================= */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-pink-50 rounded-2xl shadow-lg p-8 text-center">

            <h3 className="text-5xl font-bold text-pink-600">
              20+
            </h3>

            <p className="mt-3 text-gray-600">
              DIY Projects
            </p>

          </div>

          <div className="bg-blue-50 rounded-2xl shadow-lg p-8 text-center">

            <h3 className="text-5xl font-bold text-blue-700">
              100%
            </h3>

            <p className="mt-3 text-gray-600">
              Hands-on Learning
            </p>

          </div>

          <div className="bg-green-50 rounded-2xl shadow-lg p-8 text-center">

            <h3 className="text-5xl font-bold text-green-700">
              5+
            </h3>

            <p className="mt-3 text-gray-600">
              Life Skills
            </p>

          </div>

          <div className="bg-orange-50 rounded-2xl shadow-lg p-8 text-center">

            <h3 className="text-5xl font-bold text-orange-600">
              ∞
            </h3>

            <p className="mt-3 text-gray-600">
              Creativity
            </p>

          </div>

        </div>

      </section>

      {/* ================= FEATURE IMAGE ================= */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <img
          src="/motherday1.png"
          alt="Senior Mother Learning Arduino"
          className="rounded-3xl shadow-2xl w-full"
        />

        <p className="text-center text-gray-500 mt-6">

          Learning together creates stronger family bonds and lifelong memories.

        </p>

      </section>
            {/* ================= BENEFITS ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold text-center text-[#0f2a5f] mb-16">
          Benefits for Senior Mothers
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-pink-50 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">

            <div className="text-5xl mb-5">💖</div>

            <h3 className="text-2xl font-bold text-pink-700 mb-4">
              Boosts Confidence
            </h3>

            <p className="text-gray-700 leading-7">
              Successfully building Arduino projects gives senior mothers a
              sense of achievement and confidence. Every completed project
              motivates them to continue learning new technologies.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-blue-50 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">

            <div className="text-5xl mb-5">🧠</div>

            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Improves Brain Health
            </h3>

            <p className="text-gray-700 leading-7">
              Electronics projects improve concentration, memory,
              logical thinking and cognitive skills by engaging
              the brain in meaningful problem-solving activities.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-orange-50 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">

            <div className="text-5xl mb-5">🎨</div>

            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              Encourages Creativity
            </h3>

            <p className="text-gray-700 leading-7">
              DIY kits inspire creativity through electronics,
              design thinking and innovation. Every project allows
              participants to build something unique.
            </p>

          </div>

          {/* CARD 4 */}
          <div className="bg-green-50 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">

            <div className="text-5xl mb-5">🤝</div>

            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Family Bonding
            </h3>

            <p className="text-gray-700 leading-7">
              Working on STEM projects together creates meaningful
              bonding opportunities between grandparents,
              parents and children.
            </p>

          </div>

          {/* CARD 5 */}
          <div className="bg-purple-50 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">

            <div className="text-5xl mb-5">🌱</div>

            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              Lifelong Learning
            </h3>

            <p className="text-gray-700 leading-7">
              Learning never stops. Arduino projects introduce
              seniors to modern technology in an easy,
              enjoyable and practical way.
            </p>

          </div>

          {/* CARD 6 */}
          <div className="bg-yellow-50 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">

            <div className="text-5xl mb-5">🚀</div>

            <h3 className="text-2xl font-bold text-yellow-600 mb-4">
              Inspires Innovation
            </h3>

            <p className="text-gray-700 leading-7">
              Senior mothers can build smart devices,
              creative gadgets and innovative DIY projects
              using simple electronic components.
            </p>

          </div>

        </div>

      </section>

      {/* ================= WHY ARDUINO ================= */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <img
            src="/seniorkit.png"
            alt="Arduino Kit"
            className="rounded-3xl shadow-xl"
          />

          <div>

            <h2 className="text-4xl font-bold text-[#0f2a5f] mb-8">
              Why Arduino DIY Kits?
            </h2>

            <ul className="space-y-5 text-lg text-gray-700">

              <li>✅ Easy to learn</li>

              <li>✅ Safe educational activities</li>

              <li>✅ Hands-on STEM learning</li>

              <li>✅ Improves hand-eye coordination</li>

              <li>✅ Builds confidence</li>

              <li>✅ Fun electronics experiments</li>

              <li>✅ Perfect for beginners</li>

              <li>✅ Great family activity</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ================= FAMILY SECTION ================= */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>

            <h2 className="text-4xl font-bold text-[#0f2a5f] mb-8">
              Learn Together
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-6">

              Imagine a grandmother building her very first electronic
              circuit with her grandchildren. Arduino DIY Kits
              transform ordinary family time into exciting STEM
              learning experiences filled with curiosity,
              laughter and innovation.

            </p>

            <p className="text-lg text-gray-700 leading-8">

              These shared activities help create unforgettable
              memories while encouraging teamwork,
              communication and lifelong learning.

            </p>

          </div>

          <img
            src="/motherday1.png"
            alt="Grandmother Learning"
            className="rounded-3xl shadow-xl"
          />

        </div>

      </section>
            {/* ================= LEARNING OUTCOMES ================= */}

      <section className="bg-gradient-to-r from-pink-50 via-white to-purple-50 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0f2a5f] mb-16">
            Learning Outcomes
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-5">🧠</div>
              <h3 className="font-bold text-xl mb-3">Brain Exercise</h3>
              <p className="text-gray-600">
                Keep the mind active through electronics and creative thinking.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-5">⚙️</div>
              <h3 className="font-bold text-xl mb-3">Electronics Skills</h3>
              <p className="text-gray-600">
                Learn sensors, motors, LEDs and basic Arduino programming.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-5">🎯</div>
              <h3 className="font-bold text-xl mb-3">Problem Solving</h3>
              <p className="text-gray-600">
                Develop logical thinking through practical DIY activities.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-5">💡</div>
              <h3 className="font-bold text-xl mb-3">Innovation</h3>
              <p className="text-gray-600">
                Build creative projects and discover new ideas every day.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-center text-[#0f2a5f] mb-16">
          What Families Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-pink-50 rounded-3xl p-8 shadow-lg">

            <div className="text-yellow-500 text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-700 italic leading-7">
              "My mother enjoyed building her first Arduino project.
              It gave her confidence and brought our family together."
            </p>

            <h4 className="mt-6 font-bold text-pink-700">
              — Happy Parent
            </h4>

          </div>

          <div className="bg-blue-50 rounded-3xl p-8 shadow-lg">

            <div className="text-yellow-500 text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-700 italic leading-7">
              "A wonderful STEM activity that kept my grandmother engaged
              and excited to learn something completely new."
            </p>

            <h4 className="mt-6 font-bold text-blue-700">
              — STEM Family
            </h4>

          </div>

          <div className="bg-green-50 rounded-3xl p-8 shadow-lg">

            <div className="text-yellow-500 text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-700 italic leading-7">
              "The DIY projects are simple, educational and full of fun.
              Highly recommended for every family."
            </p>

            <h4 className="mt-6 font-bold text-green-700">
              — NarayanDojo Community
            </h4>

          </div>

        </div>

      </section>

      {/* ================= CALL TO ACTION ================= */}

      <section className="py-24 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-700 text-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold mb-8">
            Learning Has No Age Limit ❤️
          </h2>

          <p className="text-xl leading-8 max-w-3xl mx-auto mb-10">

            Arduino Tinker DIY Kits inspire curiosity, creativity,
            innovation and lifelong learning. Help your mother,
            grandmother or senior family members discover the joy
            of STEM education today.

          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="/arduino-kit"
              className="bg-white text-pink-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              Explore Arduino Kit →
            </a>

            <a
              href="/contact"
              className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-700 transition"
            >
              Join Free Workshop
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <section className="bg-[#0f172a] text-white py-16">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-4">
            NarayanDojo STEM Club
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto leading-8">

            Empowering learners of every age through STEM education,
            Arduino, Robotics, Coding, Artificial Intelligence,
            Electronics, Innovation and DIY learning experiences.

          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">

            <a
              href="/arduino-kit"
              className="text-pink-300 hover:text-white"
            >
              Arduino Kits
            </a>

            <a
              href="/coding-for-kids"
              className="text-pink-300 hover:text-white"
            >
              Coding
            </a>

            <a
              href="/diy"
              className="text-pink-300 hover:text-white"
            >
              DIY Projects
            </a>

            <a
              href="/contact"
              className="text-pink-300 hover:text-white"
            >
              Contact
            </a>

          </div>

          <hr className="border-gray-700 my-10" />

          <p className="text-gray-400">
            © 2026 NarayanDojo STEM Club. All Rights Reserved.
          </p>

        </div>

      </section>

    </div>
  );
}

export default SeniorMothersBlog;