import React from 'react'
import './SkinCare.scss'
import one from '../../assets/one.svg'
import two from '../../assets/two.svg'
import three from '../../assets/three.svg'
import four from '../../assets/four.svg'

const SkinCare = () => {
  return (
    <section className='SkinCare'>

      <img src={one} alt="" id='one' />

      <img src={two} alt="" id='two' />

      <img src={three} alt="" id='three' />

      <img src={four} alt="" id='four' />

    </section>
  )
}

export default SkinCare