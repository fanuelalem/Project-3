import React, { Component } from 'react'
import API from "./searchForm/utils"
import Detail from './searchForm/details'
import SearchBar from './searchForm/search'
import {List,Grid,Message,Container,Segment,Image,Label,Item,Button,Icon} from 'semantic-ui-react'
 import Plot from 'react-plotly.js';
import Card from './searchForm/Card'
import otherUtil from './searchForm/otherutil'
import axios from 'axios'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// import fanuel from './../../components/Images/fanuel.jpg'
// import ganesh from './../../components/Images/ganesh.png'
// import vanessa from './../../components/Images/vanessa.jpeg'
// import husam from './../../components/Images/husam.jpeg'


import {connect} from 'react-redux'
 

   


 
 export default class SearchStock extends Component {
    state = {
        result: {},
        search: "",
        xvalues:[],
        yvalues:[],
        visible:false
       };
      componentDidMount() {
        this.searchMovies('aapl');
  
      }

      searchMovies = async (query) => {
        let xfunction=[];
        let yfunction=[];

        
 

        // otherUtil.search(query)
        // .then((response)=>{
        //   this.setState({result:response.data},()=>{
        //     console.log(response.data)
        //   })
        // })

     
        

        //  API.search(query)
        // .then((response)=>{
        //     console.log(response)
        //   for(var key in response.data['Time Series (Daily)']){
        //     xfunction.push(key);
        //     yfunction.push(response.data['Time Series (Daily)'][key]['1. open'])
        //    }
        //   this.setState({xvalues:xfunction,yvalues:yfunction},()=>{
        //       console.log(xfunction)
        //   })
           
        //  })
        // .catch((e)=>{
        //     console.log(e)
        // })
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        this.searchMovies(this.state.search);
         
      };

    render() {
      
        return (

          <div>
<Helmet>
   <style>{'body { background-color: white; }'}</style>

         </Helmet>
        <div style={{minHeight:'625px'}}>


          
        </div>
       <div className='div-tag1'style={{backgroundColor:'#222222'}}>
    <Container>
<Segment vertical>

     <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
          <h1 style={{color:'white'}}className='how-it-works'>10/10 Stock Tracker</h1>
          <div><p style={{color:'white',fontSize:'1.25rem',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif'}}>
          This application is a helpful tool to save stocks onto a personal watchlist. It provides information on the stock markets top 10 winners and losers of the day. Users can also search and track any stock in the market and view stocks that are trending among other users.

</p></div>
      </Grid.Column>
      <Grid.Column>
 
 <h1 style={{color:'white'}}className='how-it-works'>      Get Started
</h1>
<p  style={{color:'white',fontSize:'1.25rem',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif'}}> Get access to your Watchlist by creating an account.
</p>
 <Link
as={Link} to='/signup'>
<Button color='purple'> Register Now</Button>

</Link>
        </Grid.Column>
      <Grid.Column>
      <h1 style={{color:'white'}}className='how-it-works'> Contact Us</h1> 
      <p  style={{color:'white',fontSize:'1.25rem',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',marginBottom:'10px'}}> <span  >  <a href='mailto:fanuelnalem@outlook.com'  style={{color:'white'}}   >  <Icon name='mail'></Icon>Send Feedback</a> </span></p>  

      
       <h1 className='how-it-works'style={{color:'white',marginTop:'0',marginBottom:'18px'}}>
       Developed By
       </h1>  
       <div> 
           <Grid>

            <Grid.Row columns={4}>
      <Grid.Column>
        {/* <Image className='img' src={vanessa} /> */}
      </Grid.Column>
      <Grid.Column>
        {/* <Image className='img'src={husam} /> */}
      </Grid.Column>
      <Grid.Column>
        {/* <Image className='img'src={fanuel} /> */}
      </Grid.Column>
      <Grid.Column>
        {/* <Image className='img'src={ganesh} /> */}
      </Grid.Column>
    </Grid.Row>
    </Grid>

    </div>
           

      </Grid.Column>
    </Grid.Row>
    </Grid>
     
    </Segment>
     <p style={{backgroundColor:'rgb(55, 55, 59)',padding:'10px',borderRadius:'5px',color:'white',fontSize:'1.25rem',fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif' }}className='p-tag' >Copyright 2020. All rights reserved.</p>

      </Container>


      

</div> 

            </div>
        )
    }
}

 
