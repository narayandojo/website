import React from "react";
import { FaRocket } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-12 md:py-16">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 px-6 md:px-8">

        {/* Logo + Description */}
        <div className="text-center sm:text-left">

          <h2 className="flex items-center justify-center sm:justify-start gap-2 text-white font-bold text-xl">
            <FaRocket className="text-orange-400" />
            NarayanDojo StemClub
          </h2>

          <p className="text-gray-400 mt-4 text-sm leading-6">
            Inspiring kids and students to learn, build, and innovate for a
            better future through STEM education.
          </p>

        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">

          <h3 className="text-white font-semibold mb-4 text-lg">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-400 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-blue-400 cursor-pointer transition">
              About
            </li>

            <li className="hover:text-blue-400 cursor-pointer transition">
              Programs
            </li>

            <li className="hover:text-blue-400 cursor-pointer transition">
              Activities
            </li>
          </ul>

        </div>

        {/* Programs */}
        <div className="text-center sm:text-left">

          <h3 className="text-white font-semibold mb-4 text-lg">
            Programs
          </h3>

          <ul className="space-y-3 text-sm">

            <li className="hover:text-orange-400 cursor-pointer transition">
              Coding for Kids
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Robotics & AI
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Web Development
            </li>

            <li className="hover:text-orange-400 cursor-pointer transition">
              Innovation Lab
            </li>

          </ul>

        </div>

        {/* Connect */}
        <div className="text-center sm:text-left">

          <h3 className="text-white font-semibold mb-4 text-lg">
            Connect
          </h3>

          <p className="text-sm break-all">
            info.narayandojo@gmail.com
          </p>

          <p className="text-sm mt-3">
            +91 98765 43210
          </p>

          <p className="text-sm mt-4">
            Instagram | YouTube | Twitter
          </p>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 px-4 text-center text-xs md:text-sm text-gray-400">
        © 2026 NarayanDojo StemClub. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;