import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

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
      <nav>
        <Link to='/' className='link'>Home</Link>
        <Link to='/sign-up' className='link'>Contact</Link>
      </nav>

      <aside>
        <button type='submit'> EN <i class="fa-solid fa-globe"></i></button>
        <button type='submit' id='login'>Login <i class="fa-solid fa-arrow-right"></i></button>
      </aside>

    </header>
  )
}

export default Navbar