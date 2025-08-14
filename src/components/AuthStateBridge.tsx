"use client";
import React from "react";
import useAuth from "@/lib/useAuth";

export default function AuthStateBridge() {
  useAuth();
  return null;
}
