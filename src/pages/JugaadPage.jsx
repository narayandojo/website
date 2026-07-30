import React from "react";

function JugaadPage() {
  return (
    <div className="bg-white text-[#0f172a] min-h-screen">

      {/* HERO SECTION */}
      <div className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">

        <img
          src="/jugaad.png"
          alt="Jugaad Innovation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Jugaad Innovation 💡
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            The Art of Creative Problem-Solving with Limited Resources
          </p>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* INTRO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

          <div>

            <h2 className="text-4xl font-bold mb-6 text-orange-500">
              What is Jugaad?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-5">
              Jugaad is a Hindi word that describes the ability to solve
              problems creatively using limited resources. It represents an
              innovative mindset that focuses on finding simple, affordable,
              and practical solutions to everyday challenges.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Often called "Frugal Innovation," Jugaad encourages people to
              think beyond traditional methods and make the best use of the
              resources available. It is a symbol of creativity, adaptability,
              and smart problem-solving.
            </p>

          </div>

          <img
            src="/jugaad.png"
            alt="Jugaad Innovation"
            className="rounded-3xl shadow-2xl"
          />

        </div>

        {/* WHY JUGAAD MATTERS */}
        <div className="mb-24">

          <h2 className="text-4xl font-bold text-center mb-14 text-[#0f2a5f]">
            Why Jugaad Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">

              <div className="text-5xl mb-5">💡</div>

              <h3 className="text-2xl font-bold mb-4 text-orange-500">
                Creative Thinking
              </h3>

              <p className="text-gray-700">
                Jugaad encourages creative and innovative thinking,
                helping people discover unique solutions to everyday
                problems.
              </p>

            </div>

            <div className="bg-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">

              <div className="text-5xl mb-5">🛠️</div>

              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Smart Resource Usage
              </h3>

              <p className="text-gray-700">
                It teaches us how to maximize the use of available
                resources while minimizing cost, waste, and effort.
              </p>

            </div>

            <div className="bg-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">

              <div className="text-5xl mb-5">🚀</div>

              <h3 className="text-2xl font-bold mb-4 text-purple-600">
                Innovation Mindset
              </h3>

              <p className="text-gray-700">
                Jugaad inspires experimentation and continuous
                improvement, proving that great ideas do not always
                require expensive technology.
              </p>

            </div>

          </div>

        </div>

        {/* ROOTS */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

       

          <div>

            <h2 className="text-4xl font-bold mb-6 text-green-600">
              Roots in Indian Culture
            </h2>

            <p className="text-gray-700 leading-relaxed mb-5">
              Jugaad has deep roots in Indian culture, where people have
              traditionally overcome challenges by creating affordable and
              practical solutions with limited resources.
            </p>

            <p className="text-gray-700 leading-relaxed">
              From rural villages to modern startups, Jugaad reflects the
              spirit of resilience, creativity, and determination that has
              inspired innovation across generations.
            </p>

          </div>

        </div>

        {/* MODERN USE */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

          <div>

            <h2 className="text-4xl font-bold mb-6 text-red-500">
              Modern-Day Jugaad
            </h2>

            <p className="text-gray-700 leading-relaxed mb-5">
              Today, Jugaad is widely used in sectors such as healthcare,
              agriculture, education, manufacturing, transportation, and
              technology to solve real-world problems.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Entrepreneurs, engineers, and innovators continue to apply
              Jugaad principles to build affordable products and services
              that improve people's lives.
            </p>

          </div>

         

        </div>

        {/* CHALLENGES */}
        <div className="mb-24 bg-gray-50 rounded-3xl p-12 shadow-lg">

          <h2 className="text-4xl font-bold mb-8 text-center text-[#0f2a5f]">
            Challenges of Jugaad
          </h2>

          <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            While Jugaad promotes creativity and innovation, it can
            sometimes provide temporary solutions instead of sustainable
            long-term ones. Therefore, combining creativity with quality,
            safety, and proper engineering practices is essential for
            developing reliable and scalable innovations.
          </p>

        </div>

        {/* BENEFITS */}
        <div className="mb-24">

          <h2 className="text-4xl font-bold text-center mb-12 text-[#0f2a5f]">
            Benefits of Jugaad Innovation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-green-50 p-8 rounded-2xl shadow">
              ✅ Encourages Creative Thinking
            </div>

            <div className="bg-green-50 p-8 rounded-2xl shadow">
              ✅ Promotes Low-Cost Innovation
            </div>

            <div className="bg-green-50 p-8 rounded-2xl shadow">
              ✅ Improves Problem-Solving Skills
            </div>

            <div className="bg-green-50 p-8 rounded-2xl shadow">
              ✅ Develops Entrepreneurial Mindset
            </div>

            <div className="bg-green-50 p-8 rounded-2xl shadow">
              ✅ Encourages Sustainability
            </div>

            <div className="bg-green-50 p-8 rounded-2xl shadow">
              ✅ Makes Innovation Accessible to Everyone
            </div>

          </div>

        </div>

        {/* FINAL CTA */}
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white p-14 rounded-3xl text-center shadow-2xl">

          <h2 className="text-5xl font-bold mb-6">
            Innovation Begins with Creativity 🚀
          </h2>

          <p className="max-w-3xl mx-auto text-lg mb-8">
            Jugaad reminds us that innovation is not about having unlimited
            resources—it's about making the best use of what you already
            have. Every great invention starts with a creative idea and the
            courage to solve problems differently.
          </p>

          <a
            href="https://www.narayandojo.com/sundaylive"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-[#0f2a5f] px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300"
          >
            Register for FREE Live Session →
          </a>

        </div>

      </div>

    </div>
  );
}

export default JugaadPage;