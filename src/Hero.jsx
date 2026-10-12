import { useState } from 'react'
import heroPhoto from './hero-photo.js'
import './hero.css'


function Hero() {
  const photos = [
"photo-1668188345962-c524bc00d84a",
"photo-1632666054827-cddac46b8f57",
"photo-1645946311305-10a634a74405?",
]
  
const descriptions = [
  "Halloween Pumpkins",
  "Halloween Skeleton",
  "Floating Pumpkin",
]

  const [index, setIndex] = useState(0)
    const [invert, setInvert] = useState(true)
 
  const nextPhoto = () => {
    if (index === photos.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const previousPhoto = () => {
    if (index === 0) {
      setIndex(photos.length - 1)
    } else {
      setIndex(index - 1)
    }
  }
  // const [invert, setInvert] = useState(true)//initial value

  const invertOn = () => {
    setInvert(true) //flip the value
  }

  const invertOff = () => {
    setInvert(false) //flip the value
  }
  
  const [src, alt] = heroPhoto(photos[0], 500, 500, invert, descriptions[index])
  return (
    <div>
      <div className="hero">
 <img src={heroPhoto(500, 500, invert, "Halloween Pumpkins")} alt={"Halloween Pumpkins"} />  
         </div>

      <div className="hero">  
        <button onClick={previousPhoto}>Previous</button> &nbsp; &nbsp; &nbsp;  &nbsp;
        <button onClick={nextPhoto}>Next</button>  &nbsp; &nbsp; &nbsp;  &nbsp;
        <button onClick={invertOn}>Invert</button> &nbsp; &nbsp; &nbsp;  &nbsp; 
        <button onClick={invertOff}>No Invert</button>
      </div>

    </div>
  )
  
}
export default Hero