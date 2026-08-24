import React from "react";

function IndianFlagScratchPage() {
  const stageSteps = [
    {
      title: "Step 1: Add the Flag Sprite",
      image: "/step1.jpg",
      description:
        "Add the Indian Flag sprite into your Scratch project. This sprite will be animated to create the flag hoisting effect.",
    },
    {
      title: "Step 2: Add the Patriot Sprite",
      image: "/step2.avif",
      description:
        "Create or import a patriot sprite to make the Independence Day animation more engaging and realistic.",
    },
    {
      title: "Step 3: Create a Red Detection Strip",
      image: "/step3.avif",
      description:
        "Paint a small red strip and place it at the top of the flag pole. This helps detect when the flag reaches the correct position.",
    },
  ];

  const codingSteps = [
    {
      title: "Step 1: Patriot Sprite Coding",
      image: "/step4.avif",
      description:
        "Write the Scratch code for the patriot sprite using Events, Looks, Motion, and Control blocks.",
    },
    {
      title: "Step 2: Flag Sprite Coding",
      image: "/step5.avif",
      description:
        "Program the flag sprite so that when it touches the red strip, the National Anthem starts automatically.",
    },
  ];

  const notes = [
    "Keep the red detection strip above the flag.",
    "Place the flag approximately at X = 77 and Y = -120.",
    "Download the National Anthem, backdrop, and patriot images.",
    "Create your own Indian Flag costume in Scratch.",
  ];

  return (
    <div className="bg-gray-50 text-[#0f172a]">

      {/* Hero */}
      <section className="relative h-[280px] sm:h-[360px] md:h-[500px] overflow-hidden">

        <img
          src="/flag-hero.avif"
          alt="Indian Flag Hoisting on Scratch"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white px-6 max-w-4xl">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              🇮🇳 Indian Flag Hoisting on Scratch
            </h1>

            <p className="text-lg md:text-xl text-gray-200">
              Created by <strong>Sanchit Chirkute</strong>
            </p>

          </div>

        </div>

      </section>

      {/* Content */}

      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24">

        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-gray-500 mb-10">

          <p>📅 Aug 26, 2021 • 2 min read</p>

          <p>Updated: May 1, 2023</p>

        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8">
          Indian Flag Hoisting on Scratch
        </h2>

        <p className="text-lg text-gray-700 leading-8 mb-6">
          Learn how to build an Independence Day animation in Scratch where
          the Indian National Flag is hoisted on the Red Fort, followed by
          the National Anthem.
        </p>

        <p className="text-lg text-gray-700 leading-8 mb-12">
          This Scratch project was created by
          <strong> Sanchit Chirkute</strong>, Grade III,
          <strong> The Kalyani School, Pune.</strong>
        </p>

        {/* Overview */}

        <div className="bg-green-50 border-l-4 border-green-600 rounded-2xl p-8 shadow-lg mb-16">

          <h3 className="text-2xl font-bold text-green-700 mb-4">
            📖 Project Overview
          </h3>

          <p className="mb-4">
            The project is divided into two main parts:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Stage Decoration</li>
            <li>Scratch Coding</li>
          </ul>

        </div>

        {/* Stage Decoration */}

        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10">
          🎨 Stage Decoration
        </h2>

        <div className="space-y-12 mb-20">

          {stageSteps.map((step, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-lg p-8"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full rounded-2xl shadow-md"
              />

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-700 leading-8">
                  {step.description}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Coding */}

        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10">
          💻 Coding
        </h2>

        <div className="space-y-12 mb-20">

          {codingSteps.map((step, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-lg p-8"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full rounded-2xl shadow-md"
              />

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-700 leading-8">
                  {step.description}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Important Notes */}

        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-2xl shadow-lg p-8 mb-20">

          <h2 className="text-2xl font-bold text-yellow-700 mb-6">
            ⚠ Important Notes
          </h2>

          <ul className="space-y-3 list-disc ml-6">

            {notes.map((note, index) => (
              <li key={index} className="text-gray-700">
                {note}
              </li>
            ))}

          </ul>

        </div>

        {/* Scratch Project */}

        <div className="bg-blue-50 rounded-3xl shadow-lg p-8 text-center mb-20">

          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            🚀 Scratch Project
          </h2>

          <p className="text-gray-700 mb-6">
            Open the project, remix it, and create your own animated
            Independence Day celebration.
          </p>

          <a
            href="https://scratch.mit.edu/projects/560593925"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Open Scratch Project
          </a>

        </div>

        {/* Author */}

        <div className="bg-gradient-to-r from-orange-100 via-white to-green-100 rounded-3xl shadow-lg p-8 text-center">

          <h2 className="text-3xl font-bold mb-6">
            👨‍🎓 Project Created By
          </h2>

          <h3 className="text-2xl font-semibold">
            Sanchit Chirkute
          </h3>

          <p className="text-lg mt-2">
            Grade III
          </p>

          <p className="text-gray-700">
            The Kalyani School, Pune
          </p>

        </div>

      </section>

    </div>
  );
}

export default IndianFlagScratchPage;