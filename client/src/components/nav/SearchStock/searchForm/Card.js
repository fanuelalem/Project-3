import React from "react";
import { Header,Icon,Image } from 'semantic-ui-react'

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
         
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
