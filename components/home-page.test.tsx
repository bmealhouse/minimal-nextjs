import React from "react";
import HomePage from "../pages";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders the home page", () => {
  render(<HomePage />);
  expect(screen.queryByText("minimal-nextjs")).toBeInTheDocument();
});
