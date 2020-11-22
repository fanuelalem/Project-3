 

import axios from "axios";
// const BASEURL = "https://finnhub.io/api/v1/stock/profile2?symbol=";
// const APIKEY = "&token=brffu2vrh5rf96nt3qkg";

const BASEURL = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=";
const APIKEY = "&apikey=H4KZ4M3VIE1M78HT";
 
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};