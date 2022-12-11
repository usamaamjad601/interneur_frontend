import React from 'react'
import RecordHead from '../../components/CandidateDashboard/InterviewRecord/RecordHead'
import logo from '../../assets/logos/WhiteLogo.png'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import RecordDescription from '../../components/CandidateDashboard/InterviewRecord/RecordDescription';
import MicControl from '../../components/CandidateDashboard/InterviewRecord/MicControl';
import Inter from '../../css/InterviewRecord.module.css'
import FreqQuestions from '../../components/CandidateDashboard/InterviewRecord/FreqQuestions';
import { Link } from 'react-router-dom';

const InterviewRecord = () => {
    const ChipArray = ['Placement', '15,000 - 20,000 monthly', 'Perk 1 XXXXXXXXXXXXX', 'Perk 2 -  XXXXXXXXXXXXX']
    const [InterviewStarted, setInterviewStarted] = React.useState(false)

    return (
        <div className='d-flex flex-column'>
            <div className="col-md-12 row">
                <div className="col-md-2 d-flex align-items-center justify-content-end">
                    <ArrowBackIosNewOutlinedIcon />
                </div>
                <div className="col-md-10">
                    <RecordHead heading='Online recorded interview for UI/UX Designing' companyName='Alhaaj Mustafi Private Company Limited' jobType='Work From Home' ChipArray={ChipArray} logo={logo} />
                </div>
            </div>
            <div className="col-md-12 row">
                <div className="col-md-2">2</div>
                <div className="col-md-7 pt-4">
                    <RecordDescription />
                </div>
                <div className="col-md-3"><MicControl InterviewStarted={InterviewStarted} webcam={true} /></div>
            </div>
            <div className="col-md-12 row">
                <div className="col-md-2">2</div>
                <div className="col-md-7 pt-4">
                    <RecordDescription />
                </div>
            </div>
            <div className='col-md-12 pt-4 d-flex'>
                <div className="col-md-2"></div>
                <div className={`col-md-7 d-flex`}>
                    <div className='col-md-4'></div>
                    <div className={`col-md-7 p-3 ${Inter.AllowAccess}`}>
                        <p>This requires your permission to access <strong> Camera</strong> and <strong> Microphone </strong> to record your interview.</p>
                        <div className='d-flex justify-content-end'>
                            <p className='fw-bolder' style={{ color: '#1F8EE4' }}>Allow Access {'>'}{'>'} </p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="col-md-3"></div>

            </div>
            <div className='col-md-12 mt-4 d-flex'>
                <div className="col-md-2"></div>
                <div className="col-md-7">
                    <FreqQuestions />
                </div>
            </div>
            <div className='col-md-12 mt-4 mb-4 d-flex'>
                <div className="col-md-2"></div>
                <div className="col-md-7 d-flex justify-content-center">
                    <div className='d-flex col-md-7 flex-column align-items-center justify-content-center'>
                        <h4 className='fw-bolder mb-3'>Still have questions? </h4>
                        <p className='text-center'>If you cannot find answer to your question in our FAQ, you can always contact us <Link style={{ textDecoration: 'none', fontWeight: 'bold' }}> here</Link>. We will answer you shortly!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterviewRecord