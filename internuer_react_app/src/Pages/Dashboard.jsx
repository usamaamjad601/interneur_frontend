import React from 'react'
import Sidebar from '../components/Sidebar';
import profile_img from '../assets/icons/profile.svg'
import DashboardNav from '../components/DashboardNav';



const Dashboard = () => {

    var profile = {
        name: "John Doe",
        img: profile_img,
    }
    return (
        <div>
            <Sidebar user={profile} />
            <div class="content container p-4">
                <DashboardNav title="UI/UX Designing" applicants={31} btn1="Shortlisted" btn2="Declined" />
            </div>



        </div>
    )
}

export default Dashboard