import React from 'react'
import Sidebar from '../../components/global/Sidebar'
import profile_img from '../../assets/img/profile.png'
import Dash from '../../css/App.module.css';
import oScroll from '../../css/App3.module.css';
import Nav3 from '../../components/ManageJobsCmp/Nav3';
import OpenJobCard from '../../components/ManageJobsCmp/OpenJobCard';

export default function OpenJobs() {
    var profile = {
        name: "John Doe",
        img: profile_img,
    }
    return (
        <div>
            <Sidebar user={profile} />
            <div className={`${Dash.content}`}>
                <Nav3 colorOpen="#D8ECF3" />
                <div className={`${oScroll.openScroll} col-md-12 d-flex`} >
                    <div className="col-md-1"></div>
                    <div className="col-md-10 py-3 px-4 d-flex flex-column gap-4">
                        <OpenJobCard color='green' dottext="Post live" cardText="Sourcing Stage" title="UI/UX Designing" />
                        <OpenJobCard color='green' dottext="Post live" cardText="Sourcing Stage" title="UI/UX Designing" />
                        <OpenJobCard color='green' dottext="Post live" cardText="Sourcing Stage" title="UI/UX Designing" />
                    </div>
                    <div className="col-md-1"></div>
                </div>

            </div>
        </div>


    )
}
