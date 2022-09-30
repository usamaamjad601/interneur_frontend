import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';


const DashboardNav = (props) => {
    return (
        <div>
            <div className="dashboard1-navbar d-flex col-md-12">
                <div className="col-md-7 p-2">
                    <h1>{props.title}</h1>
                    <h4>{props.applicants} Applicants</h4>
                    <br />
                    <div className="d-flex gap-2">
                        <p>Bulk Action</p>
                        <div className="dropdown">
                            <MenuIcon />
                            <div className="dropdown-content ">
                                <a href="#">Shortlisted</a>
                                <a href="#">Declined</a>

                            </div>

                        </div>

                    </div>

                </div>
                <div className="col-md-5 p-2">
                    <div className="d-flex justify-content-end gap-5 pt-5 px-5">
                        <button type="button" className="nav-btn nav-btn1 p-3
                                ">{props.btn1} (6)</button>
                        <button type="button" className="nav-btn nav-btn2 p-3
                                ">{props.btn2} (10)</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardNav