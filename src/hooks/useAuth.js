import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw Error("useAuthContext must be inside an AuthContextProvider");
  }

  return ctx;
};
