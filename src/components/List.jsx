import React from 'react'

import "../styling/List.css"

import Card from './Card'
import CardData from '../Data/CardData'

const List = () => {
  
  const Cards = CardData.map(card => <Card 
    key={card.id}
    // img={card.img}
    // openplaces={card.openplaces}
    // stars={card.stars}
    // reviews={card.reviews}
    // location={card.location}
    // title={card.title}
    // price={card.price}
    card={card}
  />)
  
  return (
    <div className='list'>
      {Cards}
    </div>
  )
}

export default List