import React from "react";

function ArduinoKitPage() {
  return (
    <div className="bg-white text-[#0f172a]">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#e6c08b] py-16 md:py-24 px-5 sm:px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Arduino Tinker Kit
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Inspire • Create • Innovate
            </p>

            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full shadow-lg transition">
              Buy Now
            </button>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            <img
              src="/arduino-hero.png"
              alt="Arduino Kit"
              className="w-64 sm:w-80 md:w-[420px] lg:w-[500px] rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </section>

      {/* ================= WHAT YOU CAN DO ================= */}

      <section className="py-16 md:py-24 px-5">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14 text-blue-700">
            What You Can Do
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition">

              <div className="text-6xl mb-5">🔧</div>

              <h3 className="text-2xl font-bold mb-3">
                BUILD
              </h3>

              <p className="text-gray-600">
                Assemble electronic circuits and exciting STEM projects.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition">

              <div className="text-6xl mb-5">💻</div>

              <h3 className="text-2xl font-bold mb-3">
                CODE
              </h3>

              <p className="text-gray-600">
                Learn Arduino programming using simple coding concepts.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition">

              <div className="text-6xl mb-5">🚀</div>

              <h3 className="text-2xl font-bold mb-3">
                INNOVATE
              </h3>

              <p className="text-gray-600">
                Create smart inventions using sensors and electronics.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PROJECT VIDEOS ================= */}

      <section className="py-16 md:py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-5">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Project Videos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {[
              "237tzcLpC5c",
              "8C9lNOh76cQ",
              "8C9lNOh76cQ",
              "8C9lNOh76cQ",
              "8C9lNOh76cQ",
              "8C9lNOh76cQ",
            ].map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
              >
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${video}`}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="py-16 md:py-24">

        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">

            <img
              src="/kit2.png"
              alt="Arduino Kit"
              className="rounded-3xl shadow-2xl w-full max-w-md"
            />

          </div>

          <div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-700">
              Kit Features
            </h2>

            <ul className="space-y-5 text-lg">

              <li>✅ Learn STEM Concepts</li>

              <li>✅ Build Real Arduino Projects</li>

              <li>✅ Hands-on Practical Learning</li>

              <li>✅ Weekly Live Mentoring Sessions</li>

              <li>✅ Coding + Electronics + Robotics</li>

              <li>✅ Beginner Friendly Activities</li>

              <li>✅ Improve Creativity & Innovation</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="py-16 md:py-20 bg-gradient-to-r from-red-500 to-orange-500 text-center text-white">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Building?
        </h2>

        <p className="mb-8 text-lg">
          Explore Arduino projects and become a young innovator.
        </p>

        <button className="bg-white text-red-500 font-semibold px-10 py-4 rounded-full shadow-xl hover:scale-105 transition">
          Buy Now
        </button>

      </section>

    </div>
  );
}

export default ArduinoKitPage;