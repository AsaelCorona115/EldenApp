import { createContext, useReducer } from "react";

export const SavedItemsContext = createContext();

export const savedItemsReducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return { savedItems: action.payload };
    case "SAVE_ITEM":
      return { savedItems: [action.payload, ...state.savedItems] };
    case "DELETE_ITEM":
      return {
        savedItems: state.savedItems.filter(
          (item) => item._id !== action.payload._id
        ),
      };
  }
};

export const SavedItemsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(savedItemsReducer, { savedItems: null });
  return (
    <SavedItemsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SavedItemsContext.Provider>
  );
};
