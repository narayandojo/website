import React from "react";
import { useNavigate } from "react-router-dom";

function DIYPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-[#0f172a] min-h-screen">

      {/* HERO SECTION */}
      
      <div className="relative h-[260px] sm:h-[350px] md:h-[450px] flex items-center justify-center text-white overflow-hidden">

        <img
          src="/hero.png"
          alt="DIY Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">

          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            DIY Activities
          </h1>

          
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Learn by Building • Create from Home • Fun STEM Projects
          </p>

        </div>

      </div>

      {/* TITLE */}
      
      <div className="text-center py-16 md:py-24 px-5 sm:px-6">

        <h2 className="text-4xl font-bold text-[#0f2a5f] mb-4">
          DIY ACTIVITIES 
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore creative hands-on STEM activities that help students
          learn electronics, robotics, art, and innovation using
          simple materials at home.
        </p>

      </div>

      {/* CARDS SECTION */}
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 pb-16 md:pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* DRAW BOT */}
        <div
          onClick={() => navigate("/drawbot")}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer group"
        >

          <div className="overflow-hidden">
            <img
              src="/drawbot-main.jpg"
              alt="Draw Bot"
              className="w-full h-52 sm:h-56 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div className="p-6">

            <h3 className="text-xl font-bold mb-3 text-blue-700">
              DRAW BOT
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              A scribble/drawing robot that creates random art using
              simple motors, markers, and batteries.
            </p>

            <button className="mt-5 text-blue-600 font-semibold hover:text-orange-500 transition">
              Explore Project →
            </button>

          </div>

        </div>

        {/* GHOST BADGE */}
        <div
          onClick={() => navigate("/ghost-badge")}
          
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
        >

          <div className="overflow-hidden">
            <img
              src="/ghost-banner.jpg"
              alt="Ghost Badge"
              className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div className="p-6">

            <h3 className="text-xl font-bold mb-3 text-purple-700">
              GHOST BADGE
            </h3>

            <p className="text-gray-600 text-sm md:text-base leading-7">
            
              Build your own glowing Halloween LED badge using
              simple electronics and creative crafting.
            </p>

            <button className="mt-5 text-purple-600 font-semibold hover:text-orange-500 transition">
              Explore Project →
            </button>

          </div>

        </div>

        {/* PAPER BAT */}
        <div
          onClick={() => navigate("/paper-bat")}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer group"
        >

          <div className="overflow-hidden">
            <img
              src="/batmain.jpg"
              alt="Paper Bat"
              className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div className="p-6">

            <h3 className="text-xl font-bold mb-3 text-orange-500">
              PAPER BAT
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Create a spooky Halloween paper bat craft using
              easy cutting and folding techniques.
            </p>

            <button className="mt-5 text-orange-500 font-semibold hover:text-blue-600 transition">
              Explore Project →
            </button>

          </div>

        </div>

        {/* PAPER PUMPKIN */}
        <div
          onClick={() => navigate("/paper-pumpkin")}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer group"
        >

          <div className="overflow-hidden">
            <img
              src="/pumpkin-banner.jpg"
              alt="Paper Pumpkin"
              className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div className="p-6">

            <h3 className="text-xl font-bold mb-3 text-green-600">
              PAPER PUMPKIN
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Design a colorful pumpkin decoration using paper
              crafting and creative imagination.
            </p>

            <button className="mt-5 text-green-600 font-semibold hover:text-orange-500 transition">
              Explore Project →
            </button>

          </div>

        </div>

        {/* ZAPPER GUN */}
        <div
          onClick={() => navigate("/zapper-gun")}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer group"
        >

          <div className="overflow-hidden">
            <img
              src="/zapper.jpg"
              alt="Zapper Gun"
              className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div className="p-6">

            <h3 className="text-xl font-bold mb-3 text-red-600">
              ZAPPER GUN
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Transform an old zapper gun into a T-Rex game controller
              using Raspberry Pi Pico and Circuit Python.
            </p>

            <button className="mt-5 text-red-600 font-semibold hover:text-orange-500 transition">
              Explore Project →
            </button>

          </div>

        </div>

        {/* SENIOR DIY */}
        <div
          onClick={() => navigate("/senior-kit")}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer group"
        >

          <div className="overflow-hidden">
            <img
              src="/seniorkit.png"
              alt="Senior Citizen Kit"
              className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div className="p-6">

            <h3 className="text-xl font-bold mb-3 text-blue-600">
              SENIOR DIY KITS
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Discover how Arduino Tinker DIY Kits can benefit
              senior citizens.
            </p>

            <button className="mt-5 inline-block font-semibold text-blue-600 hover:text-orange-500 transition">
              Explore →
            </button>

          </div>

        </div>

        {/* JUGAAD */}
        {/* SENIOR MOTHERS BLOG */}
<div
  onClick={() => navigate("/senior-mothers-blog")}
  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer group"
