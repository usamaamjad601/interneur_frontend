import React from 'react'
import Apply from '../../css/App.module.css'
import ApplyIcon from '../../assets/icons/Apply icon.svg'

const ApplyNow = () => {
    return (
        <div>
            <button className={Apply.applynowbtn}>
                Apply Now
                <img src={ApplyIcon} alt="picture" width={30} />
            </button>
        </div>
    )
}

export default ApplyNow