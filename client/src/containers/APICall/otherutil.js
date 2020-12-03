// import axios from "axios";
// const finhubUrl = "https://finnhub.io/api/v1/stock/profile2?symbol=";
// const token = "&token=brffu2vrh5rf96nt3qkg";

 
 
// export default {
 
//   search: function(query) {
//      return axios.get(finhubUrl + query + token);
//   }
// };

import axios from "axios";
const finhubUrl = "https://finnhub.io/api/v1/quote?symbol=";
const token = "&token=bv44e1v48v6tcp17g8p0";

 
 
export default {
 
  search: function(query) {
     return axios.get(finhubUrl + query + token);
  }
};


// bv44e1v48v6tcp17g8p0