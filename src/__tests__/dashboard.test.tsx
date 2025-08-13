import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "../app/dashboard/page";

describe("Dashboard", () => {
  it("renders dashboard heading", () => {
    render(<Dashboard />);
    expect(screen.getAllByText(/Dashboard/i).length).toBeGreaterThan(0);
  });

  it("shows total courses stat", () => {
    render(<Dashboard />);
    expect(screen.getByText("Total Courses")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });
});
