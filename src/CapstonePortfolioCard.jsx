import { useState } from 'react'


function CapstonePortfolioCard() {
  let name = "Capstone"
  let description = "A capstone project that demonstrates my skills in web development."
  let details = "I built in Level 2 to practice click listeners and the counter pattern."
  let liveUrl = "https://miaya-dennis.github.io/capstone/"
  let repoUrl = "https://github.com/miaya-dennis/capstone"
  const [likes, setLikes] = useState(0)
  const [open, setOpen] = useState(false)

  const addLike = () => {
    setLikes(likes + 1)
  } 
  const removeLike = () => {
    setLikes(likes - 1)
  }
  const toggleOpen = () => {
    setOpen(!open)
  }
  let text = description
  if (open) {
    text = description + " " + details
  }
  let label = "Show More"
  if (open) {
    label = "Show Less"
  
  }
  let look = "outline"
  if (open) {
    look = "filled"
  }

  return (
    <article>
      <h2>{name}</h2>
      <p>{text}</p>
      <button className={look}onClick={toggleOpen}>{label}</button>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
      <button onClick={addLike}>Like</button> &nbsp; &nbsp; &nbsp; &nbsp;
      <button onClick={removeLike}>Unlike</button>
      <p>Likes: {likes}</p>
    </article>
  )
}

export default CapstonePortfolioCard