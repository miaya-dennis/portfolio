import { useState } from 'react'

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

function Fortune() {
  const fortunes = ["You're Awesome!", "Keep Believing", "Chase your goals!"]
  const [index, setIndex] = useState(0)

  const newFortune = () => {
    setIndex(randomNumber(0, fortunes.length - 1))
  }

  return (
    <div>
      <p className="hero">{fortunes[index]}</p>
      <div className="hero">
      <button onClick={newFortune}>New Fortune</button>
    </div>
    </div>
  )
}

export default Fortune