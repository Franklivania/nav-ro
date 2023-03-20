import React from 'react'
import './Hero.scss'

import TextReaderAPI from '../../scripts/TextReaderAPI'

const Hero = () => {
  return (
    <main>
        <h1 onMouseEnter={() => TextReaderAPI.readText('Discover your beauty')}>
            Discover your <span>Beauty</span>
        </h1>

        <p  onMouseEnter={() => TextReaderAPI.readText('Take the guesswork out of beauty shopping. We find the best products for your skin, helping you discover and buy the things that work.')}>
        Take the guesswork out of beauty shopping. We find the <br />
        best products for your skin, helping you discover and <br />
        buy the things that work.
        </p>
    </main>
  )
}

export default Hero