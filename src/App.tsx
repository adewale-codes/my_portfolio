import { useRef } from 'react'
import Nav from './components/Nav'
// import Hero from './components/Hero'
// import Supported from './components/Supported'
// import About from './components/About'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
function App() {

  const homeRef = useRef<HTMLDivElement >(null);
  const aboutRef = useRef<HTMLDivElement >(null);
  const contactRef = useRef<HTMLDivElement >(null);
  const blogRef = useRef<HTMLDivElement >(null);
  

  return (
    <>
      <Nav homeRef={homeRef} aboutRef = {aboutRef} contactRef={contactRef} blogRef={blogRef} /> 
      {/* <Hero ref={homeRef} />
      <Supported ref={blogRef} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
      <Footer /> */}
    </>
  )
}

export default App
