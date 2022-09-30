import React from 'react'
import Sidebar from '../components/global/Sidebar'
import profile_img from '../assets/img/profile.png'
import DashboardNav from '../components/global/DashboardNav';
import DashboardTable from '../components/dashboard/DashboardTable'
import DashboardInfo from '../components/dashboard/DashboardInfo';



const Dashboard = () => {

    var profile = {
        name: "John Doe",
        img: profile_img,
    }
    return (
        <div>
            <Sidebar user={profile} />
            <div class="content">
                <DashboardNav title="UI/UX Designing" applicants={31} applicantstxt="Applicants" btn1="Shortlisted" btn2="Declined" btn1class="nav-btn1" btn2class="nav-btn2" link1="/Dashboard1" link2="/Dashboard1" />
                <div className="col-md-12">
                    <div className="d-flex">
                        <div className="col-md-8">
                            <DashboardTable />
                        </div>
                        <div className="col-md-4">
                            <DashboardInfo />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Dashboard