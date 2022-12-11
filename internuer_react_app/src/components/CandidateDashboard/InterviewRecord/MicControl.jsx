import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import Mic from '../../../css/InterviewRecord.module.css'
import Mic1 from '../../../css/App.module.css'
import Webcam from 'react-webcam';
import ReactMicRecord from 'react-mic-record';
import App from '../../../css/App.module.css'




const MicControl = (props) => {


    const [mic, setMic] = React.useState(false)



    const [isShowVideo, setIsShowVideo] = useState(false);
    const videoElement = useRef(null);



    const videoConstraints = {
        width: { min: 200 },
        height: { min: 100 },
        aspectRatio: 2,
        facingMode: "user"
    };

    const VideoFunction = () => {
        if (props.webcam) {
            setIsShowVideo(!isShowVideo);
            CameraControl();
        }
        if (!props.webcam) {
            props.handleVideo();
        }
    }

    const AudioFunction = () => {
        setMic(!mic);
        props.handleAudio();
    }

    const CameraControl = () => {

        if (isShowVideo) {
            let stream = videoElement.current.stream;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            setIsShowVideo(false);
        }
        else {
            setIsShowVideo(true);
        }
        // setIsShowVideo(!isShowVideo);

    }

    //Mic

    const onData = (recordedBlob) => {
        console.log('chunk of real-time data is: ', recordedBlob);
    }

    const onStop = (recordedBlob) => {
        console.log('recordedBlob is: ', recordedBlob);
    }

    return (
        <div className='p-4 d-flex flex-column gap-4 '>
            <div id='cam' style={{ backgroundColor: '#D9D9D9', height: '100px', width: '200px' }} className={` justify-content-center align-items-center ${props.webcam ? Mic1.displayFlex : Mic1.displayNone}`} >

                {isShowVideo &&
                    <Webcam
                        width={200}
                        height={100}
                        videoConstraints={videoConstraints}
                        ref={videoElement}
                    />
                }
            </div>
            <div className='d-flex gap-3 align-items-center'>
                <div className={`${Mic.Mic} ${isShowVideo ? Mic.Enable : Mic.Disable}`} onClick={VideoFunction} ><VideocamIcon sx={{ color: 'white', width: '30px' }} /></div>
                <div className='d-flex flex-column gap-1'>
                    <p>Tap to on/off</p>
                    <p>Video is <strong>{isShowVideo ? 'ON' : 'OFF'}</strong></p>
                </div>
            </div>
            <div className='d-flex gap-3 align-items-center'>
                <div className={`${Mic.Mic} ${mic ? Mic.Enable : Mic.Disable}`} onClick={AudioFunction}
                ><MicIcon sx={{ color: 'white', width: '30px' }} /></div>
                <div className='d-flex flex-column gap-1'>
                    <p>Tap to on/off</p>
                    <p>Microphone is <strong> {mic ? 'ON' : 'OFF'}</strong></p>
                </div>

            </div>
            <strong>Audio Strenght</strong>
            {console.log(mic, 'mic')}


            <ReactMicRecord
                record={mic}
                // onStart={mic}
                className={Mic.MicRecord}
                onStop={onStop}
                onData={onData}
                strokeColor="#fff"
                backgroundColor="#1F8EE4" />

            <div className={`justify-content-center flex-column gap-3 ${props.InterviewStarted ? App.displayNone : App.displayFlex}`}>

                <small className='font-small text-align-center'>(Check your audio/video before proceeding)</small>

                <div className='d-flex justify-content-center'>
                    <button className={Mic.ReadyBtn}>Ready to Start</button>
                </div>
            </div>

        </div >
    )
}

export default MicControl