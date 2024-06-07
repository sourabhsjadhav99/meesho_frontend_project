import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginnumber,setloginnumber] = useState("");
  const [focusonsearch,setfocusonsearch]=useState(false)

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn,loginnumber,setloginnumber,focusonsearch,setfocusonsearch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
