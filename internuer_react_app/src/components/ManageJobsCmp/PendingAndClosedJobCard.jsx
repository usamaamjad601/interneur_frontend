import React from 'react'
import jCard from '../../css/App3.module.css';
import CircleIcon from '@mui/icons-material/Circle';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

export default function PendingAndClosedJobCard({ color, dottext, cardText, title }) {
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
              <p style={{ color: color }}>{dottext}</p>
            </div>
          </div>

        </div>
        <div >
          <button type="button" className={`${jCard.oJobBtn} d-flex gap-2 p-1`}><EditIcon />edit</button>
        </div>
      </div>
      <div className="py-3 d-flex justify-content-between">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In praesentium ad odit deserunt, consectetur tenetur modi perferendis enim repellendus recusandae dolorum, fugit error asperiores saepe blanditiis. Tempore quaerat nesciunt commodi deserunt omnis maxime, hic reprehenderit, dolores mollitia nihil eos minus. Non itaque harum, corporis voluptate voluptatum magni deleniti.<Link style={{ textDecoration: 'none' }} to="#">Edit job post</Link></p>
      </div>
      <div>
        <p>*May take up to 30 minutes to 2 hours. Review is subject to edition or rejection.</p>
      </div>
    </div>
  )
}
