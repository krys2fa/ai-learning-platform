import React from "react";
import { render, screen } from "@testing-library/react";
import Leaderboard from "../app/leaderboard/page";

describe("Leaderboard", () => {
  it("renders leaderboard heading", () => {
    render(<Leaderboard />);
    expect(screen.getAllByText(/Leaderboard/i).length).toBeGreaterThan(0);
  });

  it("shows top student names", () => {
    render(<Leaderboard />);
    expect(screen.getAllByText("Sarah Johnson").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Kwame Asante").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Amina Hassan").length).toBeGreaterThan(0);
  });
});
