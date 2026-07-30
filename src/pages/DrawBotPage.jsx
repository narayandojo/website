import React from "react";

function DrawBotPage() {
  return (
    <div className="bg-white text-[#0f172a]">

      {/* HERO */}
      <div className="relative h-[350px] flex items-center justify-center text-white">

        <img
          src="/drawbot-banner.jpg"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
            Scribbling / Drawing Robot
          </h1>

          <p className="text-lg">
            A fun DIY robot that creates random art & designs
          </p>
        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* INTRO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          <div>

            <h2 className="text-3xl font-bold mb-6 text-blue-700">
              About Project
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              A Drawing or Scribble Robot is a fun DIY robot that creates
              random art and designs using simple materials.
            </p>

            <p className="text-gray-700 leading-relaxed">
              This activity helps kids improve creativity, curiosity,
              and understanding of basic robotics concepts using
              everyday resources.
            </p>

          </div>

          <img src="/drawbot-main.jpg"
          alt="Draw Bot"
          className="w-80 h-auto mx-auto rounded-xl shadow-lg"
          />

        </div>

        {/* THINGS USED */}
        <div className="mb-20">

          <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">
            Things Used In This Project
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-blue-50 p-6 rounded-xl shadow">
              3V DC Motor
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow">
              AA Batteries
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow">
              Marker / Sketch Pens
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow">
              Cup / Mug / Glass
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow">
              Tape
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow">
              Connecting Wires
            </div>

          </div>

        </div>

        {/* STEPS */}
        <div className="mb-20">

          <h2 className="text-3xl font-bold mb-10 text-center text-orange-500">
            Steps to Create the Robot
          </h2>

          <div className="space-y-10">

            {/* STEP 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">

              

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Step 1
                </h3>

                <p className="text-gray-700">
                  First of all taped the color sketches pen with the cup or mug as a robot leg so that the cup or mug stood up perfectly on the plain


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
                  After that taped a one DC Motor at the top side of the cup or mug by adding some weighted thing at the top of the motor.
                </p>
              </div>

              

            </div>

            {/* STEP 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">

              

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Step 3
                </h3>

                <p className="text-gray-700">
                   Now taped the one 1.5V or 3V Battery at the top of the cup or mug.
                </p>
              </div>

            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-4">Step 4 </h3>
                <p className="text-gray-700 leading-relaxed">In the last step just taped the one wire of the DC Motor with one sideof the DC motor and another wire with the other side of the DC motor.And your Scribbling Bot is Ready.</p>
                <br />
                <p className="text-gray-700 leading-relaxed">Place your bot on plain white paper to see the creativity of your bot.</p>
                <br />
                <p className="text-gray-700 leading-relaxed">Now make some changes in the Scribbling Bot to create your own uniquedesign and see what happens when you add multiple sketch colors instead of only using four sketch pens or markers.</p>
                <br />
                <p className="text-gray-700 leading-relaxed">Try different shapes of cups or mugs and observe the changes. You can also experiment with your own daily-life resources to create a completely unique robot. </p>
                <div className="mt-8">
                  <a href="https://youtu.be/1SCnYyApjqE?si=S56iXXzX_OirIXcb"
                  target="_blank"rel="noopener noreferrer"className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
                    ▶ Watch Video Tutorial
                  </a>
                </div>
              </div>
              <div>
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1SCnYyApjqE?si=S56iXXzX_OirIXcb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>

          </div>

        </div>

        {/* FINAL SECTION */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-10 rounded-2xl text-center">

          <h2 className="text-3xl font-bold mb-4">
            Create Your Own Unique Robot 🚀
          </h2>

          <p className="max-w-3xl mx-auto">
            Try using different cups, multiple sketch pens,
            and new materials to explore creativity and innovation.
          </p>

        </div>

      </div>

    </div>
  );
}

export default DrawBotPage;