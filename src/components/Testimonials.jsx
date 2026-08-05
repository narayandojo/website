import React from "react";

function Testimonials() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-16 left-6 md:top-20 md:left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>

        <div className="absolute top-32 right-6 md:top-40 md:right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>

        <div className="absolute bottom-16 left-1/2 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>

      </div>

      {/* Heading */}
      <div className="relative z-10 text-center px-6 mb-12 md:mb-20">

        <p className="text-blue-500 font-semibold tracking-widest text-sm md:text-base">
          WHAT STUDENTS SAY
        </p>

        <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold">
          Student{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 bg-clip-text text-transparent">
            Testimonials
          </span>
        </h2>

        <p className="mt-4 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
          Hear what our students and parents have to say about their learning
          experience with NarayanDojo STEM Club.
        </p>

      </div>

      {/* Testimonials */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

        {/* Card 1 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <div className="text-orange-400 text-xl mb-4 animate-pulse">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-gray-600 italic leading-relaxed text-sm md:text-base mb-8">
            "Very good guidance and curriculum by NarayanDojo. My child learned
            coding concepts within a week at an affordable price. The progress
            was much faster than other programs. We look forward to more
            learning opportunities."
          </p>

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
              S
            </div>

            <div>
              <h4 className="font-semibold text-lg">
                Sri Arya
              </h4>

              <p className="text-gray-500 text-sm">
                Student, 6th Grade
              </p>
            </div>

          </div>

        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <div className="text-orange-400 text-xl mb-4 animate-pulse">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-gray-600 italic leading-relaxed text-sm md:text-base mb-8">
            "It was a lot of fun learning with NarayanDojo. We discovered new
            techniques for building games and enjoyed every session."
          </p>

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-lg">
              P
            </div>

            <div>
              <h4 className="font-semibold text-lg">
                Pratik Mishra
              </h4>

              <p className="text-gray-500 text-sm">
                Student, 5th Grade
              </p>
            </div>

          </div>

        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <div className="text-orange-400 text-xl mb-4 animate-pulse">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-gray-600 italic leading-relaxed text-sm md:text-base mb-8">
            "The sessions were excellent. I learned many new coding concepts
            and enjoyed working on practical projects."
          </p>

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
              J
            </div>

            <div>
              <h4 className="font-semibold text-lg">
                Jagriti Mazumdar
              </h4>

              <p className="text-gray-500 text-sm">
                Student, 5th Grade
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;