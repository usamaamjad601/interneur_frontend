import React from 'react'
import Sidebar from '../components/global/Sidebar'
import profile_img from '../assets/img/profile.png'
import DashboardNav from '../components/global/DashboardNav';
import DashboardInfo from '../components/dashboard/DashboardInfo';
import D1_table from '../components/dashboard1/D1_table';

const Dashboard1 = () => {
    var profile = {
        name: "John Doe",
        img: profile_img,
    }
    return (
        <div>
            <Sidebar user={profile} />
            <div class="content">
                <DashboardNav title="UI/UX Designing" applicants={28} applicantstxt="Declined Applicants" navtxt="Lorem, ipsum dolor sit amet conpisicingis, eos, voluptates possimus voluptas aliquid laborpisicingis, eos, voluptates possimus" btn1="Go Back" btn2="Shorlisted" btn1class="nav-btn3" btn2class="nav-btn1" link1="/" link2="#Dashboard3" />
                <div className="col-md-12">
                    <div className="d-flex">
                        <div className="col-md-8">
                            <D1_table />
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

export default Dashboard1