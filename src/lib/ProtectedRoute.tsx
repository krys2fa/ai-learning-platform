import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

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
    return <div className="text-center py-8 text-red-500">Access Denied</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
