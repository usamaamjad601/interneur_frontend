import React from 'react'
import Dead from '../../css/App.module.css'
// import money from '../../assets/icons/DurationIcon.svg'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import TimerIcon from '@mui/icons-material/Timer';
import { Link } from 'react-router-dom';

const Deadline = (props) => {
    return (
        <div>
            <div className={`${Dead.jobCard} col-md-12  p-3 `}>
                <div className='col-md-12 d-flex '>
                    <div className={Dead.deadlines}>
                        <div className='d-flex gap-2 align-items-center justify-content-center'>
                            <LocalAtmIcon />
                            <h6>Stipend</h6>
                        </div>
                        <strong>{props.stipend} monthly</strong>
                    </div>
                    <div className={Dead.deadlines}>
                        <div className='d-flex gap-2 align-items-center justify-content-center'>
                            <LocalAtmIcon />
                            <h6>Duration</h6>
                        </div>
                        <strong>{props.months} months</strong>
                    </div>
                    <div className={Dead.deadlines}>
                        <div className='d-flex gap-2 align-items-center justify-content-center'>
                            <TimerIcon />
                            <h6>Deadline</h6>
                        </div>
                        <strong>{props.deadline}</strong>
                    </div>
                    <div className={Dead.edit}>
                        <Link to="#" className={props.displayClass}>edit</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Deadline