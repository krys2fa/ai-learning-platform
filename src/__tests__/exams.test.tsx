import React from "react";
import { render, screen } from "@testing-library/react";
import Exams from "../app/exams/page";

describe("Exams", () => {
  it("renders exams heading", () => {
    render(<Exams />);
    expect(screen.getAllByText(/Exams/i).length).toBeGreaterThan(0);
  });

  it("shows exam titles", () => {
    render(<Exams />);
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
