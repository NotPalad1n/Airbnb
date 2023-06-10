import React from 'react'

import Banner from "../images/banner.png"

import "../styling/Hero.css"

const Hero = () => {
  return (
    <div>
        <div className='hero'>
            <img src={Banner} alt="banner" className='banner'/>
            <div className='text'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>   
        </div>
    </div>
  )
}

export default Hero