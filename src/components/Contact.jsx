import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >

      {/* Floating AI particles */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute top-20 left-20"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute top-40 right-40"></div>
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping absolute bottom-20 left-1/2"></div>

      </div>

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">

        <p className="text-purple-500 font-semibold tracking-widest">
          GET IN TOUCH
        </p>

        <h2 className="text-4xl font-bold mt-2">
          Contact{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 bg-clip-text text-transparent">
            Us
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Ready to start your STEM journey? Reach out and we'll help you get started!
        </p>

      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 relative z-10">

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button className="bg-gradient-to-r from-blue-500 to-orange-400 text-white px-6 py-3 rounded-lg hover:scale-105 transition shadow-lg">
            Send Message
          </button>

        </div>

        {/* Contact Info */}
        <div className="space-y-8">

          <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition">

            <div className="bg-blue-100 p-3 rounded-lg text-blue-600 text-xl">
              <FaEnvelope />
            </div>

            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600">
                info.narayandojo@gmail.com
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition">

            <div className="bg-purple-100 p-3 rounded-lg text-purple-600 text-xl">
              <FaPhone />
            </div>

            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-600">
                +91 724 804 6685
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition">

            <div className="bg-orange-100 p-3 rounded-lg text-orange-600 text-xl">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-600">
                India
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;