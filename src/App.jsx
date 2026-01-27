import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header";
import Hero from './components/Hero';
import About from './components/About'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Projects from './components/Projects';
import HireMe from './components/HireMe';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Resume/>
    <Skills/>
    <Projects/>
    <HireMe/>
    <Contact/>
    </>
  )
}

export default App
