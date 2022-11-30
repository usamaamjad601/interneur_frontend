import React from 'react'
import NavBar from '../../components/CandidateDashboard/NavBar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterScreen from '../../components/CandidateDashboard/filterScreen'
import JobTag from '../../components/CandidateDashboard/JobTag';
import Can from '../../css/App.module.css'


export default function CanDashboard() {
    const [logedIN, setLogedIN] = React.useState(false)

    return (
        <div>
            <NavBar displayClass={!logedIN ? Can.displayNone : Can.displayFlex} displayClass2={logedIN ? Can.displayNone : Can.displayFlex} />
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
