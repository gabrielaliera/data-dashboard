import React from 'react';
import './Card.css';


const Card = (props) => {
  
  return (
    <div className="Card">
      <h1>{props.name}</h1>
      {props.image ? (<img src={props.image} alt={`${props.name} Logo`}/>) : <div></div>}
      <h2>{props.stat}</h2>
    </div>
  )
}

export default Card