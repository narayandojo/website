import React from "react";

function DroneBlog() {
  return (
    <div className="bg-white text-[#0f172a]">

      {/* HERO SECTION */}
      <div className="relative h-[420px] flex items-center justify-center text-white overflow-hidden">

        <img
          src="/Drone.png"
          alt="Drone Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">

          <p className="text-sm uppercase tracking-[4px] text-cyan-300 mb-4">
            Drone • UAV • Technology • Innovation
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover The World Of Drone
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Mar 10, 2023 • 2 min read
          </p>

        </div>

      </div>

      {/* BLOG CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-20">

        <p className="text-gray-500 mb-10">
          Updated: May 1, 2023
        </p>

        {/* INTRO */}
        <div className="space-y-8 text-lg text-gray-700 leading-8">

          <p>
            Drones, also known as Unmanned Aerial Vehicles (UAVs),
            have become increasingly popular in recent years.
            They are used in photography, surveillance, agriculture,
            rescue operations, and many other industries.
          </p>

          <p>
            In this blog, we explore the basics of drone technology,
            their applications, advantages, challenges, and future scope.
          </p>

        </div>

        {/* IMAGE */}
        <div className="my-16">

          <img
            src="/Drone.png"
            alt="Drone"
            className="w-full rounded-3xl shadow-xl"
          />

          <p className="text-center text-gray-500 mt-4 text-sm">
            Modern Drone Technology
          </p>

        </div>

        {/* BASICS */}
        <div className="space-y-8">

          <h2 className="text-4xl font-bold text-cyan-700">
            The Basics of Drone Technology
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            Drones mainly consist of four important components:
            controllers, batteries, motors, and sensors.
            Controllers help steer the drone, while motors and
            batteries provide movement and power.
          </p>

          <p className="text-lg text-gray-700 leading-8">
            Sensors such as GPS and cameras collect data
            from the drone's surroundings.
          </p>

          <p className="text-lg text-gray-700 leading-8">
            Quadcopters are the most common type of drones,
            featuring four rotors that allow smooth hovering
            and directional movement.
          </p>

        </div>

        {/* USES */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-cyan-700 mb-10">
            How Drones are Used Today
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-cyan-50 p-8 rounded-3xl">

              <h3 className="text-2xl font-bold mb-4">
                Aerial Photography
              </h3>

              <p className="text-gray-700 leading-8">
                Drones capture stunning aerial photos and videos
                that are difficult to achieve using traditional cameras.
              </p>

            </div>

            <div className="bg-orange-50 p-8 rounded-3xl">

              <h3 className="text-2xl font-bold mb-4">
                Agriculture
              </h3>

              <p className="text-gray-700 leading-8">
                Drones monitor crops, analyze soil moisture,
                and improve farming decisions using sensors.
              </p>

            </div>

            <div className="bg-green-50 p-8 rounded-3xl">

              <h3 className="text-2xl font-bold mb-4">
                Mapping & Surveying
              </h3>

              <p className="text-gray-700 leading-8">
                Drones provide accurate aerial mapping
                and land surveying solutions.
              </p>

            </div>

            <div className="bg-purple-50 p-8 rounded-3xl">

              <h3 className="text-2xl font-bold mb-4">
                Search & Rescue
              </h3>

              <p className="text-gray-700 leading-8">
                Thermal cameras and sensors help locate
                missing persons in difficult environments.
              </p>

            </div>

          </div>

        </div>

        {/* ADVANTAGES */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-cyan-700 mb-8">
            Advantages and Challenges
          </h2>

          <p className="text-lg text-gray-700 leading-8 mb-8">
            Drones offer many benefits such as improved efficiency,
            lower operational costs, quick deployment,
            and better access to dangerous locations.
          </p>

          <p className="text-lg text-gray-700 leading-8">
            However, concerns regarding privacy, security,
            and safety remain important challenges that
            must be addressed carefully.
          </p>

        </div>

        {/* FUTURE */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-cyan-700 mb-8">
            Future of Drones
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            The future of drones looks extremely promising.
            Companies are already testing drone delivery systems,
            which could transform logistics and transportation.
          </p>

          <p className="text-lg text-gray-700 leading-8 mt-6">
            As technology evolves, drones will become smarter,
            safer, and more useful across industries such as
            healthcare, construction, security, and education.
          </p>

        </div>

        {/* CONCLUSION */}
        <div className="mt-20 bg-cyan-50 p-10 rounded-3xl">

          <h2 className="text-4xl font-bold text-cyan-700 mb-6">
            Conclusion
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            Drones are one of the most exciting technologies
            shaping the future. From photography and agriculture
            to rescue missions and delivery services,
            drones continue to unlock endless possibilities.
          </p>

        </div>

      </div>

    </div>
  );
}

export default DroneBlog;