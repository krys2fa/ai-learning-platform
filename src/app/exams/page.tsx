import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, FileText, CheckCircle, AlertCircle } from "lucide-react";
import ClientNavigation from "@/components/ClientNavigation";

export default function Exams() {
  const exams = [
    {
      id: 1,
      title: "AI Fundamentals - Final Exam",
      duration: "90 minutes",
      questions: 50,
      status: "upcoming",
      dueDate: "2025-08-15",
      attempts: 0,
      maxAttempts: 2,
    },
    {
      id: 2,
      title: "ChatGPT Mastery Quiz",
      duration: "45 minutes",
      questions: 25,
      status: "completed",
      score: "85%",
      attempts: 1,
      maxAttempts: 3,
    },
    {
      id: 3,
      title: "AI Ethics Assessment",
      duration: "60 minutes",
      questions: 30,
      status: "available",
      dueDate: "2025-08-20",
      attempts: 0,
      maxAttempts: 2,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />;
      case "available":
        return <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />;
      case "upcoming":
        return <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />;
      default:
        return <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-100";
      case "available":
        return "text-blue-600 bg-blue-100";
      case "upcoming":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ClientNavigation />
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Exams & Assessments
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Track your exam progress and upcoming assessments.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  Total Exams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold">12</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold text-green-600">
                  8
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  Pending
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold text-blue-600">
                  3
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  Average Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold text-purple-600">
                  78%
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Exams List */}
          <div className="space-y-4 sm:space-y-6">
            {exams.map((exam) => (
              <Card key={exam.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1">
                      <div className="flex-shrink-0 mt-1 sm:mt-0">
                        {getStatusIcon(exam.status)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                          {exam.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-gray-600 mt-1 space-y-1 sm:space-y-0">
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                            {exam.duration}
                          </span>
                          <span className="hidden sm:inline">•</span>
                          <span>{exam.questions} questions</span>
                          <span className="hidden sm:inline">•</span>
                          <span>
                            Attempts: {exam.attempts}/{exam.maxAttempts}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:flex-shrink-0">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          exam.status
                        )}`}
                      >
                        {exam.status.charAt(0).toUpperCase() +
                          exam.status.slice(1)}
                      </span>

                      {exam.status === "completed" && exam.score && (
                        <div className="text-center sm:text-right">
                          <div className="text-lg font-bold text-green-600">
                            {exam.score}
                          </div>
                          <div className="text-xs text-gray-500">Score</div>
                        </div>
                      )}

                      {exam.status === "available" && (
                        <Button
                          size="sm"
                          className="w-full sm:w-auto text-xs sm:text-sm"
                        >
                          Start Exam
                        </Button>
                      )}

                      {exam.status === "upcoming" && exam.dueDate && (
                        <div className="text-center sm:text-right">
                          <div className="text-sm font-medium">
                            Due: {exam.dueDate}
                          </div>
                          <div className="text-xs text-gray-500">
                            Not yet available
                          </div>
                        </div>
                      )}

                      {exam.status === "completed" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full sm:w-auto text-xs sm:text-sm"
                        >
                          View Results
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Instructions */}
          <Card className="mt-6 sm:mt-8 hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Exam Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  • Ensure you have a stable internet connection before starting
                  any exam
                </li>
                <li>• Once started, you cannot pause the exam timer</li>
                <li>
                  • You can review and change your answers before final
                  submission
                </li>
                <li>
                  • Some exams have limited attempts - check the attempt counter
                  before starting
                </li>
                <li>
                  • Contact support if you experience technical difficulties
                  during an exam
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
