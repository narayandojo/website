import React from "react";
import { useNavigate } from "react-router-dom";

function StemPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-[#0f172a]">

      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[600px] overflow-hidden">

        <img
          src="/stem-hero.jpg"
          alt="STEM Learning"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-blue-900/60 to-black/60"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 text-white">

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            STEM Learning
          </h1>

          <p className="max-w-3xl text-xl md:text-2xl leading-relaxed">
            Science • Technology • Engineering • Mathematics
            <br />
            Learn Electronics, Robotics, Coding & Innovation through
            hands-on STEM activities.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <button
              onClick={() => navigate("/arduino-kit")}
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition"
            >
              Buy STEM Kit
            </button>

            <button
              onClick={() => navigate("/coding-classroom")}
              className="border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              Explore Programs
            </button>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="py-16 bg-gray-50">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <h2 className="text-5xl font-bold text-blue-600">
              20+
            </h2>

            <p className="mt-3 text-gray-600">
              STEM Projects
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <h2 className="text-5xl font-bold text-orange-500">
              15+
            </h2>

            <p className="mt-3 text-gray-600">
              Electronic Sensors
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <h2 className="text-5xl font-bold text-green-600">
              1000+
            </h2>

            <p className="mt-3 text-gray-600">
              Students
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <h2 className="text-5xl font-bold text-purple-600">
              100%
            </h2>

            <p className="mt-3 text-gray-600">
              Hands-on Learning
            </p>

          </div>

        </div>

      </section>

      {/* ================= ABOUT STEM ================= */}

      <section className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16 items-center">

        <img
          src="/stem-about.jpg"
          alt="STEM"
          className="rounded-3xl shadow-2xl"
        />

        <div>

          <h2 className="text-5xl font-bold mb-8">
            What is STEM?
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-6">

            STEM stands for Science, Technology, Engineering and
            Mathematics. It is an integrated learning approach that
            encourages students to solve real-world problems through
            creativity, innovation and critical thinking.

          </p>

          <p className="text-lg text-gray-700 leading-8 mb-6">

            Instead of memorizing concepts, students learn by designing,
            experimenting, building and testing their own projects.

          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="bg-blue-50 p-5 rounded-xl">
              🔬 Science
            </div>

            <div className="bg-orange-50 p-5 rounded-xl">
              💻 Technology
            </div>

            <div className="bg-green-50 p-5 rounded-xl">
              ⚙ Engineering
            </div>

            <div className="bg-purple-50 p-5 rounded-xl">
              📐 Mathematics
            </div>

          </div>

        </div>

      </section>

      {/* ================= ARDUINO KIT ================= */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-5xl font-bold mb-8">
              Arduino Tinker STEM Kit
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-6">

              Arduino Tinker Kit is specially designed for beginners who
              want to learn Electronics, Coding, Robotics and Innovation.

            </p>

            <p className="text-lg text-gray-700 leading-8 mb-6">

              The kit includes 20+ practical STEM projects, Activity Book,
              E-Book and FREE weekend live classes where mentors help
              students build amazing innovations.

            </p>

            <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

              <h3 className="font-bold text-xl mb-3">
                Package Includes
              </h3>

              <ul className="space-y-2 text-gray-700">

                <li>✔ Arduino UNO</li>
                <li>✔ Sensors & Motors</li>
                <li>✔ Breadboard</li>
                <li>✔ Activity Book</li>
                <li>✔ Weekend Live Classes</li>
                <li>✔ E-Book (20+ Projects)</li>

              </ul>

            </div>

            <button
              onClick={() => navigate("/arduino-kit")}
              className="mt-10 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Explore Kit →
            </button>

          </div>

          <div>

            <img
              src="/kit-main.png"
              alt="Arduino Kit"
              className="rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </section>

    </div>
  );
}

