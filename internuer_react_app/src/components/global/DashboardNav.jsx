import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import nav from '../../css/App.module.css';


const DashboardNav = (props) => {



    return (
        <div>
            <div className={`${nav.dashboard1navbar} d-flex col-md-12 pb-2`}>
                <div className={`${nav.heading} col-md-7 p-4 pt-1 pb-0 d-flex flex-column justify-content-between`}>
                    <div>
                        <h3>{props.title}</h3>
                        <h6>{props.applicants} {props.applicantstxt}</h6>
                        <p className='pb-2'>{props.navtxt}</p>
                    </div>
                    {/* <br /> */}
                    <div className="d-flex gap-2">
                        <p>Bulk Action</p>
                        <div className={nav.dropdown}>
                            <MenuIcon />
                            <div className={nav.dropdowncontent}>
                                <Link to="/Dashboard1" >Shortlisted</Link>
                                <Link to="/Dashboard1">Declined</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 p-1">
                    <div className="d-flex justify-content-end gap-5 pt-5 px-5">
                        <Link to={props.link1}>
                            <button type="button" className={`${nav.navbtn} p-3 + ${props.btn1class}
                                `} onClick={props.handleClick3} >{props.btn1} {props.shortlist}</button>
                        </Link>
                        <Link to={props.link2}>
                            <button type="button" className={`${nav.navbtn}  p-3 + ${props.btn2class}
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