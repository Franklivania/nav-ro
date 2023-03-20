import React, { useEffect, useRef, useState } from 'react'
import './OpenCamera.scss'
import back from '../../../assets/cam-back.svg'
import frame from '../../../assets/cam-frame.svg'
import capture from '../../../assets/cam-capture.svg'
import success from '../../../assets/success.gif'
import { Link } from 'react-router-dom'


import StorageAPI from '../../../scripts/StorageAPI'
import { async } from '@firebase/util'
import TextReaderAPI from '../../../scripts/TextReaderAPI'

const OpenCamera = () => {
  const [processing, setProcessing] = useState(false)
  const [scanComplete, setScanComplete] = useState(false)
  const [resultUrl, setResultUrl] = useState('')

  const inputFile = useRef(null)
  let videoRef = useRef(null)
  let streamRef = useRef(null)

  useEffect(() => {
    // Always ask for user permission before accessing the camera
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        let playPromise = video.play()

        if (playPromise !== undefined) {
          playPromise.then(() => {
            // Store the stream in a ref to stop it when the user leaves the page
            streamRef.current = stream;
          })
        }
      })
      .catch((error) => {
        console.error('Failed to get user media:', error);
      })

    return () => {
      // Stop the camera stream when the component unmounts
      if (streamRef.current) {
        const tracks = streamRef.current.getTracks();
        tracks.forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  const stop = () => {
    // Stop the camera stream when the user clicks on the back button
    if (streamRef.current) {
      const tracks = streamRef.current.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
    }
  };

  const takePicture = async () => {
    setProcessing(true)
    setScanComplete(false)

    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    try {
      const blob = await getCanvasAsBlob(canvas)
      const url = await StorageAPI.upload(blob, getRandomInt().toString())
      setResultUrl(url)
      setScanComplete(true)
    } catch (error) {
      console.error(error);
    } finally {
      setProcessing(false)
    }
  }

  const getCanvasAsBlob = (canvas) => {
    return new Promise((resolve) => {
      canvas.toBlob(resolve);
    });
  }

  const handleLightning = () => {
    const video = videoRef.current;
    const currentBrightness = video.style.getPropertyValue('--brightness');
    const newBrightness = currentBrightness ? (parseFloat(currentBrightness) + 0.1) : 0.1;
    video.style.setProperty('--brightness', newBrightness);
  };

  const pickImage = () => {
    inputFile.current.click();
  };

  const handlePosition = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const numPixels = imgData.width * imgData.height;
    let totalX = 0;
    let totalY = 0;
    let count = 0;
    for (let i = 0; i < numPixels; i++) {
      const r = imgData.data[i * 4];
      const g = imgData.data[i * 4 + 1];
      const b = imgData.data[i * 4 + 2];
      const brightness = (r + g + b) / 3;
      if (brightness > 50) {
        const x = i % imgData.width;
        const y = Math.floor(i / imgData.width);
        totalX += x;
        totalY += y;
        count++;
      }
    }
    if (count > 0) {
      const avgX = totalX / count;
      const avgY = totalY / count;
      const percentageX = avgX / imgData.width;
      const percentageY = avgY / imgData.height;
      video.style.setProperty('--position-x', `${percentageX * 100}%`);
      video.style.setProperty('--position-y', `${percentageY * 100}%`);
    }
  };

  const onChangeFile = async (event) => {
    event.stopPropagation();
    event.preventDefault();

    setProcessing(true)
    setScanComplete(false)

    const files = event.target.files
    if (files.length > 0) {
      try {
        const url = await StorageAPI.upload(files[0], getRandomInt().toString())
        setResultUrl(url)
        setScanComplete(true)
      } catch (error) {
        console.error(error);
      } finally {
        setProcessing(false)
      }
    }
  }

  const getRandomInt = () => {
    return Math.floor(Math.random() * 1000);
  }

  return (
    <div className='OpenCamera'>
      <Link to="/Camera"><img src={back} alt="" className='back-btn' onClick={stop} /></Link>
      <div className='OpenCamera-container'>
        <div className='display-camera'>
          <video ref={videoRef}></video>
          <img src={frame} alt="" className='frame' />
          <p>Please look into the camera and hold still</p>
        </div>
        <img src={capture} alt="" className='capture-btn'
          onClick={takePicture}
        />
        <div className='Effect'>
          <button id='light' onMouseEnter={() => TextReaderAPI.readText('Lightning')} onClick={handleLightning}>Lightning</button>
          <button id='position' onMouseEnter={() => TextReaderAPI.readText('Face Position')} onClick={handlePosition}>Face Position</button>
          <button id='position' onClick={pickImage} onMouseEnter={() => TextReaderAPI.readText('Pick Image')}>Pick Image</button>
          <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} onChange={onChangeFile} />
        </div>
      </div>

      {processing && (
        <div onMouseEnter={() => TextReaderAPI.readText('Processing image')} className="modal">
          <div className="box">
            <p>Processing Image...</p>
          </div>
        </div>
      )}
      {scanComplete && (
        <div className="modal">
          <div onMouseEnter={() => TextReaderAPI.readText('See results')} className="box">
            <img src={success} alt="" />
            <p>Scan Complete</p>
            <Link to={`/results?faceurl=${resultUrl}`} className='result'>See Results</Link>
          </div>
        </div>
      )}

    </div>
  )
}

export default OpenCamera;
