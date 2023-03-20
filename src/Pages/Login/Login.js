import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.scss'
import lock from '../../assets/lock.svg'
import user from '../../assets/user.svg'
import TextReaderAPI from '../../scripts/TextReaderAPI'

const Login = () => {

  const [text, setText] = useState('')
  const [password, setPassword] = useState('')
  const [isTextActive, setIsTextActive] = useState(false)
  const [isPasswordActive, setIsPasswordActive] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleTextClick = () => {
    setIsTextActive(true)
  }

  const handlePasswordClick = () => {
    setIsPasswordActive(true)
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  function handleSubmit(e){
    e.preventDefault()
    navigate('/camera')
  }

  return (
    <div className='login'>
        <form action="" onSubmit={handleSubmit}>
          <h1>
            Welcome Back
          </h1>

          <label onMouseEnter={() => TextReaderAPI.readText('Enter uername here')} htmlFor="text" className={`floating-label ${isTextActive || text ? 'active' : ''}`}>
            <img src={user} alt="" />
            <input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)} onClick={handleTextClick} />
            <span className={text ? 'active' : ''}> Enter Username</span>
          </label>

          <label onMouseEnter={() => TextReaderAPI.readText('Enter password here')} htmlFor="password" className={`floating-label ${isPasswordActive || password ? 'active' : ''}`}>
            <img src={lock} alt="" />
            <input type={showPassword ? 'text' : 'password'} name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} onClick={handlePasswordClick} />
            <span className={password ? 'active' : ''}> Password</span>
            <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'} onClick={handleShowPassword}></i>
          </label>


          <section>
            <label onMouseEnter={() => TextReaderAPI.readText('Remmeber me')} htmlFor="check">
              <input type="checkbox" name="check" id="check" />
              Remember me
            </label>

            <Link onMouseEnter={() => TextReaderAPI.readText('Forgot password')} to='/' id='forgot'>Forgot Password</Link>
          </section>
          
          <button onMouseEnter={() => TextReaderAPI.readText('Login')} type="submit">Login <i className="fa-solid fa-arrow-right"></i></button>

          <p onMouseEnter={() => TextReaderAPI.readText('Don\'t have an account? Sign up')}>Don't have an account? &nbsp; <Link to='/signup' id='sign'>Sign up</Link></p>

        </form>
    </div>
  )
}

export default Login
