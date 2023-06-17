import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <div className="intro">
        <h1> Welcome! </h1>
        <h3> Pair any item with a good book. Relax and take a break!</h3>
        <p> <i> Classic’ – a book which people praise and don’t read. </i> </p>
        <p> <i> ~ Mark Twain </i> </p>
      </div>

      <img className="hero-img" src="src/components/Hero/Hero.png"/>

    </div>
  )
}

export default Hero