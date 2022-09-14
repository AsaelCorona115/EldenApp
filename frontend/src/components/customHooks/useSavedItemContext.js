import { SavedItemsContext } from "../../context/SavedItemsContext";
import { useContext } from "react";

export const useSavedItemsContext = () => {
  const context = useContext(SavedItemsContext);
  if (!context) {
    throw Error("Out of context boundaries");
  }
  return context;
};
