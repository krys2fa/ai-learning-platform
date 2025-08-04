import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// ...existing code...
import { Trophy, Medal, Crown, Award } from "lucide-react";
import ClientNavigation from "@/components/ClientNavigation";

export default function Leaderboard() {
  const topStudents = [
    {
      rank: 1,
      name: "Sarah Johnson",
      points: 2450,
      avatar: "SJ",
      country: "Nigeria",
      streak: 45,
    },
    {
      rank: 2,
      name: "Kwame Asante",
      points: 2380,
      avatar: "KA",
      country: "Ghana",
      streak: 38,
    },
    {
      rank: 3,
      name: "Amina Hassan",
      points: 2250,
      avatar: "AH",
      country: "Nigeria",
      streak: 32,
    },
    {
      rank: 4,
      name: "David Osei",
      points: 2180,
      avatar: "DO",
      country: "Ghana",
      streak: 28,
    },
    {
      rank: 5,
      name: "Fatima Ali",
      points: 2120,
      avatar: "FA",
      country: "Nigeria",
      streak: 25,
    },
  ];

  const allStudents = [
    ...topStudents,
    {
      rank: 6,
      name: "John Mensah",
      points: 2050,
      avatar: "JM",
      country: "Ghana",
      streak: 22,
    },
    {
      rank: 7,
      name: "Grace Adebayo",
      points: 1980,
      avatar: "GA",
      country: "Nigeria",
      streak: 20,
    },
    {
      rank: 8,
      name: "Emmanuel Kojo",
      points: 1920,
      avatar: "EK",
      country: "Ghana",
      streak: 18,
    },
    {
      rank: 9,
      name: "Aisha Musa",
      points: 1850,
      avatar: "AM",
      country: "Nigeria",
      streak: 15,
    },
    {
      rank: 10,
      name: "Prince Owusu",
      points: 1780,
      avatar: "PO",
      country: "Ghana",
      streak: 12,
    },
  ];

  const currentUser = {
    rank: 15,
    name: "You",
    points: 1650,
    avatar: "YU",
    country: "Nigeria",
    streak: 8,
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600" />;
      default:
        return (
          <span className="text-base sm:text-lg font-bold text-gray-600">
            #{rank}
          </span>
        );
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank <= 3) {
      const colors = {
        1: "bg-gradient-to-r from-yellow-400 to-yellow-600",
        2: "bg-gradient-to-r from-gray-300 to-gray-500",
        3: "bg-gradient-to-r from-amber-400 to-amber-600",
      };
      return colors[rank as keyof typeof colors];
    }
    return "bg-gradient-to-r from-blue-500 to-blue-600";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ClientNavigation />
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Leaderboard
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              See how you rank among fellow AI learners!
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  Your Rank
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold text-blue-600">
                  #{currentUser.rank}
                </div>
                <p className="text-xs text-gray-500">Out of 1,247 students</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  Your Points
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold text-green-600">
                  {currentUser.points}
                </div>
                <p className="text-xs text-gray-500">+120 this week</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  Learning Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold text-orange-600">
                  {currentUser.streak} days
                </div>
                <p className="text-xs text-gray-500">Keep it up!</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  Next Rank
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold text-purple-600">
                  130
                </div>
                <p className="text-xs text-gray-500">Points needed</p>
              </CardContent>
            </Card>
          </div>

          {/* Top 3 Podium */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
                Top Performers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-end space-x-8 py-8">
                {/* 2nd Place */}
                <div className="text-center">
                  <div
                    className={`w-20 h-20 rounded-full ${getRankBadge(
                      2
                    )} flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto`}
                  >
                    {topStudents[1].avatar}
                  </div>
                  <div className="text-lg font-semibold">
                    {topStudents[1].name}
                  </div>
                  <div className="text-gray-600">
                    {topStudents[1].points} points
                  </div>
                  <div className="text-xs text-gray-500 flex items-center justify-center mt-1">
                    <Medal className="h-4 w-4 mr-1 text-gray-400" />
                    2nd Place
                  </div>
                </div>

                {/* 1st Place */}
                <div className="text-center">
                  <div
                    className={`w-24 h-24 rounded-full ${getRankBadge(
                      1
                    )} flex items-center justify-center text-white font-bold text-xl mb-2 mx-auto`}
                  >
                    {topStudents[0].avatar}
                  </div>
                  <div className="text-xl font-bold">{topStudents[0].name}</div>
                  <div className="text-gray-600 font-semibold">
                    {topStudents[0].points} points
                  </div>
                  <div className="text-sm text-yellow-600 flex items-center justify-center mt-1">
                    <Crown className="h-4 w-4 mr-1" />
                    Champion
                  </div>
                </div>

                {/* 3rd Place */}
                <div className="text-center">
                  <div
                    className={`w-20 h-20 rounded-full ${getRankBadge(
                      3
                    )} flex items-center justify-center text-white font-bold text-lg mb-2 mx-auto`}
                  >
                    {topStudents[2].avatar}
                  </div>
                  <div className="text-lg font-semibold">
                    {topStudents[2].name}
                  </div>
                  <div className="text-gray-600">
                    {topStudents[2].points} points
                  </div>
                  <div className="text-xs text-gray-500 flex items-center justify-center mt-1">
                    <Award className="h-4 w-4 mr-1 text-amber-600" />
                    3rd Place
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Full Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle>All Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {allStudents.map((student) => (
                  <div
                    key={student.rank}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-8 h-8">
                        {getRankIcon(student.rank)}
                      </div>
                      <div
                        className={`w-12 h-12 rounded-full ${getRankBadge(
                          student.rank
                        )} flex items-center justify-center text-white font-bold`}
                      >
                        {student.avatar}
                      </div>
                      <div>
                        <div className="font-semibold">{student.name}</div>
                        <div className="text-sm text-gray-500">
                          {student.country}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-sm font-medium">
                          {student.points}
                        </div>
                        <div className="text-xs text-gray-500">Points</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium">
                          {student.streak}
                        </div>
                        <div className="text-xs text-gray-500">Day Streak</div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Current User Position */}
                <div className="flex items-center justify-between p-4 rounded-lg border-2 border-blue-200 bg-blue-50">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-8 h-8">
                      <span className="text-lg font-bold text-blue-600">
                        #{currentUser.rank}
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                      {currentUser.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-blue-900">
                        {currentUser.name}
                      </div>
                      <div className="text-sm text-blue-600">
                        {currentUser.country}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-sm font-medium text-blue-900">
                        {currentUser.points}
                      </div>
                      <div className="text-xs text-blue-600">Points</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-blue-900">
                        {currentUser.streak}
                      </div>
                      <div className="text-xs text-blue-600">Day Streak</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How Points Work */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>How Points Work</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Earn Points By:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Completing lessons: 10-50 points</li>
                    <li>• Finishing assignments: 50-100 points</li>
                    <li>• Passing exams: 100-200 points</li>
                    <li>• Daily login streak: 5 points/day</li>
                    <li>• Helping classmates: 20 points</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ranking Levels:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Beginner: 0-500 points</li>
                    <li>• Intermediate: 501-1000 points</li>
                    <li>• Advanced: 1001-2000 points</li>
                    <li>• Expert: 2001-3000 points</li>
                    <li>• Master: 3000+ points</li>
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
