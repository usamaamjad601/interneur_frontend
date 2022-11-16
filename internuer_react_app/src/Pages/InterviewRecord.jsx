import React from 'react'
import RecordHead from '../components/InterviewRecord/RecordHead'
import logo from '../assets/logos/WhiteLogo.png'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import RecordDescription from '../components/InterviewRecord/RecordDescription';

const InterviewRecord = () => {
    const ChipArray = ['Placement', '15,000 - 20,000 monthly', 'Perk 1 XXXXXXXXXXXXX', 'Perk 2 -  XXXXXXXXXXXXX']
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
                <div className="col-md-3">3</div>
            </div>
        </div>
    )
}

export default InterviewRecord