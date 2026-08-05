import React from "react";

function IoTPage() {
  const projects = [
    {
      title: "Pulse Counter",
      image: "/pulse-counter.png",
      color: "text-red-600",
      description:
        "Build an IoT-based Pulse Counter that monitors heart BPM in real-time using an OLED display and smartphone. Data is stored in the cloud and email alerts are sent if the heart rate exceeds the normal range.",
      components: [
        "NodeMCU (ESP8266)",
        "Pulse Sensor",
        "OLED Display",
        "Breadboard",
        "Jumper Wires",
        "Push Button",
        "LED",
        "Buzzer",
        "Resistor",
      ],
    },
    {
      title: "Pedometer",
      image: "/pedometer.png",
      color: "text-blue-600",
      description:
        "Create a smart IoT Pedometer that measures steps, distance traveled, and calories burned. View live data on your smartphone and cloud dashboard.",
      components: [
        "NodeMCU (ESP8266)",
        "Accelerometer",
        "OLED Display",
        "Breadboard",
        "Jumper Wires",
        "Push Button",
        "LED",
        "Buzzer",
        "Resistor",
      ],
    },
    {
      title: "Eye Blinker Monitor",
      image: "/eye-blinker.png",
      color: "text-green-600",
      description:
        "Develop an IoT healthcare device to monitor eye blinking patterns and sleep status using sensors, OLED display, and cloud connectivity.",
      components: [
        "NodeMCU (ESP8266)",
        "Eye Blinker IR Module",
        "OLED Display",
        "Breadboard",
        "Jumper Wires",
        "Push Button",
        "LED",
        "Buzzer",
        "Resistor",
      ],
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white py-16 md:py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            IoT Healthcare Projects Kit
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100">
            Learn Internet of Things by building real healthcare projects using
            sensors, cloud connectivity, and smart devices.
          </p>

        </div>

      </section>

      {/* Projects */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 md:py-24">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f2a5f] mb-16">
          IoT Healthcare Projects
        </h2>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Image */}

            <div>

              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-3xl shadow-2xl hover:scale-105 transition duration-300"
              />

            </div>

            {/* Content */}

            <div>

              <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${project.color}`}>
                {index + 1}. {project.title}
              </h3>

              <p className="text-gray-700 leading-8 mb-8">
                {project.description}
              </p>

              <div className="bg-white rounded-2xl shadow-lg p-6">

                <h4 className="text-xl font-bold mb-5 text-[#0f2a5f]">
                  Kit Components
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  {project.components.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="text-green-600">✔</span>
                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>
        ))}

      </section>

      {/* Live Sessions */}

      <section className="bg-white py-16 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f2a5f] mb-14">
            Live Online Sessions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-blue-50 rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

              <div className="text-5xl mb-4">📅</div>

              <h3 className="text-4xl font-bold text-blue-700 mb-3">
                4 Weeks
              </h3>

              <p className="text-gray-700">
                Program Duration
              </p>

            </div>

            <div className="bg-cyan-50 rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

              <div className="text-5xl mb-4">💻</div>

              <h3 className="text-4xl font-bold text-cyan-700 mb-3">
                12 Sessions
              </h3>

              <p className="text-gray-700">
                3 Sessions Per Week
              </p>

            </div>

            <div className="bg-green-50 rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

              <div className="text-5xl mb-4">⏰</div>

              <h3 className="text-4xl font-bold text-green-700 mb-3">
                2 Hours
              </h3>

              <p className="text-gray-700">
                Each Session
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-16">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Build the Future with IoT
          </h2>

          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Learn IoT, electronics, cloud computing, and healthcare
            technology by building innovative projects with expert guidance.
          </p>

          <button className="bg-white text-blue-700 px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Enroll Now
          </button>

        </div>

      </section>

    </div>
  );
}

export default IoTPage;