import type { FC } from "react";
import { Navigate } from "react-router-dom";

interface ChildProp {
  children: React.ReactNode;
}

const PrivateRoute: FC<ChildProp> = ({ children }) => {
  const isAuth = false;

  return isAuth ? children : <Navigate to="/register" />;
};

export default PrivateRoute;
