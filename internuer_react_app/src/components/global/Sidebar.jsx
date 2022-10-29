import React from 'react'
import profile from '../../assets/icons/profile.svg'
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/Logo.png'
import manage from '../../assets/icons/2538407 1Manage Post.svg';
import prof from '../../assets/icons/2891526 1Progile.svg';
import side from '../../css/App.module.css'
import button from '../../css/App2.module.css'
import sdButton from '../../css/App2.module.css'


const sidebar = (props) => {


    return (
        <div>
            <div className={`${side.sidebar} d-flex flex-column justify-content-between`}>
                <div className="d-flex flex-column justify-content-between">
                    <div className={`${side.logo} p-0`}>
                        <Link to="/Dashboard1" className='p-1'>
                            <img src={logo} alt="" className={side.sidebarLogo} />
                        </Link>
                        <Link className="d-flex gap-3" to="/EmpDash">
                            <DashboardIcon sx={{ color: '222222' }} />
                            <p>Dashboard</p>
                        </Link>
                        <Link className="d-flex gap-3" to="EmpProfile">
                            {/* <WorkIcon sx={{ color: '222222' }} /> */}
                            <img src={manage} alt="Manage Post" />
                            <p>Profile</p>
                        </Link>
                        <Link className="d-flex gap-3" to="/EmpManagePost">
                            <img src={prof} alt="Manage Post" />
                            <p>Manage Post</p>
                        </Link>
                        <Link className="d-flex gap-3" to="/Logout">
                            <LogoutIcon sx={{ color: '222222' }} />
                            <p>Logout</p>
                        </Link>
                    </div>
                    {/* <a href="#profile" className={`${side.profile} d-flex gap-2 p-0 py-4 align-items-center`}>
                        <img
                            src={props.user.img}
                            alt="Profile"
                            height="60px"
                            width="70px" />
                        <div>
                            <h4>{props.user.name}</h4>
                            <strong>Admin</strong>
                        </div>
                    </a> */}
                    <div>
                        <button className={`${button.edbutton} ${sdButton.sdbutton}  float-right mx-4 `}>+ Create Jobs</button>
                    </div>
                </div>

                {/* <div className="sidebar-card p-2 d-flex flex-column m-4
                align-items-center">
                    <h5>Premiuim Plan</h5>
                    <img
                        src={profile}
                        alt="Profile"
                        height="60px"
                        width="70px" />
                    <p>Audio and Video<br /> Interviews</p>
                    <button type="button" className="button btn btn-primary
                        sidebar-btn">Buy Now</button>
                </div> */}
            </div>
        </div>
    )
}

export default sidebar