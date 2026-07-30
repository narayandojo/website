import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Scroll to section (works from any page)
  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/"); // go to home first
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/80 text-white px-10 py-4 flex justify-between items-center border-b border-gray-800">

      {/* Logo */}
      <div onClick={() => navigate("/")}
        className="flex items-center cursor-pointer">
          <img
            src="/favicon.png"
            alt="NarayanDojo StemClub"
            className="h-14 w-auto"
          />
      </div>

      {/* Menu */}
      <ul className="flex gap-8 font-medium">

        <li onClick={() => goToSection("home")} className="cursor-pointer hover:text-blue-400">
          Home
        </li>

        <li onClick={() => goToSection("about")} className="cursor-pointer hover:text-blue-400">
          About
        </li>

        <li onClick={() => goToSection("programs")} className="cursor-pointer hover:text-blue-400">
          Programs
        </li>

        <li onClick={() => goToSection("shop")} className="cursor-pointer hover:text-blue-400">
          Shop
        </li>

        <li onClick={() => goToSection("activities")} className="cursor-pointer hover:text-blue-400">
          Activities
        </li>

        <li onClick={() => goToSection("contact")} className="cursor-pointer hover:text-blue-400">
          Contact
        </li>

      </ul>

      {/* Join Button */}
      <button
        onClick={() => goToSection("contact")}
        className="bg-gradient-to-r from-purple-500 to-orange-400 px-5 py-2 rounded-full font-semibold hover:scale-105 transition transform shadow-lg shadow-purple-500/30"
      >
        Join Now
      </button>

    </nav>
  );
}

export default Navbar;