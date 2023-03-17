import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../assets/logo.svg'

const Navbar = () => {

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

        <nav>
            <Link to='/' className='link'>Home</Link>
            <Link to='/' className='link'>Contact</Link>
        </nav>

        <aside>
            <button type='submit'> EN <i class="fa-solid fa-globe"></i></button>
            <Link to='/login' id='login'>Login <i class="fa-solid fa-arrow-right"></i></Link>
        </aside>

    </header>
  )
}

export default Navbar