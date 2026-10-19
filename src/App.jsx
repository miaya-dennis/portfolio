import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Fortune from './Fortune.jsx'
import Footer from './Footer.jsx'
import ProjectCard from './ProjectCard.jsx'
import project from './project.js'


function App() {
  /*const [theme, setTheme] = useState("dark")*/
  return (
    <div /*data-theme="dark"*/>
      <Header />
      <Hero />
      <p className="hero">Click through for a lucky fortune!</p>
      <Fortune />
      <ProjectCard project={project[0]} />
      <ProjectCard project={project[1]} />
      <Footer />
    </div>
  )
}

export default App
