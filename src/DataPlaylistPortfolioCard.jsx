import { useState } from 'react'

function DataPlaylistPortfolioCard() {
  let name = "Data Playlist"
  let description = "A playlist page that loads its songs from my own data API."
  let liveUrl = "https://miaya-dennis.github.io/data-playlist/"
  let repoUrl = "https://github.com/miaya-dennis/data-playlist"
   
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

export default DataPlaylistPortfolioCard