"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, setLoading } from "../store/authSlice";
import { register, login, logout } from "../lib/authService";

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
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
      } else {
        const user = await login(email, password);
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email || "",
            role: "admin", // default to admin per project requirement
          })
        );
      }
    } catch (err: any) {
      setError(err.message);
    }
    dispatch(setLoading(false));
  };

  const handleLogout = async () => {
    dispatch(setLoading(true));
    await logout();
    dispatch(setUser(null));
    dispatch(setLoading(false));
  };

  return (
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
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {isRegister ? "Register" : "Login"}
        </button>
        <button
          type="button"
          className="w-full mt-2 bg-gray-200 py-2 rounded hover:bg-gray-300 transition"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? "Already have an account? Login"
            : "No account? Register"}
        </button>
        <button
          type="button"
          className="w-full mt-2 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
          onClick={handleLogout}
        >
          Logout
        </button>
        {error && <div className="text-red-500 mt-2">{error}</div>}
        {success && <div className="text-green-600 mt-2">{success}</div>}
      </form>
    </div>
  );
};

export default AuthForm;
