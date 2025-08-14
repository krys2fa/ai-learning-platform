import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/authSlice";
import Curriculum from "../app/curriculum/page";

const testStore = configureStore({
  reducer: { auth: authReducer },
  preloadedState: {
    auth: {
      user: { uid: "test-uid", email: "test@example.com", role: "admin" },
      loading: false,
    },
  },
});

describe("Curriculum", () => {
  it("renders curriculum heading", () => {
    render(
      <Provider store={testStore}>
        <Curriculum />
      </Provider>
    );
    expect(screen.getAllByText(/Curriculum/i).length).toBeGreaterThan(0);
  });

  it("shows module titles", () => {
    render(
      <Provider store={testStore}>
        <Curriculum />
      </Provider>
    );
    expect(
      screen.queryAllByText((content) => content.includes("AI Fundamentals"))
        .length
    ).toBeGreaterThan(0);
    expect(
      screen.queryAllByText((content) => content.includes("ChatGPT Mastery"))
        .length
    ).toBeGreaterThan(0);
    expect(
      screen.queryAllByText((content) =>
        content.includes("AI Tools for Business")
      ).length
    ).toBeGreaterThan(0);
    expect(
      screen.queryAllByText((content) =>
        content.includes("Building AI Applications")
      ).length
    ).toBeGreaterThan(0);
  });
});
