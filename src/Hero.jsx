import { useState } from 'react'
import heroPhoto from './hero-photo.js'
import './hero.css'


function Hero() {
  
  const [invert, setInvert] = useState(true)//initial value

  const invertOn = () => {
    setInvert(true) //flip the value
  }

  const invertOff = () => {
    setInvert(false) //flip the value
  }
  
  const src = heroPhoto(500, 500, invert, "Halloween Pumpkins")
  return (
    <div>
    <div className="hero">
      <img src={heroPhoto(500, 500, invert, "Halloween Pumpkins")} alt={"Halloween Pumpkins"} />
    </div>
    <p>
   
      <button onClick={invertOn}>Invert</button>
      <button onClick={invertOff}>Don't Invert</button>
    </p>
    </div>
  )
}
export default Hero