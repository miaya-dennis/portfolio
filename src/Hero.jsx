import imageUrl from './image-url.js'
import './hero.css'

function Hero() {
  const src = imageUrl(500, 500)
  return (
    <div className="hero">
      <img src={src} alt="Halloween Pumpkins" />
    </div>
  )
}

export default Hero