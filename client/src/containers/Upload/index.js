import Axios from 'axios'
import React, { Component } from 'react'
import axios from 'axios'

export default class Upload extends Component {
state={
    name:'',
    type:''

}

fileSelectedHandler = event => {
this.setState({name:event.target.files[0].name,type:event.target.files[0].type})
console.log()
}

fileUploadHandler = () => {
    const {name,type}=this.state
    // console.log(name,type)
axios.post('/api/user/upload',{name,type}).then((response)=>{
   console.log(response,'data')
})

}


    render() {
        return (
            <div style={{margin:'100px 0 0 0',textAlign:'center'}}>
                <div>

 <h2> upload picture</h2>
<input type='file' onChange={this.fileSelectedHandler}></input>

 
             </div>              
             <button onClick={this.fileUploadHandler}> upload</button>

               </div>

        )
    }
}
