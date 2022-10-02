import React from 'react'
import Sidebar from '../components/global/Sidebar'
import profile_img from '../assets/img/profile.png'
import DashboardNav from '../components/global/DashboardNav'
import D1_table from '../components/dashboard1/D1_table'
import DS_form from '../components/dashShortlisted/DS_form'


const DashShortlisted = () => {
    var profile = {
        name: "John Doe",
        img: profile_img,
    }
    let count = 3;

    return (
        <div>
            <Sidebar user={profile} />
            <div className="content">
                <DashboardNav title="UI/UX Designing" applicants={10} applicantstxt="Shortlisted Applicants" btn1="Go Back" btn2="Interviews" btn1class="nav-btn3" btn2class="nav-btn4" link1="#back" link2="#Dashboard3" reject={`(${count})`}
                />
            </div>
            <div className="col-md-12">
                <div className="d-flex">
                    <div className="col-md-8">
                        <D1_table />
                    </div>
                    <div className="col-md-4">
                        <DS_form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashShortlisted