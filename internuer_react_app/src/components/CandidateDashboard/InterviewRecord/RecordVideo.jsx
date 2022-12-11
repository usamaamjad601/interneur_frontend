import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import Countdown from 'react-countdown';
import Webcam from 'react-webcam';

import Mic1 from '../../../css/App.module.css'
import Record from '../../../css/InterviewRecord.module.css'

const RecordVideo = ({ QuestionsArray, startVideoIn, showVideo, isShowVideo, handleClick, videoSound }) => {

    // const [isShowVideo, setIsShowVideo] = useState(false);
    const videoElement = useRef(null);


    const videoConstraints = {
        width: { min: 400 },
        height: { min: 400 },
        aspectRatio: 2,
        facingMode: "user"
    };

    const CameraControl = () => {

        if (isShowVideo) {
            let stream = videoElement.current.stream;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            handleClick();
        }
        else {

            handleClick();
        }
        // setIsShowVideo(!isShowVideo);

    }

    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);

    const handleStartCaptureClick = React.useCallback(() => {
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
            mimeType: "video/webm"
        });
        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        );
        mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);

    const handleDataAvailable = React.useCallback(
        ({ data }) => {
            if (data.size > 0) {
                setRecordedChunks((prev) => prev.concat(data));
            }
        },
        [setRecordedChunks]
    );

    const handleStopCaptureClick = React.useCallback(() => {
        mediaRecorderRef.current.stop();
        setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]);

    const handleDownload = React.useCallback(() => {
        if (recordedChunks.length) {
            const blob = new Blob(recordedChunks, {
                type: "video/webm"
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = "react-webcam-stream-capture.webm";
            a.click();
            window.URL.revokeObjectURL(url);
            setRecordedChunks([]);
        }
    }, [recordedChunks]);
    return (
        <div>
            <div>

                <small>Question 1 of 3</small>
                <p>{QuestionsArray[0]}</p>
                <div className='d-flex justify-content-end gap-1'>
                    <p className="App">Recording will start in </p>

                    <Countdown
                        date={Date.now() + (startVideoIn * 1000)}
                        intervalDelay={1000}
                        precision={3}
                        renderer={props => <div>{Math.round(props.total / 1000)}</div>}
                        onComplete={handleStartCaptureClick}
                    />
                </div>
            </div>
            <div className={`d-flex justify-content-center align-items-center gap-4 flex-column mt-4 `}>

                <div id='cam' style={{ backgroundColor: '#D9D9D9', height: '41vh', width: '39vw' }} className={` justify-content-center align-items-center ${showVideo ? Mic1.displayFlex : Mic1.displayNone} ${Record.InterviewVideo}`} >

                    {isShowVideo &&
                        <>
                            <Webcam audio={false} width={600}
                                height={450} ref={webcamRef} videoConstraints={videoConstraints}
                            />
                        </>
                    }

                </div>
                <div className='d-flex gap-5 justify-content-center'>
                    <button onClick={handleStopCaptureClick}>Stop Capture</button>

                    {recordedChunks.length > 0 && (
                        <button onClick={handleDownload}>Download</button>
                    )}
                </div>
            </div>



        </div>
    )
}

export default RecordVideo