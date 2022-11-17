import React from 'react'
import RD from '../../../css/InterviewRecord.module.css'

const RecordDescription = () => {
    return (
        <div className={`${RD.myCard} p-4 `}>
            <div className='d-flex flex-column gap-3'>
                <h5>Guidelines before recording your interview online</h5>
                <div>
                    <h6 className='fw-bold'>Important</h6>
                    <ul>
                        <li >Research the company and read job responsibilities section to prepare on what to expect during the interview.</li>
                        <li>Recorder auto-starts after 15 seconds (You have 15 seconds to prepare for every question).</li>
                        <li>Complete the interview in one go. </li>
                    </ul>
                </div>
                <div>
                    <h6 className='fw-bold'>Do’s</h6>
                    <ul>
                        <li>Choose a decent background and quiet surrounding for better sound quality.</li>
                        <li>Maintain professionalism.</li>
                        <li>Check your Internet connectivity, microphone and camera to ensure there are no problems during the interview.</li>
                        <li>Be confident and stay focus answering the question actively.</li>
                    </ul>
                </div>
                <div>
                    <h6 className='fw-bold'>Don’ts</h6>
                    <ul>
                        <li>Don’t read off of your screen (don’t change the screen while recording).</li>
                        <li>Don’t be too casual. </li>
                        <li>Don’t pick the wrong place to record your interview. Record the interview in your convenient time before the deadline. </li>
                        <li>Don’t provide irrelevant information that doesn’t help you in this interview. </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RecordDescription