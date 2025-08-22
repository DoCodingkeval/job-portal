import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKENDURL;
  const [Loggedin, setLoggedIn] = useState(false);

  const value = { backendUrl, Loggedin, setLoggedIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
