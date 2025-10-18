import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // This will be implemented with proper authentication context later
  const isAuthenticated = false; // Placeholder

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
