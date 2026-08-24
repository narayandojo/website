import React from "react";

function DroneBlog() {
  const droneUses = [
    {
      title: "Aerial Photography",
      description:
        "Capture stunning aerial photos and cinematic videos from unique perspectives.",
      color: "bg-cyan-50",
      icon: "📸",
    },
    {
      title: "Agriculture",
      description:
        "Monitor crops, analyze soil conditions, and improve farming efficiency using drone technology.",
      color: "bg-green-50",
      icon: "🌾",
    },
    {
      title: "Mapping & Surveying",
      description:
        "Create accurate aerial maps, land surveys, and 3D terrain models quickly.",
      color: "bg-orange-50",
      icon: "🗺️",
    },
    {
      title: "Search & Rescue",
      description:
        "Use thermal cameras and sensors to locate missing people in difficult environments.",
      color: "bg-purple-50",
      icon: "🚁",
    },
  ];

  return (
    <div className="bg-white text-[#0f172a]">

      {/* Hero Section */}
      <section className="relative h-[280px] sm:h-[380px] md:h-[500px] flex items-center justify-center overflow-hidden">

        <img
          src="/Drone.png"
          alt="Drone Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">

          <p className="uppercase tracking-[3px] text-cyan-300 text-xs sm:text-sm mb-4">
            Drone • UAV • Technology • Innovation
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Discover the World of Drones
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-200">
            Mar 10, 2023 • 2 min read
          </p>

        </div>

      </section>

      {/* Content */}

      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24">

        <p className="text-gray-500 mb-10">
          Updated: May 1, 2023
        </p>

        <div className="space-y-8 text-gray-700 text-base md:text-lg leading-8">

          <p>
            Drones, also known as <strong>Unmanned Aerial Vehicles (UAVs)</strong>,
            are transforming industries worldwide. They are widely used for
            photography, agriculture, mapping, inspections, disaster response,
            and many other applications.
          </p>

          <p>
            This blog explores drone technology, its components, applications,
            advantages, challenges, and the exciting future of UAVs.
          </p>

        </div>

        {/* Image */}

        <div className="my-16">

          <img
            src="/Drone.png"
            alt="Drone"
            className="w-full rounded-3xl shadow-2xl"
          />

          <p className="text-center text-gray-500 mt-4">
            Modern Drone Technology
          </p>

        </div>

        {/* Basics */}

        <div className="mb-20">

          <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8">
            The Basics of Drone Technology
          </h2>

          <div className="bg-cyan-50 rounded-3xl p-8 shadow-lg">

            <p className="text-gray-700 leading-8 mb-6">
              A drone mainly consists of controllers, motors, propellers,
              batteries, flight controllers, GPS modules, cameras,
              communication systems, and sensors.
            </p>

            <p className="text-gray-700 leading-8 mb-6">
              Quadcopters are the most common drones because four motors
              provide excellent balance, stability, and maneuverability.
            </p>

            <p className="text-gray-700 leading-8">
              Advanced drones also include obstacle detection,
              autonomous navigation, and AI-powered flight systems.
            </p>

          </div>

        </div>

        {/* Uses */}

        <div className="mb-20">

          <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 text-center mb-14">
            How Drones Are Used Today
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {droneUses.map((item, index) => (
              <div
                key={index}
                className={`${item.color} rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition`}
              >

                <div className="text-5xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-7">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Advantages */}

        <div className="mb-20">

          <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8">
            Advantages & Challenges
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="bg-green-50 rounded-3xl p-8 shadow-lg">

              <h3 className="text-2xl font-bold mb-4 text-green-700">
                ✅ Advantages
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Faster operations</li>
                <li>✔ Cost-effective</li>
                <li>✔ Access dangerous areas safely</li>
                <li>✔ High-quality aerial data</li>
                <li>✔ Time-saving</li>
              </ul>

            </div>

            <div className="bg-red-50 rounded-3xl p-8 shadow-lg">

              <h3 className="text-2xl font-bold mb-4 text-red-600">
                ⚠ Challenges
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Privacy concerns</li>
                <li>✔ Security risks</li>
                <li>✔ Battery limitations</li>
                <li>✔ Weather dependency</li>
                <li>✔ Government regulations</li>
              </ul>

            </div>

          </div>

        </div>

        {/* Future */}

        <div className="mb-20">

          <h2 className="text-3xl md:text-4xl font-bold text-cyan-700 mb-8">
            Future of Drones
          </h2>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            Drone technology is rapidly evolving with Artificial Intelligence,
            autonomous navigation, obstacle avoidance, and smart delivery
            systems. These innovations will transform logistics,
            healthcare, agriculture, and infrastructure management.
          </p>

          <p className="text-gray-700 text-lg leading-8">
            In the future, drones will become more intelligent,
            energy-efficient, and widely used across education,
            research, emergency response, and smart cities.
          </p>

        </div>

        {/* Conclusion */}

        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-3xl p-8 md:p-12 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Conclusion
          </h2>

          <p className="text-lg leading-8 max-w-3xl mx-auto">
            Drones are revolutionizing the way we work, explore,
            and innovate. From aerial photography and farming to
            disaster response and smart delivery, UAV technology
            continues to create exciting opportunities for the future.
          </p>

        </div>

      </section>

    </div>
  );
}

export default DroneBlog;