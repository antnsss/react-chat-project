import type { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface ChildProp {
  children: React.ReactNode;
}

const PrivateRoute: FC<ChildProp> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>; 
  }

  return user ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
