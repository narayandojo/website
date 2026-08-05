import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Floating AI Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute top-16 left-6 md:top-20 md:left-20"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute top-32 right-6 md:top-40 md:right-40"></div>
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping absolute bottom-16 left-1/2"></div>
      </div>

      {/* Heading */}
      <div className="text-center mb-12 md:mb-20 px-6 relative z-10">

        <p className="text-purple-500 font-semibold tracking-widest text-sm md:text-base">
          GET IN TOUCH
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
          Contact{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 bg-clip-text text-transparent">
            Us
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base md:text-lg">
          Ready to start your STEM journey? Reach out and we'll help you get started!
        </p>

      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-6 relative z-10">

        {/* Contact Form */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg space-y-5">

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
          ></textarea>

          <button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-orange-400 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-lg">
            Send Message
          </button>

        </div>

        {/* Contact Info */}
        <div className="space-y-6">

          {/* Email */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white p-5 rounded-2xl shadow hover:shadow-xl transition">

            <div className="bg-blue-100 p-4 rounded-xl text-blue-600 text-2xl">
              <FaEnvelope />
            </div>

            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-600 break-all">
                info.narayandojo@gmail.com
              </p>
            </div>

          </div>

          {/* Phone */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white p-5 rounded-2xl shadow hover:shadow-xl transition">

            <div className="bg-purple-100 p-4 rounded-xl text-purple-600 text-2xl">
              <FaPhone />
            </div>

            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-gray-600">
                +91 724 804 6685
              </p>
            </div>

          </div>

          {/* Location */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white p-5 rounded-2xl shadow hover:shadow-xl transition">

            <div className="bg-orange-100 p-4 rounded-xl text-orange-600 text-2xl">
              <FaMapMarkerAlt />
            </div>

            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-lg">Location</h4>
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