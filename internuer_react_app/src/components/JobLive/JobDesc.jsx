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
                    <ol>
                        <li>Designing and implementing new features and functionality</li>
                        <li>Establishing and guiding the website’s architecture</li>
                        <li>Ensuring high-performance and availability, and managing all technical aspects of the CMS</li>
                        <li>Helping formulate an effective, responsive design and turning it into a working theme and plugin</li>
                        <li>Coordinating with the rest of the team working on different layers of the infrastructure</li>
                        <li>Helping define and maintain best practices</li>
                    </ol>
                </div>
                <h5 className='fw-bold'>Who can Apply ?</h5>

                <div>
                    <p className='mt-1'>Those may apply Who : </p>
                    <ol>
                        <li>are available from the date</li>
                        <li>have a good understanding of UI, cross-browser compatibility, general web functions and standards</li>
                        <li>are familiar with technologies such as HTML, CSS, JavaScript, jQuery</li>
                        <li>have worked with WordPress, Joomla, Drupal, Magento, Shopify, etc.</li>

                    </ol>
                </div>
            </div>
        </div>
    )
}

export default JobDesc