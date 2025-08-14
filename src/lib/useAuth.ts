"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onAuthStateChanged,
  User as FirebaseUser,
  getIdTokenResult,
} from "firebase/auth";
import { auth } from "./firebase";
import { setUser, setLoading } from "../store/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user: FirebaseUser | null) => {
        if (user) {
          const tokenResult = await getIdTokenResult(user);
          dispatch(
            setUser({
              uid: user.uid,
              email: user.email || "",
              role:
                ((tokenResult.claims as Record<string, unknown>).role as
                  | "superadmin"
                  | "admin"
                  | "teacher"
                  | "student"
                  | undefined) || "admin",
            })
          );
        } else {
          dispatch(setUser(null));
        }
        dispatch(setLoading(false));
      }
    );
    return () => unsubscribe();
  }, [dispatch]);
};

export default useAuth;
