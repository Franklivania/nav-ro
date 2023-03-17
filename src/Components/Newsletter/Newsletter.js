import React from 'react'
import './Newsletter.scss'
import five from '../../assets/five.svg'
import six from '../../assets/six.svg'
import { Link } from 'react-router-dom'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <aside>
            <img src={five} alt="" id='five' />
            <img src={six} alt="" id='six' />
        </aside>

        <aside>
            <h1> Newsletter </h1>
            
            <p>Receive the latest highlights, care tips, inspirations and offers</p>

            <form action="">
                <label htmlFor="">
                    <input type="email" name="email" id="email" placeholder='Enter email address' />
                </label>

                <Link to='/signup' id='signup'>Signup <i class="fa-solid fa-arrow-right"></i></Link>
            </form>
        </aside>
    </section>
  )
}

export default Newsletter