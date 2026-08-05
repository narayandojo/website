import React from "react";
import { useNavigate } from "react-router-dom";

function SeniorCitizenKitPage() {

  const navigate = useNavigate();

  return (
    <div className="bg-white text-[#0f172a] min-h-screen">

      {/* ================= HERO ================= */}

      <section className="relative h-[380px] md:h-[500px] overflow-hidden">

        <img
          src="/seniorkit.png"
          alt="Senior Citizen Arduino Kit"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white px-6">

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Arduino Tinker DIY Kits
            </h1>

            <p className="text-xl md:text-2xl text-gray-200">
              Designed Especially For Senior Citizens
            </p>

          </div>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold text-center text-[#0f2a5f] mb-8">
          Learn • Create • Stay Active
        </h2>

        <p className="text-center text-gray-700 text-lg leading-8 max-w-4xl mx-auto">
          Arduino Tinker DIY Kits help senior citizens remain mentally active,
          improve creativity, learn modern technology and enjoy meaningful
          hands-on activities. These kits provide a wonderful opportunity
          to explore electronics, innovation and STEM learning in a simple,
          enjoyable and engaging way.
        </p>

      </section>

      {/* ================= STATS ================= */}

      <section className="max-w-6xl mx-auto px-6 mb-24">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-blue-50 rounded-2xl shadow-lg p-8 text-center">

            <h3 className="text-5xl font-bold text-blue-700">
              20+
            </h3>

            <p className="mt-3 text-gray-600">
              DIY Activities
            </p>

          </div>

          <div className="bg-green-50 rounded-2xl shadow-lg p-8 text-center">

            <h3 className="text-5xl font-bold text-green-700">
              100%
            </h3>

            <p className="mt-3 text-gray-600">
              Hands-on Learning
            </p>

          </div>

          <div className="bg-orange-50 rounded-2xl shadow-lg p-8 text-center">

            <h3 className="text-5xl font-bold text-orange-600">
              5+
            </h3>

            <p className="mt-3 text-gray-600">
              Learning Benefits
            </p>

          </div>

          <div className="bg-purple-50 rounded-2xl shadow-lg p-8 text-center">

            <h3 className="text-5xl font-bold text-purple-700">
              ∞
            </h3>

            <p className="mt-3 text-gray-600">
              Creativity
            </p>

          </div>

        </div>

      </section>

      {/* ================= BENEFITS ================= */}

      <section className="max-w-6xl mx-auto px-6 space-y-24">

        {/* Benefit 1 */}

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/seniorkit.png"
            alt="Learning"
            className="rounded-3xl shadow-xl"
          />

          <div>

            <h2 className="text-4xl font-bold text-blue-700 mb-6">
              Promotes Learning & Curiosity
            </h2>

            <p className="text-gray-700 leading-8 text-lg">
              Arduino Tinker DIY Kits introduce senior citizens to
              electronics, robotics, sensors and coding through
              easy-to-understand activities. Learning new concepts
              keeps the brain active while encouraging curiosity and
              lifelong learning.
            </p>

          </div>

        </div>

        {/* Benefit 2 */}

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-4xl font-bold text-purple-700 mb-6">
              Improves Problem Solving
            </h2>

            <p className="text-gray-700 leading-8 text-lg">
              Building electronic circuits encourages logical thinking,
              planning and troubleshooting. These activities help improve
              memory, concentration and decision-making abilities through
              practical learning experiences.
            </p>

          </div>

          <img
            src="/problems.png"
            alt="Problem Solving"
            className="rounded-3xl shadow-xl"
          />

        </div>

        {/* Benefit 3 */}

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/solving.png"
            alt="Coordination"
            className="rounded-3xl shadow-xl"
          />

          <div>

            <h2 className="text-4xl font-bold text-orange-600 mb-6">
              Better Hand-Eye Coordination
            </h2>

            <p className="text-gray-700 leading-8 text-lg">
              Using wires, sensors, LEDs and small components helps
              improve hand movement, finger control and coordination,
              making STEM activities enjoyable as well as beneficial.
            </p>

          </div>

        </div>
                {/* ================= BENEFIT 4 ================= */}

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-4xl font-bold text-pink-600 mb-6">
              Encourages Creativity
            </h2>

            <p className="text-gray-700 leading-8 text-lg">
              Arduino projects inspire seniors to build smart devices,
              creative gadgets and innovative solutions using simple
              electronic components. Every completed project increases
              confidence and provides a strong sense of achievement.
            </p>

          </div>

          <img
            src="/creative.png"
            alt="Creativity"
            className="rounded-3xl shadow-xl"
          />

        </div>

        {/* ================= BENEFIT 5 ================= */}

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/social.png"
            alt="Community"
            className="rounded-3xl shadow-xl"
          />

          <div>

            <h2 className="text-4xl font-bold text-green-600 mb-6">
              Stay Socially Connected
            </h2>

            <p className="text-gray-700 leading-8 text-lg">
              DIY workshops and STEM activities encourage teamwork and
              interaction with friends, family and grandchildren.
              Learning together creates memorable experiences while
              reducing loneliness and improving emotional well-being.
            </p>

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0f2a5f] mb-6">
            Projects You Can Build
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            Learn electronics through simple and enjoyable hands-on
            activities designed for beginners.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition">

              <img
                src="/led-project.jpg"
                alt="LED Project"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  LED Projects
                </h3>

                <p className="text-gray-600 leading-7">
                  Learn switches, LEDs, batteries and simple electronic
                  circuits through exciting practical experiments.
                </p>

              </div>

            </div>

            {/* Card 2 */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition">

              <img
                src="/sensor-project.jpg"
                alt="Sensor Project"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  Sensor Experiments
                </h3>

                <p className="text-gray-600 leading-7">
                  Explore temperature, light, sound and motion sensors
                  while understanding how smart devices work.
                </p>

              </div>

            </div>

            {/* Card 3 */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition">

              <img
                src="/robot-project.jpg"
                alt="Robot"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-orange-600 mb-4">
                  Mini Robots
                </h3>

                <p className="text-gray-600 leading-7">
                  Build beginner-friendly robots using motors,
                  batteries and Arduino programming.
                </p>

              </div>

            </div>

            {/* Card 4 */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition">

              <img
                src="/traffic-light.jpg"
                alt="Traffic Light"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-red-600 mb-4">
                  Traffic Light System
                </h3>

                <p className="text-gray-600 leading-7">
                  Program LEDs to simulate an automatic traffic light
                  using Arduino.
                </p>

              </div>

            </div>

            {/* Card 5 */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition">

              <img
                src="/alarm-project.jpg"
                alt="Alarm"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  Smart Alarm
                </h3>

                <p className="text-gray-600 leading-7">
                  Create a simple security alarm using sensors,
                  buzzer and Arduino.
                </p>

              </div>

            </div>

            {/* Card 6 */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition">

              <img
                src="/smart-home.jpg"
                alt="Smart Home"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-cyan-700 mb-4">
                  Smart Home Demo
                </h3>

                <p className="text-gray-600 leading-7">
                  Learn how smart lighting and automation systems work
                  using Arduino and sensors.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= LEARNING OUTCOMES ================= */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0f2a5f] mb-16">
            Learning Outcomes
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-blue-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">
                Better Memory
              </h3>
              <p className="text-gray-600">
                Practical learning keeps the brain active and improves memory.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-3">
                Electronics Skills
              </h3>
              <p className="text-gray-600">
                Understand sensors, motors, LEDs and Arduino basics.
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">
                Creative Thinking
              </h3>
              <p className="text-gray-600">
                Build innovative projects using everyday ideas.
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">
                Confidence
              </h3>
              <p className="text-gray-600">
                Completing projects builds confidence and motivation.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE ================= */}

      <section className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Arduino Tinker DIY Kits?
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="flex gap-5">
              <div className="text-5xl">🎯</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Beginner Friendly
                </h3>
                <p className="text-gray-200">
                  No previous electronics or coding experience is required.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="text-5xl">🛠️</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Practical Learning
                </h3>
                <p className="text-gray-200">
                  Learn by building real electronic projects.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="text-5xl">📚</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Easy Instructions
                </h3>
                <p className="text-gray-200">
                  Step-by-step guidance with videos and project manuals.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="text-5xl">❤️</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Lifelong Learning
                </h3>
                <p className="text-gray-200">
                  Stay mentally active while enjoying STEM activities.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0f2a5f] mb-16">
            What Participants Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-yellow-400 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="italic text-gray-600 leading-8">
                "Learning Arduino after retirement has been a wonderful
                experience. I now enjoy creating electronic projects with
                my grandchildren."
              </p>

              <h4 className="font-bold mt-6">
                Rajesh Sharma
              </h4>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-yellow-400 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="italic text-gray-600 leading-8">
                "The projects are simple, interesting and help keep my
                mind active every day."
              </p>

              <h4 className="font-bold mt-6">
                Anita Mehta
              </h4>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-yellow-400 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="italic text-gray-600 leading-8">
                "I never imagined electronics could be this enjoyable.
                Highly recommended."
              </p>

              <h4 className="font-bold mt-6">
                Vijay Kumar
              </h4>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0f2a5f] mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div className="bg-gray-100 rounded-2xl p-6">

              <h3 className="font-bold text-xl">
                Do I need any electronics knowledge?
              </h3>

              <p className="text-gray-600 mt-3">
                No. The kit is specially designed for beginners.
              </p>

            </div>

            <div className="bg-gray-100 rounded-2xl p-6">

              <h3 className="font-bold text-xl">
                Is Arduino difficult to learn?
              </h3>

              <p className="text-gray-600 mt-3">
                Not at all. We provide easy step-by-step activities.
              </p>

            </div>

            <div className="bg-gray-100 rounded-2xl p-6">

              <h3 className="font-bold text-xl">
                Will I receive project guidance?
              </h3>

              <p className="text-gray-600 mt-3">
                Yes. Every project includes complete instructions and video support.
              </p>

            </div>

            <div className="bg-gray-100 rounded-2xl p-6">

              <h3 className="font-bold text-xl">
                Can I build projects with my grandchildren?
              </h3>

              <p className="text-gray-600 mt-3">
                Absolutely. These DIY activities are perfect for family learning.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ================= CALL TO ACTION ================= */}

      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-orange-500 rounded-3xl text-white text-center p-16 shadow-2xl">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your STEM Journey Today 🚀
            </h2>

            <p className="max-w-3xl mx-auto text-lg leading-8 mb-10">
              Discover the joy of learning through Arduino Tinker DIY Kits.
              Build exciting projects, improve creativity, strengthen
              problem-solving skills, and enjoy meaningful hands-on STEM
              activities with family and friends.
            </p>

            <button
              onClick={() => navigate("/arduino-kit")}
              className="bg-white text-[#0f2a5f] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition duration-300 shadow-lg"
            >
              Explore Arduino Tinker Kit →
            </button>

          </div>

        </div>

      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="bg-gray-100 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0f2a5f] mb-14">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

              <div className="text-5xl mb-4">📞</div>

              <h3 className="text-2xl font-bold mb-3">
                Call
              </h3>

              <p className="text-gray-600">
                +91 XXXXX XXXXX
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

              <div className="text-5xl mb-4">📧</div>

              <h3 className="text-2xl font-bold mb-3">
                Email
              </h3>

              <p className="text-gray-600 break-all">
                info@narayandojo.com
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

              <div className="text-5xl mb-4">📍</div>

              <h3 className="text-2xl font-bold mb-3">
                Visit
              </h3>

              <p className="text-gray-600">
                NarayanDojo STEM Club<br />
                India
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default SeniorCitizenKitPage;