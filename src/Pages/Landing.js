import React from 'react'
import Hero from '../Components/Hero/Hero'
import Navbar from '../Components/Navbar/Navbar'
import SkinCare from '../Components/SkinCare/SkinCare'
import Tips from '../Components/Tips/Tips'
// import SignUp from '../Components/SignUp/SignUp'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SkinCare />
      <Tips />
      {/* <SignUp /> */}
    </div>
  )
}

export default Landing