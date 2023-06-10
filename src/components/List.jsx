import React from 'react'

import "../styling/List.css"

import Card from './Card'

const List = () => {
  return (
    <div className='list'>
      <Card
        img={require("../images/img1.png")}
        status="SOLD OUT"
        stars="5.0"
        reviews={6}
        location="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
      />
      <Card
        img={require("../images/img2.png")}
        status="ONLINE"
        stars="5.0"
        reviews={30}
        location="USA"
        title="Learn wedding photography"
        price="126"
      />
      <Card
        img={require("../images/img3.png")}
        
        stars="4.8"
        reviews={2}
        location="USA"
        title="Group Mountain Biking"
        price="50"
      />
    </div>
  )
}

export default List