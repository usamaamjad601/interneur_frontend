import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DAbout from '../../css/App.module.css';

const DInfoAbout = () => {
    return (
        <div>
            <div className={DAbout.myCard}>
                <div className={`${DAbout.about} p-1`}>
                    <h6>About me</h6>
                    <p>Lorem, ipsum dolor sit amet conpisicingis, eos, voluptates possimus voluptas aliquid laborpisicingis, eos, voluptates possimus voluptas aliquid laborsectetur adipisicingis, eos, voluptates possimus voluptas aliquid labore maiores? Dicta, voluptas quidem?</p>
                </div>
                <div className={`${DAbout.dInfoAboutBtn} col-md-12 d-flex`}>
                    <button className={`${DAbout.infoBtn1}  d-flex gap-1`}>
                        <CheckIcon sx={{ color: '#5fb951' }} />
                        <p>Shortlist</p>
                    </button>
                    <div className={DAbout.infoLine}></div>
                    <button className={`${DAbout.infoBtn2}  d-flex gap-1`}>
                        <CloseIcon sx={{ color: '#fb5a90' }} />
                        <p>Shortlist</p>
                    </button>
                </div>

            </div>
        </div >
    )
}

export default DInfoAbout