import React from "react";

import { render, screen } from "@testing-library/react";

import { createMemoryHistory } from "history";
import { Router } from "react-router";
import Button from "../components/Button";

test("<Button/> get button", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Button />
    </Router>
  );

  const btn = screen.getByTestId("icon-btn");

  expect(btn).toBeInTheDocument();

  expect(btn.textContent).toBe("Black");
});
