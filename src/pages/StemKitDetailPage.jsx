import React from "react";

function StemKitDetailPage() {
  return (
    <div className="bg-white text-[#0f172a]">

      {/* TOP BANNER */}
      <div className="grid md:grid-cols-4">

        <img src="/kit-top1.png" className="w-full h-56 object-cover" />
        <img src="/kit-top2.png" className="w-full h-56 object-cover" />
        <img src="/kit-top3.png" className="w-full h-56 object-cover" />
        <img src="/kit-top4.png" className="w-full h-56 object-cover" />

      </div>

      {/* ABOUT KIT */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Arduino Tinker Kit is an Educational Kit based on the STEM concepts.
            It gives you the ability to make something innovative and creative
            based on daily life problems with an open mind.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            This kit is specially designed for beginners to understand STEM concepts.
            You will get an E-Book with 20+ activities and virtual classes every weekend.
          </p>

          <div className="flex items-center gap-3 mt-6 text-blue-600 font-medium">
            🛒 Free Shipping in India | Delivery: 3–5 Days
          </div>
        </div>

        <img
          src="/kit-main.png"
          className="rounded-xl shadow-lg hover:scale-105 transition"
        />

      </div>

      {/* INSIDE KIT */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">

        <img src="/kit-inside.png" className="rounded-xl shadow-lg" />

        <div>
          <h2 className="text-3xl font-bold mb-6">
            What you will get inside the Kit
          </h2>

          <ul className="space-y-2 text-gray-700 text-sm">
            <li>1. Arduino Uno</li>
            <li>2. USB Cable</li>
            <li>3. Breadboard</li>
            <li>4. Jumper Wires</li>
            <li>5. LEDs</li>
            <li>6. Sensors (Ultrasonic, PIR, LDR)</li>
            <li>7. Motor + Servo</li>
            <li>8. Resistors</li>
            <li>9. Push Buttons</li>
            <li>10. Activity Book</li>
          </ul>
        </div>

      </div>

      {/* WHAT YOU CAN DO */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            What you can do with this Kit
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Learn step-by-step projects from basic to advanced using the activity
            book. Build your own innovations and explore real-world problem solving.
          </p>
        </div>

        <img src="/kit-book.png" className="rounded-xl shadow-lg" />

      </div>

      {/* WHAT YOU WILL LEARN */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <img src="/kit-learn.png" className="rounded-xl shadow-lg" />

        <div>
          <h2 className="text-3xl font-bold mb-6">
            What you will learn with this kit
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Microcontroller Programming</li>
            <li>✔ Sensors & Applications</li>
            <li>✔ Basic Electronics</li>
            <li>✔ Problem Solving</li>
            <li>✔ Smart Prototyping</li>
          </ul>
        </div>

      </div>

      {/* UNBOXING VIDEO */}
      <div className="text-center py-20">

        <h2 className="text-3xl font-bold mb-10">
          UN-BOXING
        </h2>

        <div className="flex justify-center">
          <iframe
            className="w-full max-w-3xl h-[400px] rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/8C9lNOh76cQ"
            title="YouTube video"
            allowFullScreen
          />
        </div>

      </div>

      {/* BUY BUTTON */}
      <div className="text-center pb-20">

        <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition">
          Buy Now
        </button>

      </div>

    </div>
  );
}

export default StemKitDetailPage;