import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/authSlice";
import Dashboard from "../app/dashboard/page";

// Create a test store with mock user data
const testStore = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: {
    auth: {
      user: { uid: "test-uid", email: "test@example.com", role: "admin" },
      loading: false,
    },
  },
});

describe("Dashboard", () => {
  it("renders dashboard heading", () => {
    render(
      <Provider store={testStore}>
        <Dashboard />
      </Provider>
    );
    expect(screen.getAllByText(/Dashboard/i).length).toBeGreaterThan(0);
  });

  it("shows total courses stat", () => {
    render(
      <Provider store={testStore}>
        <Dashboard />
      </Provider>
    );
    expect(screen.getByText("Total Courses")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });
});
