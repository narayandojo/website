import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSection = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800 text-white">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-4">

        {/* Logo */}
        <div
          onClick={() => {
            navigate("/");
            setMenuOpen(false);
          }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="/favicon.png"
            alt="NarayanDojo"
            className="h-10 md:h-14 w-auto"
          />

          <div className="hidden sm:block">
            <h2 className="font-bold text-lg">
              NarayanDojo
            </h2>

            <p className="text-xs text-gray-400">
              STEM Club
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">

          <li
            onClick={() => goToSection("home")}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            Home
          </li>

          <li
            onClick={() => goToSection("about")}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            About
          </li>

          <li
            onClick={() => goToSection("programs")}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            Programs
          </li>

          <li
            onClick={() => goToSection("shop")}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            Shop
          </li>

          <li
            onClick={() => goToSection("activities")}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            Activities
          </li>

          <li
            onClick={() => goToSection("contact")}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            Contact
          </li>

        </ul>

        {/* Desktop Button */}
        <button
          onClick={() => goToSection("contact")}
          className="hidden md:block bg-gradient-to-r from-purple-500 to-orange-400 px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
        >
          Join Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="bg-black border-t border-gray-700">

          {[
            ["Home", "home"],
            ["About", "about"],
            ["Programs", "programs"],
            ["Shop", "shop"],
            ["Activities", "activities"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <li
              key={id}
              onClick={() => goToSection(id)}
              className="py-4 text-center text-lg border-b border-gray-800 hover:bg-gray-900 hover:text-blue-400 cursor-pointer transition"
            >
              {label}
            </li>
          ))}

          <li className="p-4">
            <button
              onClick={() => goToSection("contact")}
              className="w-full bg-gradient-to-r from-purple-500 to-orange-400 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Join Now
            </button>
          </li>

        </ul>
      </div>

    </nav>
  );
}

export default Navbar;