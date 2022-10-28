import React, { useEffect, useState } from 'react'
import Sidebar from '../components/global/Sidebar'
import profile_img from '../assets/img/profile.png'
import DashboardNav from '../components/global/DashboardNav';
import DashboardTable from '../components/dashboard/DashboardTable'
import DashboardInfo from '../components/dashboard/DashboardInfo';

import Dash from '../css/App.module.css';




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

    const [secondButton, setSecondButton] = useState(0);
    const button2 = (num) => {
        setSecondButton(num);
    }

    var optionsArray = ['Shorlist', 'Reject'];

    // const [drop, setdrop] = useState(() => () => console.log("default ooops"));
    // const dropFunction = (i) => {
    //     setdrop(i);
    // }

    const [statusArray, setStatusArray] = React.useState([]);


    const changeBorder1 = (i, e) => {
        var x = document.getElementById(`td${i}`)
        // console.log(e.target.value, i)
        // console.log(statusArray)
        const tempArray = [...statusArray];
        tempArray[i] = e.target.value;
        setStatusArray(tempArray);
        // console.log(tempArray)
        handleClick(tempArray.filter((item) => item === 'ShortList').length);
        handleClick2(tempArray.filter((item) => item === 'Reject').length);

        button1(tempArray.filter((item) => item === 'ShortList').length);

        if (tempArray.filter((item) => item === 'ShortList').length !== 0) {
            button1(1)
        }
        if (tempArray.filter((item) => item === 'Reject').length !== 0) {
            button2(1)
        }
        if (e.target.value === 'ShortList') {
            x.className = `${Dash.shortlist} ${Dash.decision} d-flex align-items-center`
        } else if (e.target.value === 'Reject') {
            x.className = `${Dash.decision}  ${Dash.reject} d-flex  align-items-center `
        }
    }

    const data = [
        {
            "id": 1,
            "title": "first",
            "category": "Web development",
            "seo_title": "first title",
            "logo": "/media/logos/westandn.com_4.png",
            "website": "https://www.google.com/",
            "external_link": "https://www.google.com/",
            "additional_internship_detail": "<p>first title</p>",
            "about": "first title",
            "responsibilities": "<p>first title</p>",
            "city": "Rawalpindi",
            "location": "rawalpindi",
            "amount": 1,
            "company_name": "first title",
            "dead_line": "2022-10-28",
            "no_of_position": 1,
            "intern_education": "first title",
            "skills": "first title",
            "joining_date": "2022-10-06",
            "internship_type": "paid",
            "internship_duration": "6 months",
            "who_can_apply": "<p>first title</p>",
            "status": "approved",
            "slug": "first-title",
            "created_at": "2022-10-07T06:23:55.341031Z",
            "updated_at": "2022-10-07T06:27:57.634251Z",
            "user": 82,
            "perks": [
                1,
                5,
                6
            ]
        }
    ]

    const [rowArray, setRowArray] = React.useState([]);
    var tempRowArray = [];

    const rowFunction = (i) => {
        var row = document.getElementById(`tr${i}`)
        // console.log(i);

        tempRowArray = [...rowArray];

        if (tempRowArray.includes(`tr${i}`) === true || row.checked) {
            row.classList.remove(Dash.trActive);
            document.getElementById(`check${i}`).checked = false;
            const index = tempRowArray.indexOf(`tr${i}`)
            tempRowArray.splice(index, 1)
            // console.log("exist")
        }
        else {
            row.classList.add(Dash.trActive);
            document.getElementById(`check${i}`).checked = true;
            tempRowArray.push(`tr${i}`);
            // console.log("not exist")
        }
        setRowArray(tempRowArray);
        // console.log(tempRowArray, 'tempArray')
    }
    const selectAll = () => {
        var check = document.getElementById('Allcheck');
        for (var i = 0; i < 20; i++) {
            if (check.checked) {
                document.getElementById(`check${i}`).checked = true;
                document.getElementById(`tr${i}`).classList.add(Dash.trActive);
                // console.log("cheked");
                tempRowArray.push(`tr${i}`);
            }
            else {
                document.getElementById(`check${i}`).checked = false;
                document.getElementById(`tr${i}`).classList.remove(Dash.trActive);
                // console.log("not cheked");
                const index = tempRowArray.indexOf(`tr${i}`)
                tempRowArray.splice(index, 1)
            }
            setRowArray(tempRowArray);
        }
    }

    useEffect(() => {
        document.getElementById(`tr${0}`).classList.add(Dash.trActive);
        document.getElementById(`check${0}`).checked = true;
    })
    /// From Backend

    var j = 0;
    const slideMap = (i) => {
        document.getElementById(`tr${i}`).classList.add(Dash.trActive);
        document.getElementById(`check${i}`).checked = true;
        if (i > j) {
            document.getElementById(`tr${i - 1}`).classList.remove(Dash.trActive);
            document.getElementById(`check${i - 1}`).checked = false;
        }
        else if (i < j) {
            document.getElementById(`tr${i + 1}`).classList.remove(Dash.trActive);
            document.getElementById(`check${i + 1}`).checked = false;
        }
        j = i;
    }


    return (
        <div>
            <Sidebar user={profile} />
            <div className={Dash.content}>
                <DashboardNav title="UI/UX Designing" applicants={31} applicantstxt="Applicants" btn1="Shortlisted" btn2="Declined" btn1class={Dash.navBtn1} btn2class={Dash.navBtn2} link1="/DashShortlisted" link2="/DashDeclined" shortlist={`(${count})`} reject={`(${count2})`} shortbutton={firstButton} rejectbutton={secondButton} optionsArray={optionsArray} />
                <div className="col-md-12">
                    <div className="d-flex">
                        <div className="col-md-8">
                            <DashboardTable changeBorder1={changeBorder1} rowFunction={rowFunction} button1={button1} button2={button2} selectAll={selectAll} />
                        </div>
                        <div className="col-md-4">
                            <DashboardInfo slideMap={slideMap} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard



