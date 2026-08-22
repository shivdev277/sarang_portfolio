import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Writeups from './components/Writeups.jsx'
import Projects from './components/Projects.jsx'
import Timeline from './components/Timeline.jsx'
import Certifications from './components/Certifications.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text font-sans">
      <div className="grid-bg" />
      <div className="scanline" />
      <Hero />
      <Stats />
      <Writeups />
      <Projects />
      <Timeline />
      <Certifications />
      <Skills />
      <Footer />
    </div>
  )
}
