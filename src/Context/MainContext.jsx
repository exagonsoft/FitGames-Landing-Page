import React, { createContext, useEffect, useState } from "react";
export const Context = createContext(null);

export const MainContext = ({ children }) => {
  const [currentLang, setCurrentLang] = useState("eng");
  
  const setLanguage = (lang) => {
    setCurrentLang(lang);
    console.log(currentLang);
  };

  useEffect(() => {
   
  }, [currentLang])
  

  return <Context.Provider value={
    {
        currentLang,
        setLanguage
    }
  }>{children}</Context.Provider>;
};
