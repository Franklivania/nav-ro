import React, { useState } from 'react'
import './VoiceAssistance.scss'
import { Link, useNavigate } from 'react-router-dom'

import SpeechAPI from '../../scripts/SpeechAPI'
import TextReaderAPI from '../../scripts/TextReaderAPI'

const VoiceAssitance = () => {

    const navigate = useNavigate()

    const speak = (text) => {
        TextReaderAPI.readText(text)

        // support for multilang
        // TextReaderAPI.readText(text, language)
    }

    speak('What do you want to do?')

    const listen = () => {
        SpeechAPI.voiceCommand((command) => {
            if (command === 'ACTION_LOGIN') {
                navigate('/login')
            }
        })

        // support for multilang
        // SpeechAPI.voiceToText((text) => {
        //   console.log(text);
        // }, sourceLanguage, targetLanguage)
    }

    setTimeout(() => {
        listen()
    }, 10000);

    return (
        <div className='container'>
            <div class="voice-to-text">
                <div class="title">Voice Assitance</div>
                <div class="input">
                    <div class="button speaking">
                        <i class="fi fi-rr-microphone"></i>
                    </div>
                </div>
                <p class="sample">What do you want to do?</p>

                <Link to='/'><i class="fa-solid fa-close close"></i></Link>
            </div>
        </div >
    )
}

export default VoiceAssitance