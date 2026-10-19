import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Fortune from './Fortune.jsx'
import Footer from './Footer.jsx'
import DataPlaylistPortfolioCard from './DataPlaylistPortfolioCard.jsx'
import CapstonePortfolioCard from './CapstonePortfolioCard.jsx'
import { useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import projects from './projects.js'    


function App() {
  const [theme, setTheme] = useState("dark")
  return (
    <div data-theme="dark">
      <Header />
      <Counter />
      <Hero />
      <hr></hr>
      <p className="hero">Click through for a lucky fortune!</p>
      <Fortune />
      <ProjectCard project={projects[0]} />
      <DataPlaylistPortfolioCard />
      <CapstonePortfolioCard />
      <Footer />
    </div>
  )
}

export default App
