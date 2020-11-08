import React, { Component } from 'react'
import API from "./searchForm/utils"
import Detail from './searchForm/details'
import SearchBar from './searchForm/search'
import {Grid,Message,Container,Segment,Image,Label,Item,Button,Icon} from 'semantic-ui-react'
 import Plot from 'react-plotly.js';
import Card from './searchForm/Card'
import otherUtil from './searchForm/otherutil'
import axios from 'axios'

import {connect} from 'react-redux'
const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />


   


 
 export default class SearchStock extends Component {
    state = {
        result: {},
        search: "",
        xvalues:[],
        yvalues:[]
       };
      componentDidMount() {
        this.searchMovies('aapl');
  
      }

      searchMovies = async (query) => {
        let xfunction=[];
        let yfunction=[];

        
 

        otherUtil.search(query)
        .then((response)=>{
          this.setState({result:response.data},()=>{
            console.log(response.data)
          })
        })

     
        

         API.search(query)
        .then((response)=>{
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
            <div  style={{minHeight:'900px'}}>
                <Container >
 
         

<div className='search-container'  >
<Segment >

<SearchBar
 value={this.state.search}
 handleInputChange={this.handleInputChange}
 handleFormSubmit={this.handleFormSubmit}
/>
 
{/* <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
 
      <div style={{padding:'25px'}}>

<Item.Group divided>

<Item>
<Item.Image size='tiny' src={this.state.result.logo} />

<Item.Content>
 <Item.Header><h1>{this.state.result.name}</h1>
</Item.Header>
 <Item.Meta>
   <span className='price'>$1200</span>
   <span className='stay'>1 Month</span>
 </Item.Meta>
 <Item.Description>{paragraph}</Item.Description>
</Item.Content>
</Item>


</Item.Group>

</div>

       </Grid.Column>
      <Grid.Column>
  
       <Plot 
        data={[
          {
            x: this.state.xvalues,
            y: this.state.yvalues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
        ]}
        layout={{width: 550, height: 450, }}
       />
 

      </Grid.Column>
    </Grid.Row>
    </Grid> */}
  
<Card
exchange={this.state.result.exchange}
weburl={this.state.result.weburl}
ticker={this.state.result.ticker}
logo={this.state.result.logo}
heading={this.state.result.name || 
    
    <Message negative>
    <Message.Header>No results to display </Message.Header>
      <p>Please try again...</p>
  </Message>
 }>
 
 {this.state.result.name ? (



 <Detail
 weburl={this.state.result.weburl}
 companyName={this.state.result.name}
 exchange={this.state.result.exchange}
 shareOutstanding={this.state.result.shareOutstanding}
 finnhubIndustry={this.state.result.finnhubIndustry}
 name={this.state.result.name}
 ticker={this.state.result.ticker}
 logo={this.state.result.logo}
 >


     
 </Detail>

 





 ) : (
  <h3> </h3>
) }
</Card> 

{/* <UserTodoList/> */}
<div>
 



 </div>
 <Plot 
        data={[
          {
            x: this.state.xvalues,
            y: this.state.yvalues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
        ]}
        layout={{width: 1000, height: 450, }}
       />

 </Segment>

       </div>


       </Container>



            </div>
        )
    }
}

 
