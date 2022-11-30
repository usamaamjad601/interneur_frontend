import React from 'react'
import company_img from '../../assets/logos/WhiteLogo.png'
import mBody from '../../css/candDash.module.css';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function JobTag() {
    return (
        <div className={`${mBody.filScreenMainBody} p-4`}>
            <div className="d-flex justify-content-between">
                <div className="d-flex px-2">
                    <img src={company_img} alt="internuer logo" height="100px" width="100px" />
                    <p>UI/UX Designer</p>
                    <p style={{ color: '#208EE3' }}>Systems Limited</p>
                </div>
                <div >
                    <VerifiedIcon sx={{ color: '#208EE3' }} />
                </div>
            </div>
        </div>
    )
}
