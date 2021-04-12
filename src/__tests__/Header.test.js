import React from "react";

import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import "@testing-library/jest-dom/extend-expect";

test("<Header/> get titles on header", () => {
  render(<Header />);

  expect(screen.getByText("Wheare in the world?")).toBeInTheDocument();
  expect(screen.getByText("Dark Mode")).toBeInTheDocument();
  expect(screen.getByTestId("icon")).toBeInTheDocument();
  expect(screen.getByTestId("icon").tagName).toBe("svg");
});
