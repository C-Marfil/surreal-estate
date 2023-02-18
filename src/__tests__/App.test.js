import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

xit("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/add property/i);
  expect(linkElement).toBeInTheDocument();
});
