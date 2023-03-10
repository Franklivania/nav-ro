import React, { useState } from 'react'
import './SignUp.scss'
import google from '../../assets/google.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import user from '../../assets/user.svg'
import lock from '../../assets/lock.svg'
import eye from '../../assets/eye.svg'
import arrow_right from '../../assets/arrow-right.svg'


const SignUp = () => {
    const [showpassword, setShowpassword] = useState(false);
    const [Confirm, setConfirm] = useState(false);

    const show = () => { showpassword ? setShowpassword(false) : setShowpassword(true) }
    const confirm = () => { Confirm ? setConfirm(false) : setConfirm(true) }

    return (
        <main className='SignUp'>
            <div className='SignUp-container'>
                <div className='first-box'>
                    <div className='SignUp-heading'>
                        <h3>Getting Started</h3>
                        <p>Create an account to continue</p>
                    </div>
                    <div className='logo'>
                        <a href="/"><img src={google} alt="" /></a>
                        <a href="/"><img src={facebook} alt="" /></a>
                        <a href="/"><img src={twitter} alt="" /></a>
                    </div>
                    <div><img src={user} alt="" /><input type="text" placeholder='Enter Username' /></div>
                    <div><img src={lock} alt="" /><input type={showpassword ? "text" : "password"} placeholder='Password' /><img src={eye} alt="" className='eye' onClick={show} /></div>
                    <div><img src={lock} alt="" /><input type={Confirm ? "text" : "password"} placeholder='Confirm Password' /><img src={eye} alt="" className='eye' onClick={confirm} /></div>
                </div>

                <p className='term_conditions'>By clicking "sign up" I agree to the Terms & Conditions and Privacy Policy.</p>

                <div className='second-box'>
                    <div className='underLine mob-device'>
                        <div></div>
                        or
                        <div></div>
                    </div>
                    <div className='logo mob-device'>
                        <a href="/"><img src={google} alt="" /></a>
                        <a href="/"><img src={facebook} alt="" /></a>
                        <a href="/"><img src={twitter} alt="" /></a>
                    </div>
                    <button>Sign up <img src={arrow_right} alt="" /></button>
                    <p>Already have an account ? <a href="/">Login</a></p>
                </div>
            </div>
        </main>
    )
}
export default SignUp