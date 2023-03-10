import React, { useEffect, useRef } from 'react'
import './OpenCamera.scss'
import back from '../../../assets/cam-back.svg'
import frame from '../../../assets/cam-frame.svg'
import capture from '../../../assets/cam-capture.svg'
import { Link } from 'react-router-dom'


const OpenCamera = () => {

    let videoRef = useRef(null)
    // let photoRef = useRef(null)

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({
            video: { height: 720, width: 1280 }
        }).then((stream) => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play()
        }).catch(() => {
            alert("Camer Not Found")
        })

    }, [videoRef])

    // const takePicture = () => {
    //     const width = 1280
    //     const height = 720

    //     let video = videoRef.current

    //     let photo = photoRef.current

    //     photo.width = width

    //     photo.height = height

    //     let ctx = photo.getContext('2d')

    //     ctx.drawImage(video, 0, 0, width, height)
    // }

    return (
        <main className='OpenCamera'>
            <Link to="/Camera"><img src={back} alt="" className='back-btn' /></Link>
            <div className='OpenCamera-container'>
                <div className='display-camera'>
                    <video ref={videoRef}></video>
                    <img src={frame} alt="" className='frame' />
                    <p>Please look into the camera and hold still</p>
                </div>
                <img src={capture} alt="" className='capture-btn'
                // onClick={takePicture} 
                />
                <div className='Effect'>
                    <span>Lightning</span>
                    <span>Face Position</span>
                </div>
            </div>
            {/* <canvas className="container" ref={photoRef}></canvas> */}
        </main>
    )
}

export default OpenCamera;