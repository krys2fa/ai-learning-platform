import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/authSlice";
import Exams from "../app/exams/page";

const testStore = configureStore({
  reducer: { auth: authReducer },
  preloadedState: {
    auth: {
      user: { uid: "test-uid", email: "test@example.com", role: "admin" },
      loading: false,
    },
  },
});

describe("Exams", () => {
  it("renders exams heading", () => {
    render(
      <Provider store={testStore}>
        <Exams />
      </Provider>
    );
    expect(screen.getAllByText(/Exams/i).length).toBeGreaterThan(0);
  });

  it("shows exam titles", () => {
    render(
      <Provider store={testStore}>
        <Exams />
      </Provider>
    );
    expect(
      screen.getAllByText("AI Fundamentals - Final Exam").length
    ).toBeGreaterThan(0);
    expect(screen.getAllByText("ChatGPT Mastery Quiz").length).toBeGreaterThan(
      0
    );
    expect(screen.getAllByText("AI Ethics Assessment").length).toBeGreaterThan(
      0
    );
  });
});
