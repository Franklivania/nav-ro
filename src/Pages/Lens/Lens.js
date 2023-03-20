import React, { useState } from 'react'
import './Lens'
import camera_onClick from '../../assets/camera-onClick.svg'
import OpenLens from './OpenLens/OpenLens'
import { Link } from 'react-router-dom'
import TextReaderAPI from '../../scripts/TextReaderAPI'

const Camera = () => {
    const [show, setShow] = useState('false');

    const display = () => {
        show ? setShow(false) : setShow(true);
        <OpenLens />
    }
    return (
        <div className='camera'>
            <div className='cam-container'>
                <h3 onMouseEnter={() => TextReaderAPI.readText('Read text from product image')}>Read text from product image</h3>
                <p onMouseEnter={() => TextReaderAPI.readText('Get insights into their skin color and variety of products that suit their skin type.')}>Read text from items<br />
                    like skin care products<br />
                   or others.</p>
                <Link to="/OpenLens"><img src={camera_onClick} alt="" onClick={display} /></Link>
                <p>Tap to scan your product</p>
            </div>
        </div>

    )
}

export default Camera;
