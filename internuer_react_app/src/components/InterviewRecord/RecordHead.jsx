import React from 'react'
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined'; import { Link } from 'react-router-dom';
import { Chip } from '@mui/material';
import Record from '../../css/InterviewRecord.module.css'


const RecordHead = (props) => {
    return (
        <div className={`${Record.Recordhead} d-flex  pt-3 align-items-center`}>
            <div className='d-flex flex-column gap-2'>
                <h2>{props.heading}</h2>
                <h5 >{props.companyName}</h5>
                <div className="d-flex gap-3">
                    <PinDropOutlinedIcon color='white' />
                    <p>{props.jobType}</p>
                    <Link className='fw-bold'>view job post</Link>
                </div>
                <div className="d-flex gap-3 ">
                    {props.ChipArray.map((item, index) => {
                        return (
                            <Chip label={item} sx={{ backgroundColor: '#F4F4F4' }} variant="outlined" />
                        )
                    })}


                </div>
            </div>
            <div>
                <img width={200} height={200} src={props.logo} alt="" />
            </div>
        </div>
    )
}

export default RecordHead