import React from 'react'
import skills from '../../css/App.module.css'

const JobSkills = (props) => {
    return (
        <div>
            <h4 className='fw-bolder'>{props.title}</h4>
            <div className={`d-flex pt-1 px-3 gap-4 ${skills.skill} `}>
                {props.skillTags.map((x, i) => {
                    return (
                        <div key={i}>
                            <strong>
                                {x}
                            </strong>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default JobSkills