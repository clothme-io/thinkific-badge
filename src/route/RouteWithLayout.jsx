import React from "react";
import { Navigate } from "react-router-dom";

export const RouteWithLayout = ({ children, redirectTo, ...rest }) => {
  // const { isAuth } = useContext(AuthContext);
  // const { userRoles }: useContext(UserContext);
  // const { userDuties }: useContext(UserContext);
  // const userHasRequiredRole = requiredRoles.includes();
  // const userHasRequiredDuty = requiredRoles.includes();

  const isAuth = true;

  return isAuth ? children : <Navigate to={redirectTo} />;
};
