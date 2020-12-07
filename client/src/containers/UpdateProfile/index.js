import axios from 'axios';
import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import ImageUploader from 'react-images-upload';
import { List, Header,Table, Message,Button,Image,Pagination,Container,Grid,Responsive,Card,Icon } from 'semantic-ui-react';

   

export default class UpdateProfile extends Component {

state={
    pictures:[],
    file:"",
    fileName:"",
    uploadedFile:{},
    myImages:[]
     
}
// handleChange = (event) => {
// const files = event.target.files[0]
//  this.setState({pictures:files})
 
// }  
componentDidMount = () => {
    this.getMyImage()
}

 
// onDrop = (picture) => {
//         this.setState({
//             pictures: this.state.pictures.concat(picture),
//         },()=>{
//             console.log(this.state.pictures,'hello')
//         });
//     }


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
      
    // axios.post('https://httpbin.org/anything',data).then((response)=>{
    //     console.log(response)
    // })

    axios.post('/api/user/myimages',data,{ 'Content-Type':'multipart/form-data',headers: { 'authorization': localStorage.getItem('token')}})
    .then((response)=>{
        const {fileName,filePath} = response.data
        this.setState({uploadedFile:response.data})
        this.getMyImage()
        console.log(response,'postfdsv')
    })
     
   
 
    //  axios.post('/api/user/myimages', {fileName:this.state.file.name},{ headers: { 'authorization': localStorage.getItem('token')}})
    // .then((response)=>{
    //     console.log(response, 'image item')
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })

   
}


    render() {
        console.log(this.state,'console')
        return (
            <div>

{/* <Helmet>
   <style>{'body { background-color:#532f8c;  }'}</style>

         </Helmet>


         <div style={{margin:'80px 20px 0px 20px',backgroundColor:"whitesmoke"}}>
             
             <h2 style={{display:'flex',justifyContent:"center",padding:"40px 0 0 0"}}>
                 
                  upload file
                  
                  </h2>
<form  >

  <input onChange={(event)=>{
 const file = event.target.files[0]
 this.setState({file:file})
 }}
 type='file'>
 </input>

           

 
<button className='axiosRequestImages' onClick={this.handleRequest}> axios request</button>
</form>

<div style={{}}>
  */}

{/* 
{this.state.uploadedFile?
 <div style={{backgroundColor:'red'}}>
{console.log(this.state.uploadedFile,'uploaded file')
}

<h3> {this.state.uploadedFile.fileName}</h3>
<img style={{width:'20%'}} src={this.state.uploadedFile.filePath}>
    
</img>


<div>

    <h3> my pics</h3>
    <button onClick={this.getMyImage}> trigger get</button>
    
    
    {this.state.myImages.map((item)=>(

<Container>

 
        <div style={{margin:"40px 0 0 0",float:'left'}}>
                <h3>{item.fileName}</h3>
                <img style={{width:'350px',height:'300px'}} src={item.filePath}/>

                
            </div>
            </Container>

        ))}
    </div>
 
 
 

</div>
 


:null}





</div>




         </div> */}


<Helmet>
   <style>{'body { background-color:#532f8c;  }'}</style>

         </Helmet>

<div>

    <Container>

    <h2 style={{display:'flex',justifyContent:"center",padding:"90px 0 0 0"}}>
                 
                 upload file
                 
                 </h2>

                 <input onChange={(event)=>{
 const file = event.target.files[0]
 this.setState({file:file})
 }}
 type='file'>
 </input>

           

 
<button className='axiosRequestImages'   onClick={this.handleRequest}> axios request</button>

{/* {this.state.uploadedFile? 
<div>

 <p> {this.state.uploadedFile.fileName}</p>  <img style={{width:"200px"}}src={this.state.uploadedFile.filePath}></img>

 </div>

: null} */}




<h2 style={{textAlign:'center'}}> my images</h2>
<hr></hr>
<br></br>

{this.state.myImages.map((item)=>(
    <div>
        {/* <p>{item.fileName}</p> */}
        <img style={{width:'200px',height:'200px',float:'left',margin:"20px",borderRadius:'9px',backgroundColor:'white'}}src={item.filePath}/>
    </div>
))}
    </Container>
</div>
                
            </div>
        )
    }
}
