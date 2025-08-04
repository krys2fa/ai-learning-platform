import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import ClientNavigation from "@/components/ClientNavigation";

export default function Assignments() {
  const assignments = [
    {
      id: 1,
      title: "AI Ethics Essay",
      description:
        "Write a 1000-word essay on the ethical implications of AI in healthcare",
      course: "AI Fundamentals",
      dueDate: "2025-08-10",
      submittedDate: "2025-08-08",
      status: "submitted",
      grade: "A",
      points: 95,
    },
    {
      id: 2,
      title: "ChatGPT Prompt Engineering",
      description:
        "Create 10 effective prompts for different business scenarios",
      course: "ChatGPT Mastery",
      dueDate: "2025-08-12",
      status: "pending",
      points: 80,
    },
    {
      id: 3,
      title: "Build a Simple Chatbot",
      description: "Design and implement a basic customer service chatbot",
      course: "AI Applications",
      dueDate: "2025-08-15",
      status: "overdue",
      points: 120,
    },
    {
      id: 4,
      title: "AI Tool Comparison",
      description:
        "Compare and contrast different AI tools for content creation",
      course: "AI Tools for Business",
      dueDate: "2025-08-20",
      status: "upcoming",
      points: 75,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "pending":
        return <Clock className="h-5 w-5 text-blue-500" />;
      case "overdue":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case "upcoming":
        return <Calendar className="h-5 w-5 text-gray-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted":
        return "text-green-600 bg-green-100";
      case "pending":
        return "text-blue-600 bg-blue-100";
      case "overdue":
        return "text-red-600 bg-red-100";
      case "upcoming":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div>
      <ClientNavigation />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Assignments
            </h1>
            <p className="text-gray-600">
              Track your assignments and submit your work on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Submitted</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">8</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pending</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">5</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Average Grade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">B+</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {assignments.map((assignment) => {
              const daysUntilDue = getDaysUntilDue(assignment.dueDate);

              return (
                <Card key={assignment.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          {getStatusIcon(assignment.status)}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {assignment.title}
                            </h3>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                assignment.status
                              )}`}
                            >
                              {assignment.status.charAt(0).toUpperCase() +
                                assignment.status.slice(1)}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-2">
                            {assignment.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="font-medium">
                              {assignment.course}
                            </span>
                            <span>•</span>
                            <span>{assignment.points} points</span>
                            <span>•</span>
                            <span>Due: {assignment.dueDate}</span>
                            {assignment.status !== "submitted" &&
                              daysUntilDue >= 0 && (
                                <>
                                  <span>•</span>
                                  <span
                                    className={
                                      daysUntilDue <= 2
                                        ? "text-red-600 font-medium"
                                        : ""
                                    }
                                  >
                                    {daysUntilDue === 0
                                      ? "Due today"
                                      : `${daysUntilDue} days left`}
                                  </span>
                                </>
                              )}
                            {assignment.status === "overdue" && (
                              <>
                                <span>•</span>
                                <span className="text-red-600 font-medium">
                                  {Math.abs(daysUntilDue)} days overdue
                                </span>
                              </>
                            )}
                          </div>
                          {assignment.submittedDate && (
                            <div className="text-sm text-gray-500 mt-1">
                              Submitted: {assignment.submittedDate}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        {assignment.grade && (
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">
                              {assignment.grade}
                            </div>
                            <div className="text-xs text-gray-500">Grade</div>
                          </div>
                        )}

                        {assignment.status === "submitted" && (
                          <Button variant="outline">View Feedback</Button>
                        )}

                        {assignment.status === "pending" && (
                          <Button>Submit</Button>
                        )}

                        {assignment.status === "overdue" && (
                          <Button variant="destructive">Submit Late</Button>
                        )}

                        {assignment.status === "upcoming" && (
                          <Button variant="outline" disabled>
                            Not Available
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Assignment Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">
                    Submission Requirements:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Submit assignments before the due date</li>
                    <li>• Follow the specified format and word count</li>
                    <li>• Include proper citations and references</li>
                    <li>• Use clear and professional language</li>
                    <li>• Ensure all files are properly uploaded</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Grading Criteria:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Quality and depth of content (40%)</li>
                    <li>• Technical accuracy and understanding (30%)</li>
                    <li>• Creativity and originality (15%)</li>
                    <li>• Presentation and formatting (10%)</li>
                    <li>• Timeliness of submission (5%)</li>
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
