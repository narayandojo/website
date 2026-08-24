import React from "react";

function PerfectCircleDrawerPage() {
  const materials = [
    "3V DC Motor",
    "AA Batteries (1.5V–3V)",
    "Pen / Sketch Pen",
    "Paper / Cardboard",
  ];

  const steps = [
    {
      title: "Step 1",
      text: "Take a 3V DC Motor.",
    },
    {
      title: "Step 2",
      text: "Fix the motor securely on a plain surface.",
    },
    {
      title: "Step 3",
      text: "Place a piece of paper or cardboard on top of the motor.",
    },
    {
      title: "Step 4",
      text: "Attach the paper firmly to the motor shaft.",
    },
    {
      title: "Step 5",
      text: "Power the motor using AA batteries or any 1.5V–3V power source.",
    },
    {
      title: "Step 6",
      text: "Hold the sketch pen at the desired position while the paper rotates.",
    },
    {
      title: "Step 7",
      text: "Enjoy drawing perfect circles and experiment with different colors.",
    },
  ];

  const outcomes = [
    "Basic Electronics",
    "Motor Applications",
    "Creativity",
    "Design Thinking",
    "STEM Learning",
    "Hands-on Experiment",
  ];

  return (
    <div className="bg-gray-50 text-[#0f172a]">

      {/* HERO */}

      <section className="relative h-[280px] md:h-[500px] overflow-hidden">

        <img
          src="/perfect-circle-banner.webp"
          alt="Perfect Circle Drawer"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white px-6">

            <h1 className="text-3xl md:text-6xl font-bold mb-5">
              Perfect Circle Drawer
            </h1>

            <p className="text-lg md:text-2xl">
              Basic Electronics & Creative Drawing Activity
            </p>

          </div>

        </div>

      </section>

      {/* MAIN */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <p className="text-gray-500">
          Sep 6, 2020 • 1 min read
        </p>

        <p className="text-gray-500 mb-10">
          Updated: May 29, 2023
        </p>

        {/* ABOUT */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

          <div>

            <h2 className="text-4xl font-bold text-blue-700 mb-6">
              About This Project
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              Drawing a perfect circle is difficult by hand, but using a
              simple DC motor and basic electronics you can easily create
              a fun machine that draws beautiful circles.
            </p>

            <p className="text-gray-700 leading-8">
              This activity develops creativity, introduces electronics,
              and demonstrates how motors can be used in interesting
              real-life applications.
            </p>

          </div>

          <img
            src="/perfect-circle-banner.webp"
            alt="Perfect Circle"
            className="rounded-3xl shadow-xl"
          />

        </div>

        {/* MATERIALS */}

        <div className="mb-24">

          <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
            Things Used In This Project
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {materials.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 transition"
              >

                <div className="text-4xl mb-4">
                  ⚙️
                </div>

                <p className="font-semibold">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* STORY */}

        <div className="bg-white rounded-3xl shadow-xl p-10 mb-24">

          <h2 className="text-4xl font-bold text-green-600 mb-6">
            Story
          </h2>

          <p className="text-gray-700 leading-8">
            Art and STEM can work together beautifully.
            The Perfect Circle Drawer combines simple electronics with
            creativity, allowing children to understand motor movement
            while creating artistic patterns and improving design skills.
          </p>

        </div>

        {/* STEPS */}

        <div className="mb-24">

          <h2 className="text-4xl font-bold text-center text-blue-700 mb-16">
            Step-by-Step Instructions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {steps.map((step, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
              >

                <h3 className="text-2xl font-bold text-orange-500 mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-700 leading-8">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* OPTIONAL VIDEO */}

        <div className="mb-24">

          <h2 className="text-4xl font-bold text-center text-red-600 mb-10">
            Watch Tutorial
          </h2>

          <div className="flex justify-center">

            <iframe
              className="rounded-2xl shadow-xl w-full max-w-5xl h-[250px] md:h-[500px]"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Perfect Circle Drawer"
              allowFullScreen
            ></iframe>

          </div>

        </div>

        {/* OUTCOMES */}

        <div className="mb-24">

          <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
            Learning Outcomes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {outcomes.map((item, index) => (

              <div
                key={index}
                className="bg-green-50 rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 transition"
              >

                <div className="text-4xl mb-4">
                  ✅
                </div>

                <p className="font-semibold">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* CTA */}

        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 rounded-3xl p-12 text-center text-white">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build • Create • Learn
          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-8 mb-8">
            Experiment with different pen positions, paper sizes,
            and motor speeds to create beautiful geometric artwork
            while learning the fundamentals of STEM.
          </p>

          <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
            Start Creating →
          </button>

        </div>

      </section>

    </div>
  );
}

export default PerfectCircleDrawerPage;