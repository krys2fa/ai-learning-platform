"use client";
import useAuth from "@/lib/useAuth";

export default function AuthStateBridge() {
  useAuth();
  return null;
}
