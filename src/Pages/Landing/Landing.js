import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'
import Newsletter from '../../Components/Newsletter/Newsletter'
import SkinCare from '../../Components/SkinCare/SkinCare'
import Tips from '../../Components/Tips/Tips'

const Landing = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <SkinCare />
        <Tips />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Landing