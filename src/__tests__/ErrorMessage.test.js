import React from "react";

import { render, screen } from "@testing-library/react";
import ErrorMessage from "../components/ErrorMessage";
import "@testing-library/jest-dom/extend-expect";

const messageError = jest.fn();
test("<ErrorMessage/>   message tagname", () => {
  render(<ErrorMessage messageError={messageError} />);

  const message = screen.getByTestId("message-error");

  expect(message.tagName).toBe("P");
});
