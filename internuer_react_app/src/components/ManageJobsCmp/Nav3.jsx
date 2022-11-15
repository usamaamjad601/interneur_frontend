import React from 'react'
import jobButton from '../../css/App3.module.css'
import nav from '../../css/App.module.css';
import { Link } from 'react-router-dom';

export default function Nav3({ colorOpen, colorPending, colorClosed }) {
    return (
        <div><div className={`${nav.dashboard1navbar} d-flex justify-content-between align-items-center p-3`}>
            <div className='d-flex flex-column px-2'>
                <h1>Manage Your Jobs</h1>
                <div className="d-flex pb-2 pt-4 px-4 gap-2">
                    <Link to="/OpenJobs"><button type="button" className={`${jobButton.jbutton} px-2 py-1`} style={{ backgroundColor: colorOpen, borderColor: colorOpen }}>Open </button></Link>
                    <Link to="/PendingJobs"><button type="button" className={`${jobButton.jbutton} px-2 py-1`} style={{ backgroundColor: colorPending, borderColor: colorPending }}>Pending </button></Link>
                    <Link to="/ClosedJobs"><button type="button" className={`${jobButton.jbutton} px-2 py-1`} style={{ backgroundColor: colorClosed, borderColor: colorClosed }}>Closed </button></Link>
                </div>
            </div >
            <Link to='/EmpForms'>
                <button style={{ marginRight: "3rem" }} type="button" className={`${nav.navbtn}  p-2 + ${nav.navBtn4} `}>+ Create</button>
            </Link>
        </div>
        </div>
    )
}
