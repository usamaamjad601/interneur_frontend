import React from 'react'
import { Link } from 'react-router-dom'
import Desc from '../../css/App.module.css'

const JobDesc = (props) => {
    return (
        <div>
            <h4 className='fw-bolder'>Job Description</h4>
            <div className={`${Desc.jobCard} col-md-12 p-3 mt-1 pt-1`}>
                <div className='d-flex justify-content-between'>
                    <h5 className='fw-bold'>Responsibilities</h5>
                    <Link to="#" className={props.displayClass}>edit</Link>
                </div>
                <div>
                    <p className='mt-1 '>Selected Candidate's responsibilities include : </p>
                    <div dangerouslySetInnerHTML={{ __html: props.responsibilities }} ></div>
                </div>
                <h5 className='fw-bold'>Who can Apply ?</h5>

                <div>
                    <p className='mt-1'>Those may apply Who : </p>
                    <div dangerouslySetInnerHTML={{ __html: props.whoCanApply }}></div>
                </div>
            </div>
        </div>
    )
}

export default JobDesc