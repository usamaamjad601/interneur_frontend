import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import mBody from '../../css/candDash.module.css';
// import SearchBar from "material-ui-search-bar";

export default function filterScreen() {
    return (
        <div className={`${mBody.filScreenMainBody}`} >
            <div className='d-flex align-items-center justify-content-center mx-2'>
                <p><FilterAltIcon /> Filters</p>
            </div>
            <div className="pt-4 px-4 pb-3" style={{ borderBottom: '1px solid' }}>

            </div>
            <div className="d-flex justify-content-between p-4">
                <p><strong>By Location</strong></p>
                <p style={{ color: '#208EE3' }}>clear</p>
            </div>
        </div>
    )
}
