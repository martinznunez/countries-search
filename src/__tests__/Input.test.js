import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Input from "../components/Input";

const handleClick = jest.fn();
const setNameCountry = jest.fn();

test("<Input/> validate component input", () => {
  render(<Input handleClick={handleClick} setNameCountry={setNameCountry} />);

  const inputText = screen.getByTestId("input");

  expect(inputText).toBeInTheDocument();

  expect(inputText.placeholder).toBe("Search for a countries...  ");

  const iconSearch = screen.getByTestId("icon");

  expect(iconSearch).toBeInTheDocument();

  expect(iconSearch.tagName).toBe("svg");

  const handleSubmit = screen.getByTestId("submit");

  expect(handleSubmit).toBeInTheDocument();

  expect(handleSubmit.tagName).toBe("FORM");

  userEvent.type(inputText, "argentina");

  fireEvent.submit(handleSubmit);

  expect(setNameCountry).toHaveBeenCalledTimes(1);
});
