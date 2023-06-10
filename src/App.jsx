import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import List from './components/List'

import "./styling/App.css"

const App = () => {
  return (
    <div>
        <div className="container">
            <Navbar/>
            <Hero/>
            <List/>
        </div>
    </div>
  )
}

export default App