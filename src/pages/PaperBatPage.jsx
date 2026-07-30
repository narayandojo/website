import React from "react";

function PaperBatPage() {
  return (
    <div className="bg-white text-[#0f172a] min-h-screen">

      {/* HERO */}
      <div className="relative h-[350px] flex items-center justify-center text-white overflow-hidden">

        <img
          src="/bat-banner.jpg"
          alt="Paper Bat Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">

          <h1 className="text-5xl font-bold mb-4">
            Halloween Paper Bat 🦇
          </h1>

          <p className="text-lg text-gray-200">
            Create spooky 3D paper bats for Halloween decoration
          </p>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* INTRO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

          <div>

            <h2 className="text-3xl font-bold mb-6 text-orange-500">
              About This Project
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              In this fun DIY activity, we create Halloween Paper Bats
              with 3D wings using black craft paper and simple tools.
            </p>

            <p className="text-gray-700 leading-relaxed">
              These spooky bats can be used to decorate your room,
              workspace, classroom, or Halloween party area.
            </p>

          </div>

          <img
            src="/batmain.jpg"
            alt="Paper Bat"
            className="rounded-2xl shadow-xl"
          />

        </div>

        {/* THINGS USED */}
        <div className="mb-24">

          <h2 className="text-3xl font-bold text-center mb-10 text-purple-700">
            Things Used in this Project
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
              Bat Paper Stencil
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
              Black Craft Paper
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
              Paper Cutter
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
              Tape
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
              Scissor
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
              Pencil / Pen
            </div>

          </div>

        </div>

        {/* STORY */}
        <div className="mb-24">

          <h2 className="text-3xl font-bold mb-8 text-blue-700">
            Story
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            In our previous Halloween activity, we created a Ghost Badge
            using copper wire. But that activity was slightly difficult
            for small children.
          </p>

          <p className="text-gray-700 leading-relaxed">
            So this time, we created something simple and fun using paper —
            a Halloween Paper Bat that anyone can make at home using basic materials.
          </p>

        </div>

        {/* STEPS */}
        <div className="mb-24">

          <h2 className="text-4xl font-bold text-center mb-16 text-[#0f2a5f]">
            Steps to Create the Paper Bat
          </h2>

          <div className="space-y-16">

            {/* STEP 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <img
                src="/bat-step1.jpg"
                alt="Step 1"
                className="rounded-2xl shadow-xl"
              />

              <div>

                <h3 className="text-2xl font-bold mb-4 text-orange-500">
                  Step 1
                </h3>

                <p className="text-gray-700">
                  Download the Bat Stencil template for creating the bat design.
                </p>

              </div>

            </div>

            {/* STEP 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4 text-orange-500">
                  Step 2
                </h3>

                <p className="text-gray-700">
                  Print the stencil on an A4 size paper sheet.
                </p>

              </div>

              <img
                src="/bat-step2.jpg"
                alt="Step 2"
                className="rounded-2xl shadow-xl"
              />

            </div>

            {/* STEP 3 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <img
                src="/bat--step3.jpg"
                alt="Step 3"
                className="rounded-2xl shadow-xl"
              />

              <div>

                <h3 className="text-2xl font-bold mb-4 text-orange-500">
                  Step 3
                </h3>

                <p className="text-gray-700">
                  Carefully trace and cut the bat shape on black craft paper.
                </p>

              </div>

            </div>

            {/* STEP 4 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4 text-orange-500">
                  Step 4
                </h3>

                <p className="text-gray-700">
                  Use pencil or pen to crease the dotted lines for
                  sharper and realistic wings.
                </p>

              </div>

              <img
                src="/bat-step4.jpg"
                alt="Step 4"
                className="rounded-2xl shadow-xl"
              />

            </div>

            {/* STEP 5 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <img
                src="/bat-step5.jpg"
                alt="Step 5"
                className="rounded-2xl shadow-xl"
              />

              <div>

                <h3 className="text-2xl font-bold mb-4 text-orange-500">
                  Step 5
                </h3>

                <p className="text-gray-700">
                  Fold the wings carefully in the opposite direction
                  to create a 3D bat effect.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* FINAL SECTION */}
        <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white p-12 rounded-3xl text-center shadow-xl">

          <h2 className="text-4xl font-bold mb-6">
            Happy Making 🦇
          </h2>

          <p className="max-w-3xl mx-auto text-lg">
            Create your own spooky Halloween decorations and experiment
            with different bat designs and wing styles.
          </p>

        </div>

      </div>

    </div>
  );
}

export default PaperBatPage;