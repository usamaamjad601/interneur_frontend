import React from 'react'
import Sidebar from '../components/global/Sidebar'
import profile_img from '../assets/img/profile.png'

import Nav2 from '../components/global/Nav2';
import Deadline from '../components/JobLive/JobDeadline';
import DateObject from "react-date-object";
import JobDesc from '../components/JobLive/JobDesc';
import JobSkills from '../components/JobLive/JobSkills';
import JobSchedule from '../components/JobLive/JobSchedule';

import DApproved from '../css/App.module.css';




const JobInReview = () => {

    var skillTags = ['HTML', 'CSS', 'Graphic Designing', 'UI/UX']
    var moreActions = ['More Actions', 'Share on job boards', 'View as applicant', 'Re-open this position', 'Copy link']


    var profile = {
        name: "John Doe",
        img: profile_img,
    }
    var date = new DateObject();

    return (
        <div>
            <Sidebar user={profile} />
            <div className={DApproved.content}>
                <Nav2 title="UI/UX Designing" btn2="Edit Job Post" btn2class={DApproved.navBtn4} status="In Review" color="#f9a121" days='12'
                    views="0" candidates="0" jobtype="Lahore" stage="Approval Pending" moreActions={moreActions} displayClass={DApproved.disableButton} blurClass={DApproved.disableClass} />
                <div className="col-md-12">
                    <div className="d-flex">
                        <div className="col-md-8 p-4">
                            <Deadline stipend="13000-20000" months="6" deadline={date.format("DD MMM YYYY")}
                            />
                            <div className='pt-4'>
                                <JobDesc />
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

                                    <JobSchedule date={date.format("DD MMM YYYY")} BorderColor="#7b7b7b" Number='2' txt={`sit amet consectetur adipisicing elit. Qui tempora igendi modi 
                                    possimus  stinctio pariatur`} title="Approve/Decline" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobInReview