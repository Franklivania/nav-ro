import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../assets/logo.svg'
import { Slide } from 'react-awesome-reveal'

const Navbar = () => {

  const [open, setOpen] = useState(false)

    function toggleNavbarBackground() {
        const navbar = document.querySelector('.navbar');
        const scrollHeight = window.pageYOffset;
        const breakpoint = 500; // The scroll position at which to apply the background color
      
        if (scrollHeight > breakpoint) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
      }
    window.addEventListener('scroll', toggleNavbarBackground);


  return (
    <header className='navbar navbar-scrolled'>

        <img src={logo} alt="" />

        <menu className='menu'>
          <nav>
              <Link to='/' className='link'>Home</Link>
              <Link to='/' className='link'>Contact</Link>
          </nav>

          <aside>
              <button type='submit'> EN <i class="fa-solid fa-globe"></i></button>
              <Link to='/login' id='login'>Login <i class="fa-solid fa-arrow-right"></i></Link>
          </aside>
        </menu>

        <button onClick={() => setOpen(!open)} id='mobile'> <i className={`fa-solid fa-${open ? 'times' : 'bars'} fa-3x`}></i> </button>
        { open && (
            <menu className='mobile-menu'>
              <nav>
                  <Link to='/' className='link'>Home</Link>
                  <Link to='/' className='link'>Contact</Link>
              </nav>

              <aside>
                  <button type='submit'> EN <i class="fa-solid fa-globe"></i></button>
                  <Link to='/login' id='login'>Login <i class="fa-solid fa-arrow-right"></i></Link>
              </aside>
            </menu>
        )}

    </header>
  )
}

export default Navbar