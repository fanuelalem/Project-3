import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid,Message } from 'semantic-ui-react';
// import Uploads from './../Uploads'
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
 import { getUserData, getOtherUsers } from '../../actions/profile';
  import Uploads from './../Upload'
  import Trending from './../Trending'
 
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
import axios from 'axios';
import finhubData from '../APICall/finhubData';
 
// import io from 'socket.io-client';





class App extends Component {



  state = { 
    result: {},
    search: "",
    xvalues:[],
    yvalues:[],
    visible:false,
    name:'',
    info:{},
    currentuser:{},
    quotes:{}
 }


 


 
componentDidMount() {

  axios.get('/api/user/profile',{
    headers: { authorization: localStorage.getItem('token') },
  }).then((response)=>{
    this.setState({currentuser:response.data},()=>{
      // console.log(response.data,'response user data')
    })
  })

    this.searchMovies('aapl');
   }

   


  searchMovies = async (query) => {
    let xfunction=[];
    let yfunction=[];

    
 


// otherUtil.search(query).then((response)=>{
//   this.setState({qoute:response.data})
//   console.log(response,'asxa')
// })

    

    finhubData.search(query)
     .then((response)=>{
      console.log(response,'finhubb api')

       this.setState({result:response.data})
      //  console.log(response.data,'edas')
    })

  //   Info.search(query)
  //   .then((response)=>{
  //    console.log(response,'data api')

  //     this.setState({info:response.data})
  //  })
    

     API.search(query)
    .then((response)=>{
       for(var key in response.data['Time Series (Daily)']){
        xfunction.push(key);
        yfunction.push(response.data['Time Series (Daily)'][key]['1. open'])
      }
      this.setState({xvalues:xfunction,yvalues:yfunction})
      console.log(xfunction)
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

DisplayFunction = () => {
  this.setState({visible:true})
}

 
 

 
  render () {
     


    return (
      
      <div>

 
       
<ScrollToTop className='scroll'/>

 
            <Nav search ={this.state.search} profile={this.state.currentuser} noDisplay={this.noDisplayFunction} display = {this.goToStockSearch} onsearch={this.handleInputChange} visible={this.state.visible} name='name is fanuel' buttonClick={this.handleFormSubmit} authenticated={this.props.authenticated}/>
           
           
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

           {/* <Route exact path='/myuploads' component={Uploads}/> */}



           {/* <Route exact path='/Users' component={Users}/> */}

           <Route exact path='/signup' display={this.DisplayFunction} component={SignUp}/>
           <Route exact path='/signin' display={this.DisplayFunction} component={SignIn}/>
           <Route exact path='/signout' component={SignOut}/>

 
           {/* <Route exact path='/popular' component={AllTodosList}/> */}
<Route exact path='/trending' component={Trending}/>

          {/* <Navbar isLoggedIn={this.props.authenticated}/>
          <Route exact path='/counter' component={Counter}/>
          <Route exact path='/usertodos' component={UserTodoList}/>
          <Route exact path='/alltodos' component={AllTodosList}/>
          <Route exact path='/chat' component={Chat}/>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signout' component={SignOut}/>
          <Route exact path='/' component={SignUp}/> */}
        

        <Route exact path='/watchlist'  
// component={UserTodoList}
render={(props) => (<UserTodoList {...props} 
  x={this.state.xvalues}
  y={this.state.yvalues}
  qoute={this.state.qoute}
  result={this.state.result}
  // result = {this.state.result}
  // visible = {this.state.visible}
  // info ={this.state.info}
  // xvalues={this.state.xvalues}
  // yvalues={this.state.yvalues}

  />)}
/>
 
 

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



// import Users from './../Users/index'
 
// import NavBar from './../../components/Navbar';