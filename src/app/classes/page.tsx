import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, Users } from "lucide-react";
import ClientNavigation from "@/components/ClientNavigation";

export default function Classes() {
  const upcomingClasses = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      instructor: "Dr. Sarah Johnson",
      date: "2025-08-05",
      time: "14:00 - 16:00",
      students: 45,
      status: "upcoming",
    },
    {
      id: 2,
      title: "ChatGPT for Business Applications",
      instructor: "Prof. Michael Chen",
      date: "2025-08-06",
      time: "10:00 - 12:00",
      students: 52,
      status: "upcoming",
    },
    {
      id: 3,
      title: "AI Ethics and Responsible Development",
      instructor: "Dr. Aisha Patel",
      date: "2025-08-07",
      time: "16:00 - 18:00",
      students: 38,
      status: "upcoming",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ClientNavigation />
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Live Classes
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Join live sessions with expert instructors and fellow students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold">6</div>
                <p className="text-xs text-gray-500">Live sessions</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  Attended
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold text-green-600">
                  12
                </div>
                <p className="text-xs text-gray-500">Classes completed</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  Next Class
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold text-blue-600">
                  2h 30m
                </div>
                <p className="text-xs text-gray-500">Until start</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {upcomingClasses.map((classItem) => (
              <Card
                key={classItem.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Video className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                          {classItem.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Instructor: {classItem.instructor}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                            {classItem.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                            {classItem.time}
                          </span>
                          <span className="flex items-center">
                            <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                            {classItem.students} students
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 lg:flex-shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full sm:w-auto text-xs sm:text-sm"
                      >
                        Add to Calendar
                      </Button>
                      <Button
                        size="sm"
                        className="w-full sm:w-auto text-xs sm:text-sm"
                      >
                        Join Class
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
