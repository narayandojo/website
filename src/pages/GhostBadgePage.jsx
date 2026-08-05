import React from "react";

function GhostBadgePage() {
  const materials = [
    "Paper",
    "Pencil",
    "Copper / Brass Rod",
    "Double Sided Tape",
    "2 × LEDs",
    "Soldering Iron",
    "AA Battery / Coin Cell",
  ];

  return (
    <div className="bg-white text-[#0f172a]">

      {/* Hero */}
      <section className="relative h-[260px] sm:h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">

        <img
          src="/ghost-banner.jpg"
          alt="Halloween Ghost Badge"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Halloween Ghost Badge 🎃
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200">
            Create your own glowing Halloween electronics badge.
          </p>

        </div>

      </section>

      {/* Main Content */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 md:py-24">

        {/* About */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
              About This Project
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              In this project, you'll build a glowing Halloween Ghost Badge
              using simple electronics and basic crafting materials. It's an
              exciting STEM activity that introduces beginners to LEDs,
              soldering, and circuit design.
            </p>

            <p className="text-gray-700 leading-8">
              Inspired by makers around the world, this project encourages
              creativity while teaching practical electronics skills through
              hands-on learning.
            </p>

          </div>

          <img
            src="/ghost-main.jpg"
            alt="Ghost Badge"
            className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
          />

        </div>

        {/* Video */}

        <div className="mb-20">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-10">
            Watch Project Video
          </h2>

          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">

            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/nrxgjk0-ijE"
              title="Ghost Badge Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

          </div>

        </div>

        {/* Materials */}

        <div className="mb-20">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-12">
            Things Used in This Project
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {materials.map((item, index) => (
              <div
                key={index}
                className="bg-orange-50 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">🛠️</div>

                <h3 className="font-semibold text-lg">
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>

        {/* Steps */}

        <div className="mb-20">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-14">
            Steps to Create the Halloween Badge
          </h2>

          <div className="space-y-16">

            {/* Step 1 */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              <img
                src="/ghost-step1.jpg"
                alt="Step 1"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
              />

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 1
                </h3>

                <p className="text-gray-700 leading-8">
                  Draw the design of your Halloween Ghost Badge on paper using
                  a pencil before starting the circuit.
                </p>

              </div>

            </div>

            {/* Step 2 */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 2
                </h3>

                <p className="text-gray-700 leading-8">
                  Bend thin copper or brass wire to match your design and build
                  the badge framework.
                </p>

              </div>

              <img
                src="/ghost-step2.jpg"
                alt="Step 2"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
              />

            </div>

            {/* Step 3 */}

            <div>

              <h3 className="text-2xl font-bold text-center mb-6">
                Step 3
              </h3>

              <p className="text-center max-w-3xl mx-auto text-gray-700 leading-8 mb-10">
                Cut the copper wire according to your drawing and attach it to
                the paper as shown below.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                <img
                  src="/ghost-step3.jpg"
                  alt=""
                  className="rounded-2xl shadow-lg w-full"
                />

                <img
                  src="/ghost-step3-2.jpg"
                  alt=""
                  className="rounded-2xl shadow-lg w-full"
                />

                <img
                  src="/ghost-step3-3.jpg"
                  alt=""
                  className="rounded-2xl shadow-lg w-full"
                />

              </div>

            </div>

            {/* Step 4 */}

            <div>

              <h3 className="text-2xl font-bold text-center mb-6">
                Step 4
              </h3>

              <p className="text-center max-w-3xl mx-auto text-gray-700 leading-8 mb-10">
                Apply solder paste and solder every joint carefully to make the
                structure strong and electrically connected.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                <img
                  src="/ghost-step4.jpg"
                  alt=""
                  className="rounded-2xl shadow-lg w-full"
                />

                <img
                  src="/ghost-step4-2.jpg"
                  alt=""
                  className="rounded-2xl shadow-lg w-full"
                />

              </div>

            </div>

            {/* Step 5 */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              <img
                src="/ghost-step5.jpg"
                alt=""
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
              />

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 5
                </h3>

                <p className="text-gray-700 leading-8">
                  Install LEDs as the ghost's glowing eyes and connect their
                  terminals correctly.
                </p>

              </div>

            </div>

            {/* Step 6 */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 6
                </h3>

                <p className="text-gray-700 leading-8">
                  Connect the battery or coin cell to power your Ghost Badge.
                  Test the LEDs and enjoy your glowing Halloween creation.
                </p>

              </div>

              <img
                src="/ghost-step6.jpg"
                alt=""
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
              />

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-3xl p-8 md:p-14 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Make Your Own Halloween Badge 🎃
          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-8 mb-8">
            Experiment with different LED colors, ghost designs, and creative
            decorations to build your own unique glowing Halloween badge.
          </p>

          <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-semibold hover:scale-105 transition">
            Start Making
          </button>

        </div>

      </section>

    </div>
  );
}

export default GhostBadgePage;