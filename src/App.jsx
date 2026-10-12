import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Fortune from './Fortune.jsx'
import Footer from './Footer.jsx'
import DataPlaylistPortfolioCard from './DataPlaylistPortfolioCard.jsx'
import CapstonePortfolioCard from './CapstonePortfolioCard.jsx'
import "@picocss/pico"
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div>
      <Header />
      <Hero />
      <hr></hr>
      <p className="hero">Click through for a lucky fortune!</p>
      <Fortune />
      <DataPlaylistPortfolioCard />
      <CapstonePortfolioCard />
      <Footer />
    </div>
  )
}

export default App
