import type { ReactNode } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { selectCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(selectCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