>
  <div className="overflow-hidden">
    <img
      src="/motherday1.png"
      alt="Senior Mothers Arduino Blog"
      className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
    />
  </div>

  <div className="p-6">
    <h3 className="text-xl font-bold mb-3 text-pink-700 leading-snug">
      Empowering Senior Mothers with Arduino Tinker Kits
    </h3>

    <p className="text-gray-600 text-sm leading-relaxed">
      Discover how Arduino Tinker Kits help senior mothers improve
      creativity, confidence, cognitive skills, and lifelong learning
      through STEM activities.
    </p>

    <button className="mt-5 text-pink-700 font-semibold hover:text-orange-500 transition">
      Read Blog →
    </button>
  </div>
</div>

{/* DRONE BLOG */}
<div
  onClick={() => navigate("/drone-blog")}
  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer group"
>
  <div className="overflow-hidden">
    <img
      src="/Drone.png"
      alt="Drone Blog"
      className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
    />
  </div>

  <div className="p-6">
    <h3 className="text-xl font-bold mb-3 text-cyan-700 leading-snug">
      Discover The World Of Drone
    </h3>

    <p className="text-gray-600 text-sm leading-relaxed">
      Learn drone basics, applications, advantages, challenges,
      and the future of UAV technology.
    </p>

    <button className="mt-5 text-cyan-700 font-semibold hover:text-orange-500 transition">
      Read Blog →
    </button>
  </div>
</div>

{/* INDIAN FLAG HOISTING */}
<div
  onClick={() => navigate("/indian-flag-scratch")}
  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer group"
>

  <div className="overflow-hidden">
    <img
      src="/flag-hero.avif"
      alt="Indian Flag Hoisting on Scratch"
      className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
    />
  </div>

  <div className="p-6">

    <h3 className="text-xl font-bold mb-3 text-green-700 leading-snug">
      Indian Flag Hoisting on Scratch
    </h3>

    <p className="text-gray-600 text-sm leading-relaxed">
      Learn Scratch programming by creating an Indian Flag hoisting
      animation with patriot sprites, coding blocks and the national anthem.
    </p>

    <button className="mt-5 text-green-700 font-semibold hover:text-orange-500 transition">
      Read Blog →
    </button>

  </div>

</div>
{/* JUGAAD */}
<div
  onClick={() => navigate("/jugaad")}
  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer group"
>

  <div className="overflow-hidden">
    <img
      src="/jugaad.png"
      alt="Jugaad Innovation"
      className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
    />
  </div>

  <div className="p-6">

    <h3 className="text-xl font-bold mb-3 text-orange-600">
      JUGAAD INNOVATION
    </h3>

    <p className="text-gray-600 text-sm leading-relaxed">
      Learn the art of resourceful innovation and creative problem-solving
      using limited resources and innovative thinking.
    </p>

    <button className="mt-5 text-orange-600 font-semibold hover:text-blue-600 transition">
      Read Blog →
    </button>

  </div>

</div>
{/* INDIAN FLAG HOISTING ON SCRATCH */}
<div
  onClick={() => navigate("/indian-flag-hoisting")}
  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer group"
>

  <div className="overflow-hidden">
    <img
      src="/flag.png"
      alt="Indian Flag Hoisting On Scratch"
      className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
    />
  </div>

  <div className="p-6">

    <h3 className="text-xl font-bold mb-3 text-orange-600 leading-snug">
      Indian Flag Hoisting On Scratch
    </h3>

    <p className="text-gray-600 text-sm leading-relaxed">
      Learn Scratch programming by creating an Indian Flag hoisting
      animation with waving flag, patriot salute and National Anthem.
    </p>

    <button className="mt-5 text-orange-600 font-semibold hover:text-green-600 transition">
      Read Blog →
    </button>

  </div>

</div>
{/* PERFECT CIRCLE DRAWER */}
<div
  onClick={() => navigate("/perfect-circle-drawer")}
  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer group"
>

  <div className="overflow-hidden">
    <img
      src="/perfect-circle-banner.webp"
      alt="Perfect Circle Drawer"
      className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
    />
  </div>

  <div className="p-6">

    <h3 className="text-xl font-bold mb-3 text-indigo-600">
      PERFECT CIRCLE DRAWER
    </h3>

    <p className="text-gray-600 text-sm leading-relaxed">
      Learn how to draw perfect circles using a DC motor, battery,
      paper and colors while exploring basic electronics and creativity.
    </p>

    <button className="mt-5 text-indigo-600 font-semibold hover:text-orange-500 transition">
      Explore Project →
    </button>

  </div>

</div>
{/* WHAT IS STEM EDUCATION */}
<div
  onClick={() => navigate("/what-is-stem")}
  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 cursor-pointer group"
>

  <div className="overflow-hidden">
    <img
      src="/stem.png"
      alt="What is STEM Education"
      className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
    />
  </div>

  <div className="p-6">

    <h3 className="text-xl font-bold mb-3 text-blue-700">
      WHAT IS STEM EDUCATION?
    </h3>

    <p className="text-gray-600 text-sm leading-relaxed">
      Learn the meaning of STEM, STEM Education,
      and why Science, Technology, Engineering,
      and Mathematics are important for every student.
    </p>

    <button className="mt-5 text-blue-700 font-semibold hover:text-orange-500 transition">
      Read Blog →
    </button>

  </div>

</div>
</div>
</div>
);
}

export default DIYPage;