import React from 'react'
import './Footer.scss'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <footer>
        <h1>Get Connected</h1>

        <div className="socials">
            <a href=""><i class="fa-brands fa-facebook fa-2x"></i></a>
            <a href=""><i class="fa-brands fa-twitter fa-2x"></i></a>
            <a href=""><i class="fa-brands fa-instagram fa-2x"></i></a>
        </div>

        <div className="foot">
          <img src={logo} alt="" />
            <a href="">Terms of Service</a>
            <a href="">Privacy Policy</a>
        </div>
    </footer>
  )
}

export default Footer