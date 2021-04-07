import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

import { fetchCountries } from "../config/getAllCountries";
import { fetchRegion } from "../config/getCountrieRegion";
import { fetchNameCountry } from "../config/getNameCountry";

const ContainerListCountries = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  width: 50%;
  margin: auto;

  height: auto;
  background: ${(props) =>
    props.primary === "light" ? "hsl(0, 0%, 100%)" : "hsl(207, 26%, 17%)"};

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
  }
  p {
    margin-left: 10px;

    font-weight: 100;
  }
`;

const Countries = ({ theme, regionSearch, nameCountry }) => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await fetchCountries();
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const getRegion = useCallback(async (regionSearch) => {
    try {
      const respose = await fetchRegion(regionSearch);
      setCountries(respose.data);
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (nameCountry) {
      getName(nameCountry);
    }
  }, [getName, nameCountry]);

  return (
    <>
      <ContainerListCountries>
        {countries
          ? countries.map((countrie) => (
              <Card primary={theme} key={countrie.name}>
                <img src={countrie.flag} alt="" />

                <h5> {countrie.name} </h5>
                <p>
                  <strong> population: </strong>
                  {countrie.population}
                </p>
                <p>
                  {" "}
                  <strong> region: </strong> {countrie.region}
                </p>
                <p>
                  {" "}
                  <strong> capital: </strong> {countrie.capital}
                </p>
              </Card>
            ))
          : null}
      </ContainerListCountries>
    </>
  );
};

export default Countries;
