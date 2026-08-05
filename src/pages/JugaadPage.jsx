import React from "react";

function JugaadPage() {
  const features = [
    {
      icon: "💡",
      title: "Creative Thinking",
      color: "text-orange-500",
      bg: "bg-orange-50",
      description:
        "Jugaad encourages creative thinking and helps people discover innovative solutions using simple ideas.",
    },
    {
      icon: "🛠️",
      title: "Smart Resource Usage",
      color: "text-blue-600",
      bg: "bg-blue-50",
      description:
        "Learn how to maximize available resources while reducing cost, waste, and effort.",
    },
    {
      icon: "🚀",
      title: "Innovation Mindset",
      color: "text-purple-600",
      bg: "bg-purple-50",
      description:
        "Develop the confidence to experiment, innovate, and create practical solutions.",
    },
  ];

  const benefits = [
    "Encourages Creative Thinking",
    "Promotes Low-Cost Innovation",
    "Improves Problem-Solving Skills",
    "Develops Entrepreneurial Mindset",
    "Encourages Sustainability",
    "Makes Innovation Accessible to Everyone",
  ];

  return (
    <div className="bg-gray-50 text-[#0f172a]">

      {/* Hero */}
      <section className="relative h-[280px] sm:h-[360px] md:h-[500px] overflow-hidden">

        <img
          src="/jugaad.png"
          alt="Jugaad Innovation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white px-6 max-w-4xl">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              💡 Jugaad Innovation
            </h1>

            <p className="text-lg md:text-xl text-gray-200">
              The Art of Creative Problem-Solving with Limited Resources
            </p>

          </div>

        </div>

      </section>

      {/* Content */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 md:py-24">

        {/* About */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">

          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
              What is Jugaad?
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              Jugaad is a Hindi word that represents the ability to solve
              problems creatively using limited resources. It focuses on
              practical, affordable, and innovative solutions for everyday
              challenges.
            </p>

            <p className="text-gray-700 leading-8">
              Often called <strong>Frugal Innovation</strong>, Jugaad inspires
              creativity, adaptability, and efficient use of available
              resources to create meaningful solutions.
            </p>

          </div>

          <img
            src="/jugaad.png"
            alt="Jugaad Innovation"
            className="w-full rounded-3xl shadow-2xl"
          />

        </div>

        {/* Why Jugaad Matters */}

        <div className="mb-24">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f2a5f] mb-14">
            Why Jugaad Matters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                className={`${item.bg} rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition`}
              >
                <div className="text-5xl mb-5">{item.icon}</div>

                <h3 className={`text-2xl font-bold mb-4 ${item.color}`}>
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-7">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Roots */}

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-20">

          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
            🌱 Roots in Indian Culture
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            Jugaad has deep roots in Indian culture, where people have long
            solved problems using affordable, practical, and resourceful
            approaches.
          </p>

          <p className="text-gray-700 leading-8">
            From rural villages to modern startups, Jugaad reflects resilience,
            creativity, and determination—qualities that continue to inspire
            innovators across generations.
          </p>

        </div>

        {/* Modern Use */}

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-20">

          <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
            🚀 Modern-Day Jugaad
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            Today, Jugaad is widely applied in healthcare, agriculture,
            education, transportation, manufacturing, and technology.
          </p>

          <p className="text-gray-700 leading-8">
            Entrepreneurs, engineers, and innovators use Jugaad principles to
            design affordable products and services that improve lives while
            keeping costs low.
          </p>

        </div>

        {/* Challenges */}

        <div className="bg-gray-100 rounded-3xl shadow-lg p-8 md:p-12 mb-24">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f2a5f] mb-8">
            ⚠ Challenges of Jugaad
          </h2>

          <p className="text-center max-w-4xl mx-auto text-gray-700 leading-8">
            Although Jugaad encourages innovation, some solutions may be
            temporary. Combining creativity with quality, safety, testing, and
            engineering best practices helps transform ideas into reliable,
            scalable innovations.
          </p>

        </div>

        {/* Benefits */}

        <div className="mb-24">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f2a5f] mb-12">
            Benefits of Jugaad Innovation
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
              >
                <p className="text-lg font-medium text-gray-800">
                  ✅ {item}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* CTA */}

        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white rounded-3xl shadow-2xl p-10 md:p-16 text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Innovation Begins with Creativity 🚀
          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-8 mb-8">
            Great innovation doesn't always require expensive tools. It starts
            with curiosity, creativity, and the courage to solve problems in
            new ways. Turn everyday challenges into opportunities with the
            spirit of Jugaad.
          </p>

          <a
            href="https://www.narayandojo.com/sundaylive"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#0f2a5f] px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300"
          >
            Register for FREE Live Session →
          </a>

        </div>

      </section>

    </div>
  );
}

export default JugaadPage;