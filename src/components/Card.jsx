import React from 'react'

import "../styling/Card.css"

import Star from "../images/star.png"

const Card = (props) => {
  
  let status
  if (props.card.openplaces === 0) {
    status = "SOLD OUT"
  }
  else if(props.card.openplaces > 0){
    status = "ONLINE"
  }
  
  return (
    <div className="card_holder">   
        <img src={props.card.img} alt="card" className='card'/>
        {status && <div className='status'>
          <p>{status}</p>
        </div>}
        <div className='info'>
            <div className='star'>
                <img src={Star} alt="star"/>
                <p><span>{props.card.stars}</span> ({props.card.reviews}) {props.card.location}</p>
            </div>
        
            <div> 
                <p>{props.card.title}</p>
            </div>
        
        <div className='price'>
            <p><span>From ${props.card.price}</span> / person</p>
        </div> 
      </div>
    </div>
  )
}

export default Card