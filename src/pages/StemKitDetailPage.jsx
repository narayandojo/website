import React from "react";

function StemKitDetailPage() {
  return (
    <div className="bg-white text-[#0f172a]">

      {/* ================= HERO ================= */}

      <section className="relative h-[550px]">

        <img
          src="/kit-hero.jpg"
          alt="Arduino STEM Kit"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Arduino Tinker STEM Kit
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl">
            Learn Electronics, Robotics, Programming & Innovation through
            hands-on STEM Projects.
          </p>

          <button className="mt-10 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition">
            Buy Now
          </button>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="/kit-main.png"
          alt="Arduino Kit"
          className="rounded-3xl shadow-2xl"
        />

        <div>

          <h2 className="text-4xl font-bold mb-8">
            About Arduino Tinker Kit
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            Arduino Tinker Kit is an educational STEM learning kit specially
            designed for beginners. It introduces students to Electronics,
            Coding, Robotics and Innovation through exciting hands-on
            activities.
          </p>

          <p className="text-gray-700 leading-8 mb-6">
            The kit contains carefully selected electronic components along
            with an Activity Book, project tutorials and weekend live
            mentoring sessions.
          </p>

          <div className="flex gap-6 mt-10">

            <div>
              <h3 className="text-4xl font-bold text-blue-600">20+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">15+</h3>
              <p>Sensors</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-600">100%</h3>
              <p>Hands-on</p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="bg-gray-50 py-20">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Arduino Tinker Kit?
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold mb-4">
              Learn by Doing
            </h3>

            <p className="text-gray-700">
              Build real electronics projects instead of only reading theory.
            </p>

          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold mb-4">
              Beginner Friendly
            </h3>

            <p className="text-gray-700">
              Perfect for students with no previous electronics knowledge.
            </p>

          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold mb-4">
              Weekend Live Classes
            </h3>

            <p className="text-gray-700">
              Learn directly from expert mentors every weekend.
            </p>

          </div>

        </div>

      </section>

      {/* ================= INSIDE KIT ================= */}

      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="/kit-inside.png"
          alt="Kit Components"
          className="rounded-3xl shadow-xl"
        />

        <div>

          <h2 className="text-4xl font-bold mb-8">
            What's Inside the Kit?
          </h2>

          <div className="grid grid-cols-2 gap-4 text-gray-700">

            <div>✔ Arduino UNO</div>
            <div>✔ USB Cable</div>

            <div>✔ Breadboard</div>
            <div>✔ Jumper Wires</div>

            <div>✔ LEDs</div>
            <div>✔ Resistors</div>

            <div>✔ Push Buttons</div>
            <div>✔ Servo Motor</div>

            <div>✔ Ultrasonic Sensor</div>
            <div>✔ LDR Sensor</div>

            <div>✔ PIR Sensor</div>
            <div>✔ Activity Book</div>

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section className="py-20 bg-gray-50">

        <h2 className="text-4xl font-bold text-center mb-16">
          Projects You Can Build
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <img src="/project1.jpg" alt="" />

            <div className="p-6">

              <h3 className="font-bold text-2xl">
                Smart Dustbin
              </h3>

            </div>

          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <img src="/project2.jpg" alt="" />

            <div className="p-6">

              <h3 className="font-bold text-2xl">
                Obstacle Robot
              </h3>

            </div>

          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <img src="/project3.jpg" alt="" />

            <div className="p-6">

              <h3 className="font-bold text-2xl">
                Smart Home
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* ================= LEARNING ================= */}

      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-20">

        <h2 className="text-4xl font-bold text-center mb-16">
          What Will You Learn?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">

          <div>✔ Arduino Programming</div>
          <div>✔ Basic Electronics</div>

          <div>✔ Circuit Design</div>
          <div>✔ Robotics</div>

          <div>✔ Sensors</div>
          <div>✔ Innovation Skills</div>

          <div>✔ Design Thinking</div>
          <div>✔ STEM Learning</div>

        </div>

      </section>

      {/* ================= VIDEO ================= */}

      <section className="py-20 text-center">

        <h2 className="text-4xl font-bold mb-12">
          Kit Unboxing
        </h2>

        <div className="flex justify-center px-6">

          <iframe
            className="w-full max-w-5xl h-[500px] rounded-2xl shadow-xl"
            src="https://www.youtube.com/embed/8C9lNOh76cQ"
            title="Arduino Kit"
            allowFullScreen
          ></iframe>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div className="bg-gray-100 rounded-xl p-6">

            <h3 className="font-bold text-xl">
              Who can use this kit?
            </h3>

            <p className="mt-2 text-gray-700">
              Students from Grade 6 onwards, teachers, beginners and STEM enthusiasts.
            </p>

          </div>

          <div className="bg-gray-100 rounded-xl p-6">

            <h3 className="font-bold text-xl">
              Do I need prior coding knowledge?
            </h3>

            <p className="mt-2 text-gray-700">
              No. Everything is explained step-by-step.
            </p>

          </div>

          <div className="bg-gray-100 rounded-xl p-6">

            <h3 className="font-bold text-xl">
              Will I receive live support?
            </h3>

            <p className="mt-2 text-gray-700">
              Yes. Weekend live online mentoring sessions are included.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white py-24">

        <div className="text-center max-w-4xl mx-auto px-6">

          <h2 className="text-5xl font-bold mb-8">
            Start Your STEM Journey Today 🚀
          </h2>

          <p className="text-xl mb-10">
            Build amazing electronics projects, learn coding, robotics,
            innovation and problem-solving with the Arduino Tinker STEM Kit.
          </p>

          <button className="bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition">
            Order Now
          </button>

        </div>

      </section>

    </div>
  );
}

export default StemKitDetailPage;