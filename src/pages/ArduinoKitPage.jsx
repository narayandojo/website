import React, { useState } from "react";

const faqs = [
  {
    question: "Who is the Arduino Tinker Kit for?",
    answer:
      "The kit is designed for beginners, school students, and curious learners who want to explore electronics, coding, robotics, and hands-on STEM projects.",
  },
  {
    question: "What can students build with the kit?",
    answer:
      "Students can build practical Arduino projects using LEDs, sensors, motors, buttons, buzzers, and other components included in the kit.",
  },
  {
    question: "Does a student need prior coding experience?",
    answer:
      "No. The projects start with beginner-friendly concepts and gradually introduce Arduino programming, circuits, sensors, and problem-solving.",
  },
  {
    question: "What is included in the box?",
    answer:
      "The kit includes an Arduino UNO board, breadboard, USB cable, jumper wires, LEDs, resistors, push buttons, sensors, a servo motor, activity material, and project components.",
  },
  {
    question: "Is guidance available while building projects?",
    answer:
      "Yes. Learners can follow the project material and receive guidance through the NarayanDojo STEM Club learning support and live mentoring sessions.",
  },
  {
    question: "Can the kit be used at home?",
    answer:
      "Yes. The kit is intended for hands-on learning at home, in classrooms, or during guided STEM sessions. Adult supervision is recommended for younger learners.",
  },
  {
    question: "What age group can use the kit?",
    answer:
      "The activities are suitable for school-age learners. The right starting project depends on the student's age, curiosity, and previous experience.",
  },
  {
    question: "Where can I buy the kit?",
    answer:
      "Use any Buy Now button on this page to view the Arduino Tinker Kit listing on Amazon.",
  },
];

const projectImages = [
  {
    src: "/arduino_tinker_kit_build.jpg",
    title: "Build",
    description: "Assemble circuits and learn how electronic components work together.",
  },
  {
    src: "/arduino_tinker_kit_code.jpg",
    title: "Code",
    description: "Turn ideas into working projects with beginner-friendly Arduino code.",
  },
  {
    src: "/arduino_tinker_kit_innovate.jpg",
    title: "Innovate",
    description: "Experiment with sensors and create useful inventions of your own.",
  },
];

function ArduinoKitPage() {
  const amazonUrl = "https://www.amazon.in/Generic-ARDUINO-TINKER-KIT/dp/B08HY3QKL9/";
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-white text-[#0f172a]">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#e6c08b] py-16 md:py-24 px-5 sm:px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Arduino Tinker Kit
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Inspire • Create • Innovate
            </p>

            <a
              href={amazonUrl}
              target="_blank"
              rel="noreferrer"
              className="buy-now-link inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full shadow-lg transition"
            >
              Buy Now
            </a>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            <img
              src="/arduino-hero.png"
              alt="Arduino Kit"
              className="w-64 sm:w-80 md:w-[420px] lg:w-[500px] rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </section>


      {/* ================= PROJECT GALLERY ================= */}
      <section className="py-16 md:py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-blue-600 font-semibold tracking-widest text-sm mb-3">
              LEARN BY DOING
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From first circuit to new invention</h2>
            <p className="text-gray-600 text-lg">
              Follow a clear learning path that makes every new project feel achievable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectImages.map((project) => (
              <article key={project.title} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img src={project.src} alt={`${project.title} Arduino project`} className="w-full aspect-[4/3] object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="/ArduinoTinkerKit_withLaptop.jpg" alt="Arduino Tinker Kit being used with a laptop" className="w-full h-72 object-cover rounded-2xl shadow-lg" />
            <img src="/components.jpg" alt="Arduino Tinker Kit electronic components" className="w-full h-72 object-cover rounded-2xl shadow-lg" />
            <img src="/arduino_tinker_kit_1.webp" alt="Arduino Tinker Kit product" className="w-full h-72 object-cover rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>

      

      {/* ================= PROJECT VIDEOS ================= */}

      <section className="py-16 md:py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-5">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Project Videos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {[
              "237tzcLpC5c",
              "8C9lNOh76cQ",
              "NNxnhmP8obE",
              "TnezeNGwYAU",
              "eB1AYRehbG8",
              "lrXYmMrIR5w",
            ].map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
              >
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${video}`}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= KIT DETAILS ================= */}
      <section className="bg-[#fff8ed] py-16 md:py-24 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/Inside_ArduinoTinkerKit.jpg"
              alt="Components inside the Arduino Tinker Kit"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-orange-600 font-semibold tracking-widest text-sm mb-3">
              EVERYTHING TO START BUILDING
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A complete hands-on learning experience
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The Arduino Tinker Kit brings electronics, coding, and creativity
              together in one practical learning experience. Students can move
              from understanding individual components to building working
              projects and improving them through experimentation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Arduino UNO board",
                "Breadboard and jumper wires",
                "LEDs, resistors, and buttons",
                "Sensors and servo motor",
                "USB programming cable",
                "Project activities and guidance",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start bg-white rounded-xl p-4 shadow-sm">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* ================= STUDENT ACTIVITIES ================= */}
      <section className="bg-gray-50 py-16 md:py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-purple-600 font-semibold tracking-widest text-sm mb-3">STUDENT ACTIVITIES</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning through making</h2>
            <p className="text-gray-600 text-lg">Real moments from young learners exploring projects and building with STEM.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                src: "/WhatsApp Image 2021-08-23 at 17.35.41.jpeg",
                description: "Exploring creative projects through practical, hands-on activities.",
                label: "Student learning moment",
              },
              {
                src: "/WhatsApp Image 2021-08-26 at 20.41.34.jpeg",
                description: "Building confidence by making, testing, and improving new ideas.",
                label: "Young innovator",
              },
            ].map((spotlight) => (
              <article key={spotlight.src} className="bg-white rounded-2xl shadow-lg p-5 flex flex-col sm:flex-row gap-6 items-center">
                <img src={spotlight.src} alt={spotlight.label} className="w-32 h-40 sm:w-36 sm:h-44 object-cover rounded-xl" />
                <div>
                  <p className="text-gray-600 leading-relaxed mb-4">{spotlight.description}</p>
                  <p className="font-semibold text-gray-900">{spotlight.label}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 md:py-24 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold tracking-widest text-sm mb-3">NEED TO KNOW</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently asked questions</h2>
            <p className="text-gray-600 text-lg">Everything parents and learners need to know before getting started.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.question} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-6 text-left px-5 py-5 font-semibold text-gray-900 hover:bg-gray-50"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="text-2xl text-blue-600 flex-shrink-0">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="py-16 md:py-20 bg-gradient-to-r from-red-500 to-orange-500 text-center text-white">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Building?
        </h2>

        <p className="mb-8 text-lg">
          Explore Arduino projects and become a young innovator.
        </p>

        <a
          href={amazonUrl}
          target="_blank"
          rel="noreferrer"
          className="buy-now-link inline-block bg-white text-red-500 font-semibold px-10 py-4 rounded-full shadow-xl hover:scale-105 transition"
        >
          Buy Now
        </a>

      </section>

    </div>
  );
}

export default ArduinoKitPage;