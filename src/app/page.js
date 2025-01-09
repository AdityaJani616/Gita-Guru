import React from 'react'
import Hero from "./Hero"
import Subscribe  from '@/components/Subscribe/Subscribe'
import About from "./About/page"
import Footer from "../components/Shared/Footer/Footer"
import Navbar from "../components/Shared/Navbar/Navbar"
import Help from "./Help/page"
const Home = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
             <Navbar/>
              <Hero/>
          
              <Help/>
            <Footer/>
        {/* <Subscribe/> */} 
        {/* <About/> */}
   </main>
  )
}

export default Home
