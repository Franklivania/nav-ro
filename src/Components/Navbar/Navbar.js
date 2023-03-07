import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link to='/' className='link'>Home</Link>
            <Link to='/' className='link'>Contact</Link>
        </nav>

        <aside>
            <button type='submit'> EN <i class="fa-solid fa-globe"></i></button>
            <button type='submit' id='login'>Login <i class="fa-solid fa-arrow-right"></i></button>
        </aside>

    </header>
  )
}

export default Navbar