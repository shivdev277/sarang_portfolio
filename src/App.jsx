import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Writeups from './components/Writeups.jsx'
import Timeline from './components/Timeline.jsx'
import Certificates from './components/Certificates.jsx'
import Achievements from './components/Achievements.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-bg text-text font-sans">
      <div className="grid-bg" />
      <div className="scanline" />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Writeups />
      <Timeline />
      <Certificates />
      <Achievements />
      <Skills />
      <Footer />
    </div>
  )
}
