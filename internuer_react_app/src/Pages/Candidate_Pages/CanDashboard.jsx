import React from 'react'
import NavBar from '../../components/CandidateDashboard/NavBar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterScreen from '../../components/CandidateDashboard/filterScreen'
import JobTag from '../../components/CandidateDashboard/JobTag';


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
                <div className="d-flex flex-column gap-4 col-md-8">
                    <JobTag />
                    <JobTag />
                    <JobTag />
                </div>
            </div>
        </div>
    )
}
