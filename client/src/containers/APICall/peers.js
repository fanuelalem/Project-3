import axios from 'axios';
const finhubUrl = 'https://finnhub.io/api/v1/stock/peers?symbol=';
const token = '&token=bva10en48v6t3lvcm170';

export default {
  search: function (query) {
    console.log();
    return axios.get(finhubUrl + query + token);
  },
};
