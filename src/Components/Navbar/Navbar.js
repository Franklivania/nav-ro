import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../assets/logo.svg'
import { Slide } from 'react-awesome-reveal'
import TextReaderAPI from '../../scripts/TextReaderAPI'

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

  const [voice, setVoice] = useState('false')

  const voiceLocal = () => {
    if (typeof (Storage) !== "undefined") {
      return localStorage.getItem("voice") === "true"
    }
    return false
  }

  useEffect(() => {
    console.log(voiceLocal());
    if (voiceLocal()) {
      setVoice('true')
    } else {
      setVoice('false')
    }

  }, [])

  const setVoiceLocal = (value) => {
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem("voice", value)
    }
  }

  const onVoiceSetting = (event) => {
    const option = event.target.checked
    if (option) {
      setVoice('true')
      setVoiceLocal('true')
    } else {
      setVoice('false')
      setVoiceLocal('false')
    }
  }


  return (
    <header className='navbar navbar-scrolled'>

      <img src={logo} alt="" />

      <menu className='menu'>
        <nav>
          <Link to='/' onMouseEnter={() => TextReaderAPI.readText('Home')} className='link'>Home</Link>
          <Link to='/' onMouseEnter={() => TextReaderAPI.readText('Contact')} className='link'>Contact</Link>
        </nav>

        <aside> 
          <Link onMouseEnter={() => TextReaderAPI.readText('Voice Assistance')} to='/voice-assistance' id='voice'>Voice Assitance</Link>
          <voice onMouseEnter={() => TextReaderAPI.readText('Use text reader')} className="voice">
            <p>Use Text Reader</p>
            <label class="switch">
              <input checked={voice === 'true'} type="checkbox" onChange={onVoiceSetting} />
              <span class="slider round"></span>
            </label>
          </voice>
          <Link onMouseEnter={() => TextReaderAPI.readText('Login')} to='/login' id='login'>Login <i class="fa-solid fa-arrow-right"></i></Link>
        </aside>
      </menu>

      <button onClick={() => setOpen(!open)} id='mobile'> <i className={`fa-solid fa-${open ? 'times' : 'bars'} fa-3x`}></i> </button>
      {open && (
        <menu className='mobile-menu'>
          <nav>
            <Link to='/' className='link'>Home</Link>
            <Link to='/' className='link'>Contact</Link>
          </nav>

          <aside>
            <Link onMouseEnter={() => TextReaderAPI.readText('Voice Assistance')} to='/voice-assistance' id='voice'>Voice Assitance</Link>
            
            <voice onMouseEnter={() => TextReaderAPI.readText('Use text reader')} className="voice">
              <p>Use Text Reader</p>
              <label class="switch">
                <input checked={voice === 'true'} type="checkbox" onChange={onVoiceSetting} />
                <span class="slider round"></span>
              </label>
            </voice>

            <Link onMouseEnter={() => TextReaderAPI.readText('Login')} to='/login' id='login'>Login <i class="fa-solid fa-arrow-right"></i></Link>
          
          </aside>
        </menu>
      )}

    </header>
  )
}

export default Navbar