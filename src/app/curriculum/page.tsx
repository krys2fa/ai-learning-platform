import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Play, CheckCircle, Clock } from "lucide-react";
import ClientNavigation from "@/components/ClientNavigation";

export default function Curriculum() {
  const modules = [
    {
      id: 1,
      title: "AI Fundamentals",
      description:
        "Learn the basics of artificial intelligence and machine learning",
      lessons: 12,
      duration: "4 weeks",
      progress: 100,
      status: "completed",
    },
    {
      id: 2,
      title: "ChatGPT Mastery",
      description: "Master prompt engineering and advanced ChatGPT techniques",
      lessons: 15,
      duration: "3 weeks",
      progress: 60,
      status: "in-progress",
    },
    {
      id: 3,
      title: "AI Tools for Business",
      description: "Apply AI tools to real business scenarios and workflows",
      lessons: 18,
      duration: "5 weeks",
      progress: 0,
      status: "locked",
    },
    {
      id: 4,
      title: "Building AI Applications",
      description: "Create your own AI-powered applications from scratch",
      lessons: 20,
      duration: "6 weeks",
      progress: 0,
      status: "locked",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />;
      case "in-progress":
        return <Play className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />;
      case "locked":
        return <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />;
      default:
        return <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-100";
      case "in-progress":
        return "text-blue-600 bg-blue-100";
      case "locked":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ClientNavigation />
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Curriculum</h1>
            <p className="text-sm sm:text-base text-gray-600">
              Your structured path to AI mastery - from beginner to expert.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  Total Modules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold">4</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold text-green-600">1</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold text-blue-600">1</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  Overall Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold text-purple-600">40%</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {modules.map((module, index) => (
              <Card
                key={module.id}
                className={`transition-all duration-200 hover:shadow-md ${module.status === "locked" ? "opacity-60" : ""}`}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          {getStatusIcon(module.status)}
                        </div>
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-1 sm:mb-2">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                            Module {index + 1}: {module.title}
                          </h3>
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              module.status
                            )} mt-1 sm:mt-0`}
                          >
                            {module.status.charAt(0).toUpperCase() + module.status.slice(1).replace('-', ' ')}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
                          {module.description}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0 sm:space-x-4">
                          <span>{module.lessons} lessons</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{module.duration}</span>
                        </div>
                        {module.progress > 0 && (
                          <div className="mt-2 sm:mt-3">
                            <div className="flex justify-between text-xs sm:text-sm mb-1">
                              <span className="text-gray-600">Progress</span>
                              <span className="text-gray-600">{module.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${module.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button
                        variant={module.status === "locked" ? "outline" : "default"}
                        size="sm"
                        disabled={module.status === "locked"}
                        className="w-full sm:w-auto"
                      >
                        {module.status === "completed"
                          ? "Review"
                          : module.status === "in-progress"
                          ? "Continue"
                          : "Start"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6 sm:mt-8 hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Course Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">What You'll Achieve:</h4>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                    <li>• Build practical AI skills from scratch</li>
                    <li>• Master industry-standard AI tools</li>
                    <li>• Create real-world AI applications</li>
                    <li>• Understand AI ethics and best practices</li>
                    <li>• Receive a verified completion certificate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Course Features:</h4>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                    <li>• Interactive lessons and hands-on projects</li>
                    <li>• Live weekly sessions with instructors</li>
                    <li>• Peer collaboration and discussion forums</li>
                    <li>• Regular assessments and feedback</li>
                    <li>• Career guidance and job placement support</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
