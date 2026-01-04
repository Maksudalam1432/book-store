import React from 'react'
import Navbar from './Navbar'
import Banner from './banner'
import Freebook from './Freebook'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
       <div className="pt-20">
        <Freebook />
      </div>
        <Footer/>
    </div>
  )
}

export default Home