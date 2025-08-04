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
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "in-progress":
        return <Play className="h-5 w-5 text-blue-500" />;
      case "locked":
        return <Clock className="h-5 w-5 text-gray-400" />;
      default:
        return <BookOpen className="h-5 w-5 text-gray-400" />;
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
    <div className="min-h-screen bg-gray-50 p-6">
        <ClientNavigation />
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Curriculum</h1>
          <p className="text-gray-600">
            Your structured path to AI mastery - from beginner to expert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Total Modules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">1</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">1</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Overall Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">40%</div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {modules.map((module, index) => (
            <Card
              key={module.id}
              className={module.status === "locked" ? "opacity-60" : ""}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        {getStatusIcon(module.status)}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Module {index + 1}: {module.title}
                        </h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            module.status
                          )}`}
                        >
                          {module.status.charAt(0).toUpperCase() +
                            module.status.slice(1).replace("-", " ")}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{module.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{module.lessons} lessons</span>
                        <span>•</span>
                        <span>{module.duration}</span>
                      </div>
                      {module.status !== "locked" && (
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{module.progress}%</span>
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
                    {module.status === "completed" && (
                      <Button variant="outline">Review</Button>
                    )}
                    {module.status === "in-progress" && (
                      <Button>Continue</Button>
                    )}
                    {module.status === "locked" && (
                      <Button disabled>Locked</Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Learning Path Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">What You'll Achieve:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Build practical AI skills from scratch</li>
                  <li>• Master industry-standard AI tools</li>
                  <li>• Create real-world AI applications</li>
                  <li>• Understand AI ethics and best practices</li>
                  <li>• Receive a verified completion certificate</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Course Features:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
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
  );
}
