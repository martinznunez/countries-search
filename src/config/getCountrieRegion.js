import axios from "axios";

export const fetchRegion = (data) => {
  return axios.get(`https://restcountries.eu/rest/v2/region/${data}`);
};
