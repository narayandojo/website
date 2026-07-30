import React from "react";

function IoTPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-20 text-center">

        <h1 className="text-5xl font-bold mb-4">
          IoT Healthcare Projects Kit
        </h1>

        <p className="text-xl">
          Learn IoT by Building Real Healthcare Projects
        </p>

      </div>

      {/* Projects */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center text-[#0f2a5f] mb-12">
          IoT Healthcare Projects
        </h2>

        {/* Pulse Counter */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">

          <img
            src="/pulse-counter.png"
            alt="Pulse Counter"
            className="rounded-lg shadow-lg"
          />

          <div>

            <h3 className="text-3xl font-bold text-red-600 mb-4">
              1. Pulse Counter
            </h3>

            <p className="text-gray-700 mb-4">
              IoT gadget to monitor Heart BPM in real-time on OLED
              display and smartphone. Data is stored in the cloud
              and email alerts are sent when heartbeat exceeds
              normal range.
            </p>

            <h4 className="font-bold mb-3">Kit Components</h4>

            <ul className="list-disc ml-6">
              <li>NodeMCU (ESP8266)</li>
              <li>Pulse Sensor</li>
              <li>OLED Display</li>
              <li>Breadboard</li>
              <li>Jumper Wires</li>
              <li>Push Button</li>
              <li>LED</li>
              <li>Buzzer</li>
              <li>Resistor</li>
            </ul>

          </div>

        </div>

        {/* Pedometer */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">

          <div>

            <h3 className="text-3xl font-bold text-blue-600 mb-4">
              2. Pedometer
            </h3>

            <p className="text-gray-700 mb-4">
              Monitor step count, distance travelled and calories
              burned. View real-time data on smartphone and cloud.
            </p>

            <h4 className="font-bold mb-3">Kit Components</h4>

            <ul className="list-disc ml-6">
              <li>NodeMCU (ESP8266)</li>
              <li>Accelerometer</li>
              <li>OLED Display</li>
              <li>Breadboard</li>
              <li>Jumper Wires</li>
              <li>Push Button</li>
              <li>LED</li>
              <li>Buzzer</li>
              <li>Resistor</li>
            </ul>

          </div>

          <img
            src="/pedometer.png"
            alt="Pedometer"
            className="rounded-lg shadow-lg"
          />

        </div>

        {/* Eye Blinker */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">

          <img
            src="/eye-blinker.png"
            alt="Eye Blinker"
            className="rounded-lg shadow-lg"
          />

          <div>

            <h3 className="text-3xl font-bold text-green-600 mb-4">
              3. Eye Blinker
            </h3>

            <p className="text-gray-700 mb-4">
              IoT healthcare gadget to monitor eye twitching and
              sleep status using sensors and cloud technology.
            </p>

            <h4 className="font-bold mb-3">Kit Components</h4>

            <ul className="list-disc ml-6">
              <li>NodeMCU (ESP8266)</li>
              <li>Eye Blinker IR Module</li>
              <li>OLED Display</li>
              <li>Breadboard</li>
              <li>Jumper Wires</li>
              <li>Push Button</li>
              <li>LED</li>
              <li>Buzzer</li>
              <li>Resistor</li>
            </ul>

          </div>

        </div>

      </div>

      {/* Sessions */}
      <div className="bg-gray-100 py-16">

        <h2 className="text-4xl font-bold text-center text-[#0f2a5f] mb-12">
          Live Online Sessions
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">

          <div className="bg-white p-8 rounded-lg shadow text-center">
            <h3 className="text-3xl font-bold">4 Weeks</h3>
            <p>Program Duration</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow text-center">
            <h3 className="text-3xl font-bold">12 Sessions</h3>
            <p>3 Sessions Per Week</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow text-center">
            <h3 className="text-3xl font-bold">2 Hours</h3>
            <p>Each Session</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default IoTPage;