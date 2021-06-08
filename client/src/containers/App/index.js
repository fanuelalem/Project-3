import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './../Home/index';
import Winners from '../winners';
import Losers from './../losers';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import UserTodoList from '../userWatchList';
import SignOut from '../SignOut';
import Nav from './../../components/nav';
import Trending from './../Trending';
import ScrollToTop from './../../components/scrolltop/index';
import Result from './../../components/nav/Result';
import otherUtil from './../APICall/otherutil';
import API from './../APICall/utils';
import Info from '../APICall/info';
import UpdateProfile from './../UpdateProfile';
import './../../index.css';
import { connect } from 'react-redux';
import axios from 'axios';
import finhubData from '../APICall/finhubData';
import Peers from './../APICall/peers';


class App extends Component {
  state = {
    result: {},
    search: '',
    xvalues: [],
    yvalues: [],
    visible: false,
    name: '',
    info: {},
    currentuser: {},
    qoute: [],
    peers: [],
    getSearch: '',
  };

  componentDidMount() {
    axios
      .get('/api/user/profile', {
        headers: { authorization: localStorage.getItem('token') },
      })
      .then(response => {
        this.setState({ currentuser: response.data }, () => {
          // console.log(response.data,'response user data')
        });
      });
    this.searchMovies('AAPL');
  }

  searchMovies = async query => {
    let xfunction = [];
    let yfunction = [];

    otherUtil.search(query).then(response => {
      this.setState({ qoute: response.data });
      console.log(response, 'asxa');
    });

    Info.search(query).then(response => {
      console.log(response, 'data api');

      this.setState({ info: response.data });
    });

    finhubData.search(query).then(response => {
      console.log(response, 'finhubb api');
      this.setState({ result: response.data });
    });

    Peers.search(query).then(response => {
      this.setState({ peers: response.data });
    });

    API.search(query).then(response => {
      for (var key in response.data['Time Series (Daily)']) {
        xfunction.push(key);
        yfunction.push(response.data['Time Series (Daily)'][key]['1. open']);
      }
      this.setState({ xvalues: xfunction, yvalues: yfunction });
      console.log(xfunction);
    });
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({ search: value.toUpperCase() });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.searchMovies(this.state.search);

    this.setState({ search: '' });
  };

  noDisplayFunction = () => {
    this.setState({ visible: false });
  };

  goToStockSearch = () => {
    this.setState({ visible: true });
  };

  DisplayFunction = () => {
    this.setState({ visible: true });
  };

  // handleInputChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  render() {
    return (
      <div>
        <ScrollToTop className="scroll" />
        <Nav
          search={this.state.search}
          profile={this.state.currentuser}
          noDisplay={this.noDisplayFunction}
          display={this.goToStockSearch}
          onsearch={this.handleInputChange}
          visible={this.state.visible}
          name="name is fanuel"
          buttonClick={this.handleFormSubmit}
          authenticated={this.props.authenticated}
        />

        <Route
          exact
          path="/searchstock"
          render={props => (
            <Result
              {...props}
              result={this.state.result}
              visible={this.state.visible}
              info={this.state.info}
              qoute={this.state.qoute}
              peer={this.state.peers}
              search={this.state.search}
              buttonClick={this.handleFormSubmit}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={props => (
            <Home
              {...props}
              name="hello world"
              visible={this.state.visible}
              onhomeclick={this.goToStockSearch}
            />
          )}
        />

        <Route exact path="/winners" component={Winners} />

        <Route exact path="/losers" component={Losers} />

        <Route exact path="/updateprofile" component={UpdateProfile} />

        <Route
          exact
          path="/signup"
          display={this.DisplayFunction}
          component={SignUp}
        />

        <Route
          exact
          path="/signin"
          display={this.DisplayFunction}
          component={SignIn}
        />

        <Route exact path="/signout" component={SignOut} />

        <Route exact path="/trending" component={Trending} />

        <Route
          exact
          path="/watchlist"
          render={props => (
            <UserTodoList
              {...props}
              x={this.state.xvalues}
              y={this.state.yvalues}
              qoute={this.state.qoute}
              result={this.state.result}
            />
          )}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}
export default connect(mapStateToProps)(App);
