import { render, screen } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import React from "react";

describe("Card", () => {
  it("renders Card with children", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
        </CardHeader>
        <CardContent>Card Content</CardContent>
      </Card>
    );
    expect(screen.getByText("Test Card")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });
});
