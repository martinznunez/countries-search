import { fireEvent, render, screen } from "@testing-library/react";

import InputSelection from "../components/InputSelection";

const handleSelect = jest.fn();

const setRegionSearch = jest.fn();
test("<InputSelection/>  Simulates selection", () => {
  render(
    <InputSelection
      handleSelect={handleSelect}
      setRegionSearch={setRegionSearch}
    />
  );

  const select = screen.getByTestId("select");

  expect(select).toBeInTheDocument();

  expect(select.children.length).toEqual(6);

  fireEvent.change(select, { target: { value: "Africa" } });

  fireEvent.submit(select);

  expect(setRegionSearch).toHaveBeenCalledTimes(1);
});
