import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "../components/ui/button";
import React from "react";

describe("Button", () => {
  it("renders with children", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("applies disabled prop", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText("Disabled")).toBeDisabled();
  });
});
