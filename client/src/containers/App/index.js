import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid,Message } from 'semantic-ui-react';
 
// import NavBar from './../../components/Navbar';
import Winners from '../winners';
import Losers from './../losers'
import AllTodosList from "../popular"
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import UserTodoList from '../userWatchList';
import SignOut from '../SignOut';
 import NavBar from '../../components/Navbar';
 import Nav from './../../components/nav'
 import SearchStock from './../../containers/SearchStock'
  
 
 import ScrollToTop from './../../components/scrolltop/index'
 import Result from './../../components/nav/Result'

import './../../index.css'
import otherUtil from './../APICall/otherutil'
import API from './../APICall/utils'
import Info from '../APICall/info'
 
// import Chat from '../chatComponent';
import Home from './../Home/index'
// import NewHome from './../NewHome/index'

import { connect } from 'react-redux';

// import io from 'socket.io-client';





class App extends Component {



  state = { 
    result: {},
    search: "",
    xvalues:[],
    yvalues:[],
    visible:true,
    name:'',
    info:{},
 }


 


 
componentDidMount() {
    this.searchMovies('');
   }

   


  searchMovies = async (query) => {
    let xfunction=[];
    let yfunction=[];

    


    otherUtil.search(query)
     .then((response)=>{
      console.log(response,'finhubb api')

       this.setState({result:response.data})
    })

  //   Info.search(query)
  //   .then((response)=>{
  //    console.log(response,'data api')

  //     this.setState({info:response.data})
  //  })
    

     API.search(query)
    .then((response)=>{
      console.log(response,'alphavantage api')
      for(var key in response.data['Time Series (Daily)']){
        xfunction.push(key);
        yfunction.push(response.data['Time Series (Daily)'][key]['1. open'])
      }
      this.setState({xvalues:xfunction,yvalues:yfunction})
      })
    .catch((e)=>{
        console.log(e)
    })
}
  
  // handleInputChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
 
 
    
 
  // };
  handleInputChange = event => {
   
 const {value} = event.target
 this.setState({search:value})
 
  };


  goToStockSearch = () => {
    this.setState({visible:true})

  }
 
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
   this.setState({search:''})
    };

 
   
noDisplayFunction = () => {
  this.setState({visible:false})
}

 
 

 
  render () {
     


    return (
      
      <div>

 
       
<ScrollToTop className='scroll'/>

 
            <Nav search ={this.state.search} noDisplay={this.noDisplayFunction} display = {this.goToStockSearch} onsearch={this.handleInputChange} visible={this.state.visible} name='name is fanuel' buttonClick={this.handleFormSubmit} authenticated={this.props.authenticated}/>
           
           
           <Route exact path='/searchstock' 
            render={(props) => (<Result {...props} 
            result = {this.state.result}
            visible = {this.state.visible}
            info ={this.state.info}
            />)}/> 

       <Route exact path='/' 
      //  component={NewHome}
       render={(props) => (
        <Home {...props} name='hello world'visible = {this.state.visible} onhomeclick={this.goToStockSearch} />
      )}/>

 
           <Route exact path='/winners'  component={Winners}/>
           <Route exact path='/losers' component={Losers}/>

 



           <Route exact path='/signup' component={SignUp}/>
           <Route exact path='/signin' component={SignIn}/>
           <Route exact path='/signout' component={SignOut}/>

 
           <Route exact path='/popular' component={AllTodosList}/>


          {/* <Navbar isLoggedIn={this.props.authenticated}/>
          <Route exact path='/counter' component={Counter}/>
          <Route exact path='/usertodos' component={UserTodoList}/>
          <Route exact path='/alltodos' component={AllTodosList}/>
          <Route exact path='/chat' component={Chat}/>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signout' component={SignOut}/>
          <Route exact path='/' component={SignUp}/> */}
        

 
      <Route exact path='/watchlist' component={UserTodoList}/>

 

      {/* <Route exact path='/home' component={Home}/> */}


</div>
    );
  }
}

// function mapStateToProps(state) {
//   return { counter:state.counter };
// }

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}
// connect(mapStateToProps)
export default connect(mapStateToProps)(App);
