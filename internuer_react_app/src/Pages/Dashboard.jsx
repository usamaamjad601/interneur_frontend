import React from 'react'
import Sidebar from '../components/Sidebar';
import profile_img from '../assets/icons/profile.svg'
import DashboardNav from '../components/DashboardNav';
import DashboardTable from '../components/DashboardTable'
import DashboardInfo from '../components/DashboardInfo';



const Dashboard = () => {

    var profile = {
        name: "John Doe",
        img: profile_img,
    }
    return (
        <div>
            <Sidebar user={profile} />
            <div class="content">
                <DashboardNav title="UI/UX Designing" applicants={31} btn1="Shortlisted" btn2="Declined" />
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