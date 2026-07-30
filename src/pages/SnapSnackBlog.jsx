import React from "react";

function SnapSnackBlog() {
  return (
    <div className="bg-white text-[#0f172a]">

      {/* HERO */}
      <div className="relative h-[450px] flex items-center justify-center text-white overflow-hidden">

        <img
          src="/snap-snack.jpg"
          alt="Snap & Snack"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">

          <p className="text-sm uppercase tracking-[4px] text-orange-300 mb-4">
            AI • Flutter • Cloud Run • Firestore
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Your AI-Powered Nutrition Guide: Snap & Snack
          </h1>

          

        </div>

      </div>

      {/* BLOG CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* INTRO */}
        <div className="space-y-8 text-lg text-gray-700 leading-8">

          <p>
            Ever wondered if snapping a picture of your food could do more
            than just look good on Instagram? With
            <span className="font-semibold"> Snap & Snack</span>, you can
            turn food photography into actionable nutritional insights.
            This AI-powered application helps users make smarter dietary
            choices effortlessly.
          </p>

          <p>
            By the end of this project, you’ll learn how to:
          </p>

          <ul className="list-disc pl-8 space-y-3">
            <li>Use Flutter to create an app for food image uploads.</li>
            <li>Set up an API on Cloud Run using Gemini AI.</li>
            <li>Store nutritional data inside Firestore.</li>
          </ul>

        </div>

        {/* PROBLEM */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-blue-800 mb-8">
            The Problem
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            Maintaining a healthy diet is often easier said than done.
            Manual food logging is tedious, and many users lack the
            expertise to analyze nutritional values accurately.
            This leads to unhealthy eating habits and inconsistent tracking.
          </p>

        </div>

        {/* SOLUTION */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-blue-800 mb-8">
            The Solution
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            Snap & Snack leverages advanced AI to process food images
            and generate detailed nutritional insights instantly.
            By combining AI analysis, cloud APIs, and Firestore storage,
            users can easily track and improve their eating habits.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-3 text-blue-700">
                Monitor Intake
              </h3>

              <p className="text-gray-700">
                Track calories, vitamins, carbs, and proteins instantly.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-3 text-orange-600">
                Smart Recommendations
              </h3>

              <p className="text-gray-700">
                Get AI-powered healthy eating suggestions.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-3 text-green-600">
                Food Tracking
              </h3>

              <p className="text-gray-700">
                Save and review your nutrition history anytime.
              </p>
            </div>

          </div>

        </div>

        {/* FEATURES */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-blue-800 mb-8">
            Features
          </h2>

          <div className="space-y-8">

            <div className="bg-gray-100 p-8 rounded-2xl">

              <h3 className="text-2xl font-bold mb-4">
                Instant Nutrition Analysis
              </h3>

              <p className="text-gray-700 leading-8">
                Upload a meal image and let Gemini API analyze it.
                The system provides nutritional information including
                calories, carbohydrates, protein, vitamins, and fiber.
              </p>

            </div>

            <div className="bg-gray-100 p-8 rounded-2xl">

              <h3 className="text-2xl font-bold mb-4">
                Effortless Logging
              </h3>

              <p className="text-gray-700 leading-8">
                Every analysis is automatically saved into Firestore,
                allowing users to maintain a complete nutrition diary
                without manual effort.
              </p>

            </div>

          </div>

        </div>

        {/* ARCHITECTURE */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-blue-800 mb-8">
            Architecture Overview
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white shadow-lg p-6 rounded-2xl text-center">
              <h3 className="font-bold text-xl mb-3">Flutter App</h3>
              <p className="text-gray-600">
                Upload food images from mobile devices.
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-2xl text-center">
              <h3 className="font-bold text-xl mb-3">Cloud Run API</h3>
              <p className="text-gray-600">
                Process requests and connect AI services.
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-2xl text-center">
              <h3 className="font-bold text-xl mb-3">Gemini AI</h3>
              <p className="text-gray-600">
                Analyze food images and nutritional values.
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-2xl text-center">
              <h3 className="font-bold text-xl mb-3">Firestore</h3>
              <p className="text-gray-600">
                Store nutrition history and user data.
              </p>
            </div>

          </div>

        </div>

        {/* DESIGN CHOICES */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-blue-800 mb-8">
            Design Choices
          </h2>

          <div className="space-y-5 text-lg text-gray-700 leading-8">

            <p>
              <span className="font-semibold">Flutter:</span> Chosen for
              cross-platform mobile development and rich UI support.
            </p>

            <p>
              <span className="font-semibold">Cloud Run:</span> Provides
              scalable serverless backend deployment.
            </p>

            <p>
              <span className="font-semibold">Gemini AI:</span> Performs
              intelligent food image analysis.
            </p>

            <p>
              <span className="font-semibold">Firestore:</span> Enables
              real-time storage and retrieval of nutritional data.
            </p>

          </div>

        </div>

        {/* CODE SECTION */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-blue-800 mb-8">
            Step-by-Step Instructions
          </h2>

          <div className="bg-black text-green-400 p-8 rounded-2xl overflow-auto">

            <pre className="text-sm leading-7">
{`flutter create snap_snack
cd snap_snack

dependencies:
  image_picker: ^0.8.5+3
  http: ^0.15.0`}
            </pre>

          </div>

        </div>

        {/* CHALLENGES */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-blue-800 mb-8">
            Challenges Faced
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            Initially, Firestore integration with Cloud Run failed due to
            incorrect database configuration settings. Switching Firestore
            into Native Mode resolved the issue successfully.
          </p>

        </div>

        {/* FUTURE */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-blue-800 mb-8">
            Future Developments
          </h2>

          <ul className="list-disc pl-8 space-y-4 text-lg text-gray-700">

            <li>Personalized nutrition recommendations.</li>

            <li>Interactive AI chatbot for diet guidance.</li>

            <li>Smart reminders for healthy eating habits.</li>

            <li>Advanced analytics dashboard.</li>

          </ul>

        </div>

        {/* CONCLUSION */}
        <div className="mt-20 bg-blue-50 p-10 rounded-3xl">

          <h2 className="text-4xl font-bold text-blue-800 mb-6">
            Conclusion
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            Snap & Snack bridges the gap between food photography and
            smart nutrition tracking. By combining Flutter, Gemini AI,
            Firestore, and Cloud Run, the application empowers users
            to make healthier lifestyle decisions effortlessly.
          </p>

        </div>

      </div>

    </div>
  );
}

export default SnapSnackBlog;