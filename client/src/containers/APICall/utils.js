import axios from 'axios';


const BASEURL =
  'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';
const APIKEY = '&apikey=7WYQWLQBUMPFGGK2';

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
};
