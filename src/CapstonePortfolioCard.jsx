import { useState } from 'react'


function CapstonePortfolioCard() {
  let name = "Capstone"
  let description = "A capstone project that demonstrates my skills in web development."
  let liveUrl = "https://miaya-dennis.github.io/capstone/"
  let repoUrl = "https://github.com/miaya-dennis/capstone"
  const [likes, setLikes] = useState(0)

  const addLike = () => {
    setLikes(likes + 1)
  } 
  const removeLike = () => {
    setLikes(likes - 1)
  }
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
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