import axios from 'axios';
import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import ImageUploader from 'react-images-upload';
import { List, Header,Input,Table, Message,Button,Image,Pagination,Container,Grid,Responsive,Card,Icon } from 'semantic-ui-react';

   

export default class UpdateProfile extends Component {

state={
    pictures:[],
    file:"",
    fileName:"",
    uploadedFile:{},
    myImages:[],
     
}

componentDidMount = () => {
    this.getMyImage()
}

 


getMyImage = () => {
    axios.get('/api/user/myimages',{headers: { 'authorization': localStorage.getItem('token')}})
    .then((response)=>{
        this.setState({myImages:response.data.reverse()})
        console.log(response)
    })
}

handleRequest = (event) => {
    event.preventDefault()
    const data = new FormData();
    const {file} = this.state
     data.append('file',file)
      

    axios.post('/api/user/myimages',data,{ 'Content-Type':'multipart/form-data',headers: { 'authorization': localStorage.getItem('token')}})
    .then((response)=>{
        const {fileName,filePath} = response.data
        this.setState({uploadedFile:response.data})
        this.getMyImage()
        console.log(response,'postfdsv')
    })
     
   
 
   
   
}


    render() {
        console.log(this.state,'console')
        return (
            <div>




<Helmet>
   <style>{'body { background-color:#532f8c;  }'}</style>

         </Helmet>

 

    <Container>

    

 <div style={{margin:'70px 0 0 0'}}>
 <Input onChange={(event)=>{
 const file = event.target.files[0]
 this.setState({file:file})
 }}
 type='file'>
 </Input>

           

 
<Button className='axiosRequestImages'   onClick={this.handleRequest}> add a picture</Button>
 

{this.state.myImages.map((item)=>(
    <div>
        {/* <p>{item.fileName}</p> */}
        <img 
        style={{width:'200px',
        height:'200px',
        float:'left',margin:"20px",
        borderRadius:'9px',backgroundColor:'white'}}
        src={item.filePath}
        />
    </div>
 ))
 }


</div>
    </Container>
   
 

 
                
            </div>
        )
    }
}
