import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation";

describe("Navigation", () => {
  it("renders the app logo", () => {
    render(<Navigation />);
    expect(screen.getByText(/AI Learning Platform/i)).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navigation />);
    [
      "Landing",
      "Dashboard",
      "Curriculum",
      "Classes",
      "Assignments",
      "Exams",
      "Leaderboard",
    ].forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
