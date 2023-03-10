import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

const Login = () => {

  const [text, setText] = useState('')
  const [password, setPassword] = useState('')
  const [isTextActive, setIsTextActive] = useState(false)
  const [isPasswordActive, setIsPasswordActive] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleTextClick = () => {
    setIsTextActive(true)
  }

  const handlePasswordClick = () => {
    setIsPasswordActive(true)
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='login'>
        <form action="">
          <h1>
            Welcome Back
          </h1>

          <label htmlFor="text" className={`floating-label ${isTextActive || text ? 'active' : ''}`}>
            <input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)} onClick={handleTextClick} />
            <span className={text ? 'active' : ''}>Enter Username</span>
          </label>

          <label htmlFor="password" className={`floating-label ${isPasswordActive || password ? 'active' : ''}`}>
            <input type={showPassword ? 'text' : 'password'} name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} onClick={handlePasswordClick} />
            <span className={password ? 'active' : ''}>Password</span>
            <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'} onClick={handleShowPassword}></i>
          </label>


          <section>
            <label htmlFor="check">
              <input type="checkbox" name="check" id="check" />
              Remember me
            </label>

            <Link to='/' id='forgot'>Forgot Password</Link>
          </section>
          
          <button type="submit">Login <i className="fa-solid fa-arrow-right"></i></button>

          <p>Don't have an account? &nbsp; <Link to='/' id='sign'>Sign up</Link></p>

        </form>
    </div>
  )
}

export default Login
