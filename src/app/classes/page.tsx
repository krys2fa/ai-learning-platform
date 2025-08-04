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
    <div>
      <ClientNavigation />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Live Classes
            </h1>
            <p className="text-gray-600">
              Join live sessions with expert instructors and fellow students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6</div>
                <p className="text-xs text-gray-500">Live sessions</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Attended</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">12</div>
                <p className="text-xs text-gray-500">Classes completed</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Next Class
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">2h 30m</div>
                <p className="text-xs text-gray-500">Until start</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {upcomingClasses.map((classItem) => (
              <Card key={classItem.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Video className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {classItem.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Instructor: {classItem.instructor}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {classItem.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {classItem.time}
                          </span>
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {classItem.students} students
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline">Add to Calendar</Button>
                      <Button>Join Class</Button>
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
