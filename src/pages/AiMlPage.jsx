import React from "react";

function AiMlPage() {
  return (
    <div className="bg-white text-[#0f172a]">

      {/* ================= HERO ================= */}
      <section className="relative h-[280px] sm:h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">

        <img
          src="/ai-banner.jpg"
          alt="AI & Machine Learning"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-5">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            AI & Machine Learning
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Explore Artificial Intelligence and Machine Learning through
            exciting Google AI Experiments and hands-on STEM activities.
          </p>

        </div>

      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24">

        <div className="max-w-6xl mx-auto px-5 sm:px-6">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-700 mb-10">
            Watch this Webinar to Explore AI Experiments with Google
          </h2>

          <div className="bg-blue-50 rounded-2xl shadow-xl p-6 md:p-10">

            <p className="text-gray-700 leading-8 text-base md:text-lg mb-6">
              STEM (Science, Technology, Engineering, and Mathematics)
              opens the door to innovation and future technologies.
              Today, over 70% of careers require digital and computing
              skills, making Artificial Intelligence and Machine Learning
              more important than ever.
            </p>

            <p className="text-gray-700 leading-8 text-base md:text-lg mb-6">
              AI is transforming healthcare, education, transportation,
              agriculture, robotics, and countless other industries.
              Learning AI at an early age helps students develop
              logical thinking, creativity, and problem-solving skills.
            </p>

            <p className="text-gray-700 leading-8 text-base md:text-lg mb-6">
              Through interactive projects, coding activities, and
              AI experiments, students gain hands-on experience while
              building confidence to solve real-world challenges.
            </p>

            <p className="text-gray-700 leading-8 text-base md:text-lg">
              At NarayanDojo STEM Club, we inspire students to explore
              Artificial Intelligence in a fun, engaging, and practical
              way that prepares them for tomorrow's technology-driven world.
            </p>

          </div>

          {/* ================= FEATURES ================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="font-bold text-xl mb-2">
                AI Basics
              </h3>
              <p className="text-gray-600">
                Learn the fundamentals of Artificial Intelligence.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="font-bold text-xl mb-2">
                Machine Learning
              </h3>
              <p className="text-gray-600">
                Understand how computers learn from data.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="font-bold text-xl mb-2">
                AI Projects
              </h3>
              <p className="text-gray-600">
                Build exciting AI applications with real-world examples.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="font-bold text-xl mb-2">
                Future Skills
              </h3>
              <p className="text-gray-600">
                Prepare for tomorrow's careers using AI technologies.
              </p>
            </div>

          </div>

          {/* ================= VIDEO ================= */}

          <div className="mt-20">

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-red-600 mb-10">
              Watch Webinar 🎥
            </h3>

            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">

              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="AI Webinar"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default AiMlPage;