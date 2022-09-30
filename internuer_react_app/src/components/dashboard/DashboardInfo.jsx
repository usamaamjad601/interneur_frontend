import React from 'react'
import prof from '../../assets/img/profile.png'
import DInfoAbout from './DInfoAbout'
import DAcoordion from './DAcoordion'


const DashboardInfo = () => {
    return (
        <div>
            <div className="d-info-wrapper col-md-12 p-4 d-flex flex-column">
                <div className="d-info-profile d-flex gap-2">
                    <div className="d-flex gap-3">
                        <img
                            src={prof}
                            alt="Profile"
                            className="profile-img"
                            w />
                        <div>
                            <h4>Danish Kaneria</h4>
                            <p>Ui Designer</p>
                        </div>
                    </div>
                </div>

                <div className="mt-2">
                    <DInfoAbout />
                </div>
                <div className="mt-2">
                    <DAcoordion />
                </div>

            </div>
        </div>
    )
}

export default DashboardInfo