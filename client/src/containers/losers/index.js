import React, { Component } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';

import axios from 'axios';
import LoserListItems from './../LoserListItems';

// import requireAuth from '../../hoc/requireAuth';

class Losers extends Component {
  state = {
    gainer: [],
    loser: [],
  };
  componentDidMount = () => {
    this.getLosers();
  };
  getLosers = () => {
    // axios({
    //   'method': 'GET',
    //   'url': 'https://morning-star.p.rapidapi.com/market/v2/get-movers',
    //   'headers': {
    //     'x-rapidapi-key': '46d623d4e3mshe0376e4a2f88b30p13b625jsn10c462d75ab2',
    //     'x-rapidapi-host': 'morning-star.p.rapidapi.com',
    //     "useQueryString":true
    //   }
    //  }).then((response)=>{
    //    this.setState({loser:response.data.losers})
    //    console.log(response)
    //  }).catch((e)=>{
    //    console.log(e)
    //  })

    axios({
      method: 'GET',
      url: 'https://morning-star.p.rapidapi.com/market/v2/get-movers',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'morning-star.p.rapidapi.com',
        'x-rapidapi-key': 'e74c1b33f6mshe580bbf974b73ccp1d5bcbjsn5bf09c8f0b61',
        useQueryString: true,
      },
    })
      .then(response => {
        this.setState(
          {
            loser: response.data.losers,
          },
          () => {
            console.log(response.data.losers, 'losers');
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Grid centered>
        <Grid.Column textAlign="center">
          <LoserListItems losers={this.state.loser} />
        </Grid.Column>
      </Grid>
    );
  }
}


export default Losers;

//other account apis

// axios.get('https://financialmodelingprep.com/api/v3/losers?apikey=fc798fa9b934e1e167d9324db570eb17')
// .then((response)=>{
//   this.setState({
//     loser:response.data
//   })
// })
// .catch((e)=>{
//   console.log(e)
// })

// axios({
//   "method":"GET",
//   "url":"https://morning-star.p.rapidapi.com/market/v2/get-movers",
//   "headers":{
//   "content-type":"application/octet-stream",
//   "x-rapidapi-host":"morning-star.p.rapidapi.com",
//   "x-rapidapi-key":"e74c1b33f6mshe580bbf974b73ccp1d5bcbjsn5bf09c8f0b61",
//   "useQueryString":true
//   }
//   })
//   .then((response)=>{
//     this.setState({
//       loser:response.data.losers
//     },()=>{
//       console.log(response.data.losers)
//     })
//   })
//   .catch((error)=>{
//     console.log(error)
//   })

// axios({
//   "method":"GET",
//   "url":"https://morning-star.p.rapidapi.com/market/v2/get-movers",
//   "headers":{
//   "content-type":"application/octet-stream",
//   "x-rapidapi-host":"morning-star.p.rapidapi.com",
//   "x-rapidapi-key":"f75310b92amsh13e6e1887369dacp14e2b7jsn1d042dbb2e3b",
//   "useQueryString":true
//   }
//   })
//   .then((response)=>{
//     this.setState({
//       loser:response.data.losers
//     },()=>{
//       console.log(response.data.gainers)
//     })
//   })
//   .catch((error)=>{
//     console.log(error)
//   })
