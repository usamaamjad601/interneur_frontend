import React from 'react'
import Dead from '../../css/App.module.css'
// import money from '../../assets/icons/DurationIcon.svg'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import TimerIcon from '@mui/icons-material/Timer';

const Deadline = (props) => {
    return (
        <div>
            <div className={`${Dead.jobCard} col-md-12 d-flex justify-content-around p-3 `}>
                <div>
                    <div className='d-flex gap-2 align-items-center'>
                        <LocalAtmIcon />
                        <h6>Stipend</h6>
                    </div>
                    <strong>{props.stipend} monthly</strong>
                </div>
                <div>
                    <div className='d-flex gap-2 align-items-center'>
                        <LocalAtmIcon />
                        <h6>Stipend</h6>
                    </div>
                    <strong>{props.months} months</strong>
                </div>
                <div>
                    <div className='d-flex gap-2 align-items-center'>
                        <TimerIcon />
                        <h6>Deadline</h6>
                    </div>
                    <strong>{props.deadline}</strong>
                </div>

            </div>
        </div>
    )
}

export default Deadline