import React from "react";
import { useNavigate } from "react-router-dom";

function StemKits() {
  const navigate = useNavigate();

  const products = [
    {
      title: "Narayandojo Stemclub Tinker Kit",
      description:
        "A beginner-friendly STEM kit with an Arduino board, sensors, components and 20+ hands-on projects.",
      price: "₹2,499",
      image: "https://m.media-amazon.com/images/I/41qwH-nw3UL._SX425_.jpg",
      amazonUrl: "https://www.amazon.in/Generic-ARDUINO-TINKER-KIT/dp/B08HY3QKL9/",
      detailsRoute: "/arduino-kit",
    },
    {
      title: "Narayandojo Stemclub Basic Starter Kit",
      description:
        "A compact Arduino UNO-compatible starter kit for learning basic electronics and coding.",
      price: "₹499",
      image: "https://m.media-amazon.com/images/I/71XBYNucb7L._SY450_.jpg",
      amazonUrl: "https://www.amazon.in/Narayandojo-Stemclub-Starter-Compatible-Arduino/dp/B0FMDST793/",
    },
    {
      title: "Narayandojo Stemclub Arduino and Breadboard Holder",
      description:
        "A pack of five wooden holders designed to keep Arduino boards and breadboards organised while prototyping.",
      price: "₹500",
      image: "https://m.media-amazon.com/images/I/81-w+aoFnxL._SX522_.jpg",
      amazonUrl: "https://www.amazon.in/Narayandojo-Stemclub-Arduino-Breadboard-Holder/dp/B08K5FRY9L/",
    },
  ];

  const buyOnAmazon = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="shop"
      className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-6 md:top-20 md:left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>

        <div className="absolute top-32 right-6 md:top-40 md:right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>

        <div className="absolute bottom-16 left-1/2 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center px-6 mb-12 md:mb-20">

        <p className="text-orange-500 font-semibold tracking-widest text-sm md:text-base">
          SHOP & LEARN
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 bg-clip-text text-transparent">
            STEM Kits
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
          Hands-on STEM kits designed to make learning fun, interactive, and
          engaging for every young innovator.
        </p>

      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

        {products.map((product) => (
          <article
            key={product.title}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-contain bg-gray-50 group-hover:scale-105 transition duration-300"
            />

            <div className="p-6 flex flex-col h-[310px]">
              <h3 className="text-xl font-semibold mb-3">{product.title}</h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                {product.description}
              </p>

              <p className="text-blue-600 text-2xl font-bold mb-5">
                {product.price}
              </p>

              <div className="mt-auto flex gap-3">
                {product.detailsRoute && (
                  <button
                    onClick={() => navigate(product.detailsRoute)}
                    className="flex-1 py-3 rounded-xl border border-blue-500 text-blue-600 font-semibold hover:bg-blue-50 transition"
                  >
                    Know More
                  </button>
                )}

                <button
                  onClick={() => buyOnAmazon(product.amazonUrl)}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-orange-400 text-white font-semibold hover:scale-105 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </article>
        ))}

      </div>
    </section>
  );
}

export default StemKits;