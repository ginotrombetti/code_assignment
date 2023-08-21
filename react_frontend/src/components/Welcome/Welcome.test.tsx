import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

describe("Welcome", () => {
  test("should display the welcome message ", () => {
    render(<Welcome />);

    const welcomeMessage = screen.getByText(
      "Please refer to the README.md for more information.",
    );

    expect(welcomeMessage).toBeInTheDocument();
  });
});