export default StemPage;
      {/* ================= WHAT YOU GET ================= */}

      <section className="max-w-7xl mx-auto py-24 px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            What You'll Get Inside the Kit
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Everything you need to start your STEM journey.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            "Arduino UNO",
            "USB Cable",
            "Breadboard",
            "Jumper Wires",
            "LED Kit",
            "RGB LED",
            "Push Buttons",
            "Resistor Pack",
            "Potentiometer",
            "LDR Sensor",
            "PIR Sensor",
            "Ultrasonic Sensor",
            "Servo Motor",
            "DC Motor",
            "Buzzer",
            "Battery Holder",
            "Wooden Base",
            "Nut & Bolt Kit",
            "Activity Book",
            "E-Book",
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-4xl mb-4">📦</div>

              <h3 className="font-semibold text-lg">
                {item}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* ================= STEM BENEFITS ================= */}

      <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Benefits of STEM Learning
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg">

              <div className="text-5xl mb-6">💡</div>

              <h3 className="text-2xl font-bold mb-4">
                Creativity
              </h3>

              <p className="text-gray-700">
                Build innovative ideas and solve real-life problems through
                hands-on activities.
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">

              <div className="text-5xl mb-6">🧠</div>

              <h3 className="text-2xl font-bold mb-4">
                Critical Thinking
              </h3>

              <p className="text-gray-700">
                Improve analytical thinking through electronics,
                programming and engineering challenges.
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">

              <div className="text-5xl mb-6">🚀</div>

              <h3 className="text-2xl font-bold mb-4">
                Innovation
              </h3>

              <p className="text-gray-700">
                Learn how innovators create products using technology
                and design thinking.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PROJECT GALLERY ================= */}

      <section className="py-24">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Projects You Can Build
          </h2>

        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          {[
            {
              image: "/project1.jpg",
              title: "Smart Dustbin",
            },
            {
              image: "/project2.jpg",
              title: "Obstacle Avoiding Robot",
            },
            {
              image: "/project3.jpg",
              title: "Home Automation",
            },
            {
              image: "/project4.jpg",
              title: "Smart Street Light",
            },
            {
              image: "/project5.jpg",
              title: "Automatic Door",
            },
            {
              image: "/project6.jpg",
              title: "Water Level Indicator",
            },
          ].map((project, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= LEARNING OUTCOMES ================= */}

      <section className="bg-blue-700 text-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Skills You'll Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-xl">

            <div>✔ Arduino Programming</div>
            <div>✔ Basic Electronics</div>

            <div>✔ Circuit Design</div>
            <div>✔ Robotics</div>

            <div>✔ Sensor Interfacing</div>
            <div>✔ Coding Logic</div>

            <div>✔ Problem Solving</div>
            <div>✔ Design Thinking</div>

            <div>✔ Product Prototyping</div>
            <div>✔ Innovation Skills</div>

          </div>

        </div>

      </section>

      {/* ================= VIDEO ================= */}

      <section className="py-24">

        <div className="text-center">

          <h2 className="text-5xl font-bold mb-12">
            Watch Kit Unboxing
          </h2>

          <iframe
            className="w-[95%] md:w-[900px] h-[500px] mx-auto rounded-3xl shadow-2xl"
            src="https://www.youtube.com/embed/8C9lNOh76cQ"
            title="Arduino Kit"
            allowFullScreen
          ></iframe>

        </div>

      </section>
            {/* ================= TESTIMONIALS ================= */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            What Students Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg">

              <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>

              <p className="text-gray-700 italic leading-8">
                "The Arduino Tinker Kit made learning electronics fun and easy.
                I built my first robot in just a few days."
              </p>

              <h3 className="mt-6 font-bold text-blue-700">
                Aarav Sharma
              </h3>

              <p className="text-gray-500">
                Grade 8 Student
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">

              <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>

              <p className="text-gray-700 italic leading-8">
                "The live mentoring sessions helped me understand sensors,
                programming and robotics in a very practical way."
              </p>

              <h3 className="mt-6 font-bold text-orange-600">
                Ananya Verma
              </h3>

              <p className="text-gray-500">
                Grade 7 Student
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">

              <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>

              <p className="text-gray-700 italic leading-8">
                "Excellent STEM kit for beginners. Every weekend I learned
                something new while building exciting projects."
              </p>

              <h3 className="mt-6 font-bold text-green-600">
                Rohan Patel
              </h3>

              <p className="text-gray-500">
                Grade 9 Student
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="max-w-6xl mx-auto py-24 px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div className="bg-white shadow-lg rounded-2xl p-8">

            <h3 className="text-2xl font-bold">
              Who can use this kit?
            </h3>

            <p className="mt-3 text-gray-700">
              Students from Grade 6 onwards, beginners, hobbyists,
              teachers and STEM enthusiasts.
            </p>

          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">

            <h3 className="text-2xl font-bold">
              Do I need coding experience?
            </h3>

            <p className="mt-3 text-gray-700">
              No. The Arduino Tinker Kit is designed for complete beginners.
            </p>

          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">

            <h3 className="text-2xl font-bold">
              Will I receive live support?
            </h3>

            <p className="mt-3 text-gray-700">
              Yes. Weekend online mentoring sessions are included with the kit.
            </p>

          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8">

            <h3 className="text-2xl font-bold">
              What projects can I build?
            </h3>

            <p className="mt-3 text-gray-700">
              Smart Dustbin, Obstacle Robot, Home Automation,
              Smart Street Light, Water Level Indicator,
              Smart Door Lock and many more.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="bg-gradient-to-r from-blue-700 via-purple-700 to-orange-500 text-white py-28">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Become an Innovator?
          </h2>

          <p className="text-xl leading-8 max-w-3xl mx-auto mb-12">

            Learn Electronics, Robotics, Programming, Artificial Intelligence,
            Internet of Things and Design Thinking through exciting
            hands-on STEM projects.

          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <button
              onClick={() => navigate("/arduino-kit")}
              className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              Buy Arduino Kit
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="border-2 border-white px-10 py-4 rounded-full hover:bg-white hover:text-blue-700 transition"
            >
              Contact Us
            </button>

          </div>

        </div>

      </section>