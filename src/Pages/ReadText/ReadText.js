import React, { useEffect, useRef, useState } from 'react'
import './ReadText.scss'
import { useLocation } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import ImageReaderAPI from '../../scripts/ImageReaderAPI'
import TextReaderAPI from '../../scripts/TextReaderAPI'

const ReadText = () => {

    const [texts, setTexts] = useState(['Loading...'])
    const location = useLocation()


    useEffect(() => {
        const fetchData = async () => {
            const search = location.search;
            const url = new URLSearchParams(search).get("imageurl");

            if (!url) {
                console.error('Image url not passed');
                return
            }

            const result = await ImageReaderAPI.getTextFrom(url)
            console.log(result);
            if (result) {
                setTexts(result.data.result.text)
            }
        }

        fetchData()
    }, [])

    return (
        <div className='results'>
            <Navbar />
            <div className='t_container'>
                {
                    texts.map((text, index) => (
                        <p onMouseEnter={() => TextReaderAPI.readText(text.data)} className='text'>{text.data}</p>
                    ))
                }
            </div>
        </div >
    )
}

export default ReadText