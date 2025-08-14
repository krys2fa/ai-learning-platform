"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Link from "next/link";

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRoles,
  children,
}) => {
  const { user, loading } = useSelector((state: RootState) => state.auth);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!user || !allowedRoles.includes(user.role)) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 font-semibold text-lg mb-2">
          Access Denied
        </div>
        <p className="text-gray-600 mb-4">
          Please sign in to continue. Don&#39;t have an account?
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Sign in
          </Link>
          <Link
            href="/#auth"
            className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            Register
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
