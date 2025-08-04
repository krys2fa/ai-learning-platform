import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calendar,
  Trophy,
  Users,
  GraduationCap,
  FileText,
} from "lucide-react";
import ClientNavigation from "@/components/ClientNavigation";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ClientNavigation />
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Dashboard
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Welcome back! Here's your learning progress.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  Total Courses
                </CardTitle>
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">
                  +1 from last month
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  Assignments
                </CardTitle>
                <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">3 pending</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  Progress
                </CardTitle>
                <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold">68%</div>
                <p className="text-xs text-muted-foreground">
                  +12% from last week
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  Rank
                </CardTitle>
                <Users className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold">#15</div>
                <p className="text-xs text-muted-foreground">
                  Out of 1,247 students
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <Button
                  className="w-full justify-start text-sm sm:text-base h-10 sm:h-11"
                  variant="outline"
                >
                  <Calendar className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  View Today's Classes
                </Button>
                <Button
                  className="w-full justify-start text-sm sm:text-base h-10 sm:h-11"
                  variant="outline"
                >
                  <BookOpen className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Continue Learning
                </Button>
                <Button
                  className="w-full justify-start text-sm sm:text-base h-10 sm:h-11"
                  variant="outline"
                >
                  <FileText className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Submit Assignment
                </Button>
                <Button
                  className="w-full justify-start text-sm sm:text-base h-10 sm:h-11"
                  variant="outline"
                >
                  <Trophy className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  View Leaderboard
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium truncate">
                        Completed AI Fundamentals Quiz
                      </p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium truncate">
                        Attended Live Session: ChatGPT Basics
                      </p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium truncate">
                        Submitted Project: AI Chatbot
                      </p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Current Courses */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Your Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="border rounded-lg p-3 sm:p-4 hover:shadow-sm transition-shadow">
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">
                    AI Fundamentals
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    75% Complete
                  </p>
                </div>

                <div className="border rounded-lg p-3 sm:p-4 hover:shadow-sm transition-shadow">
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">
                    ChatGPT Mastery
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    45% Complete
                  </p>
                </div>

                <div className="border rounded-lg p-3 sm:p-4 hover:shadow-sm transition-shadow sm:col-span-2 lg:col-span-1">
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">
                    AI for Business
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    20% Complete
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
