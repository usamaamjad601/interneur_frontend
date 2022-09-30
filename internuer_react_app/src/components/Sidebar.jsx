import React from 'react'
import profile from '../assets/icons/profile.svg'
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';

const sidebar = (props) => {


    return (
        <div>
            <div className="sidebar d-flex flex-column justify-content-between">
                <div className="">
                    <div className="logo sidebar-logo">
                        <a className="" href="./Dashboard.html">LOGO</a>
                    </div>
                    <a href="#profile" className="profile d-flex gap-2 p-0 py-4">
                        <img
                            src={props.user.img}
                            alt="Profile"
                            height="60px"
                            width="70px" />
                        <div>
                            <h4>{props.user.name}</h4>
                            <h6>Admin</h6>
                        </div>
                    </a>
                    <a className="d-flex gap-3" href="./Dashboard.html">
                        <HomeIcon sx={{ color: 'blue' }} />
                        <p>Home</p>
                    </a>
                    <a className="d-flex gap-3" href="./RecentPateints.html">

                        <WorkIcon sx={{ color: 'blue' }} />
                        <p>Internships</p>
                    </a>
                </div>

                <div className="sidebar-card p-2 d-flex flex-column m-4
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
                </div>
            </div>
        </div>
    )
}

export default sidebar