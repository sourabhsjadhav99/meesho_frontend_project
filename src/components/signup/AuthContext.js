import React, { createContext, useState, useContext,useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });  const [loginnumber,setloginnumber] = useState("");
  const [focusonsearch,setfocusonsearch]=useState(false)
  const [currentroutes,setcurrentroutes]=useState("/")
  // const [phone,setphone]=useState("")
  const [currentStep,setStep]=useState(0)
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('isLoggedIn', 'true');
      // localStorage.setItem('phone number',phone);
    } else {
      localStorage.setItem('isLoggedIn','false');
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn,loginnumber,setloginnumber,focusonsearch,setfocusonsearch,currentroutes,setcurrentroutes,currentStep,setStep }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
