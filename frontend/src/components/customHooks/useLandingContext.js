import { LandingContext } from "../../context/LandingContext";
import { useContext } from "react";

export const useLandingContext = () => {
  const context = useContext(LandingContext);
  if (!context) {
    throw Error("Context out of bounds");
  }
  return context;
};
