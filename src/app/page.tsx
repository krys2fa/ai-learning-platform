import React from "react";
import { Button } from "@/components/ui/button";
import ClientNavigation from "@/components/ClientNavigation";

export default function LandingPage() {
  return (
    <div>
      <ClientNavigation />
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-12 px-4 sm:px-8 md:px-16">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learn AI for Just $10/month – No Experience Needed
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Join 1,000+ learners in Ghana and Nigeria using AI to grow their
            skills and careers.
          </p>
          <p className="text-lg text-gray-600 mb-10">
            From August to December 2025, take a 4-month hands-on AI course with
            live classes, projects, and expert guidance — perfect for beginners
            from all careers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="px-6 py-3 text-lg bg-blue-600 text-white hover:bg-blue-700">
              Apply for Scholarship
            </Button>
            <Button variant="outline" className="px-6 py-3 text-lg">
              Enroll for $10/month
            </Button>
          </div>
        </section>

        <section className="max-w-3xl mx-auto text-left bg-white shadow-lg rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What You'll Learn
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>What AI really is and how it works</li>
            <li>How to use ChatGPT, Google Gemini, and other AI tools</li>
            <li>Build simple AI-powered apps — even as a beginner</li>
            <li>Apply AI to your career: teaching, business, finance, etc.</li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto text-left bg-white shadow-lg rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Course Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Duration:</strong> August–December 2025
            </li>
            <li>
              <strong>Schedule:</strong> 2 hours × 3 times per week
            </li>
            <li>
              <strong>Format:</strong> 100% online
            </li>
            <li>
              <strong>Cost:</strong> Only $10/month
            </li>
            <li>
              <strong>Extras:</strong> Certificate + project portfolio
            </li>
            <li>
              <strong>Access:</strong> Limited seats with scholarships
            </li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto text-left bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What Students Say
          </h2>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4">
            "As a teacher, I now use AI to grade and create lesson plans. This
            course made it so simple."
            <div className="text-sm text-gray-500 mt-1">— Mariam, Lagos</div>
          </blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
            "I built my first chatbot after just 6 weeks of the course!"
            <div className="text-sm text-gray-500 mt-1">— Kwame, Accra</div>
          </blockquote>
        </section>
      </main>
    </div>
  );
}
