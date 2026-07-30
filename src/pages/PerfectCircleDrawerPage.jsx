
import React from "react";

function PerfectCircleDrawerPage() {
  return (
    <div className="bg-white min-h-screen text-[#0f172a]">

      {/* HERO */}
      <section className="relative h-[400px]">

        <img
          src="/perfect-circle-banner.webp"
          alt="Perfect Circle Drawer"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">

          <h1 className="text-5xl font-bold mb-4">
            Perfect Circle Drawer
          </h1>

          <p className="text-xl">
            Basic Electronics & Creative Drawing Activity
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <p className="text-gray-500">
          Sep 6, 2020 • 1 min read
        </p>

        <p className="text-gray-500 mb-10">
          Updated: May 29, 2023
        </p>

        <h2 className="text-4xl font-bold text-[#001b63] mb-8">
          Perfect Circle Drawer || Narayandojo Stemclub
        </h2>

        <p className="text-lg text-gray-700 leading-8 mb-8">
          Drawing a perfect circle can be a challenging task, but with
          the help of some basic electronics and crafting, you can create
          a tool that makes it easy.
        </p>

        <p className="text-lg text-gray-700 leading-8 mb-8">
          This activity is not only a fun art project, but it also teaches
          important skills in electronics, creativity, and design.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-xl mb-10">

          <h3 className="text-2xl font-bold mb-4">
            Things Used In This Project
          </h3>

          <ul className="list-disc ml-6 space-y-2">

            <li>3V DC Motor</li>
            <li>AA Batteries or 1.5V–3V Power Source</li>
            <li>Pen / Sketch Color</li>
            <li>Paper or Cardboard</li>

          </ul>

        </div>

        <h3 className="text-3xl font-bold text-[#001b63] mb-6">
          Story
        </h3>

        <p className="text-lg text-gray-700 leading-8 mb-10">
          Art plays a major role in education. The Perfect Circle Drawer
          is a simple electronics activity designed to increase creativity
          in kids using everyday materials.
        </p>

        <h3 className="text-3xl font-bold text-[#001b63] mb-8">
          Step-by-Step Instructions
        </h3>

        <div className="space-y-6 text-lg text-gray-700">

          <p><strong>Step 1:</strong> Take a DC Motor.</p>

          <p><strong>Step 2:</strong> Stick the motor on a plain surface.</p>

          <p>
            <strong>Step 3:</strong> Take a piece of paper or cardboard
            on which you want to draw the circle.
          </p>

          <p>
            <strong>Step 4:</strong> Stick the cardboard or paper
            on top of the motor.
          </p>

          <p>
            <strong>Step 5:</strong> Give power to the DC Motor using
            AA batteries or any 1.5V–3V power source.
          </p>

          <p>
            <strong>Step 6:</strong> Place the pen or sketch color on the
            paper where you want to draw the circle.
          </p>

          <p>
            <strong>Step 7:</strong> That's it! Your Perfect Circle Drawer
            is ready.
          </p>

        </div>

        <div className="mt-12 bg-green-50 border-l-4 border-green-600 p-6 rounded-xl">

          <h3 className="text-2xl font-bold text-green-700 mb-3">
            Learning Outcomes
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>Basic Electronics Concepts</li>
            <li>Motor Applications</li>
            <li>Creativity & Design Thinking</li>
            <li>Hands-on STEM Learning</li>
          </ul>

        </div>

      </section>

    </div>
  );
}

export default PerfectCircleDrawerPage;

