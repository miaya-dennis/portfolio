import { useState } from 'react'

function DataPlaylistPortfolioCard() {
 const project = {
  name: "Data Playlist",
  description: "A page of buttons that count, change, and react to clicks.",
  details: "I built it in Level 2 to practice click listeners and the counter pattern.",
  liveUrl: "https://miaya-dennis.github.io/data-playlist/",
  repoUrl: "https://github.com/miaya-dennis/data-playlist",
}
   
  const [likes, setLikes] = useState(0)
  
    const addLike = () => {
      setLikes(likes + 1)
    } 
    const removeLike = () => {
      setLikes(likes - 1)
    }
  return (
    <article>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>{project.details}</p>  
      <p>
        <a href={project.liveUrl}>See it live</a> · <a href={project.repoUrl}>Read the code</a>
      </p>
       <button onClick={addLike}>Like</button> &nbsp; &nbsp; &nbsp; &nbsp;
      <button onClick={removeLike}>Unlike</button>
      <p>Likes: {likes}</p>
    </article>
  )
}

export default DataPlaylistPortfolioCard