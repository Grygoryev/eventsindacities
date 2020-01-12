import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad sequi explicabo quas debitis est qui assumenda doloribus veritatis cum ipsa odio fuga tempora laudantium asperiores, voluptas blanditiis facilis dolor!</p>
    </div>
  )
}

export default Rainbow(About)