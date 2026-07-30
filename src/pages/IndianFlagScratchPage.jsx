
import React from "react";

function IndianFlagScratchPage() {
  return (
    <div className="bg-white text-[#0f172a] min-h-screen">

      {/* HERO SECTION */}
      <div className="relative h-[400px]">

        <img
          src="/flag-hero.avif"
          alt="Indian Flag Hoisting"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Indian Flag Hoisting on Scratch
          </h1>

          <p className="text-xl">
            By Sanchit Chirkute
          </p>

        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        <p className="text-gray-500 mb-2">
          Aug 26, 2021 • 2 min read
        </p>

        <p className="text-gray-500 mb-10">
          Updated: May 1, 2023
        </p>

        <h2 className="text-4xl font-bold text-[#001b63] mb-8">
          Indian Flag Hoisting on Scratch by Sanchit Chirkute
        </h2>

        <p className="text-lg leading-8 text-gray-700 mb-8">
          In this blog, we will create an animation for hoisting the flag
          on the Red Fort and when the flag reaches the top,
          the animation will start the National Anthem.
        </p>

        <p className="text-lg leading-8 text-gray-700 mb-8">
          This project is made and written by Sanchit Chirkute
          of Grade 3 from The Kalyani School, Pune.
          For creating this animation we will write the code on Scratch.
        </p>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-12">

          <h3 className="text-2xl font-bold mb-3 text-green-700">
            Project Overview
          </h3>

          <p>
            We will make this animation by dividing the task into two parts:
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Stage Decoration</li>
            <li>Coding</li>
          </ul>

        </div>

        {/* STAGE DECORATION */}
        <h2 className="text-3xl font-bold text-[#001b63] mb-10">
          Stage Decoration
        </h2>

        {/* STEP 1 */}
        <div className="mb-16">

          <h3 className="text-2xl font-bold mb-4">
            Step 1: Add the Flag Sprite
          </h3>

          <img
            src="/step1.jpg"
            alt="Flag Sprite"
            className="rounded-xl shadow-lg mb-6"
          />

          <p className="text-gray-700 leading-8">
            Add the Indian Flag sprite into your Scratch project.
          </p>

        </div>

        {/* STEP 2 */}
        <div className="mb-16">

          <h3 className="text-2xl font-bold mb-4">
            Step 2: Add the Patriot Sprite
          </h3>

          <img
            src="/step2.avif"
            alt="Patriot Sprite"
            className="rounded-xl shadow-lg mb-6"
          />

          <p className="text-gray-700 leading-8">
            Add a patriot sprite to create a realistic Independence Day animation.
          </p>

        </div>

        {/* STEP 3 */}
        <div className="mb-16">

          <h3 className="text-2xl font-bold mb-4">
            Step 3: Create a Red Detection Strip
          </h3>

          <img
            src="/step3.avif"
            alt="Detection Strip"
            className="rounded-xl shadow-lg mb-6"
          />

          <p className="text-gray-700 leading-8">
            Paint a small red sprite and place it at the top.
            This strip helps detect when the flag reaches the desired position.
          </p>

        </div>

        {/* CODING */}
        <h2 className="text-3xl font-bold text-[#001b63] mb-10">
          Coding
        </h2>

        {/* CODE 1 */}
        <div className="mb-16">

          <h3 className="text-2xl font-bold mb-4">
            Step 1: Patriot Sprite Coding
          </h3>

          <img
            src="/step4.avif"
            alt="Patriot Coding"
            className="rounded-xl shadow-lg mb-6"
          />

          <p className="text-gray-700 leading-8">
            Write the code for the patriot sprite by dragging
            the required Scratch blocks into the Script Area.
          </p>

        </div>

        {/* CODE 2 */}
        <div className="mb-16">

          <h3 className="text-2xl font-bold mb-4">
            Step 2: Flag Sprite Coding
          </h3>

          <img
            src="/step5.avif"
            alt="Flag Coding"
            className="rounded-xl shadow-lg mb-6"
          />

          <p className="text-gray-700 leading-8">
            Write the code for the flag sprite.
            When the flag touches the red strip,
            the National Anthem should start automatically.
          </p>

        </div>

        {/* NOTE */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-16">

          <h3 className="text-2xl font-bold mb-4 text-yellow-700">
            Important Notes
          </h3>

          <ul className="list-disc ml-6 space-y-3">

            <li>
              Keep the red color strip sprite above the flag.
            </li>

            <li>
              Place the flag approximately at X = 77 and Y = -120.
            </li>

            <li>
              Download National Anthem, backdrop, and patriot images from Google.
            </li>

            <li>
              Draw your own Indian Flag costume in Scratch.
            </li>

          </ul>

        </div>

        {/* SCRATCH LINK */}
        <div className="bg-blue-50 p-8 rounded-xl shadow-lg mb-16">

          <h3 className="text-2xl font-bold text-[#001b63] mb-4">
            Scratch Project Link
          </h3>

          <a
            href="https://scratch.mit.edu/projects/560593925"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline font-semibold"
          >
            Open Scratch Project
          </a>

        </div>

        {/* AUTHOR */}
        <div className="bg-gradient-to-r from-orange-100 to-green-100 p-8 rounded-xl">

          <h3 className="text-2xl font-bold mb-4">
            Made and Written By
          </h3>

          <p className="text-lg font-semibold">
            Sanchit Chirkute
          </p>

          <p>
            Grade III
          </p>

          <p>
            The Kalyani School, Pune
          </p>

        </div>

      </div>

    </div>
  );
}

export default IndianFlagScratchPage;
