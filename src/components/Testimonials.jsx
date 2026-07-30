import React from "react";

function Testimonials() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* AI floating particles */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute top-20 left-10"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute top-40 right-20"></div>
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping absolute bottom-20 left-1/2"></div>

      </div>

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">

        <p className="text-blue-500 font-semibold tracking-widest">
          WHAT STUDENTS SAY
        </p>

        <h2 className="text-4xl font-bold mt-2">
          Student{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-400 bg-clip-text text-transparent">
            Testimonials
          </span>
        </h2>

      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 relative z-10">

        {/* Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300">

          <div className="text-orange-400 mb-3 text-lg animate-pulse">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-gray-600 italic mb-6">
            "Very Good guidance and curriculam by NarayanDojo. the child required coding knowledge in a week with affordable price is similar
             to what they get in two or three month from others. We need MORE SERVICE FROM Narayandojo"
          </p>

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
              S
            </div>

            <div>
              <h4 className="font-semibold">Sri Arya</h4>
              <p className="text-gray-500 text-sm">Student, 6th Grade</p>
            </div>

          </div>

        </div>

        {/* Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300">

          <div className="text-orange-400 mb-3 text-lg animate-pulse">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-gray-600 italic mb-6">
            "It was a lot of fun doing the session with you guys and we learned a lot of new techniques to make new games."
          </p>

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">
              P
            </div>

            <div>
              <h4 className="font-semibold">Pratik Mishra.</h4>
              <p className="text-gray-500 text-sm">Student, 5th Grade</p>
            </div>

          </div>

        </div>

        {/* Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300">

          <div className="text-orange-400 mb-3 text-lg animate-pulse">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-gray-600 italic mb-6">
          "The session was going so well. i learned so many things about coding."
          </p>

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
              J
            </div>

            <div>
              <h4 className="font-semibold">Jagriti Mazumdar</h4>
              <p className="text-gray-500 text-sm">Student, 5th Grade</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;