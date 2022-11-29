import React from 'react'
import JobDesc from '../JobLive/JobDesc'
import JobSkills from '../JobLive/JobSkills'
import ApplyNow from './ApplyNow'
import Disclamer from './Disclamer'

const PostDesc = (props) => {
    return (
        <div>
            <div>
                <div className='d-flex align-items-center gap-2'>
                    <h5 className='fw-bolder'>About</h5>
                    <h5 className='fw-bold'>{props.cmpName}:</h5>
                </div>
                <p>{props.cmpDesc}</p>
            </div>
            <div>
                <div className='d-flex align-items-center gap-2 pt-4'>
                    <h5 className='fw-bolder'>UI/UX Designer Internship Details:</h5>
                </div>
                <div dangerouslySetInnerHTML={{ __html: props.addInternDetail }} ></div>

            </div>
            <div className='pt-4'>
                <JobDesc responsibilities={props.responsibilities} whoCanApply={props.whoCanApply} />
            </div>
            <div className='pt-4'>
                <JobSkills skillTags={props.skillTags} title={props.title1} />
            </div>
            <div className='pt-4'>
                <JobSkills skillTags={props.Perks} title={props.title2} />
            </div>
            <div className="d-flex justify-content-center p-4">
                <ApplyNow />
            </div>
            <div className='pb-3'>
                <Disclamer />
            </div>
        </div>
    )
}

export default PostDesc