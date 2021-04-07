import axios from "axios";

export const fetchNameCountry = (nameCountry) => {
  return axios.get(`https://restcountries.eu/rest/v2/name/${nameCountry}`);
};
