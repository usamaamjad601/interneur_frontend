import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const DashboardNav = (props) => {



    return (
        <div>
            <div className="dashboard1-navbar d-flex col-md-12">
                <div className="col-md-7 p-4">
                    <h1>{props.title}</h1>
                    <h4>{props.applicants} {props.applicantstxt}</h4>
                    <p>{props.navtxt}</p>
                    <br />
                    <div className="d-flex gap-2">
                        <p>Bulk Action</p>
                        <div className="dropdown">
                            <MenuIcon />
                            <div className="dropdown-content ">
                                <Link to="/Dashboard1" >Shortlisted</Link>
                                <Link to="/Dashboard1">Declined</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 p-2">
                    <div className="d-flex justify-content-end gap-5 pt-5 px-5">
                        <Link to={props.link1}>
                            <button type="button" className={`nav-btn  p-3 + ${props.btn1class}
                                `} onClick={props.handleClick3} >{props.btn1} {props.shortlist}</button>
                        </Link>
                        <Link to={props.link2}>
                            <button type="button" className={`nav-btn  p-3 + ${props.btn2class}
                                `}  >{props.btn2} {props.reject}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

// to={props.link1}
export default DashboardNav