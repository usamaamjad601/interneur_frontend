import React, { useEffect, useState } from 'react'
import Sidebar from '../components/global/Sidebar'
import profile_img from '../assets/img/profile.png'
import axios from "axios";



import Dash from '../css/App.module.css';
import Nav2 from '../components/global/Nav2';
import Deadline from '../components/JobLive/JobDeadline';
import JobDesc from '../components/JobLive/JobDesc';
import JobSkills from '../components/JobLive/JobSkills';
import JobSchedule from '../components/JobLive/JobSchedule';

import DateObject from "react-date-object";



const JobLive = () => {




    const [posts, setPosts] = useState([]);
    function abc() {
        axios({
            method: "get",
            url: "https://interneur.herokuapp.com/api/perk-listings/?format=api",
            headers: { 'Access-Control-Allow-Origin': '*' }
        })
            .then(function (response) {
                console.log(response)
            })

            .catch(function (response) {
                console.log(response)
            });
    }

    useEffect(() => {
        abc();
        // axios.get(`https://interneur.herokuapp.com/api/perk-listings/?format=api`)
        //     .then(res => {
        //         console.log(res.data, 'data ');
        //         const persons = res.data;
        //         setPosts({ persons });
        //     })
        //     .catch(err => {
        //         console.log('erro');
        //     })




    }, []);

    console.log(posts, 'Post API')



    var skillTags = ['HTML', 'CSS', 'Graphic Designing', 'UI/UX']

    var profile = {
        name: "John Doe",
        img: profile_img,
    }
    var date = new DateObject();

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
                            <Deadline stipend="13000-20000" months="6" deadline={date.format("DD MMM YYYY")} displayClass={Dash.displayNone}
                            />
                            <div className='pt-4'>
                                <JobDesc displayClass={Dash.displayNone} />
                            </div>
                            <div className='pt-3 '>
                                <JobSkills skillTags={skillTags} />
                            </div>
                        </div>
                        <div className="col-md-4 p-2">
                            <div>
                                <h4 className='fw-bolder'>Recruitment Schedule</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora quas vel iusto autem exercitationem tempore quasi eligendi modi possimus stinctio pariatur.</p>
                                <div className='pt-3 d-flex flex-column gap-2'>
                                    <JobSchedule date={date.format("DD MMM YYYY")} BorderColor="#0D6EFD" Number="1" txt=" sit amet consectetur adipisicing elit. Qui tempora quas vel iusto autem exercitationem tempore quasi eligendi modi possimus stinctio pariatur" title="Job Submited" />

                                    <JobSchedule date={date.format("DD MMM YYYY")} BorderColor="#5fb951" Number='2' txt=" sit amet consectetur adipisicing elit. Qui tempora quas vel iusto autem exercitationem tempore quasi eligendi modi possimus  autem exercitationem tempore quasi eligendi modi 
                                     possimus  stinctio pariatur" title="Approved" />

                                    <JobSchedule date={date.format("DD MMM YYYY")} BorderColor="orange" Number='3' txt=" sit amet consectetur adipisicing elit. Qui tempora quas vel iusto autem exercitationem tempore quasi  modi possimus stinctio pariatur" title="Shortlisting" />

                                    <JobSchedule date={date.format("DD MMM YYYY")} BorderColor="purple" Number='4' txt=" sit amet consectetur adipisicing elit. Qui tempora quas vel iusto autem exercitationem tempore quasio pariatur" title="Interviews" />

                                    <JobSchedule date={date.format("DD MMM YYYY")} BorderColor="#5fb951" Number='5' txt=" sit amet consectetur adipisicing elit. Qui tempora quas vel iusto autem exercitationem tmus stinctio pariatur" title="Job Offer & Closing" />

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobLive