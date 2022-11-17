import React from 'react'
import NavBar from '../../components/CandidateDashboard/NavBar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterScreen from '../../components/CandidateDashboard/filterScreen'


export default function CanDashboard() {
    return (
        <div>
            <NavBar />
            <div className="d-flex py-2 justify-content-center">
                <h5 className="mx-2"> Explore<KeyboardArrowDownIcon /> </h5>
                <h5 className="mx-2">Internships<KeyboardArrowDownIcon /> </h5>
            </div>
            <div className="d-flex col-md-12 mt-4">
                <div className="col-md-3 ">
                    <FilterScreen />
                </div>
                <div className="col-md-9"></div>
            </div>
        </div>
    )
}
