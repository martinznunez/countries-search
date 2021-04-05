import axios from "axios";

export const fetchCountries = () => {
  return axios.get("https://restcountries.eu/rest/v2/all");
};
