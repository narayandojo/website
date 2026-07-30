import React from "react";

function AboutPage() {
  return (
    <div className="bg-white text-[#0f172a]">

      {/* ================= HERO SECTION ================= */}
      <section className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white text-center px-6">

        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          About NarayanDojo
        </h1>

        <div className="max-w-4xl mx-auto space-y-6 text-gray-300 leading-relaxed text-lg">

          <p>
            At NARAYANDOJO, we believe all children can excel at learning,
            no matter where they start, where they live, or who they are.
            Unleashing this potential within every learner is what drives us.
          </p>

          <p>
            That’s why we developed DIY (Do-it-yourself) tinkering kits
            with an engaging game-like environment to change the learning paradigm.
          </p>

          <p>
            It is a ground-breaking, student-driven learning environment that
            leverages gaming fundamentals to inspire and empower students
            to build creativity, resilience, experimentation, teamwork,
            and problem-solving skills.
          </p>

          <p className="italic text-gray-400">
            "Creativity is the secret sauce to science,
            technology, engineering and maths"
            <br />
            – Ainissa Ramirez
          </p>

        </div>

      </section>

      {/* ================= MENTORS ================= */}
      <section className="py-24 bg-gray-50 text-center">

        <h2 className="text-5xl font-bold mb-16 text-[#001b63] drop-shadow-lg">
          MENTOR'S
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          {/* Mentor 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">

            <img
              src="/mentor1.jpg"
              alt="mentor"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100"
            />

            <h3 className="font-bold text-2xl text-[#0f2a5f]">
              VAIBHAV RAUT
            </h3>

            <p className="text-gray-500 text-sm mt-4 leading-7">
              Represented India in skill of Electrical installation
              in 45th world skill competition held in Kazan, Russia.
            </p>

          </div>

          {/* Mentor 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">

            <img
              src="/mentor2.jpg"
              alt="mentor"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100"
            />

            <h3 className="font-bold text-2xl text-[#0f2a5f]">
              SHRIKANT BORKAR
            </h3>

            <p className="text-gray-500 text-sm mt-4 leading-7">
              Electronics Manufacturing consultant,
              Black Belt Six Sigma (BBSS)
            </p>

          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">

            <img
              src="/mentor3.JPG"
              alt="mentor"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100"
            />

            <h3 className="font-bold text-2xl text-[#0f2a5f]">
              MANOJ KUMAR
            </h3>

            <p className="text-gray-500 text-sm mt-4 leading-7">
              Represented India in Electronics Skill at WorldSkills Kazan 2019. Represented India in Electronics Skill at WorldSkills . 
            </p>

          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">

            <img
              src="/mentor4.jpg"
              alt="mentor"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100"
            />

            <h3 className="font-bold text-2xl text-[#0f2a5f]">
              UDAY TADE
            </h3>

            <p className="text-gray-500 text-sm mt-4 leading-7">
              A retired Space Scientist and an electronics engineer. Currently working as Trainer, AI & Robotics to the cadets of Indian Army, Navy and Air Force at National Defence Academy, Khadakwasla,Pune.
            </p>

          </div>


        </div>

      </section>

      {/* ================= OUR AIM ================= */}
      <section className="py-24 bg-white text-center">

        <h2 className="text-5xl font-bold mb-16 text-[#001b63] drop-shadow-lg">
          OUR AIM
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">

          {/* SCIENCE */}
          <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl group">

            <img
              src="/science.png"
              alt="Science"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">

              <h3 className="text-2xl font-bold mb-6">
                SCIENCE
              </h3>

              <p className="text-sm leading-8 max-w-[220px]">
                We Provide Science-based Education,
                instruments & tools to invent
                technology for a better future
              </p>

            </div>

          </div>

          {/* TECHNOLOGY */}
          <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl group">

            <img
              src="/technology.png"
              alt="Technology"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">

              <h3 className="text-2xl font-bold mb-6">
                TECHNOLOGY
              </h3>

              <p className="text-sm leading-8 max-w-[220px]">
                NarayanDojo mainly focuses on awareness
                of the technology using hands-on experiments
              </p>

            </div>

          </div>

          {/* ENGINEERING */}
          <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl group">

            <img
              src="/engineering.png"
              alt="Engineering"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">

              <h3 className="text-2xl font-bold mb-6">
                ENGINEERING
              </h3>

              <p className="text-sm leading-8 max-w-[220px]">
                Engineering is necessary for building
                a better & innovative world.
                We provide engineering activities
                with specific problems
              </p>

            </div>

          </div>

          {/* MATHEMATICS */}
          <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl group">

            <img
              src="/mathematics.png"
              alt="Mathematics"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">

              <h3 className="text-2xl font-bold mb-6">
                MATHEMATICS
              </h3>

              <p className="text-sm leading-8 max-w-[220px]">
                Mathematics is in each and every particle.
                We provide mathematics and calculation-based
                activities for creative thinking problems
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY NARAYANDOJO ================= */}
      <section className="py-24 bg-[#f3f3f3] text-center">

        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-[#001b63] tracking-[8px] drop-shadow-lg">
          WHY NARAYANDOJO?
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">

          {/* CARD 1 */}
          <div className="relative h-[380px] overflow-hidden">

            <div className="absolute inset-0 bg-[#ff6b9a]"></div>
            <div 
            className="absolute inset-0 bg-[#ffd93d]"
            style={{clipPath: "polygon(70% 0%, 100% 0%, 30% 100%, 0% 100%)",}}
          ></div>

            <div className="absolute inset-0 flex items-center justify-center text-white px-8 animate-fade">

              <p className="text-lg font-semibold leading-10">
                Ingenuity plays a big role in STEM Education.
                It leads to new ideas & innovations.
              </p>

            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white animate-show">

              <div className="w-40 h-1 bg-yellow-300 mb-4"></div>

              <h3 className="text-5xl font-bold">
                INGENUITY
              </h3>

              <div className="w-40 h-1 bg-pink-200 mt-4"></div>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="relative h-[380px] overflow-hidden">

            <div className="absolute inset-0 bg-sky-400"></div>

            <div
              className="absolute inset-0 bg-yellow-300"
              style={{
                clipPath: "polygon(70% 0%, 100% 0%, 30% 100%, 0% 100%)",
              }}
            ></div>

            <div className="absolute inset-0 flex items-center justify-center text-white px-8 animate-fade">

              <p className="text-lg font-semibold leading-10">
                Building beautiful future,
                creativity is major to solve real-life problems.
              </p>

            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white animate-show">

              <div className="w-40 h-1 bg-sky-300 mb-4"></div>

              <h3 className="text-5xl font-bold">
                CREATIVITY
              </h3>

              <div className="w-40 h-1 bg-yellow-300 mt-4"></div>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="relative h-[380px] overflow-hidden">

            <div className="absolute inset-0 bg-green-400"></div>

            <div
              className="absolute inset-0 bg-sky-400"
              style={{
                clipPath: "polygon(70% 0%, 100% 0%, 30% 100%, 0% 100%)",
              }}
            ></div>

            <div className="absolute inset-0 flex items-center justify-center text-white px-8 animate-fade">

              <p className="text-lg font-semibold leading-10">
                For big success confidence or Self-Dependent
                plays a major role.
              </p>

            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white animate-show">

              <div className="w-40 h-1 bg-green-300 mb-4"></div>

              <h3 className="text-5xl font-bold">
                CONFIDENT
              </h3>

              <div className="w-40 h-1 bg-sky-300 mt-4"></div>

            </div>

          </div>

          {/* CARD 4 */}
          <div className="relative h-[380px] overflow-hidden">

            <div className="absolute inset-0 bg-pink-400"></div>

            <div
              className="absolute inset-0 bg-green-400"
              style={{
                clipPath: "polygon(70% 0%, 100% 0%, 30% 100%, 0% 100%)",
              }}
            ></div>

            <div className="absolute inset-0 flex items-center justify-center text-white px-8 animate-fade">

              <p className="text-lg font-semibold leading-10">
                So, by completing all those quality NarayanDojo
                makes your child a perfect future innovator.
              </p>

            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white animate-show">

              <div className="w-40 h-1 bg-pink-300 mb-4"></div>

              <h3 className="text-5xl font-bold">
                INNOVATORS
              </h3>

              <div className="w-40 h-1 bg-green-300 mt-4"></div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default AboutPage;