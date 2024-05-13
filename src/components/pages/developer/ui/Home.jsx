import React from 'react'
import Banner from './banner/Banner'
import About from './about/About'
import Services from './services/Services'
import Skills from './skills/Skills'
import Resume from './resume/Resume'
import Certifications from './certifications/Certifications'
import Footer from './footer/Footer'
import Projects from './projects/Projects'

const Home = () => {
  return (
    <div>
        <Banner/>
        <About/>
        <Services/>
        <Skills/>
        <Resume/>
        <Certifications/>
        <Projects/>
        <Footer/>

    </div>
  )
}

export default Home