import React from 'react'
import Sidebar from '../components/global/Sidebar'
import profile_img from '../assets/img/profile.png'
import DashboardNav from '../components/global/DashboardNav'

import Dash from '../css/App.module.css';
import Nav2 from '../components/global/Nav2';
import Deadline from '../components/JobLive/Deadline';



const JobLive = () => {

    var profile = {
        name: "John Doe",
        img: profile_img,
    }
    var date = new Date();

    var moreActions = ['More Actions', 'Share on job boards', 'View as applicant', 'Re-open this position', 'Copy link']
    return (
        <div>
            <Sidebar user={profile} />
            <div className={Dash.content}>
                <Nav2 title="UI/UX Designing" applicants={31} applicantstxt="Applicants" btn2="View Applicants" btn2class={Dash.navBtn4} link1="/DashShortlisted" link2="/DashDeclined" status="Post Live" color="green" days='6'
                    views="5" candidates="3" jobtype="remote" stage="Sourcing Stage" moreActions={moreActions} />

                <div className="col-md-12">
                    <div className="d-flex">
                        <div className="col-md-8 p-4">
                            <Deadline stipend="13000-20000" months="6" deadline={new Date().toLocaleString() + ''}
                            />
                        </div>
                        <div className="col-md-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobLive