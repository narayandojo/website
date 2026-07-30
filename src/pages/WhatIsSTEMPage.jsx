
import React from "react";

function WhatIsSTEMPage() {
  return (
    <div className="bg-white min-h-screen text-[#0f172a]">

      {/* HERO */}
      <section className="relative h-[400px]">

        <img
          src="/stem.png"
          alt="STEM Education"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">

          <h1 className="text-5xl font-bold mb-4">
            What is STEM Education?
          </h1>

          <p className="text-xl">
            Science • Technology • Engineering • Mathematics
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <p className="text-gray-500">
          Jun 7, 2020 • 1 min read
        </p>

        <p className="text-gray-500 mb-10">
          Updated: May 1, 2023
        </p>

        <h2 className="text-4xl font-bold text-[#001b63] mb-8">
          What is STEM Education?
        </h2>

        <p className="text-lg text-gray-700 leading-8 mb-8">
          Hello STEMClub Makers! Are you confused about the word STEM?
          Don't worry. Today we will learn what STEM means and why
          STEM Education is important.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-xl mb-12">

          <h3 className="text-2xl font-bold text-[#001b63] mb-6">
            What is STEM?
          </h3>

          <p className="mb-6">
            In 2001 the acronym was originally pronounced as "SMET".
            Later, the letters were rearranged and became "STEM".
          </p>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="bg-white p-4 rounded-lg shadow">
              <strong>S</strong> - Science
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <strong>T</strong> - Technology
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <strong>E</strong> - Engineering
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <strong>M</strong> - Mathematics
            </div>

          </div>

        </div>

        <p className="text-lg text-gray-700 leading-8 mb-10">
          These four subjects are essential for understanding
          the environment, technology, the world around us,
          and solving real-life problems.
        </p>

        <h3 className="text-3xl font-bold text-[#001b63] mb-6">
          What is STEM Education?
        </h3>

        <p className="text-lg text-gray-700 leading-8 mb-8">
          STEM Education is a learning system that combines Science,
          Technology, Engineering, and Mathematics into practical
          project-based activities.
        </p>

        <p className="text-lg text-gray-700 leading-8 mb-10">
          Teachers and educators focus on skill-based learning,
          hands-on projects, creativity, and innovation rather than
          only theory-based education.
        </p>

        <h3 className="text-3xl font-bold text-[#001b63] mb-8">
          Why is STEM Education Important?
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-yellow-50 p-6 rounded-xl shadow">
            <h4 className="text-xl font-bold mb-3">
              Ingenuity
            </h4>
            <p>
              Encourages new ideas and problem-solving abilities.
            </p>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl shadow">
            <h4 className="text-xl font-bold mb-3">
              Creativity
            </h4>
            <p>
              Helps build a beautiful world through imagination and design.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow">
            <h4 className="text-xl font-bold mb-3">
              Confidence
            </h4>
            <p>
              Enables students to solve problems independently.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <h4 className="text-xl font-bold mb-3">
              Innovation
            </h4>
            <p>
              Encourages finding new solutions that benefit society.
            </p>
          </div>

        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-100 to-green-100 p-8 rounded-xl">

          <h3 className="text-2xl font-bold mb-4">
            Conclusion
          </h3>

          <p className="text-lg leading-8">
            STEM Education combines Science, Technology,
            Engineering, and Mathematics to develop creativity,
            confidence, ingenuity, and innovation. It prepares
            students to solve real-world problems and become
            future innovators.
          </p>

        </div>

      </section>

    </div>
  );
}

export default WhatIsSTEMPage;