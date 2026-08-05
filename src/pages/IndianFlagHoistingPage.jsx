import React from "react";

function IndianFlagHoistingPage() {
  const stageSteps = [
    "Create the Indian Flag sprite using the Draw option in Scratch.",
    "Design 5 costumes to make the flag wave naturally.",
    "Add a brown flag pole with the flag.",
    "Create a patriot character using simple shapes.",
    "Paint the character with your preferred colors.",
    "Create 5 costumes for the patriot to perform a salute animation.",
    "Download an Indian Flag image and use it as the project backdrop.",
  ];

  const codingSteps = [
    'Use the "When Green Flag Clicked" event block.',
    "Add a Wait 2 Seconds block before starting the animation.",
    "Record or import the National Anthem into Scratch.",
    'Rename the sound as "National Anthem".',
    "Play the National Anthem after the delay.",
    "Use a Forever loop to switch between all flag costumes.",
    "Add a Wait 0.5 Seconds block between costume changes.",
    "Repeat the same animation for the patriot sprite.",
    "Click the Green Flag to enjoy the complete animation.",
  ];

  return (
    <div className="bg-gray-50 text-[#0f172a]">

      {/* Hero */}
      <section className="relative h-[280px] sm:h-[360px] md:h-[500px] overflow-hidden">

        <img
          src="/flag.png"
          alt="Indian Flag Hoisting"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white px-6 max-w-4xl">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              🇮🇳 Indian Flag Hoisting on Scratch
            </h1>

            <p className="text-lg md:text-xl text-gray-200">
              Created by <strong>Ansh Agarwal</strong>
            </p>

          </div>

        </div>

      </section>

      {/* Content */}

      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24">

        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-gray-500 mb-10">

          <p>📅 Aug 23, 2021 • 3 min read</p>

          <p>Updated: May 1, 2023</p>

        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8">
          Indian Flag Hoisting on Scratch
        </h2>

        <p className="text-lg leading-8 text-gray-700 mb-6">
          Learn Scratch programming by creating an animated Indian Flag
          hoisting ceremony with the National Anthem and a patriotic salute.
        </p>

        <p className="text-lg leading-8 text-gray-700 mb-12">
          This creative project was designed and developed by
          <strong> Ansh Agarwal</strong>, Grade IV,
          <strong> The Kalyani School, Pune.</strong>
        </p>

        {/* Overview */}

        <div className="bg-blue-50 border-l-4 border-blue-700 rounded-2xl p-8 shadow-lg mb-16">

          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            📖 Project Overview
          </h3>

          <p className="mb-4">
            This Scratch project consists of two major parts:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Stage Decoration</li>
            <li>Coding the Animation</li>
          </ul>

        </div>

        {/* Stage Decoration */}

        <div className="mb-20">

          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10">
            🎨 Stage Decoration
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {stageSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition"
              >
                <div className="text-3xl mb-4">🎯</div>

                <h3 className="font-bold mb-3">
                  Step {index + 1}
                </h3>

                <p className="text-gray-700 leading-7">
                  {step}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Coding */}

        <div className="mb-20">

          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10">
            💻 Coding Steps
          </h2>

          <div className="space-y-5">

            {codingSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-5 flex gap-4"
              >

                <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>

                <p className="text-gray-700 leading-7">
                  {step}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Scratch Project */}

        <div className="bg-green-50 rounded-3xl shadow-lg p-8 mb-16">

          <h2 className="text-3xl font-bold text-green-700 mb-4">
            🚀 Scratch Project
          </h2>

          <p className="text-gray-700 mb-6">
            Open the Scratch project, remix it, and create your own patriotic
            animation.
          </p>

          <a
            href="https://scratch.mit.edu/projects/560573798"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Open Scratch Project
          </a>

        </div>

        {/* Student */}

        <div className="bg-gradient-to-r from-orange-100 via-white to-green-100 rounded-3xl shadow-lg p-8 text-center">

          <h2 className="text-3xl font-bold mb-6">
            👨‍🎓 Project Created By
          </h2>

          <h3 className="text-2xl font-semibold">
            Ansh Agarwal
          </h3>

          <p className="text-lg mt-2">
            Grade IV
          </p>

          <p className="text-gray-700">
            The Kalyani School, Pune
          </p>

        </div>

      </section>

    </div>
  );
}

export default IndianFlagHoistingPage;