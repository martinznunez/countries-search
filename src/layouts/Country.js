import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Button from "../components/Button";

const ContainerPrimary = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 900px) {
    margin-top: 0px;
  }
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 1200px) {
    width: 90%;

    flex-direction: row;
  }

  .container-img {
    width: 100%;
    margin: auto;
    margin-top: 10%;
    margin-bottom: 20%;
    img {
      width: 320px;
    }
  }

  .container-details {
    width: 80%;
    display: flex;
    margin-left: 20px;
    height: auto;
    flex-direction: column;

    align-items: flex-start;

    p {
      color: ${({ theme }) => theme.text};
      margin-top: 15px;
      text-transform: uppercase;
    }

    span {
      margin-left: 5px;
      opacity: 50%;
      color: ${({ theme }) => theme.text};
    }

    h5 {
      margin-bottom: 30px;
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 900px) {
    .container-img {
      margin-top: 5%;
      margin-bottom: 5%;
      img {
        width: 450px;
        height: auto;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .container-img {
      img {
        width: 400px;
      }
    }
    .container-details {
      h5 {
        font-size: 2.5rem;
        margin-left: 0%;
      }
    }
  }
`;

const ContainerBorderCountries = styled.div`
  width: 100%;
  margin-top: 30px;

  h4 {
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  .countries {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
    padding-bottom: 30px;

    p {
      color: ${({ theme }) => theme.text};
      opacity: 50%;
    }
  }
`;

const Country = () => {
  const history = useHistory();

  const country = history.location.data;

  return (
    <>
      <Button />
      <ContainerPrimary data-testid="container-country">
        {Country ? (
          <Card key={country.name}>
            <div className="container-img">
              <img src={country.flag} alt="" />
            </div>
            <div className="container-details">
              <h5> {country.name} </h5>
              <p>
                population:
                <span> {country.population} </span>
              </p>
              <p>
                region:
                <span> {country.region} </span>
              </p>
              <p>
                region:
                <span> {country.subregion} </span>
              </p>
              <p>
                capital:
                <span> {country.capital} </span>
              </p>
              <p>
                top Level Domain:
                <span> {country.topLevelDomain[0]} </span>
              </p>
              <p>
                currencies:
                <span> {country.currencies[0].code} </span>
              </p>
              <p>
                languages:
                {country.languages.map((language) => (
                  <span key={language.name}> {language.name}</span>
                ))}
              </p>
            </div>
            <ContainerBorderCountries>
              <h4> border countries</h4>
              <div className="countries">
                {country.borders.map((border) => (
                  <p key={border}> {border}</p>
                ))}
              </div>
            </ContainerBorderCountries>
          </Card>
        ) : null}
      </ContainerPrimary>
    </>
  );
};

export default Country;
