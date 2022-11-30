import React from 'react'
import company_img from '../../assets/logos/WhiteLogo.png'
import mBody from '../../css/candDash.module.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Deadline from '../../components/JobLive/JobDeadline'
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import tag from '../../css/App.module.css'

export default function JobTag() {
    return (
        <div className={`${mBody.filScreenMainBody} p-4`}>
            <div className="d-flex justify-content-between col-md-12">
                <div className="d-flex col-md-2">
                    <img src={company_img} alt="internuer logo" height="100px" width="100px" />
                </div>
                <div className="d-flex col-md-10 flex-column">
                    <div className="d-flex pl-2">
                        <div className='px-2'>
                            <p>UI/UX Designer</p>
                            <p style={{ color: '#208EE3' }}>Systems Limited</p>
                            <p className="py-2"><PinDropIcon /> Islamabad, Lahore</p>
                        </div>
                    </div>
                    <div >
                        <Deadline stipend={'10000-20000 monthly'} months={'6 months'} deadline={'13 Nov 2022'} displayClass={tag.displayNone} />
                    </div>
                </div>
                <div >
                    <VerifiedIcon sx={{ color: '#208EE3' }} />
                </div>
            </div>

            <div className="d-flex justify-content-end py-2 p-4">
                <p style={{ color: '#208EE3' }}>View Details <ArrowForwardIcon /></p>
            </div>
        </div>
    )
}
