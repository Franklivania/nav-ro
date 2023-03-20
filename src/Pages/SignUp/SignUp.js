import React, { useState } from 'react'
import './SignUp.scss'
import google from '../../assets/google.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import user from '../../assets/user.svg'
import lock from '../../assets/lock.svg'
import arrow_right from '../../assets/arrow-right.svg'
import { Link, useNavigate } from 'react-router-dom'
import TextReaderAPI from '../../scripts/TextReaderAPI'


const SignUp = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [password_show, setPassword_show] = useState(false);
    const [confirm_password_show, setConfirm_password_show] = useState(false);
    const  navigate = useNavigate()

    const passShow = () => {
        password_show ? setPassword_show(false) : setPassword_show(true)
    }

    const confirmPassShow = () => {
        confirm_password_show ? setConfirm_password_show(false) : setConfirm_password_show(true)
    }

    function handleSubmit(e){
        e.preventDefault()
        navigate('/camera')
    }

    const lensStyle = {
        position: 'fixed',
        top: '20%',
        right: '10%',
        padding: '1rem',
        background: '#A85C3A',
        color: '#fefefe',
        borderRadius: '20%',
        boxShadow: '0.02rem 0.02rem 0.5rem #0e0e0e',
        transition: 'all 0.3s ease-in-out',
      }


    return (
        <div className='SignUp'>
            <Link to='/lens' onMouseEnter={() => TextReaderAPI.readText('Lens')} style={lensStyle}><i class="fa-solid fa-camera fa-2x "></i></Link>
            <form onSubmit={handleSubmit}>
                <div className='upper-part'>
                    <label>
                        <h3 onMouseEnter={() => TextReaderAPI.readText('Gettting started')}>Getting Started</h3>
                        <p onMouseEnter={() => TextReaderAPI.readText('Create an account to continue')}>Create an account to continue</p>
                    </label>

                    <label className='social-links'>
                        <a href="/"><img src={google} alt="" /></a>
                        <a href="/"><img src={facebook} alt="" /></a>
                        <a href="/"><img src={twitter} alt="" /></a>
                    </label>

                    <label onMouseEnter={() => TextReaderAPI.readText('Enter username here')} htmlFor="text">
                        <img src={user} alt="" />
                        <div htmlFor="text" className="float-text">
                            <input type="text" id='text' value={name} onChange={(e) => setName(e.target.value)} />
                            <span>Enter Username</span>
                        </div>
                    </label>

                    <label onMouseEnter={() => TextReaderAPI.readText('Enter password here')} htmlFor="password">
                        <img src={lock} alt="" />
                        <div className="float-text">
                            <input type={password_show ? "text" : "password"} id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span>Password</span>
                        </div>
                        <i className={password_show ? 'fas fa-eye' : 'fas fa-eye-slash'} onClick={passShow}></i>
                    </label>

                    <label onMouseEnter={() => TextReaderAPI.readText('Enter confirmation password here')} htmlFor="ConfirmPassword">
                        <img src={lock} alt="" />
                        <div className="float-text">
                            <input type={confirm_password_show ? "text" : "password"} id='ConfirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            <span>Confirm Password</span>
                        </div>
                        <i className={confirm_password_show ? 'fas fa-eye' : 'fas fa-eye-slash'} onClick={confirmPassShow}></i>
                    </label>
                </div>

                <p onMouseEnter={() => TextReaderAPI.readText('Agree to terms and conditions')}>By clicking "signup" I agree to Terms & Conditions and Privacy Policy.</p>

                <div className='bottom-part'>
                    <label className='social-links'>
                        <span></span>
                        <a href="/"><img src={google} alt="" /></a>
                        <a href="/"><img src={facebook} alt="" /></a>
                        <a href="/"><img src={twitter} alt="" /></a>
                        <span></span>
                    </label>
                </div>
                <button type="submit" onMouseEnter={() => TextReaderAPI.readText('Sign up')}>Signup <img src={arrow_right} alt="" /></button>
                <p onMouseEnter={() => TextReaderAPI.readText('Already have an account')}>Already have an account? <Link to='/login'className='link'>Login</Link> </p>
            </form>
        </div>
    )
}
export default SignUp