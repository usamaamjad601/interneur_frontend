import React from 'react'
import Sidebar from '../../components/global/Sidebar'
import profile_img from '../../assets/img/profile.png'
import Dash from '../../css/App.module.css';
import Nav3 from '../../components/ManageJobsCmp/Nav3';
import PendingAndClosedJobCard from '../../components/ManageJobsCmp/PendingAndClosedJobCard';
import oScroll from '../../css/App3.module.css';

const PendingJobs = () => {
    var profile = {
        name: "John Doe",
        img: profile_img,
    }

    return (
        <div>
            <Sidebar user={profile} />
            <div className={`${Dash.content}`}>
                <Nav3 colorPending="#D8ECF3" />
                <div className={`${oScroll.openScroll} col-md-12 d-flex`} >
                    <div className="col-md-1"></div>
                    <div className="col-md-10 py-3 px-4 d-flex flex-column gap-4">
                        <PendingAndClosedJobCard color="#F0BB83" dottext="In Review" cardText="Approval Pending" title="UI/UX Designing" />
                        <PendingAndClosedJobCard color="#F0BB83" dottext="In Review" cardText="Approval Pending" title="UI/UX Designing" />
                        <PendingAndClosedJobCard color="#F0BB83" dottext="In Review" cardText="Approval Pending" title="UI/UX Designing" />
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
    )

}

export default PendingJobs;