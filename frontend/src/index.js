import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LandingContextProvider } from "./context/LandingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LandingContextProvider>
    <App />
  </LandingContextProvider>
);
