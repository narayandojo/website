import React from "react";

function GhostBadgePage() {
  return (
    <div className="bg-white text-[#0f172a]">

      {/* HERO */}
      <div className="relative h-[350px] flex items-center justify-center text-white">

        <img
          src="/ghost-banner.jpg"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center px-6">

          <h1 className="text-5xl font-bold mb-4">
            Halloween Ghost Badge 🎃
          </h1>

          <p className="text-lg">
            Create your own glowing Halloween electronics badge
          </p>

        </div>

      </div>
      

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* INTRO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          <div>

            <h2 className="text-3xl font-bold mb-6 text-orange-500">
              About This Project
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              In Today's blog we are going to create a Halloween Ghost Badge with some basic electronics tools 🛠. So, the Halloween 2020 are coming and it's a great way for the tinkerer or maker to make your own badge with some basic electronics in a fun way.
            </p>


            <p className="text-gray-700 leading-relaxed">
              This Fun Activity is inspired by jiripraus. So, we try to make our own badge using some basic electronics and tools.  So, here in this activity instead of using SMD LED's we are using the general 5mm LED's. So, Let's see the Step by Step Instruction to make your own
            </p>

          </div>

          <img
            src="/ghost-main.jpg"
            className="w-72 md:w-80 mx-auto rounded-xl shadow-lg"
          />

        </div>
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-red-600 mb-8">
            Watch Project Video 
          </h3>
          <div className="flex justify-center my-10">
            <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/nrxgjk0-ijE?si=ivv3nevw65zlzpah"
            title="YouTube video player"
            className="rounded-xl shadow-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* THINGS USED */}
        <div className="mb-20">

          <h2 className="text-3xl font-bold mb-10 text-center text-purple-700">
            Things Used in this Project
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-orange-50 p-6 rounded-xl shadow">
              Paper
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow">
              Pencil
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow">
              Copper/Brass Rod
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow">
              Double Sided Tape
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow">
              LED x2
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow">
              Soldering Iron
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow">
              AA Battery / Coin Cell
            </div>

          </div>

        </div>

        {/* STEPS */}
        <div className="mb-20">

          <h2 className="text-3xl font-bold mb-10 text-center text-blue-700">
            Steps to Create the Halloween Badge
          </h2>

          <div className="space-y-12">

            {/* STEP 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">

              <img
                src="/ghost-step1.jpg"
                className="w-72 md:w-80 mx-auto rounded-xl shadow-lg"
              />

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 1
                </h3>

                <p className="text-gray-700">
                  First of all draw the design of your Halloween badge on a piece of paper using pencil.
                </p>

              </div>

            </div>

            {/* STEP 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 2
                </h3>

                <p className="text-gray-700">
                  Now take a thin rod of Copper/Brass for creating the structure of this badge.
                </p>

              </div>

              <img
                src="/ghost-step2.jpg"
                className="w-72 md:w-80 mx-auto rounded-xl shadow-lg"
              />

            </div>

            {/* STEP 3 */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-center">Step 3</h3>
                <p className="text-gray-700 text-center max-w-3xl mx-auto">
                   After that start to cut down the copper wire according to your design and stick that on the paper as shown in the images below.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <img src="/ghost-step3.jpg"alt="Ghost Badge Step 3"className="w-64 mx-auto rounded-xl shadow-lg"/>
                <img src="/ghost-step3-2.jpg"alt="Ghost Badge Step 3"className="w-64 mx-auto rounded-xl shadow-lg"/>
                <img src="/ghost-step3-3.jpg"alt="Ghost Badge Step 3"className="w-64 mx-auto rounded-xl shadow-lg"/>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-center">Step 4</h3>
                <p className="text-gray-700 text-center max-w-3xl mx-auto">
                  After completing the structure of the badge with the copper wire,
                  it's time to solder all the joints using a soldering iron.
                  Before soldering, apply solder paste on each joint of the badge.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <img src="/ghost-step4.jpg"alt="Ghost Badge Step 4"className="w-64 mx-auto rounded-xl shadow-lg"/>
                <img src="/ghost-step4-2.jpg"alt="Ghost Badge Step 4" className="w-64 mx-auto rounded-xl shadow-lg"/>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">

              <img
                src="/ghost-step5.jpg"
                className="w-72 md:w-80 mx-auto rounded-xl shadow-lg"
              />

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 5
                </h3>

                <p className="text-gray-700">
                  Add LEDs as the eyes of the ghost badge and connect
                  the LED legs correctly.
                </p>

              </div>

            </div>

            {/* STEP 6 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  Step 6
                </h3>

                <p className="text-gray-700">
                  Power the badge using AA Battery or Coin Cell.
                  Use resistor if needed.
                </p>

              </div>

              <img
                src="/ghost-step6.jpg"
                className="w-72 md:w-80 mx-auto rounded-xl shadow-lg"
              />

            </div>

          </div>

        </div>

        {/* FINAL CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white p-10 rounded-2xl text-center">

          <h2 className="text-3xl font-bold mb-4">
            Make Your Own Halloween Badge 🎃
          </h2>

          <p className="max-w-3xl mx-auto">
            Try different designs, colors, and LEDs to create your own
            unique glowing Halloween badge.
          </p>

        </div>

      </div>

    </div>
  );
}

export default GhostBadgePage;