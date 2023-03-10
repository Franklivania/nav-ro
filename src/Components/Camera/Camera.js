import React, { useState } from 'react'
import './Camera.scss'
import camera_onClick from '../../assets/camera-onClick.svg'
import OpenCamera from './OpenCamera/OpenCamer'
import { Link } from 'react-router-dom'

const Camera = () => {
    const [show, setShow] = useState('false');

    const display = () => {
        show ? setShow(false) : setShow(true);
        <OpenCamera />
    }
    return (
        <main className='camera'>
            <div className='cam-container'>
                <h3>Skin analysis</h3>
                <p>Get insights into their skill color<br />
                    and variety of products that suit<br />
                    their skin type.</p>
                <Link to="/OpenCamera"><img src={camera_onClick} alt="" onClick={display} /></Link>
                <p>Tap to scan your skin</p>
            </div>
        </main>

    )
}

export default Camera;
