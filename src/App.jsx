import Header from './Header.jsx'
import Fortune from './Fortune.jsx'
import Footer from './Footer.jsx'
import DataPlaylistPortfolioCard from './DataPlaylistPortfolioCard.jsx'
import CapstonePortfolioCard from './CapstonePortfolioCard.jsx'


function App() {
  return (
    <div>
      <Header />
      <p>Pokémon trainer from Pallet Town.</p>
      <Fortune />
      <DataPlaylistPortfolioCard />
      <CapstonePortfolioCard />
      <Footer />
    </div>
  )
}

export default App
