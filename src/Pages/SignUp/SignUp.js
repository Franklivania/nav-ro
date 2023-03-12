import React, { useState } from 'react'
import './SignUp.scss'
import google from '../../assets/google.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import user from '../../assets/user.svg'
import lock from '../../assets/lock.svg'
import arrow_right from '../../assets/arrow-right.svg'


const SignUp = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [password_show, setPassword_show] = useState(false);
    const [confirm_password_show, setConfirm_password_show] = useState(false);

    const passShow = () => {
        password_show ? setPassword_show(false) : setPassword_show(true)
    }

    const confirmPassShow = () => {
        confirm_password_show ? setConfirm_password_show(false) : setConfirm_password_show(true)
    }

    return (
        <main className='SignUp'>
            <form>
                <div className='upper-part'>
                    <label>
                        <h3>Getting Started</h3>
                        <p>Create an account to continue</p>
                    </label>

                    <label className='social-links'>
                        <a href="/"><img src={google} alt="" /></a>
                        <a href="/"><img src={facebook} alt="" /></a>
                        <a href="/"><img src={twitter} alt="" /></a>
                    </label>

                    <label htmlFor="text">
                        <img src={user} alt="" />
                        <div htmlFor="text" className="float-text">
                            <input type="text" id='text' value={name} onChange={(e) => setName(e.target.value)} />
                            <span>Enter Username</span>
                        </div>
                    </label>

                    <label htmlFor="password">
                        <img src={lock} alt="" />
                        <div className="float-text">
                            <input type={password_show ? "text" : "password"} id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span>Password</span>
                        </div>
                        <i className={password_show ? 'fas fa-eye' : 'fas fa-eye-slash'} onClick={passShow}></i>
                    </label>

                    <label htmlFor="ConfirmPassword">
                        <img src={lock} alt="" />
                        <div className="float-text">
                            <input type={confirm_password_show ? "text" : "password"} id='ConfirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            <span>Confirm Password</span>
                        </div>
                        <i className={confirm_password_show ? 'fas fa-eye' : 'fas fa-eye-slash'} onClick={confirmPassShow}></i>
                    </label>
                </div>

                <p>By clicking "signup" I agree to Terma & Conditions and Privacy Policy.</p>

                <div className='bottom-part'>
                    <label className='social-links'>
                        <span></span>
                        <a href="/"><img src={google} alt="" /></a>
                        <a href="/"><img src={facebook} alt="" /></a>
                        <a href="/"><img src={twitter} alt="" /></a>
                        <span></span>
                    </label>
                    <button type="submit">Signup <img src={arrow_right} alt="" /></button>
                    <p>Already have an account? <a href="/">Login</a></p>
                </div>
            </form>
        </main>
    )
}
export default SignUp