import Header from './Header.jsx'

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Header() {
  return <h1>Ash Ketchum</h1>
}

function Fortune() {
  let fortunes = ["Ship it.", "Read the error.", "Commit early."]
  let index = randomNumber(0, fortunes.length - 1)
  return <p>{fortunes[index]}</p>
}

function Footer() {
  let year = new Date().getFullYear()
  return <p>&copy; {year} Ash Ketchum</p>
}

function App() {
  return (
    <div>
      <Header />
      <p>Pokémon trainer from Pallet Town.</p>
      <Fortune />
      <Footer />
    </div>
  )
}

export default App
