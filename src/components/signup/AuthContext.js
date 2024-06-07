import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginnumber,setloginnumber] = useState("")

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn,loginnumber,setloginnumber }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
