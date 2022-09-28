import React from 'react'

const sidebar = () => {
    return (
        <div>
            <div class="sidebar d-flex flex-column justify-content-between">
                <div class="">
                    <div class="logo sidebar-logo">
                        <a class="" href="./Dashboard.html">LOGO</a>
                    </div>
                    <a href="#profile" class="profile d-flex gap-2 p-0 py-4">
                        <img
                            src="./assets/Employer_icons/profile.svg"
                            alt="Profile"
                            height="60px"
                            width="70px" />
                        <div>
                            <h4>Fahad</h4>
                            <h6>Admin</h6>
                        </div>
                    </a>
                    <a class="d-flex gap-3" href="./Dashboard.html">
                        {/* <embed src="../assets/Employer_icons/back_button.svg "
                        type=""/>  */}
                        Home</a>
                    <a href="./RecentPateints.html">
                        {/* <embed src="../assets/Employer_icons/back_button.svg "
                type="">  */}
                        Internships
                    </a>
                </div>

                <div class="sidebar-card p-2 d-flex flex-column m-4
                align-items-center">
                    <h5>Premiuim Plan</h5>
                    <img
                        src="../assets/Employer_icons/profile.svg"
                        alt="Profile"
                        height="60px"
                        width="70px" />
                    <p>Audio and Video<br /> Interviews</p>
                    <button type="button" class="button btn btn-primary
                        sidebar-btn">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default sidebar