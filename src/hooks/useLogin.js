import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuth();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    //login the user
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      // dispatch user login
      dispatch({ type: "LOGIN", payload: res.user });

      // update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error) {
      if (!isCancelled) {
        setError(error.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, login };
};
