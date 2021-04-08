import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

import { fetchCountries } from "../config/getAllCountries";
import { fetchRegion } from "../config/getCountrieRegion";
import { fetchNameCountry } from "../config/getNameCountry";

import { useHistory } from "react-router-dom";

import ErrorMessage from "./ErrorMessage";

const ContainerListCountries = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 990px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const Card = styled.div`
  width: 50%;
  margin: auto;

  height: auto;
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.text};

  h5 {
    font-size: 1.2rem;
    font-family: Georgia, "Times New Roman", Times, serif;
    margin-top: 20px;
    margin-left: 30px;
    padding-bottom: 10px;
  }
  strong {
    font-size: 0.9rem;
    line-height: 30px;
    font-weight: 500;
  }
  margin-top: 40px;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  p {
    margin-left: 10px;
    font-weight: 100;
  }

  @media screen and (min-width: 990px) {
    width: 40%;
    img {
      height: 200px;
    }
  }
  @media screen and (min-width: 1300px) {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width: 1520px) {
    width: 15%;
    height: 360px;

    img {
      height: 200px;
    }
    strong {
      font-size: 0.9rem;
      line-height: 30px;
    }
  }
`;

const Countries = ({ regionSearch, nameCountry }) => {
  const [countries, setCountries] = useState([]);

  const [messageError, setMessageError] = useState(false);

  const history = useHistory();

  const getCountries = async () => {
    try {
      const response = await fetchCountries();
      setCountries(response.data);
      setMessageError(false);
    } catch (error) {
      setMessageError(true);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const getRegion = useCallback(async (regionSearch) => {
    try {
      const respose = await fetchRegion(regionSearch);
      setCountries(respose.data);
      setMessageError(false);
    } catch (error) {
      setMessageError(true);
    }
  }, []);

  useEffect(() => {
    if (regionSearch) {
      getRegion(regionSearch);
    } else {
      getCountries();
    }
  }, [getRegion, regionSearch]);

  const getName = useCallback(async (nameCountry) => {
    try {
      const respose = await fetchNameCountry(nameCountry);
      setCountries(respose.data);
      setMessageError(false);
    } catch (error) {
      setMessageError(true);
    }
  }, []);

  useEffect(() => {
    if (nameCountry) {
      getName(nameCountry);
    }
  }, [getName, nameCountry]);

  const handleClickCountry = (item) => {
    if (item) {
      history.push({
        pathname: "/country",
        data: item,
      });
    }
  };

  return (
    <>
      <ErrorMessage
        messageError={messageError}
        message="Something went wrong"
      />
      <ContainerListCountries>
        {countries
          ? countries.map((country) => (
              <Card key={country.name}>
                <img
                  onClick={() => handleClickCountry(country)}
                  src={country.flag}
                  alt=""
                />

                <h5> {country.name} </h5>
                <p>
                  <strong> population: </strong>
                  {country.population}
                </p>
                <p>
                  <strong> region: </strong> {country.region}
                </p>
                <p>
                  <strong> capital: </strong> {country.capital}
                </p>
              </Card>
            ))
          : null}
      </ContainerListCountries>
    </>
  );
};

export default Countries;
