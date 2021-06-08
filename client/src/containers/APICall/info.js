import axios from 'axios';

const BASEURL = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=';
const APIKEY = '&apikey=H4KZ4M3VIE1M78HT';

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
};
