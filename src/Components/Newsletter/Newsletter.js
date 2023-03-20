import React from 'react'
import './Newsletter.scss'
import five from '../../assets/five.svg'
import six from '../../assets/six.svg'
import { Link } from 'react-router-dom'
import { Slide } from 'react-awesome-reveal'
import TextReaderAPI from '../../scripts/TextReaderAPI'


const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Slide direction='left'>
            <aside>
                <img src={five} alt="" id='five' />
                <img src={six} alt="" id='six' title='six'/>
            </aside>
        </Slide>

        <Slide direction='right'>
            <aside>
                <h1 onMouseEnter={() => TextReaderAPI.readText('Newsletter')}> Newsletter </h1>
                
                <p onMouseEnter={() => TextReaderAPI.readText('Receive the latest highlights, care tips, inspirations and offers')}>Receive the latest highlights, care tips, inspirations and offers</p>

                <form action="" onMouseEnter={() => TextReaderAPI.readText('Enter email address')}>
                    <label htmlFor="">
                        <input type="email" name="email" id="email" placeholder='Enter email address' />
                    </label>

                    <Link to='/signup' id='signup'>Signup <i class="fa-solid fa-arrow-right"></i></Link>
                </form>
            </aside>
        </Slide>
    </section>
  )
}

export default Newsletter