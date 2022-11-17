import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import mBody from '../../css/candDash.module.css';
import SearchBar from "material-ui-search-bar";

export default function filterScreen() {
    return (
        <div className={`${mBody.filScreenMainBody} p-4`} >
            <div className='d-flex align-items-center justify-content-center'>
                <p><FilterAltIcon /> Filters</p>
            </div>
            <div className="pt-4">
                <SearchBar placeholder='Search here' />
            </div>
        </div>
    )
}
