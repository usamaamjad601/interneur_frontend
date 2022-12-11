import React, { useState } from 'react'
import MicControl from '../../components/CandidateDashboard/InterviewRecord/MicControl'
import RecordHead from '../../components/CandidateDashboard/InterviewRecord/RecordHead'
import Inter from '../../css/InterviewRecord.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/WhiteLogo.png'
import RecordVideo from '../../components/CandidateDashboard/InterviewRecord/RecordVideo';




const InterviewQuestions = () => {

    const [isShowVideo, setIsShowVideo] = useState(true);
    const [videoSound, setVideoSound] = useState(false);

    function handleVideo() {
        setIsShowVideo(!isShowVideo);
    }

    function handleAudio() {
        setVideoSound(!videoSound);
    }


    const QuestionsArray = ['Introduce yourself ', 'What are your hobbies']

    const ChipArray = ['Placement', '15,000 - 20,000 monthly', 'Perk 1 XXXXXXXXXXXXX', 'Perk 2 -  XXXXXXXXXXXXX']
    const [InterviewStarted, setInterviewStarted] = React.useState(true)

    return (
        <div className='d-flex flex-column'>
            <div className="col-md-12 row">
                <div className="col-md-2 d-flex align-items-center justify-content-end">
                    {/* <ArrowBackIosNewOutlinedIcon /> */}
                </div>
                <div className="col-md-10">
                    <RecordHead heading='Online recorded interview for UI/UX Designing' companyName='Alhaaj Mustafi Private Company Limited' jobType='Work From Home' ChipArray={ChipArray} logo={logo} />
                </div>
            </div>
            <div className="col-md-12 row">
                <div className="col-md-2"></div>
                <div className="col-md-6 pt-4">
                    <RecordVideo QuestionsArray={QuestionsArray} startVideoIn={20} showVideo={true} isShowVideo={isShowVideo} handleClick={handleVideo} videoSound={videoSound} />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3"><MicControl InterviewStarted={InterviewStarted} webcam={false} handleVideo={handleVideo} handleAudio={handleAudio} /></div>
            </div>




        </div>
    )
}

export default InterviewQuestions