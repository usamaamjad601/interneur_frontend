import React from 'react'
import jCard from '../../css/App3.module.css';

export default function OpenJobCard() {
    return (
        <div className={`${jCard.openJobCard} d-flex flex-column  p-3`}>
            <div className='d-flex justify-content-between'>
                <div>
                    <h4 className="" style={{ color: 'black' }}>UI/UX Designing</h4>
                    <h6 style={{ color: '#555555' }}>Rawalpindi</h6>
                    <p style={{ color: '#6D6D6D' }} className={`${jCard.jobCardTag} `}>Sourcing Stage</p>
                </div>
                <div>
                    <button type="button" className={`${jCard.oJobBtn}`}>View</button>
                </div>
            </div>
            <div className="py-3 d-flex justify-content-between">
                <div style={{ fontWeight: 'bold' }}>
                    <h3 style={{ fontWeight: 'bold' }}>100</h3>
                    <h6 style={{ fontWeight: 'bold' }}>Views</h6>
                </div>
                <div style={{ fontWeight: 'bold' }}>
                    <h3 style={{ fontWeight: 'bold' }}>50</h3>
                    <h6 style={{ fontWeight: 'bold' }}>Applicants</h6>
                </div>
                <div style={{ fontWeight: 'bold' }}>
                    <h3 style={{ fontWeight: 'bold' }}>100</h3>
                    <h6 style={{ fontWeight: 'bold' }}>Shortlisted</h6>
                </div>
                <div style={{ fontWeight: 'bold' }}>
                    <h3 style={{ fontWeight: 'bold' }}>100</h3>
                    <h6 style={{ fontWeight: 'bold' }}>Interviewed</h6>
                </div>
            </div>
        </div>
    )
}
