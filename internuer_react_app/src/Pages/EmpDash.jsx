import React, { useEffect, useState } from 'react'
import Sidebar from '../components/global/Sidebar'
import profile_img from '../assets/img/profile.png'
// import DashboardNav from '../components/global/DashboardNav';
// import DashboardTable from '../components/dashboard/DashboardTable'
// import DashboardInfo from '../components/dashboard/DashboardInfo';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import jCard from '../css/App2.module.css';
import Dash from '../css/App.module.css';
import Mainbody from '../css/App2.module.css';
import nameStyle from '../css/App2.module.css';
import button from '../css/App2.module.css';
import heading from '../css/App2.module.css';
import InfoCard from '../components/EmpDashboard/InfoCard';
import { Link } from 'react-router-dom';
import JobCard from '../components/EmpDashboard/JobCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import GraphCard from '../components/EmpDashboard/GraphCard';
import profileImg from '../assets/img/profile.png';
import ReviewCard from '../components/EmpDashboard/ReviewCard';
// import jCard2 from '../../css/App2.module.css';
import IconButton from '@mui/material/IconButton';


const EmpDash = (props) => {

    var profile = {
        name: "John Doe",
        img: profile_img,
    }

    const userName = 'Muhammad Bin Kashif';
    const noNot = 2;
    const noIntNot = 5;
    const viewer = {
        views: true,
        viewsNo: 100,

    }
    const viewer2 = {
        views: false,
        viewsNo: 0,

    }

    const clickHandler = () => {

    }

    return (
        <div>
            <Sidebar user={profile} />
            <div className={`${Dash.content}`}>
                {/* <DashboardNav title="UI/UX Designing" applicants={31} applicantstxt="Applicants" btn1="Shortlisted" btn2="Declined" btn1class={Dash.navBtn1} btn2class={Dash.navBtn2} link1="/DashShortlisted" link2="/DashDeclined" shortlist={`(${count})`} reject={`(${count2})`} shortbutton={firstButton} rejectbutton={secondButton} optionsArray={optionsArray} /> */}
                <div className=" col-md-12">
                    <div className=" d-flex flex-row justify-content-between pb-2">
                        <span className=" d-flex flex-row gap-2 align-items-center">
                            <DashboardIcon sx={{ color: '222222', fontSize: 30 }} className="mt-4 mx-2" />
                            <h6 className="mt-4 mx-2">Dashboard</h6>
                        </span>
                        <span className="d-flex align-items-center gap-3">
                            <IconButton aria-label="notification" size="small" onClick={clickHandler}>
                                <NotificationsIcon sx={{ color: '222222', fontSize: 30 }} />
                            </IconButton>
                            <ChatBubbleOutlineIcon sx={{ color: '222222', fontSize: 30 }} />
                            <a href="#profile" className="mx-3">
                                <img
                                    src={profileImg}
                                    alt="Profile"
                                    height="50px"
                                    width="70px" />
                            </a>
                        </span>
                    </div>
                </div>

                <div className={`${Mainbody.Mainbody} mx-2 `}>
                    <div className="d-flex justify-content-between">
                        <h1 className="m-4 " style={{ color: '#545454' }}>Welcome, <strong className={nameStyle.uName}>{userName}</strong></h1>
                        <button className={`${button.edbutton} float-right mt-3 mx-4`}>+ Create Jobs</button>
                    </div>
                    <p className="mt-3 mx-5" style={{ color: '#6D6D6D' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non corporis dicta, maiores perspiciatis eos porro ducimus aliquid voluptate delectus. Maxime architecto nam sit officia eligendi incidunt necessitatibus inventore? Nam non, vel voluptatem id tempora ab dolores </p>
                    <h4 style={{ color: '#878787' }} className={`${heading.headTopic} m-4`}>At a Glance</h4>
                    <div className="d-flex justify-content-between pb-3 px-4">
                        <InfoCard
                            name="Jobs Posted"
                            num='265'
                        />
                        <InfoCard
                            name="Luqman"
                            num='1'
                        />
                        <InfoCard
                            name="Luqman"
                            num='1'
                        />
                        <InfoCard
                            name="Luqman"
                            num='1'
                            pending="pending"
                        />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 style={{ color: '#878787' }} className={`${heading.headTopic} m-4`}>Active Jobs/Internships</h4>
                        <Link to="#" className="mx-4">See all</Link>
                    </div>
                    <div className=" px-4 pb-3">
                        <JobCard
                            time="6 hours ago"
                            link="view job post"
                            title="Phi Training Developer"
                            tag="Sourcing Stage"
                            {...viewer}
                            no1={265}
                            text1='views'
                            no2={265}
                            text2="candidates"
                            no3={0}
                            text3='Shortlisted'
                            no4={0}
                            text4='Interviewed'
                        />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 style={{ color: '#878787' }} className={`${heading.headTopic} m-4`}>Latest Notifications ({noNot})</h4>
                        <Link to="#" className="mx-4">See all</Link>
                    </div>
                    <div className={`${jCard.jobCard} px-4 mx-4 pb-3`}>
                        <div className="py-3 d-flex   justify-content-between">
                            <div className="d-flex gap-3" >
                                <input type="checkbox" />
                                <div>
                                    <strong >lorem Ipsum </strong>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, dicta. Enim amet ipsam praesentium at?</p>
                                </div>
                            </div>
                            <div>
                                <NavigateNextIcon sx={{ color: 'bbb' }} />
                            </div>

                        </div>
                        <div className="py-3 d-flex  gap-3 justify-content-between">
                            <div className="d-flex gap-3" >
                                <input type="checkbox" />
                                <div>
                                    <strong >lorem Ipsum </strong>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, dicta. Enim amet ipsam praesentium at?</p>
                                </div>
                            </div>
                            <div>
                                <NavigateNextIcon sx={{ color: 'bbb' }} />
                            </div>

                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 style={{ color: '#878787' }} className={`${heading.headTopic} m-4`}>Interviews ({noIntNot})</h4>
                    </div>
                    <div className=" px-4 pb-3">
                        <JobCard
                            time="6 hours ago"
                            link="Review interview"
                            title="Phi Training Developer"
                            tag="2 Questions"
                            {...viewer2}
                            no1={30}
                            text1='Invited'
                            no2={265}
                            text2="Responsed"
                            no3={0}
                            text3='Reviewed'
                            no4={0}
                            text4='pending'
                        />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 style={{ color: '#878787' }} className={`${heading.headTopic} m-4`}>Applicant Traffic</h4>
                    </div>
                    <div className=" px-4 pb-3">
                        <GraphCard />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 style={{ color: '#878787' }} className={`${heading.headTopic} m-4`}>Applicant Review</h4>
                    </div>
                    <div className={`${jCard.jobCard} px-4 pb-3 mx-4`}>
                        {[...Array(2)].map((x, i) =>
                            <ReviewCard name="Muhammad Luqman" rating={4.5} />
                        )}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default EmpDash