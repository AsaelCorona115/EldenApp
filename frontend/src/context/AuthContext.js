import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
      break;
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  useEffect(() => {
    //check local storage
    const tarnished = JSON.parse(localStorage.getItem("tarnished"));
    if (tarnished) {
      dispatch({ type: "LOGIN", payload: tarnished });
    }
  }, []);

  console.log("AuthContext State:", state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
