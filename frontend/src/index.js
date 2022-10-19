import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SavedItemsContextProvider } from "./context/SavedItemsContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <SavedItemsContextProvider>
      <App />
    </SavedItemsContextProvider>
  </AuthContextProvider>
);
