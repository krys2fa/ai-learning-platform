"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const RoleBasedUI: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) return null;

  switch (user.role) {
    case "superadmin":
      return (
        <div className="p-4 bg-purple-100 rounded">
          Superadmin Panel: Manage everything
        </div>
      );
    case "admin":
      return (
        <div className="p-4 bg-blue-100 rounded">
          Admin Panel: Manage users and content
        </div>
      );
    case "teacher":
      return (
        <div className="p-4 bg-green-100 rounded">
          Teacher Dashboard: Manage classes and assignments
        </div>
      );
    case "student":
      return (
        <div className="p-4 bg-yellow-100 rounded">
          Student Dashboard: View curriculum and progress
        </div>
      );
    default:
      return <div className="p-4 bg-gray-100 rounded">Unknown role</div>;
  }
};

export default RoleBasedUI;
