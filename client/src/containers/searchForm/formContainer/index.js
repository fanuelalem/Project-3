import React, { Component } from 'react'
import API from "./../utils"
import Detail from './../details'
import SearchBar from './../search'
import { Grid,Message,List,Image,Icon } from 'semantic-ui-react'
import Card from './../Card'
import Plot from 'react-plotly.js';
import {connect} from 'react-redux'
 

import otherUtil from './../otherutil'
import axios from 'axios'
  


 
 export default class FormContainer extends Component {
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
          console.log(response,'data')
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
            <div>

<div>
{/* <Grid padded='horizontally'textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 700 }}> */}

 
          <SearchBar
 value={this.state.search}
 handleInputChange={this.handleInputChange}
 handleFormSubmit={this.handleFormSubmit}
/>
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

 exchange={this.state.result.exchange}
 shareOutstanding={this.state.result.shareOutstanding}
 finnhubIndustry={this.state.result.finnhubIndustry}
 name={this.state.result.name}
 ticker={this.state.result.ticker}
 logo={this.state.result.logo}
 />
 ) : (
  <h3> </h3>
) }
</Card> 

{/* <UserTodoList/> */}
<div>



  
<Plot 
        data={[
          {
            x: this.state.xvalues,
            y: this.state.yvalues,
            type: 'scatter',
            mode: ' ',
            marker: {color: 'red'},
            
          }
        ]}
        layout={{width: 630, height: 450,title:`${this.state.result.name}` }}

        
       />

<div style={{textAlign:'center'}}>

        
<List>
<Grid>
  
 <Grid.Row columns={4}>
      <Grid.Column>
      <List.Item>
      <List.Header> <h2>   Company</h2> </List.Header><h5> {this.state.result.name}</h5> 
    </List.Item>      </Grid.Column>
      <Grid.Column>
      <List.Item>
      <List.Header><h2 > Website</h2></List.Header>
     <h5>   <a href={this.state.result.weburl}>   {this.state.result.weburl}    </a>    </h5>
    </List.Item>      </Grid.Column>
      <Grid.Column>
      <List.Item>
      <List.Header><h2> Exchange</h2></List.Header><h5> 
{this.state.result.exchange}   

      </h5>
  </List.Item>      </Grid.Column>
      <Grid.Column>
      <List.Item>
      <List.Header><h2> Industry</h2></List.Header>
      <h5>
{this.state.result.finnhubIndustry}

      </h5>
     </List.Item>      </Grid.Column>
    </Grid.Row>
    </Grid>


    

     

  

   


  </List>

  </div>

 </div>
 

{/* </Grid.Column>
</Grid> */}
       </div>





            </div>
        )
    }
}

// function mapStateToProps(state){
//   return {allResult:state.result.allResult,resultError:state.result.allResult}
// }
// export default connect(mapStateToProps,{getResult})(FormContainer)

// function mapStateToProps(state){
//   return{allResult:state.result.allResult,resultError:state.result.resultError}
// }
// export default connect(mapStateToProps,{searchMovies})(FormContainer)