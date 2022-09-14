import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SavedItemsContextProvider } from "./context/SavedItemsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SavedItemsContextProvider>
    <App />
  </SavedItemsContextProvider>
);
