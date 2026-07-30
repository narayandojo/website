import React from "react";
import { FaRocket } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 px-6">

        {/* Logo + Description */}
        <div>

          <h2 className="flex items-center gap-2 text-white font-bold text-lg">
            <FaRocket /> NarayanDojo StemClub
          </h2>

          <p className="text-gray-400 mt-4 text-sm">
            Inspiring kids and students to learn, build,
            and innovate for a better future through STEM education.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Programs</li>
            <li>Activities</li>
          </ul>

        </div>

        {/* Programs */}
        <div>

          <h3 className="text-white font-semibold mb-4">
            Programs
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Coding for Kids</li>
            <li>Robotics & AI</li>
            <li>Web Development</li>
            <li>Innovation Lab</li>
          </ul>

        </div>

        {/* Connect */}
        <div>

          <h3 className="text-white font-semibold mb-4">
            Connect
          </h3>

          <p className="text-sm">info.narayandojo@gmail.com</p>
          <p className="text-sm mt-2">+91 98765 43210</p>

          <p className="text-sm mt-3">
            Instagram | YouTube | Twitter
          </p>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © 2026 NarayanDojo StemClub. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;