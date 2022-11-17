import React from 'react'
import ReactDOM from 'react-dom'
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import Mic from '../../../css/InterviewRecord.module.css'
import Webcam from 'react-webcam';

const MicControl = () => {
    const [mic, setMic] = React.useState(false)
    const [video, setVideo] = React.useState(false)


    const CameraControl = () => {
        setVideo(!video);
        ReactDOM.render(<Webcam />, document.getElementById("cam"));
    }
    return (
        <div className='p-4 d-flex flex-column gap-4 '>
            <div id='cam' style={{ backgroundColor: '#D9D9D9', height: '200px', width: '300px' }} ></div>
            <div className='d-flex gap-3 align-items-center'>
                <div className={`${Mic.Mic} ${video ? Mic.Enable : Mic.Disable}`} onClick={CameraControl} ><VideocamIcon sx={{ color: 'white', width: '30px' }} /></div>
                <div className='d-flex flex-column gap-1'>
                    <p>Tap to on/off</p>
                    <p>Microphone is <strong>{video ? 'ON' : 'OFF'}</strong></p>
                </div>
            </div>
            <div className='d-flex gap-3 align-items-center'>
                <div className={`${Mic.Mic} ${mic ? Mic.Enable : Mic.Disable}`} onClick={() => setMic(!mic)} ><MicIcon sx={{ color: 'white', width: '30px' }} /></div>
                <div className='d-flex flex-column gap-1'>
                    <p>Tap to on/off</p>
                    <p>Microphone is <strong> {mic ? 'ON' : 'OFF'}</strong></p>
                </div>
            </div>

        </div >
    )
}

export default MicControl