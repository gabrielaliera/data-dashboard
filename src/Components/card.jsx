import React from 'react';
import './Card.css';


const Card = (props) => {
  
  return (
    <div className="Card">
      <h1>{props.name}</h1>
      <br></br>
      <h2>{props.stat}</h2>
    </div>
  )
}

export default Card