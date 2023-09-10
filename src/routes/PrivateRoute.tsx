import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UsersProvider } from "../contexts/usersContext";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { userData } = useContext(UsersProvider);
  const location = useLocation();

  if (userData?.userUid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
