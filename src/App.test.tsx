import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Renders App Component", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});
