import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import otherUtil from './../APICall/otherutil'
import API from './../APICall/utils'
 

const SearchProp = (props) => {
 
const [state,setState] = useState({ 
    result: {},
    search: "",
    xvalues:[],
    yvalues:[]}
    )
          

 useEffect (()=>{
     
    searchMovies('aapl');
 

  },[])
 
 
  const searchMovies = async (query) => {
    let xfunction=[];
    let yfunction=[];

    


    otherUtil.search(query)
    .then((response)=>{
      console.log(response,'data')
      setState({...state,result:response.data},()=>{
        console.log(response.data)
      })
    })

 
    

     API.search(query)
    .then((response)=>{
      for(var key in response.data['Time Series (Daily)']){
        xfunction.push(key);
        yfunction.push(response.data['Time Series (Daily)'][key]['1. open'])
      }
      setState({...state, xvalues:xfunction,yvalues:yfunction})
       console.log(state,)
     })
    .catch((e)=>{
        console.log(e)
    })
}
 
    
    
        
    
     

    
 const handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    setState({...state,
      [name]: value
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  searchMovies(state.search);
     console.log(state,'jhjhj')
  };
 
 
     return (
          <div >
 <form>
   <input
            
             name="search"
            type="text"
            onChange={handleInputChange}
            className="form-control"
             id="search"
 
             ></input>
 
             
     <button onClick={handleFormSubmit}>    enter ticker  
</button>
            </form>
  
        </div>
    )
}

export default SearchProp



 