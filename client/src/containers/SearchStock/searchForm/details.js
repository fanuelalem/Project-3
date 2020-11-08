import React from "react";
import { Header,Icon,Card,Image,Grid,Segment,Button} from 'semantic-ui-react'
import './../../../index.css'
import { Link } from 'react-router-dom';
import pic from './../../../components/Images/pexelpic.jpg'

const Detail = (props) => {
  return (
    <div className='detail'>
<Grid>
 
                <Grid.Row columns={5}>
      <Grid.Column>
       <h2> Company Name</h2>          <Image   src={props.logo} avatar/>
<span>{props.companyName}</span>
      </Grid.Column>
      <Grid.Column>
      <h2>exchange</h2> <p> {props.exchange}</p>
      </Grid.Column>
      <Grid.Column>
      <h2> Company Site  </h2><p><a href={props.weburl}> {props.weburl}</a></p>
      </Grid.Column>
      <Grid.Column>
      <h2>Industry</h2> <p>{props.finnhubIndustry}</p>
      </Grid.Column>
      <Grid.Column>
      <h2>shareOutstanding</h2><p>{props.shareOutstanding}</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>



 
         
  
 
     </div>
     );
}

export default Detail;