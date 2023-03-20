import React, { useState } from 'react'
import './VoiceAssistance.scss'
import { Link, useNavigate } from 'react-router-dom'

import SpeechAPI from '../../scripts/SpeechAPI'
import TextReaderAPI from '../../scripts/TextReaderAPI'

const VoiceAssitance = () => {

    const navigate = useNavigate()

    const speak = (text) => {
        TextReaderAPI.readText(text)
    }

    speak('What do you want to do?')

    const listen = () => {
        SpeechAPI.voiceCommand((command) => {
            if (command === 'ACTION_LOGIN') {
                navigate('/login')
            }
            if (command === 'ACTION_SIGNUP') {
                navigate('/signup')
            }
        })
    }

    setTimeout(() => {
        listen()
    }, 3000);

    return (
        <div className='container'>
            <div class="voice-to-text">
                <div class="title" onMouseEnter={() => TextReaderAPI.readText('Voice Assistance')}>Voice Assitance</div>
                <div class="input">
                    <div class="button speaking">
                        <i class="fi fi-rr-microphone"></i>
                    </div>
                </div>
                <p class="sample" onMouseEnter={() => TextReaderAPI.readText('What do you want to do')}>What do you want to do?</p>

                <Link onMouseEnter={() => TextReaderAPI.readText('Close')} to='/'><i class="fa-solid fa-close close"></i></Link>
            </div>
        </div >
    )
}

export default VoiceAssitance