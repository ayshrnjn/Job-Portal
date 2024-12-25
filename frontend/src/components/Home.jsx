import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CatergoryCarousel from './CatergoryCarousel'

function Home() {
  return (
    <div>
        <Navbar/>  
        <HeroSection/>
         <CatergoryCarousel/>
        {/* <LatestJobs/>
        <Footer/>  */}
       
    </div>
  )
}

export default Home