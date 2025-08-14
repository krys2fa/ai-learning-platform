"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, setLoading } from "../store/authSlice";
import { register, login, logout } from "../lib/authService";
import * as Toast from "@radix-ui/react-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastTitle, setToastTitle] = useState<string>("");
  const [toastDesc, setToastDesc] = useState<string>("");
  const [toastActionHref, setToastActionHref] = useState<string | null>(null);
  const [toastActionLabel, setToastActionLabel] = useState<string | null>(null);
  const [toastIsError, setToastIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);
    try {
      if (isRegister) {
        await register(email, password, displayName);
        // End registration by signing out and prompting user to log in
        await logout();
        dispatch(setUser(null));
        setIsRegister(false);
        setSuccess("Registration successful. Please log in.");
        setToastTitle("Registration successful");
        setToastDesc("Please log in to continue.");
        setToastActionHref("/#auth");
        setToastActionLabel("Go to Login");
        setToastIsError(false);
        setToastOpen(true);
      } else {
        const user = await login(email, password);
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email || "",
            role: "admin", // default to admin per project requirement
          })
        );
        setToastTitle("Login successful");
        setToastDesc("Welcome back! You're now signed in.");
        setToastActionHref("/dashboard");
        setToastActionLabel("Go to Dashboard");
        setToastIsError(false);
        setToastOpen(true);
        // Redirect to dashboard
        router.push("/dashboard");
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "string"
          ? err
          : "Something went wrong. Please try again.";
      setError(message);
      setToastTitle(isRegister ? "Registration failed" : "Login failed");
      setToastDesc(message);
      setToastActionHref(null);
      setToastActionLabel(null);
      setToastIsError(true);
      setToastOpen(true);
    }
    dispatch(setLoading(false));
    setIsSubmitting(false);
  };

  // Logout is now available from the top navigation only

  return (
    <Toast.Provider swipeDirection="right" duration={4000}>
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <input
              type="text"
              placeholder="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full mb-2 p-2 border rounded"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <button
            type="submit"
            aria-busy={isSubmitting}
            aria-disabled={isSubmitting}
            disabled={isSubmitting}
            className={`w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded transition ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {isRegister ? "Registering..." : "Signing in..."}
              </>
            ) : (
              <>{isRegister ? "Register" : "Login"}</>
            )}
          </button>
          <button
            type="button"
            aria-disabled={isSubmitting}
            disabled={isSubmitting}
            className={`w-full mt-2 bg-gray-200 py-2 rounded transition ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-gray-300"
            }`}
            onClick={() => !isSubmitting && setIsRegister(!isRegister)}
          >
            {isRegister
              ? "Already have an account? Login"
              : "No account? Register"}
          </button>
          {error && <div className="text-red-500 mt-2">{error}</div>}
          {success && <div className="text-green-600 mt-2">{success}</div>}
        </form>
      </div>
      <Toast.Root
        open={toastOpen}
        onOpenChange={setToastOpen}
        className={`${
          toastIsError ? "bg-red-600" : "bg-gray-900"
        } text-white rounded-md shadow-lg px-4 py-3 grid gap-1 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full`}
      >
        <Toast.Title className="text-sm font-semibold">
          {toastTitle}
        </Toast.Title>
        {toastDesc && (
          <Toast.Description className="text-xs text-gray-200">
            {toastDesc}
          </Toast.Description>
        )}
        {toastActionHref && toastActionLabel && (
          <Toast.Action asChild altText={toastActionLabel}>
            <Link
              href={toastActionHref}
              className="mt-2 inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-xs font-medium"
            >
              {toastActionLabel}
            </Link>
          </Toast.Action>
        )}
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-4 right-4 w-96 max-w-[calc(100%-32px)] z-50 outline-none" />
    </Toast.Provider>
  );
};

export default AuthForm;
