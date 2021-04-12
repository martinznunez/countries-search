import React from "react";
import * as countriesClient from "../config/getAllCountries.js";
import * as regionsClient from "../config/getCountrieRegion.js";
import * as nameClient from "../config/getNameCountry";

import { createMemoryHistory } from "history";
import { Router } from "react-router";
import userEvent from "@testing-library/user-event";

import { render, screen, waitFor } from "@testing-library/react";
import Countries from "../components/Countries";

jest.mock("../config/getAllCountries.js");
jest.mock("../config/getCountrieRegion.js");
jest.mock("../config/getNameCountry.js");

beforeEach(() => {
  countriesClient.fetchCountries.mockImplementationOnce(() => {
    return Promise.resolve({
      data: [
        {
          name: "Argentina",
          flag: "http://test.com",
          population: "400000",
          region: "America",
          capital: "Buenos Aires",
        },
      ],
    });
  });
});

test("Render the list of all fetched countries", async () => {
  await waitFor(async () => {
    render(<Countries />);
  });

  const countryTitle = screen.getByText("Argentina");

  expect(countryTitle).toBeInTheDocument();

  const imgCountry = screen.getByTestId("handleClickCountry");

  expect(imgCountry).toBeInTheDocument();

  expect(imgCountry.tagName).toBe("IMG");

  expect(screen.getByText("population:")).toBeInTheDocument();
  expect(screen.getByText("region:")).toBeInTheDocument();
  expect(screen.getByText("capital:")).toBeInTheDocument();
});

test("Show error when fetch countries fails", async () => {
  countriesClient.fetchCountries.mockImplementationOnce(() => {
    return Promise.reject({ error: "some error" });
  });

  await waitFor(async () => {
    render(<Countries />);
  });

  const error = screen.getByTestId("message-error");

  expect(error).toBeInTheDocument();

  expect(screen.getByText("Something went wrong")).toBeInTheDocument();
});

test("Show the correct countries based on region", async () => {
  regionsClient.fetchRegion.mockImplementationOnce(() => {
    return Promise.resolve({
      data: [
        {
          name: "Algeria",
          flag: "http://test.com",
          population: "400000",
          region: "America",
          capital: "Buenos Aires",
        },
      ],
    });
  });

  await waitFor(async () => {
    render(<Countries regionSearch="Algeria" />);
  });

  const countryTitle = screen.getByText("Algeria");

  expect(countryTitle).toBeInTheDocument();

  const imgCountry = screen.getByTestId("handleClickCountry");

  expect(imgCountry).toBeInTheDocument();

  expect(imgCountry.tagName).toBe("IMG");

  expect(screen.getByText("population:")).toBeInTheDocument();
  expect(screen.getByText("region:")).toBeInTheDocument();
  expect(screen.getByText("capital:")).toBeInTheDocument();

  const error = screen.queryByTestId("message-error");
  expect(error).not.toBeInTheDocument();
});

test("Show error when countries region fails", async () => {
  regionsClient.fetchRegion.mockImplementationOnce(() => {
    return Promise.reject({ error: "some error" });
  });

  await waitFor(async () => {
    render(<Countries />);
  });

  const error = screen.getByTestId("message-error");

  expect(error).toBeInTheDocument();

  expect(screen.getByText("Something went wrong")).toBeInTheDocument();
});

test("Show the correct countriy based on name", async () => {
  nameClient.fetchNameCountry.mockImplementationOnce(() => {
    return Promise.resolve({
      data: [
        {
          name: "Burundi",
          flag: "http://test.com",
          population: "6400000",
          region: "Africa",
          capital: " Bujumbura",
        },
      ],
    });
  });

  await waitFor(async () => {
    render(<Countries nameCountry="Burundi" />);
  });

  const countryTitle = screen.getByText("Burundi");

  expect(countryTitle).toBeInTheDocument();
  const imgCountry = screen.getByTestId("handleClickCountry");

  expect(imgCountry).toBeInTheDocument();

  expect(imgCountry.tagName).toBe("IMG");

  expect(screen.getByText("population:")).toBeInTheDocument();
  expect(screen.getByText("region:")).toBeInTheDocument();
  expect(screen.getByText("capital:")).toBeInTheDocument();

  const error = screen.queryByTestId("message-error");
  expect(error).not.toBeInTheDocument();
});

test("Show error when countriy name fails", async () => {
  nameClient.fetchNameCountry.mockImplementationOnce(() => {
    return Promise.reject({ error: "some error" });
  });

  await waitFor(async () => {
    render(<Countries />);
  });

  const error = screen.getByTestId("message-error");

  expect(error).toBeInTheDocument();

  expect(screen.getByText("Something went wrong")).toBeInTheDocument();
});

test("click country Simulate", async () => {
  const history = createMemoryHistory();

  await waitFor(async () => {
    render(
      <Router history={history}>
        <Countries />
      </Router>
    );
  });

  const countryTitle = screen.getByText("Argentina");

  expect(countryTitle).toBeInTheDocument();
  const imgCountry = screen.getByTestId("handleClickCountry");

  expect(imgCountry).toBeInTheDocument();

  expect(imgCountry.tagName).toBe("IMG");

  expect(screen.getByText("population:")).toBeInTheDocument();
  expect(screen.getByText("region:")).toBeInTheDocument();
  expect(screen.getByText("capital:")).toBeInTheDocument();

  const eventClick = screen.getByTestId("handleClickCountry");

  userEvent.click(
    eventClick,
    Promise.resolve({
      data: [
        {
          name: "Argentina",
          flag: "http://test.com",
          population: "400000",
          region: "America",
          capital: "Buenos Aires",
        },
      ],
    })
  );
});

test("validate hisroty push", async () => {
  const history = createMemoryHistory();

  const mockedCountry = {
    name: "Argentina",
    flag: "http://test.com",
    population: "400000",
    region: "America",
    capital: "Buenos Aires",
  };
  countriesClient.fetchCountries.mockImplementationOnce(() => {
    return Promise.resolve({
      data: [mockedCountry],
    });
  });

  await waitFor(async () => {
    render(
      <Router history={history}>
        <Countries />
      </Router>
    );
  });

  const countryTitle = screen.getByText(mockedCountry.name);

  expect(countryTitle).toBeInTheDocument();

  const imgCountry = screen.getByTestId("handleClickCountry");

  expect(imgCountry).toBeInTheDocument();

  expect(imgCountry.tagName).toBe("IMG");

  expect(screen.getByText("population:")).toBeInTheDocument();
  expect(screen.getByText("region:")).toBeInTheDocument();
  expect(screen.getByText("capital:")).toBeInTheDocument();

  const eventClick = screen.getByTestId("handleClickCountry");

  userEvent.click(
    eventClick,
    Promise.resolve({
      data: [
        {
          name: "Argentina",
          flag: "http://test.com",
          population: "400000",
          region: "America",
          capital: "Buenos Aires",
        },
      ],
    })
  );

  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));

  expect(history.location.pathname).toEqual("/country");
});
