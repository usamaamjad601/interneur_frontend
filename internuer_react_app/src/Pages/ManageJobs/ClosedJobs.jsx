import React from 'react'
import Sidebar from '../../components/global/Sidebar'
import profile_img from '../../assets/img/profile.png'
import Dash from '../../css/App.module.css';
import Nav3 from '../../components/ManageJobsCmp/Nav3';

export default function ClosedJobs() {
    var profile = {
        name: "John Doe",
        img: profile_img,
    }

    return (
        <div>
            <Sidebar user={profile} />
            <div className={`${Dash.content}`}>
                <Nav3></Nav3>
            </div>
        </div>
    )
}
