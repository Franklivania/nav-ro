import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'
import Newsletter from '../../Components/Newsletter/Newsletter'
import SkinCare from '../../Components/SkinCare/SkinCare'
import Tips from '../../Components/Tips/Tips'

import TextReaderAPI from '../../scripts/TextReaderAPI'

const Landing = () => {

  const lensStyle = {
    position: 'fixed',
    top: '20%',
    right: '10%',
    padding: '1rem',
    background: '#A85C3A',
    color: '#fefefe',
    borderRadius: '20%',
    boxShadow: '0.02rem 0.02rem 0.5rem #0e0e0e',
    transition: 'all 0.3s ease-in-out',
  }

  return (
    <div>
        <Navbar />
        <Hero />
        <SkinCare />
        <Tips />
        <Newsletter />
        <Footer />

        <Link to='/lens' onMouseEnter={() => TextReaderAPI.readText('Lens')} style={lensStyle}><i class="fa-solid fa-camera fa-2x "></i></Link>
    </div>
  )
}

export default Landing