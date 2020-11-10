import React from "react";
import { Input } from 'semantic-ui-react'
import { Button ,Icon} from 'semantic-ui-react'
import './../../../index.css'



function SearchBar(props) {
  return (
      <div className="container">
          <div className="row">
              <div className="col-12">

              <form  >
      <div style={{marginBottom:'25px'}} >

      <div>
    <Input  className='input-search'
          placeholder=''
          placeholder='enter ticker'
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
            id="search" />
    <Button onClick={props.handleFormSubmit} color='purple'  >   
          Search </Button>
  </div>
     
         
         
      </div>
    </form>


              </div>
          </div>
      </div>

   
  );
}

export default SearchBar;