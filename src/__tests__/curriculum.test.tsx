import React from "react";
import { render, screen } from "@testing-library/react";
import Curriculum from "../app/curriculum/page";

describe("Curriculum", () => {
  it("renders curriculum heading", () => {
    render(<Curriculum />);
    expect(screen.getAllByText(/Curriculum/i).length).toBeGreaterThan(0);
  });

  it("shows module titles", () => {
    render(<Curriculum />);
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
