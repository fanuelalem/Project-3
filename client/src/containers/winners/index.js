import React, { Component } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import axios from 'axios';
import WinnerListItems from '../apiListWinners';

// import requireAuth from '../../hoc/requireAuth';

class Winners extends Component {
  state = {
    title: '',
    gainer: [],
    losers: [],
  };
  componentDidMount = () => {
    this.getWinners();
  };

  getWinners = () => {
    console.log('api request axios');

    axios({
      method: 'GET',
      url: 'https://morning-star.p.rapidapi.com/market/v2/get-movers',
      headers: {
        'x-rapidapi-key': '46d623d4e3mshe0376e4a2f88b30p13b625jsn10c462d75ab2',
        'x-rapidapi-host': 'morning-star.p.rapidapi.com',
        useQueryString: true,
      },
    })
      .then(response => {
        this.setState({ gainer: response.data.gainers });
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
  };

  addWinner = () => {
    axios
      .post('/api/user/stock', { title: this.state.gainer.standardName })
      .then(response => {
        this.setState({ title: response.data });
      });
  };

  render() {
    return (
      <Grid centered>
        <Grid.Column textAlign="center">
          <WinnerListItems gainers={this.state.gainer} />
        </Grid.Column>
      </Grid>
    );
  }
}

// This takes a key which is what we want the states name to be as props
// The value is what state we want to pull out from the store
// function mapStateToProps(state) {
//   return { counter: state.counter };
// };
// 2nd parameter to connect is what actions we want wired up to this component
// To be sent to all of our reducers

// export default requireAuth(connect(mapStateToProps, { increment, decrement })(Counter));
//
// export default compose(
//   connect(mapStateToProps, { increment, decrement}),requireAuth)(Counter);

// export default connect(mapStateToProps,{increment,decrement})(Counter)
export default Winners;

//other account api

// axios.get('https://financialmodelingprep.com/api/v3/gainers?apikey=fc798fa9b934e1e167d9324db570eb17')
// .then((response)=>{
//   this.setState({
//     gainer:response.data
//   },()=>{
//     console.log(response)
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
//       gainer:response.data.gainers
//     },()=>{
//       console.log(response.data.gainers)
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
//       gainer:response.data.gainers
//     },()=>{
//       console.log(response,'winner')
//     })
//   })
//   .catch((error)=>{
//     console.log(error)
//   })
