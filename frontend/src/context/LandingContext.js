import { createContext } from "react";
import { useState, useReducer } from "react";

export const LandingContext = createContext();

export const LandingContextProvider = ({ children }) => {
  const [landingState, setLandingState] = useState(true);
  return (
    <LandingContext.Provider value={{ landingState, setLandingState }}>
      {children}
    </LandingContext.Provider>
  );
};
