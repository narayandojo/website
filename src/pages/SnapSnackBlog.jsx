import React from "react";

function SnapSnackBlog() {
  return (
    <div className="bg-white text-[#0f172a]">

      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[500px] overflow-hidden">

        <img
          src="/snap-snack.jpg"
          alt="Snap & Snack AI Nutrition"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70"></div>

        <div className="relative z-10 flex items-center justify-center h-full px-6">

          <div className="max-w-5xl text-center text-white">

            <span className="inline-block bg-orange-500 px-5 py-2 rounded-full text-sm uppercase tracking-widest mb-6">
              Flutter • Gemini AI • Cloud Run • Firestore
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
              Build Your AI-Powered
              <br />
              Nutrition Guide
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Learn how to create an intelligent mobile application that
              analyzes food images using AI and provides instant nutrition
              insights powered by Gemini AI.
            </p>

            <div className="mt-10 flex justify-center gap-5 flex-wrap">

              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold transition">
                Start Learning
              </button>

              <button className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition">
                View Source
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ================= BLOG HEADER ================= */}

      <section className="max-w-6xl mx-auto px-6 py-14">

        <div className="flex flex-wrap items-center gap-4 text-gray-500">

          <span>📅 July 2026</span>

          <span>•</span>

          <span>⏱ 10 min read</span>

          <span>•</span>

          <span>🤖 Artificial Intelligence</span>

          <span>•</span>

          <span>📱 Flutter Development</span>

        </div>

      </section>

      {/* ================= INTRODUCTION ================= */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-5xl font-bold text-[#0f2a5f] mb-10">
          Introduction
        </h2>

        <div className="space-y-8 text-lg leading-9 text-gray-700">

          <p>
            Have you ever wondered if taking a picture of your food could
            instantly tell you how healthy it is?
          </p>

          <p>
            <strong>Snap & Snack</strong> is an AI-powered mobile application
            that transforms a simple food photograph into detailed nutritional
            information. Instead of manually searching calories or entering
            ingredients one by one, users simply upload a picture and receive
            accurate AI-generated insights within seconds.
          </p>

          <p>
            The project combines modern mobile development with cloud computing
            and Artificial Intelligence to build a complete end-to-end
            nutrition assistant.
          </p>

          <p>
            Throughout this tutorial you'll learn how Flutter communicates with
            a Cloud Run backend, how Gemini AI analyzes food images, and how
            Firestore stores nutritional history for future reference.
          </p>

        </div>

      </section>

      {/* ================= WHAT YOU WILL LEARN ================= */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            What You'll Learn
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <div className="text-5xl mb-5">📱</div>

              <h3 className="font-bold text-2xl mb-4">
                Flutter
              </h3>

              <p className="text-gray-600">
                Build beautiful cross-platform mobile applications.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <div className="text-5xl mb-5">🤖</div>

              <h3 className="font-bold text-2xl mb-4">
                Gemini AI
              </h3>

              <p className="text-gray-600">
                Analyze food images using Google's latest AI models.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <div className="text-5xl mb-5">☁️</div>

              <h3 className="font-bold text-2xl mb-4">
                Cloud Run
              </h3>

              <p className="text-gray-600">
                Deploy scalable backend APIs without managing servers.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <div className="text-5xl mb-5">🔥</div>

              <h3 className="font-bold text-2xl mb-4">
                Firestore
              </h3>

              <p className="text-gray-600">
                Store nutrition history securely in the cloud.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= THE PROBLEM ================= */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-blue-800 mb-10">
          The Problem
        </h2>

        <div className="space-y-8 text-lg leading-9 text-gray-700">

          <p>
            Millions of people struggle to maintain healthy eating habits
            because nutrition tracking is often slow, repetitive and confusing.
          </p>

          <p>
            Existing calorie counting applications require users to search
            thousands of food items manually, estimate portion sizes and
            repeatedly enter information after every meal.
          </p>

          <p>
            This process quickly becomes frustrating, causing users to abandon
            healthy lifestyle tracking altogether.
          </p>

          <p>
            We wanted to build a smarter solution where Artificial Intelligence
            performs all the difficult work automatically.
          </p>

        </div>

      </section>

      {/* ================= THE SOLUTION ================= */}

      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-blue-800 mb-10">
            The Solution
          </h2>

          <p className="text-lg text-gray-700 leading-9 mb-12">

            Snap & Snack allows users to simply capture or upload a photo of
            their meal. The image is securely sent to a Cloud Run backend,
            analyzed using Gemini AI, and the nutritional information is stored
            in Firestore for future reference.

          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                📷 Capture
              </h3>

              <p className="text-gray-700">
                Take a picture of your breakfast, lunch or dinner.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="text-2xl font-bold text-green-700 mb-4">
                🤖 Analyze
              </h3>

              <p className="text-gray-700">
                Gemini AI identifies ingredients and calculates nutrition.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                📊 Track
              </h3>

              <p className="text-gray-700">
                Save results inside Firestore and monitor eating habits.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ================= FEATURES ================= */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-center text-[#0f2a5f] mb-16">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white shadow-xl rounded-3xl p-8 border">

            <div className="text-5xl mb-5">🍽️</div>

            <h3 className="text-2xl font-bold mb-4">
              AI Food Recognition
            </h3>

            <p className="text-gray-700 leading-8">
              Upload any food image and Gemini AI automatically detects
              dishes, ingredients, and serving size before generating
              nutritional information.
            </p>

          </div>

          <div className="bg-white shadow-xl rounded-3xl p-8 border">

            <div className="text-5xl mb-5">🔥</div>

            <h3 className="text-2xl font-bold mb-4">
              Calorie Detection
            </h3>

            <p className="text-gray-700 leading-8">
              Instantly estimate calories, carbohydrates, proteins,
              fats, fiber and vitamins for every meal.
            </p>

          </div>

          <div className="bg-white shadow-xl rounded-3xl p-8 border">

            <div className="text-5xl mb-5">📈</div>

            <h3 className="text-2xl font-bold mb-4">
              Nutrition History
            </h3>

            <p className="text-gray-700 leading-8">
              Store every analysis inside Firestore so users can
              review their eating habits over time.
            </p>

          </div>

          <div className="bg-white shadow-xl rounded-3xl p-8 border">

            <div className="text-5xl mb-5">⚡</div>

            <h3 className="text-2xl font-bold mb-4">
              Fast Processing
            </h3>

            <p className="text-gray-700 leading-8">
              Cloud Run scales automatically and processes requests
              within seconds.
            </p>

          </div>

        </div>

      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-20">
            How Snap & Snack Works
          </h2>

          <div className="grid lg:grid-cols-5 gap-6 text-center">

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="font-bold text-xl mb-3">Step 1</h3>
              <p className="text-gray-600">
                User captures a food image.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="text-6xl mb-4">📤</div>
              <h3 className="font-bold text-xl mb-3">Step 2</h3>
              <p className="text-gray-600">
                Flutter uploads image to Cloud Run.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="font-bold text-xl mb-3">Step 3</h3>
              <p className="text-gray-600">
                Gemini AI analyzes food items.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="text-6xl mb-4">🔥</div>
              <h3 className="font-bold text-xl mb-3">Step 4</h3>
              <p className="text-gray-600">
                Firestore stores nutrition data.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="font-bold text-xl mb-3">Step 5</h3>
              <p className="text-gray-600">
                User views detailed nutrition report.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= ARCHITECTURE ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-center text-[#0f2a5f] mb-16">
          System Architecture
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-blue-50 rounded-3xl p-8 shadow-lg">

            <h3 className="font-bold text-2xl mb-4 text-blue-700">
              Flutter
            </h3>

            <p className="text-gray-700 leading-8">
              User interface for capturing images and displaying
              nutritional reports.
            </p>

          </div>

          <div className="bg-orange-50 rounded-3xl p-8 shadow-lg">

            <h3 className="font-bold text-2xl mb-4 text-orange-600">
              Cloud Run
            </h3>

            <p className="text-gray-700 leading-8">
              Receives requests, validates data and securely calls
              Gemini AI.
            </p>

          </div>

          <div className="bg-green-50 rounded-3xl p-8 shadow-lg">

            <h3 className="font-bold text-2xl mb-4 text-green-600">
              Gemini AI
            </h3>

            <p className="text-gray-700 leading-8">
              Detects food items and estimates nutritional values.
            </p>

          </div>

          <div className="bg-purple-50 rounded-3xl p-8 shadow-lg">

            <h3 className="font-bold text-2xl mb-4 text-purple-700">
              Firestore
            </h3>

            <p className="text-gray-700 leading-8">
              Stores user history and nutrition records securely.
            </p>

          </div>

        </div>

      </section>

      {/* ================= PROJECT SETUP ================= */}

      <section className="bg-[#111827] text-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold mb-12">
            Project Setup
          </h2>

          <div className="bg-black rounded-3xl p-8 overflow-auto">

<pre className="text-green-400 text-sm leading-8">
{`flutter create snap_snack

cd snap_snack

flutter pub add image_picker

flutter pub add http

flutter pub add cloud_firestore

flutter pub add firebase_core

flutter pub add provider

flutter pub get`}
</pre>

          </div>

        </div>

      </section>

      {/* ================= FOLDER STRUCTURE ================= */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-[#0f2a5f] mb-12">
          Folder Structure
        </h2>

        <div className="bg-gray-900 rounded-3xl p-8 overflow-auto">

<pre className="text-green-400 leading-7">
{`lib/

├── models/

├── screens/

│     ├── home_page.dart

│     ├── history_page.dart

│     └── result_page.dart

├── services/

│     ├── api_service.dart

│     └── firestore_service.dart

├── widgets/

├── utils/

└── main.dart`}
</pre>

        </div>

      </section>
            {/* ================= DESIGN DECISIONS ================= */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-[#0f2a5f] mb-12">
          Design Decisions
        </h2>

        <div className="space-y-8 text-lg text-gray-700 leading-9">

          <p>
            <span className="font-bold text-blue-700">Flutter</span> was
            selected because it enables developers to build beautiful,
            responsive applications for Android and iOS using a single
            codebase.
          </p>

          <p>
            <span className="font-bold text-orange-600">Cloud Run</span>
            provides a fully managed serverless platform that automatically
            scales based on incoming requests.
          </p>

          <p>
            <span className="font-bold text-green-600">Gemini AI</span>
            enables accurate food recognition and generates nutritional
            information using advanced multimodal AI.
          </p>

          <p>
            <span className="font-bold text-purple-600">Firestore</span>
            stores meal history in real time and synchronizes data securely
            across multiple devices.
          </p>

        </div>

      </section>

      {/* ================= APPLICATION SCREENS ================= */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Application Screens
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <div className="text-6xl mb-6">🏠</div>

              <h3 className="font-bold text-2xl mb-4">
                Home Screen
              </h3>

              <p className="text-gray-600">
                Capture or upload food images directly from the phone.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <div className="text-6xl mb-6">📷</div>

              <h3 className="font-bold text-2xl mb-4">
                Camera Screen
              </h3>

              <p className="text-gray-600">
                Choose gallery images or capture meals instantly.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <div className="text-6xl mb-6">📊</div>

              <h3 className="font-bold text-2xl mb-4">
                Results
              </h3>

              <p className="text-gray-600">
                Display calories, protein, carbs, vitamins and minerals.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <div className="text-6xl mb-6">📜</div>

              <h3 className="font-bold text-2xl mb-4">
                History
              </h3>

              <p className="text-gray-600">
                Review previous food analyses stored in Firestore.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FIRESTORE ================= */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-blue-800 mb-12">
          Firestore Integration
        </h2>

        <div className="space-y-8 text-lg text-gray-700 leading-9">

          <p>
            Every nutrition analysis is automatically saved inside
            Firestore. Users can revisit previous meals without repeating
            the AI analysis.
          </p>

          <p>
            Each document stores:
          </p>

          <ul className="list-disc pl-8 space-y-4">

            <li>Food Name</li>

            <li>Calories</li>

            <li>Protein</li>

            <li>Carbohydrates</li>

            <li>Fat</li>

            <li>Fiber</li>

            <li>Timestamp</li>

            <li>Image URL</li>

          </ul>

        </div>

      </section>

      {/* ================= GEMINI AI ================= */}

      <section className="bg-blue-50 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-blue-800 mb-14">
            Gemini AI Integration
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="text-2xl font-bold mb-5">
                Image Understanding
              </h3>

              <p className="text-gray-700 leading-8">
                Gemini recognizes dishes, fruits, vegetables, drinks,
                desserts and mixed meals directly from uploaded images.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="text-2xl font-bold mb-5">
                Nutrition Estimation
              </h3>

              <p className="text-gray-700 leading-8">
                AI estimates calories, vitamins, carbohydrates,
                proteins, fats and dietary fiber.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= API FLOW ================= */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-[#0f2a5f] mb-12">
          API Flow
        </h2>

        <div className="bg-gray-900 rounded-3xl p-8 overflow-auto">

<pre className="text-green-400 leading-8">
{`Flutter App
      │
      ▼
Capture Image
      │
      ▼
Cloud Run API
      │
      ▼
Gemini AI
      │
      ▼
Nutrition JSON
      │
      ▼
Firestore Database
      │
      ▼
Flutter UI`}
</pre>

        </div>

      </section>

      {/* ================= SAMPLE RESPONSE ================= */}

      <section className="bg-black text-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold mb-12">
            Sample API Response
          </h2>

          <div className="bg-gray-900 rounded-3xl p-8 overflow-auto">

<pre className="text-green-400 leading-7">
{`{
  "food":"Veg Sandwich",
  "calories":"310 kcal",
  "protein":"12 g",
  "carbohydrates":"38 g",
  "fat":"9 g",
  "fiber":"6 g"
}`}
</pre>

          </div>

        </div>

      </section>

      {/* ================= CHALLENGES ================= */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-red-600 mb-12">
          Challenges & Solutions
        </h2>

        <div className="space-y-10">

          <div className="bg-red-50 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-4">
              Firestore Configuration
            </h3>

            <p className="text-gray-700 leading-8">
              Initially Firestore requests failed because the project
              wasn't using Native Mode. After enabling Native Mode,
              data synchronization worked successfully.
            </p>

          </div>

          <div className="bg-yellow-50 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-4">
              AI Accuracy
            </h3>

            <p className="text-gray-700 leading-8">
              Some food images contained multiple dishes. Prompt
              engineering improved Gemini's response quality.
            </p>

          </div>

        </div>

      </section>
            {/* ================= FUTURE ENHANCEMENTS ================= */}

      <section className="bg-gradient-to-r from-blue-50 via-cyan-50 to-indigo-50 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-[#0f2a5f] mb-16">
            Future Enhancements
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">
                🥗 Personalized Diet Plans
              </h3>
              <p className="text-gray-700 leading-8">
                Generate customized meal plans based on age, weight,
                fitness goals, allergies and dietary preferences.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-green-700">
                💬 AI Nutrition Chatbot
              </h3>
              <p className="text-gray-700 leading-8">
                Chat with Gemini AI for healthy food recommendations
                and nutrition advice.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                ⌚ Smart Watch Support
              </h3>
              <p className="text-gray-700 leading-8">
                Sync calories and activity data with wearable devices.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">
                📈 Analytics Dashboard
              </h3>
              <p className="text-gray-700 leading-8">
                Weekly nutrition reports, charts and health insights.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= TECHNOLOGY STACK ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-center mb-16">
          Technology Stack
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

          {[
            "Flutter",
            "Dart",
            "Firebase",
            "Firestore",
            "Gemini AI",
            "Cloud Run",
          ].map((tech) => (
            <div
              key={tech}
              className="bg-white border rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <h3 className="font-bold text-lg">{tech}</h3>
            </div>
          ))}

        </div>

      </section>

      {/* ================= BENEFITS ================= */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Why Use Snap & Snack?
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white rounded-3xl shadow-lg p-8">
              ✅ Automatic calorie estimation
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              ✅ AI-powered food recognition
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              ✅ Cloud data synchronization
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              ✅ Nutrition history tracking
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              ✅ Beginner-friendly Flutter project
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              ✅ Modern Google Cloud architecture
            </div>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="font-bold text-xl mb-3">
              Is Flutter required?
            </h3>

            <p className="text-gray-700">
              Yes. Flutter is used for building the mobile application.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="font-bold text-xl mb-3">
              Can I use another AI model?
            </h3>

            <p className="text-gray-700">
              Yes, but this project is optimized for Gemini AI.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="font-bold text-xl mb-3">
              Is Firestore mandatory?
            </h3>

            <p className="text-gray-700">
              No. You can replace it with another database if required.
            </p>
          </div>

        </div>

      </section>

      {/* ================= TESTIMONIAL ================= */}

      <section className="bg-blue-700 text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold mb-8">
            Developer Experience
          </h2>

          <p className="text-xl leading-9 italic">
            "Snap & Snack demonstrates how Flutter, Gemini AI and Google
            Cloud services can work together to create intelligent
            real-world applications."
          </p>

        </div>

      </section>

      {/* ================= CALL TO ACTION ================= */}

      <section className="bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 text-white py-24">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-6xl font-bold mb-8">
            Start Building Today 🚀
          </h2>

          <p className="text-xl leading-9 mb-10">
            Build your own AI-powered nutrition assistant using Flutter,
            Gemini AI, Firestore and Cloud Run while learning modern
            cloud application development.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Explore Project
            </button>

            <button className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-700 transition">
              Download Source
            </button>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-[#0f172a] text-white py-12">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Snap & Snack
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto leading-8">
            An educational AI project demonstrating Flutter, Google
            Gemini AI, Firestore and Cloud Run for intelligent
            nutrition tracking.
          </p>

          <hr className="border-gray-700 my-10" />

          <p className="text-gray-500">
            © 2026 NarayanDojo STEM Club. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default SnapSnackBlog;