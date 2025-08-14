import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/authSlice";
import Leaderboard from "../app/leaderboard/page";

const testStore = configureStore({
  reducer: { auth: authReducer },
  preloadedState: {
    auth: {
      user: { uid: "test-uid", email: "test@example.com", role: "admin" },
      loading: false,
    },
  },
});

describe("Leaderboard", () => {
  it("renders leaderboard heading", () => {
    render(
      <Provider store={testStore}>
        <Leaderboard />
      </Provider>
    );
    expect(screen.getAllByText(/Leaderboard/i).length).toBeGreaterThan(0);
  });

  it("shows top student names", () => {
    render(
      <Provider store={testStore}>
        <Leaderboard />
      </Provider>
    );
    expect(screen.getAllByText("Sarah Johnson").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Kwame Asante").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Amina Hassan").length).toBeGreaterThan(0);
  });
});
