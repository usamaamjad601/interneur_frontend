import React from 'react'
import jobButton from '../../css/App3.module.css'
import nav from '../../css/App.module.css';

export default function Nav3() {
    return (
        <div><div className={`${nav.dashboard1navbar} d-flex justify-content-between align-items-center p-3`}>
            <div className='d-flex flex-column px-2'>
                <h1>Manage Your Jobs</h1>
                <div className="d-flex pb-2 pt-4 px-4 gap-2">
                    <button type="button" className={`${jobButton.jbutton} px-2 py-1`}>Open </button>
                    <button type="button" className={`${jobButton.jbutton} px-2 py-1`}>Closed </button>
                    <button type="button" className={`${jobButton.jbutton} px-2 py-1`}>Pending </button>
                </div>
            </div>
            <button type="button" className={`${nav.navbtn}  p-2 + ${nav.navBtn4} `}>+ Create</button>
        </div>
        </div>
    )
}
