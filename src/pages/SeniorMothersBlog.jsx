import React from "react";

function SeniorMothersBlog() {
  return (
    <div className="bg-white text-[#0f172a]">

      {/* HERO SECTION */}
      <div className="relative h-[420px] flex items-center justify-center text-white overflow-hidden">

        <img
          src="/motherday1.png"
          alt="Senior Mothers Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">

          <p className="text-sm uppercase tracking-[4px] text-pink-300 mb-4">
            STEM • Arduino • DIY Kits • Mothers Day
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Empowering Senior Mothers with Arduino Tinker Kits
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            May 6, 2023 • 1 min read
          </p>

        </div>

      </div>

      {/* BLOG CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-20">

        <p className="text-gray-500 mb-10">
          Updated: May 7, 2023
        </p>

        {/* INTRO */}
        <div className="space-y-8 text-lg text-gray-700 leading-8">

          <p>
            Here are some amazing ways senior citizens can benefit
            from using Arduino Tinker Kits and engaging in STEM-based
            DIY learning activities.
          </p>

        </div>

        {/* IMAGE */}
        <div className="my-16">

          <img
            src="/motherday1.png"
            alt="Boy gifting Arduino kit"
            className="w-full rounded-3xl shadow-xl"
          />

          <p className="text-center text-gray-500 mt-4 text-sm">
            A Boy Gifting Arduino Tinker Kit to his Grandmother
          </p>

        </div>

        {/* BENEFITS */}
        <div className="space-y-16">

          {/* BOOST CONFIDENCE */}
          <div>

            <h2 className="text-3xl font-bold text-pink-700 mb-6">
              Boost Confidence
            </h2>

            <p className="text-lg text-gray-700 leading-8">
              By learning electronics, coding, and completing projects
              using Arduino Tinker Kits, senior mothers can improve
              their confidence and gain a strong sense of achievement.
            </p>

          </div>

          {/* CREATIVITY */}
          <div>

            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Promote Creativity
            </h2>

            <p className="text-lg text-gray-700 leading-8">
              Arduino Tinker Kits provide endless opportunities
              to build creative inventions and DIY projects.
              This helps senior women express creativity while
              enjoying the learning experience.
            </p>

          </div>

          {/* COGNITIVE */}
          <div>

            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              Enhance Cognitive Function
            </h2>

            <p className="text-lg text-gray-700 leading-8">
              Working with electronics and solving project-based
              challenges helps improve problem-solving skills,
              memory, focus, and mental sharpness.
            </p>

          </div>

          {/* SOCIAL */}
          <div>

            <h2 className="text-3xl font-bold text-green-600 mb-6">
              Provide a Social Outlet
            </h2>

            <p className="text-lg text-gray-700 leading-8">
              Seniors can collaborate on Arduino projects with
              friends, family members, caregivers, and communities,
              helping reduce isolation and encouraging social interaction.
            </p>

          </div>

          {/* LEARNING */}
          <div>

            <h2 className="text-3xl font-bold text-purple-700 mb-6">
              Encourage Lifelong Learning
            </h2>

            <p className="text-lg text-gray-700 leading-8">
              Arduino Tinker Kits help senior mothers learn
              modern technology, coding, and electronics,
              opening doors to continuous learning and personal growth.
            </p>

          </div>

        </div>

        {/* CONCLUSION */}
        <div className="mt-20 bg-pink-50 p-10 rounded-3xl">

          <h2 className="text-4xl font-bold text-pink-700 mb-6">
            Conclusion
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            Arduino Tinker Kits are a wonderful STEM learning tool
            for senior mothers. They encourage creativity,
            confidence, social interaction, cognitive development,
            and lifelong learning through engaging hands-on projects.
          </p>

        </div>

        {/* LINK SECTION */}
        <div className="mt-16 text-center">

          <h3 className="text-2xl font-bold mb-6">
            Learn More About Arduino Tinker Kits
          </h3>

          <a
            href="https://www.narayandojo.com/stem-kits"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0f2a5f] hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Visit STEM Kits Website
          </a>

        </div>

      </div>

    </div>
  );
}

export default SeniorMothersBlog;