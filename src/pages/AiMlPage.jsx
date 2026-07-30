import React from "react";

function AiMlPage() {
  return (
    <div className="bg-white text-[#0f172a]">

      {/* HERO */}
      <div className="relative h-[350px] flex items-center justify-center text-white">

        <img
          src="/ai-banner.jpg"
          alt="AI ML"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
            AI & Machine Learning
          </h1>

          <p className="text-lg">
            Explore Artificial Intelligence Experiments with Google
          </p>
        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Watch this Webinar to explore AI Experiments with Google
        </h2>

        <div className="bg-blue-50 rounded-2xl p-8 shadow-lg">

          <p className="text-gray-700 leading-relaxed mb-6">
            STEM, or Science, Technology, Engineering, and Mathematics,
            is a pathway to a world of exciting discovery and learning.
            Did you know that 71% of careers today depend on computing skills?
            With the emergence of Artificial Intelligence and Machine Learning,
            these skills are becoming even more important.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            STEM is more than just computing skills. It is about fostering
            curiosity, innovation, and a passion for discovery in young minds.
            During the elementary years, children naturally explore and learn
            about the world around them, making STEM education especially valuable.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            STEM education offers many benefits, including preparation for
            future technologies, stronger problem-solving skills, and the ability
            to apply knowledge to real-world situations. Students learn to think
            critically, collaborate effectively, and develop skills needed for
            future careers.
          </p>

          <p className="text-gray-700 leading-relaxed">
            By providing opportunities to learn in a fun and engaging way,
            we help children develop the knowledge and confidence they need
            to thrive in a rapidly evolving world driven by technology.
          </p>

        </div>

        {/* VIDEO SECTION */}
        <div className="mt-16">

          <h3 className="text-3xl font-bold text-center text-red-600 mb-8">
            Watch Webinar 🎥
          </h3>

          <div className="flex justify-center">
            <iframe
              className="w-full max-w-4xl h-[250px] md:h-[500px] rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="AI Webinar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AiMlPage;