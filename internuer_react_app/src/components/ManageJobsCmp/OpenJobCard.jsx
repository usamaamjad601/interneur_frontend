import React from 'react'
import jCard from '../../css/App3.module.css';
import CircleIcon from '@mui/icons-material/Circle';

export default function OpenJobCard({ color, dottext, cardText, title }) {
    return (
        <div className={`${jCard.openJobCard} d-flex flex-column  p-3`}>
            <div className='d-flex justify-content-between'>
                <div>
                    <h4 className="" style={{ color: 'black' }}>{title}</h4>
                    <h6 style={{ color: '#555555' }} className="mb-2">Rawalpindi</h6>
                    <div className='d-flex gap-1 align-items-center'>
                        <p style={{ color: '#6D6D6D' }} className={`${jCard.jobCardTag} `}>{cardText}</p>
                        <div className='d-flex align-items-center gap-2'>
                            <CircleIcon style={{ color: color, width: '10px' }} />
                            <p style={{ color: color }}> {dottext}</p>
                        </div>
                    </div>

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
