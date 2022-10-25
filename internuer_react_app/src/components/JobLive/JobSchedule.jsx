import React from 'react'
import { Link } from 'react-router-dom'
import sche from '../../css/App.module.css'

const JobSchedule = (props) => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-between'>
                <div className="d-flex gap-2 align-items-center">
                    <strong className={sche.NumberBullet} style={{ border: `3px solid ${props.BorderColor}`, color: props.BorderColor }}>{props.Number}</strong>
                    <strong>{props.title}</strong>
                </div>
                <strong style={{ marginRight: '15px' }}>{props.date}</strong>
            </div>
            <div className='d-flex  gap-4'>
                <div className={sche.verticleLine}>
                    <p style={{ marginLeft: '1.5vw' }}>{props.txt}
                        <Link target='_blank' to={props.link}>{props.linktxt}</Link>
                    </p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default JobSchedule