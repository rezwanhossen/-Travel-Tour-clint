import React from "react";
import useAuth from "../Hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRout = ({ children }) => {
  const { user, loding } = useAuth();
  const location = useLocation();

  // if (!user && !loding) {

  // }
  if (loding) {
    return (
      <div className=" flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
};

export default PrivetRout;
