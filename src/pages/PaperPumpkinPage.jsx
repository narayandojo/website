import React from "react";

function PaperPumpkinPage() {
  return (
    <div className="bg-white text-[#0f172a] min-h-screen">

      {/* HERO */}
      <div className="relative h-[350px] flex items-center justify-center text-white overflow-hidden">

        <img
          src="/pumpkin-banner.jpg"
          alt="Paper Pumpkin Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">

          <h1 className="text-5xl font-bold mb-4">
            Halloween Paper Pumpkin 🎃
          </h1>

          <p className="text-lg text-gray-200">
            Create beautiful Halloween pumpkins using paper craft
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
              Paper is one of the most creative and affordable materials
              used for DIY craft activities.
            </p>

            <p className="text-gray-700 leading-relaxed">
              In this fun Halloween activity, we will create a colorful
              Paper Pumpkin using simple craft materials and easy folding techniques.
            </p>

          </div>

          <img
            src="/pumpkin-banner.jpg"
            alt="Paper Pumpkin"
            className="rounded-2xl shadow-xl"
          />

        </div>

        {/* 10 IDEAS */}
        <div className="mb-24">

          <h2 className="text-4xl font-bold text-center mb-12 text-[#0f2a5f]">
            10 Creative Ways to Use Paper for Crafts
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
              Paper Quilling
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
              Paper Flowers
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
              Paper Chain Garland
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
              Paper Mache Bowls
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
              Origami
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
              Paper Lanterns
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
              Paper Snowflakes
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
              Pop-up Cards
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
              Paper Pinwheels
            </div>

            <div className="bg-orange-50 p-6 rounded-xl shadow-lg">
              Paper Puppets
            </div>

          </div>

        </div>

        {/* STORY */}
        <div className="mb-24">

          <h2 className="text-3xl font-bold mb-8 text-purple-700">
            Paper Crafts DIY
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Using paper for crafts is a great way to express creativity
            and make personalized decorations and art projects.
          </p>

          <p className="text-gray-700 leading-relaxed">
            From flowers to pumpkins, there are endless possibilities
            using simple paper and imagination.
          </p>

        </div>

        {/* STEPS */}
        <div className="mb-24">

          <h2 className="text-4xl font-bold text-center mb-16 text-[#0f2a5f]">
            How to Make Halloween Paper Pumpkin
          </h2>

          <div className="space-y-16">

            

            {/* STEP 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4 text-orange-500">
                  Step 2
                </h3>

                <p className="text-gray-700">
                  Gather materials like orange paper, green paper,
                  scissors, glue, ruler, and pencil.
                </p>

              </div>

             

            </div>

            {/* STEP 3 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              

              <div>

                <h3 className="text-2xl font-bold mb-4 text-orange-500">
                  Step 3
                </h3>

                <p className="text-gray-700">
                  Cut the orange paper into strips around 1 inch wide
                  and 8 inches long.
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
                  Fold each strip into loops and glue the ends together.
                </p>

              </div>

              
            </div>

            {/* STEP 5 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              

              <div>

                <h3 className="text-2xl font-bold mb-4 text-orange-500">
                  Step 5
                </h3>

                <p className="text-gray-700">
                  Connect all loops together to form the circular pumpkin shape.
                </p>

              </div>

            </div>

            {/* STEP 6 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                <h3 className="text-2xl font-bold mb-4 text-orange-500">
                  Step 6
                </h3>

                <p className="text-gray-700">
                  Add a green paper stem and leaf at the top of the pumpkin.
                </p>

              </div>

              

            </div>

          </div>

        </div>

        {/* FINAL SECTION */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-12 rounded-3xl text-center shadow-xl">

          <h2 className="text-4xl font-bold mb-6">
            Happy Creating 🎃
          </h2>

          <p className="max-w-3xl mx-auto text-lg">
            Decorate your room, classroom, or workspace with your own
            handmade Halloween paper pumpkin creations.
          </p>

        </div>

      </div>

    </div>
  );
}

export default PaperPumpkinPage;