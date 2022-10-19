import { useAuthContext } from "./useAuthContext";
import { useSavedItemsContext } from "./useSavedItemContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: savedItemsDispatch } = useSavedItemsContext();
  const logout = () => {
    //deleting user from local storage
    localStorage.removeItem("tarnished");
    //deleting user from AuthContext
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "SET_ITEMS", payload: null });
  };

  return logout;
};
