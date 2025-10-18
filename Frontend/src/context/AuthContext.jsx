import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Authentication logic will be implemented here
  const value = {
    user: null,
    loading: false,
    login: () => {},
    register: () => {},
    logout: () => {},
    googleLogin: () => {},
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
