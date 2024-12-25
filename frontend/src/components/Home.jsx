import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CatergoryCarousel from './CatergoryCarousel'
import LatestJobs from './LatestJobs'

function Home() {
  return (
    <div>
        <Navbar/>  
        <HeroSection/>
         <CatergoryCarousel/>
        <LatestJobs/>
        {/* // <Footer/>  */}
       
    </div>
  )
}

export default Home