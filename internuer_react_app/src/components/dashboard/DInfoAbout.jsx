import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const DInfoAbout = () => {
    return (
        <div>
            <div className=" myCard">
                <div className="p-3">
                    <p>About me</p>
                    <p>Lorem, ipsum dolor sit amet conpisicingis, eos, voluptates possimus voluptas aliquid laborpisicingis, eos, voluptates possimus voluptas aliquid laborsectetur adipisicingis, eos, voluptates possimus voluptas aliquid labore maiores? Dicta, voluptas quidem?</p>
                </div>
                <div className='col-md-12 d-info-about-btn d-flex'>
                    <button className="info-btn1 info-btn d-flex gap-1">
                        <CheckIcon sx={{ color: '#5fb951' }} />
                        <p>Shortlist</p>
                    </button>
                    <div className='info-line'></div>
                    <button className="info-btn2 info-btn d-flex gap-1">
                        <CloseIcon sx={{ color: '#fb5a90' }} />
                        <p>Shortlist</p>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default DInfoAbout