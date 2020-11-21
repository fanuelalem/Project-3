import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import otherUtil from './../APICall/otherutil'
import API from './../APICall/utils'


export default class SearchNav extends Component {
     state = { 
        result: {},
        search: "",
        xvalues:[],
        yvalues:[]
    }


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

                
                  <input
            
            onChange={this.handleInputChange}
            value={this.value}
            name="search"
            type="text"
            className="form-control"
             id="search"
            ></input>
 
             
            <button onClick={this.handleFormSubmit}>submit ticker</button>
  
            </div>
        )
    }
}
