import React from "react";

function PaperBatPage() {
  const materials = [
    "Bat Paper Stencil",
    "Black Craft Paper",
    "Paper Cutter",
    "Tape",
    "Scissor",
    "Pencil / Pen",
  ];

  const steps = [
    {
      title: "Step 1",
      image: "/bat-step1.jpg",
      description:
        "Download the Bat Stencil template for creating the bat design.",
    },
    {
      title: "Step 2",
      image: "/bat-step2.jpg",
      description:
        "Print the stencil on an A4-size paper sheet.",
    },
    {
      title: "Step 3",
      image: "/bat--step3.jpg",
      description:
        "Carefully trace and cut the bat shape on black craft paper.",
    },
    {
      title: "Step 4",
      image: "/bat-step4.jpg",
      description:
        "Use a pencil or pen to crease the dotted lines for sharper and more realistic wings.",
    },
    {
      title: "Step 5",
      image: "/bat-step5.jpg",
      description:
        "Fold the wings carefully in the opposite direction to create a beautiful 3D bat effect.",
    },
  ];

  return (
    <div className="bg-gray-50 text-[#0f172a]">

      {/* Hero */}

      <section className="relative h-[280px] sm:h-[360px] md:h-[500px] overflow-hidden">

        <img
          src="/bat-banner.jpg"
          alt="Halloween Paper Bat"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white px-6 max-w-4xl">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              🦇 Halloween Paper Bat
            </h1>

            <p className="text-lg md:text-xl text-gray-200">
              Create spooky 3D paper bats for Halloween decorations
            </p>

          </div>

        </div>

      </section>

      {/* Main Content */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 md:py-24">

        {/* About */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">

          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
              About This Project
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              Learn how to create realistic Halloween Paper Bats with
              beautiful 3D wings using black craft paper and a few simple
              stationery items.
            </p>

            <p className="text-gray-700 leading-8">
              These spooky bats make excellent decorations for your home,
              classroom, office, Halloween party, or DIY craft collection.
            </p>

          </div>

          <img
            src="/batmain.jpg"
            alt="Paper Bat"
            className="w-full rounded-3xl shadow-2xl"
          />

        </div>

        {/* Materials */}

        <div className="mb-24">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-12">
            Things Used in This Project
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">

            {materials.map((item, index) => (
              <div
                key={index}
                className="bg-orange-50 rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 hover:shadow-xl transition"
              >
                <div className="text-4xl mb-3">🛠️</div>

                <p className="font-semibold">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Story */}

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-24">

          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
            📖 Story
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            In our previous Halloween activity, we created a Ghost Badge
            using copper wire. While exciting, it was slightly challenging
            for younger children.
          </p>

          <p className="text-gray-700 leading-8">
            This Halloween Paper Bat project is simple, safe, and fun,
            making it perfect for kids and beginners who enjoy creative
            paper crafts.
          </p>

        </div>

        {/* Steps */}

        <div className="mb-24">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f2a5f] mb-16">
            Steps to Create the Paper Bat
          </h2>

          <div className="space-y-16">

            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full rounded-3xl shadow-xl"
                />

                <div>

                  <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-5">
                    {step.title}
                  </h3>

                  <p className="text-gray-700 leading-8">
                    {step.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Final CTA */}

        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 rounded-3xl shadow-2xl text-white p-10 md:p-16 text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Happy Making 🦇
          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-8">
            Create your own spooky Halloween decorations, experiment with
            different bat sizes, and decorate your room, classroom, or
            party with creative handmade paper bats.
          </p>

        </div>

      </section>

    </div>
  );
}

export default PaperBatPage;