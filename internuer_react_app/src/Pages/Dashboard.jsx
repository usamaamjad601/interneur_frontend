import React, { useEffect, useState } from 'react'
import Sidebar from '../components/global/Sidebar'
import profile_img from '../assets/img/profile.png'
import DashboardNav from '../components/global/DashboardNav';
import DashboardTable from '../components/dashboard/DashboardTable'
import DashboardInfo from '../components/dashboard/DashboardInfo';



const Dashboard = () => {

    // useEffect(() => {
    //     window.addEventListener("beforeunload", alertUser);
    //     return () => {
    //         window.removeEventListener("beforeunload", alertUser);
    //     };
    // }, []);
    // const alertUser = (e) => {
    //     e.preventDefault();
    //     e.returnValue = "";
    // };


    var profile = {
        name: "John Doe",
        img: profile_img,
    }
    const [count, setCount] = useState(0);
    const handleClick = num => {
        // 👇️ take parameter passed from Child component
        setCount(num);
    };

    const [count2, setCount2] = useState(0);
    const handleClick2 = num => {
        // 👇️ take parameter passed from Child component
        setCount2(num);
    };


    // console.log(count, 'count');
    return (
        <div>
            <Sidebar user={profile} />
            <div class="content">
                <DashboardNav title="UI/UX Designing" applicants={31} applicantstxt="Applicants" btn1="Shortlisted" btn2="Declined" btn1class="nav-btn1" btn2class="nav-btn2" link1="/DashShortlisted" link2="/DashDeclined" shortlist={`(${count})`} reject={`(${count2})`} />
                <div className="col-md-12">
                    <div className="d-flex">
                        <div className="col-md-8">
                            <DashboardTable handleClick={handleClick} handleClick2={handleClick2} />
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