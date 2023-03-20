import React, { useState } from 'react'
import './Camera.scss'
import camera_onClick from '../../assets/camera-onClick.svg'
import OpenCamera from './OpenCamera/OpenCamera'
import { Link } from 'react-router-dom'
import TextReaderAPI from '../../scripts/TextReaderAPI'

const Camera = () => {
    const [show, setShow] = useState('false');

    const display = () => {
        show ? setShow(false) : setShow(true);
        <OpenCamera />
    }
    return (
        <div className='camera'>
            <div className='cam-container'>
                <h3 onMouseEnter={() => TextReaderAPI.readText('Skin analysis')}>Skin analysis</h3>
                <p onMouseEnter={() => TextReaderAPI.readText('Get insights into their skill color and variety of products that suit their skin type.')}>Get insights into their skill color<br />
                    and variety of products that suit<br />
                    their skin type.</p>
                <Link to="/OpenCamera"><img src={camera_onClick} alt="" onClick={display} /></Link>
                <p>Tap to scan your skin</p>
            </div>
        </div>

    )
}

export default Camera;
