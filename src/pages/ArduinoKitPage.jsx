import React from "react";

function ArduinoKitPage() {
  return (
    <div className="bg-white text-[#0f172a]">

      {/* HERO SECTION */}
      <div className="bg-[#e6c08b] py-16 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">

          {/* LEFT TEXT */}
          <div className="text-center md:text-left">

            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              Arduino Tinker Kit
            </h1>

            <p className="text-lg text-gray-700">
              Inspire, Create, Innovate
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center mt-10 md:mt-0">

            <img
              src="/arduino-hero.png"   // 👈 put your image in public folder
              alt="Arduino Kit"
              className="w-[300px] md:w-[420px] rounded-2xl shadow-xl hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </div>

      {/* WHAT YOU CAN DO */}
      <div className="py-20 text-center px-6">

        <h2 className="text-3xl font-bold mb-10">
          WHAT YOU CAN DO WITH ARDUINO TINKER KIT
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            BUILD
          </div>

          <div className="shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            CODE
          </div>

          <div className="shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            INNOVATE
          </div>

        </div>

      </div>

      {/* YOUTUBE VIDEOS */}
      <div className="py-20 px-6 max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-14">
          Projects Videos
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* VIDEO 1 */}
          <div className="bg-white p-3 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <iframe
              className="w-full h-[300px] md:h-[420px] lg:h-[480px] rounded-xl"
              src="https://www.youtube.com/embed/237tzcLpC5c"
              title="Video 1"
              allowFullScreen
            />
          </div>

          {/* VIDEO 2 */}
          <div className="bg-white p-3 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <iframe
              className="w-full h-[300px] md:h-[420px] lg:h-[480px] rounded-xl"
              src="https://www.youtube.com/embed/8C9lNOh76cQ"
              title="Video 2"
              allowFullScreen
            />
          </div>

          {/* VIDEO 3 */}
          <div className="bg-white p-3 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <iframe
              className="w-full h-[300px] md:h-[420px] lg:h-[480px] rounded-xl"
              src="https://www.youtube.com/embed/8C9lNOh76cQ"
              title="Video 3"
              allowFullScreen
            />
          </div>

          {/* VIDEO 4 */}
          <div className="bg-white p-3 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <iframe
              className="w-full h-[300px] md:h-[420px] lg:h-[480px] rounded-xl"
              src="https://www.youtube.com/embed/8C9lNOh76cQ"
              title="Video 4"
              allowFullScreen
            />
          </div>

          {/* VIDEO 5 */}
          <div className="bg-white p-3 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <iframe
              className="w-full h-[300px] md:h-[420px] lg:h-[480px] rounded-xl"
              src="https://www.youtube.com/embed/8C9lNOh76cQ"
              title="Video 5"
              allowFullScreen
            />
          </div>

          {/* VIDEO 6 */}
          <div className="bg-white p-3 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <iframe
              className="w-full h-[300px] md:h-[420px] lg:h-[480px] rounded-xl"
              src="https://www.youtube.com/embed/8C9lNOh76cQ"
              title="Video 6"
              allowFullScreen
            />
          </div>

        </div>

      </div>

      {/* FEATURES */}
      <div className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <img src="/kit2.png" className="rounded-xl shadow-lg" />

        <ul className="space-y-4 text-lg">
          <li>✔ Learn STEM concepts</li>
          <li>✔ Build real projects</li>
          <li>✔ Hands-on learning</li>
          <li>✔ Weekly live sessions</li>
          <li>✔ Fun + innovation</li>
        </ul>

      </div>

      {/* BUY BUTTON */}
      <div className="text-center py-20">

        <button className="bg-red-500 text-white px-8 py-3 rounded-full text-lg hover:scale-105 transition shadow-lg">
          Buy Now
        </button>

      </div>

    </div>
  );
}

export default ArduinoKitPage;