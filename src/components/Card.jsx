import React from 'react'

import "../styling/Card.css"

import Star from "../images/star.png"

const Card = (props) => {
  return (
    <div className="card_holder">   
        <img src={props.img} alt="card" className='card'/>
        {props.status && <div className='status'>
        <p>{props.status}</p>
        </div>}
        <div className='info'>
            <div className='star'>
                <img src={Star} alt="star"/>
                <p><span>{props.stars}</span> ({props.reviews}) {props.location}</p>
            </div>
        
            <div> 
                <p>{props.title}</p>
            </div>
        
        <div className='price'>
            <p><span>From ${props.price}</span> / person</p>
        </div> 
      </div>
    </div>
  )
}

export default Card