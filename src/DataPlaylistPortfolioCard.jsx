import { useState } from 'react'

function DataPlaylistPortfolioCard() {

const project = {
  name: "Data Playlist",
  description: "A page of buttons that count, change, and react to clicks.",
  details: "I built it in Level 2 to practice click listeners and the counter pattern.",
  liveUrl: "https://YOUR-USERNAME.github.io/data-playlist/",
  repoUrl: "https://github.com/YOUR-USERNAME/data-playlist",
} 
const [likes, setLikes ] = useState(0)
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
let text = project.description
if (open) {
  text = project.description + " " + project.details
}
let label = "Show More"
if (open) {
  label = "Show Less"
}

  return (
    <article>
      <h2>{project.name}</h2>
      <p>{text}</p>
      <button onClick={toggleOpen}>{label}</button>
      <p>
        <a href={project.liveUrl}>See it live</a> · <a href={project.repoUrl}>Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>&nbsp; &nbsp; &nbsp; &nbsp;
      <button onClick={removeLike}>Unlike {likes}</button>
      <p>Likes: {likes}</p>
    </article>
  )
}

export default DataPlaylistPortfolioCard