import React, { useEffect, useState } from 'react'
import Sidebar from '../components/global/Sidebar'
import profile_img from '../assets/img/profile.png'
import DashboardNav from '../components/global/DashboardNav';
import DashboardTable from '../components/dashboard/DashboardTable'
import DashboardInfo from '../components/dashboard/DashboardInfo';

import Dash from '../css/App.module.css';

// import Layout from '../layout/Layout'



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
    const [firstButton, setFirstButton] = useState(0);
    const button1 = (num) => {
        setFirstButton(num);
    }

    // console.log(firstButton, 'First button');

    const [secondButton, setSecondButton] = useState(0);
    const button2 = (num) => {
        setSecondButton(num);
    }


    // console.log(count, 'count');
    return (
        <div>
            {/* <Layout user={profile} /> */}
            <Sidebar user={profile} />
            <div className={Dash.content}>
                <DashboardNav title="UI/UX Designing" applicants={31} applicantstxt="Applicants" btn1="Shortlisted" btn2="Declined" btn1class={Dash.navBtn1} btn2class={Dash.navBtn2} link1="/DashShortlisted" link2="/DashDeclined" shortlist={`(${count})`} reject={`(${count2})`} shortbutton={firstButton} rejectbutton={secondButton} />
                <div className="col-md-12">
                    <div className="d-flex">
                        <div className="col-md-8">
                            <DashboardTable handleClick={handleClick} handleClick2={handleClick2} button1={button1} button2={button2} />
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