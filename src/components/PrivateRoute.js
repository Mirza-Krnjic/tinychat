import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
