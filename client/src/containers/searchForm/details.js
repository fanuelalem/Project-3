import React from "react";
import { Header,Icon,Card,Image,List } from 'semantic-ui-react'
import './../../index.css'

const Detail = (props) => {
  return (
    <div className='detail' style={{textAlign:'center'}}>

{/* <List>
    <List.Item>
      <List.Header>Company</List.Header>{props.name}
    </List.Item>
    <List.Item>
      <List.Header>Company Website</List.Header>
      <a style={{color:'orange'}}href={props.weburl}> {props.weburl}</a>    </List.Item>
    <List.Item>
      <List.Header>exchange</List.Header>
{props.exchange}    </List.Item>
    <List.Item>
      <List.Header>Industry</List.Header>
{props.finnhubIndustry}
    </List.Item>
  </List> */}

       
    </div>
     );
}

export default Detail;