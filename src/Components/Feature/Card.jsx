import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div>
        <div>
        <img src={props.imageUrl} />
        <h5>{props.title}</h5>
        <p>{props.category}</p>
        <h5>
            <span>${props.price}</span>
            <span>${props.discountPercentage}</span>
        </h5>                                                 
    </div>
    </div>
  )
}

export default Card