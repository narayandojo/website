
import React from "react";

function IndianFlagHoistingPage() {
  return (
    <div className="bg-white text-[#0f172a] min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-[400px]">

        <img
          src="/flag.png"
          alt="Indian Flag Hoisting"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Indian Flag Hoisting On Scratch
          </h1>

          <p className="text-xl">
            By Ansh Agarwal
          </p>

        </div>

      </section>

      {/* BLOG CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <p className="text-gray-500 mb-2">
          Aug 23, 2021 • 3 min read
        </p>

        <p className="text-gray-500 mb-8">
          Updated: May 1, 2023
        </p>

        <h2 className="text-4xl font-bold text-[#001b63] mb-10">
          Indian Flag Hoisting On Scratch
        </h2>

        <p className="text-lg leading-8 text-gray-700 mb-8">
          In this blog, we will hoist the Indian Flag with the National Anthem
          by writing code in the Scratch Editor.
        </p>

        <p className="text-lg leading-8 text-gray-700 mb-8">
          This project is made and written by
          <strong> Ansh Agarwal </strong>
          of Grade IV from The Kalyani School, Pune.
        </p>

        {/* OVERVIEW */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-xl mb-12">

          <h3 className="text-2xl font-bold text-[#001b63] mb-4">
            Project Overview
          </h3>

          <p className="mb-4">
            We will make this project by dividing the task into two parts:
          </p>

          <ul className="list-disc ml-6 space-y-2">

            <li>Stage Decoration</li>
            <li>Coding</li>

          </ul>

        </div>

        {/* STAGE DECORATION */}
        <h2 className="text-3xl font-bold text-[#001b63] mb-8">
          Stage Decoration
        </h2>

        <div className="space-y-8 text-gray-700 leading-8">

          <p>
            First we will decorate the stage with the sprite and
            with the background.
          </p>

          <p>
            Create a flag by clicking on the Sprite button and selecting
            the Draw option.
          </p>

          <p>
            Design the Indian Flag with curves and create 5 costumes
            to make the flag look like it is swinging in the wind.
          </p>

          <p>
            Add a brown stick along with the flag.
          </p>

          <p>
            Create another sprite using squares, circles, and rectangles
            to make a patriot character.
          </p>

          <p>
            Paint the character with colors of your choice.
          </p>

          <p>
            Create 5 costumes for the patriot sprite so that
            it appears to move its hand and salute.
          </p>

          <p>
            Download an image of the Indian Flag from the internet
            and save it on your computer.
          </p>

          <p>
            Upload this image as the backdrop/background
            for your Scratch project.
          </p>

        </div>

        {/* CODING */}
        <h2 className="text-3xl font-bold text-[#001b63] mt-16 mb-8">
          Coding
        </h2>

        <div className="space-y-8 text-gray-700 leading-8">

          <p>
            Drag the
            <strong> "When Green Flag Clicked" </strong>
            block from the Events section.
          </p>

          <p>
            Add a
            <strong> Wait 2 Seconds </strong>
            block from the Control section.
          </p>

          <p>
            Open the Sound tab and record the National Anthem.
          </p>

          <p>
            Rename the audio as
            <strong> "National Anthem" </strong>.
          </p>

          <p>
            Add a
            <strong> Play Sound </strong>
            block after the wait block.
          </p>

          <p>
            Use a Forever loop and add
            <strong> Switch Costume To </strong>
            blocks for all 5 flag costumes.
          </p>

          <p>
            Add a
            <strong> Wait 0.5 Seconds </strong>
            block between every costume change.
          </p>

          <p>
            Repeat the same process for the patriot sprite.
          </p>

          <p>
            Switch the patriot costumes one by one with a delay
            of 0.5 seconds to create a salute animation.
          </p>

          <p>
            Your coding is now complete.
          </p>

          <p>
            Click the Green Flag button to start the animation.
          </p>

        </div>

        {/* SCRATCH PROJECT */}
        <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-xl mt-16">

          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Scratch Project Link
          </h3>

          <a
            href="https://scratch.mit.edu/projects/560573798"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline font-semibold"
          >
            Open Scratch Project
          </a>

          <p className="mt-4 text-gray-700">
            You can remix the project and create your own version.
          </p>

        </div>

        {/* STUDENT INFO */}
        <div className="bg-gradient-to-r from-orange-100 to-green-100 p-8 rounded-xl mt-16">

          <h3 className="text-2xl font-bold mb-4">
            Made and Written By
          </h3>

          <p className="font-semibold text-lg">
            Ansh Agarwal
          </p>

          <p>
            Grade IV
          </p>

          <p>
            The Kalyani School, Pune
          </p>

        </div>

      </section>

    </div>
  );
}

export default IndianFlagHoistingPage;

