import React from "react";

function DrawBotPage() {
  const materials = [
    "3V DC Motor",
    "AA Batteries",
    "Marker / Sketch Pens",
    "Cup / Mug / Glass",
    "Tape",
    "Connecting Wires",
  ];

  const steps = [
    "Tape four sketch pens or markers around a plastic cup or mug so that they act as the robot's legs and keep it standing upright.",

    "Fix a small 3V DC motor on the top of the cup and attach a small weight to the motor shaft to create vibration.",

    "Attach a 1.5V or 3V battery securely to the top of the cup using tape.",

    "Connect the battery to the motor using wires. Place the robot on a white sheet of paper and switch it on. The vibrating motor will move the robot and create unique drawings.",
  ];

  return (
    <div className="bg-white text-[#0f172a]">

      {/* Hero */}
      <section className="relative h-[260px] sm:h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">

        <img
          src="/drawbot-banner.jpg"
          alt="Draw Bot"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Scribbling / Drawing Robot
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200">
            A fun DIY robot that creates random art and creative designs.
          </p>

        </div>

      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 md:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              About the Project
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              A Scribbling Robot is a simple DIY STEM activity that creates
              beautiful random drawings using a vibrating motor and sketch
              pens.
            </p>

            <p className="text-gray-700 leading-8">
              It introduces students to basic robotics, electronics,
              creativity, and engineering using inexpensive everyday
              materials.
            </p>

          </div>

          <img
            src="/drawbot-main.jpg"
            alt="Draw Bot"
            className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
          />

        </div>

      </section>

      {/* Materials */}

      <section className="bg-gray-50 py-16 md:py-24">

        <div className="max-w-6xl mx-auto px-5 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-14">
            Things Used in this Project
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {materials.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition"
              >
                <div className="text-5xl mb-4">🔧</div>

                <h3 className="font-semibold text-lg">
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Steps */}

      <section className="py-16 md:py-24">

        <div className="max-w-6xl mx-auto px-5 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-14">
            Steps to Create the Robot
          </h2>

          <div className="space-y-8">

            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-blue-600"
              >
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  Step {index + 1}
                </h3>

                <p className="text-gray-700 leading-8">
                  {step}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Video */}

      <section className="bg-gray-50 py-16 md:py-24">

        <div className="max-w-6xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-3xl font-bold text-red-600 mb-6">
              Watch the Complete Tutorial
            </h2>

            <p className="text-gray-700 leading-8 mb-8">
              Watch the complete step-by-step tutorial to build your own
              Scribbling Robot at home using simple materials.
            </p>

            <a
              href="https://youtu.be/1SCnYyApjqE?si=S56iXXzX_OirIXcb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full shadow-lg transition"
            >
              ▶ Watch on YouTube
            </a>

          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">

            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/1SCnYyApjqE"
              title="Draw Bot Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-16 md:py-20">

        <div className="max-w-6xl mx-auto px-5">

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 md:p-14 text-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Create Your Own Unique Robot 🚀
            </h2>

            <p className="max-w-3xl mx-auto text-lg leading-8 mb-8">
              Try different cups, motors, batteries, and multiple sketch
              pens to create unique artistic patterns. Experiment with your
              own ideas and discover endless creative possibilities.
            </p>

            <button className="bg-white text-blue-700 px-10 py-4 rounded-full font-semibold hover:scale-105 transition">
              Start Building
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default DrawBotPage;