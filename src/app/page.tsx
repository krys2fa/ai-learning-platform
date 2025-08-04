import React from "react";
import { Button } from "@/components/ui/button";
import ClientNavigation from "@/components/ClientNavigation";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <ClientNavigation />
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Learn AI for Just $10/month – No Experience Needed
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
            Join 1,000+ learners in Ghana and Nigeria using AI to grow their
            skills and careers.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
            From August to December 2025, take a 4-month hands-on AI course with
            live classes, projects, and expert guidance — perfect for beginners
            from all careers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
              &quot;AI is the new electricity.&quot;
            </p>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg border-2 hover:bg-gray-50 transition-colors"
            >
              Enroll for $10/month
            </Button>
          </div>
        </section>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-12">
          <section className="bg-white shadow-lg rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
              What You&#39;ll Learn
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start text-gray-700">
                <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <span className="text-sm sm:text-base">
                  What AI really is and how it works
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <span className="text-sm sm:text-base">
                  How to use ChatGPT, Google Gemini, and other AI tools
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <span className="text-sm sm:text-base">
                  Build simple AI-powered apps — even as a beginner
                </span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                <span className="text-sm sm:text-base">
                  Apply AI to your career: teaching, business, finance, etc.
                </span>
              </li>
            </ul>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Course Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-800 text-sm sm:text-base mb-1 sm:mb-0 sm:w-24">
                    Duration:
                  </span>
                  <span className="text-gray-700 text-sm sm:text-base">
                    August–December 2025
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-800 text-sm sm:text-base mb-1 sm:mb-0 sm:w-24">
                    Schedule:
                  </span>
                  <span className="text-gray-700 text-sm sm:text-base">
                    2 hours × 3 times per week
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-800 text-sm sm:text-base mb-1 sm:mb-0 sm:w-24">
                    Format:
                  </span>
                  <span className="text-gray-700 text-sm sm:text-base">
                    100% online
                  </span>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-800 text-sm sm:text-base mb-1 sm:mb-0 sm:w-24">
                    Cost:
                  </span>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Only $10/month
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-800 text-sm sm:text-base mb-1 sm:mb-0 sm:w-24">
                    Extras:
                  </span>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Certificate + project portfolio
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-800 text-sm sm:text-base mb-1 sm:mb-0 sm:w-24">
                    Access:
                  </span>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Limited seats with scholarships
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white shadow-lg rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
              What Students Say
            </h2>
            <div className="space-y-6 sm:space-y-8">
              <blockquote className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                <p className="italic text-gray-700 mb-2 text-sm sm:text-base leading-relaxed">
                  &quot;As a teacher, I now use AI to grade and create lesson
                  plans. This course made it so simple.&quot;
                </p>
                <cite className="text-xs sm:text-sm text-gray-500 not-italic">
                  — Mariam, Lagos
                </cite>
              </blockquote>
              <blockquote className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                <p className="italic text-gray-700 mb-2 text-sm sm:text-base leading-relaxed">
                  &quot;I built my first chatbot after just 6 weeks of the
                  course!&quot;
                </p>
                <cite className="text-xs sm:text-sm text-gray-500 not-italic">
                  — Kwame, Accra
                </cite>
              </blockquote>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
