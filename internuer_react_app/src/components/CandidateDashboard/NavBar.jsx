import React from 'react'
import company_img from '../../assets/logos/WhiteLogo.png'
import profile_img from '../../assets/img/profile.png'
import { Link } from 'react-router-dom'
import Btn from '../../css/candDash.module.css';

export default function NavBar() {
    return (
        <div className={`${Btn.mainNavBar}`}>
            <div className="d-flex align-items-center justify-content-between" >
                <img src={company_img} alt="internuer logo" height="50px" width="70px" />
                <div className="d-flex">
                    <button className={`${Btn.navBarbtn} mx-1`}>Dashboard</button>
                    <button className={`${Btn.navBarbtn} mx-1`}>Opportunities</button>
                    <button className={`${Btn.navBarbtn} mx-1`}>Interviews </button>
                    <button className={`${Btn.navBarbtn} mx-1`}>Offers </button>
                </div>
                <div className="d-flex px-2">
                    <div>
                        <Link to="#">
                            <img src={profile_img} alt="internuer logo" height="50px" width="70px" />
                        </Link>
                    </div>
                    <div className="d-flex flex-column">
                        <strong>Muhammad Ahmed</strong>
                        <p>Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
