import React from 'react'
import company_img from '../../assets/logos/Logo.png'
import profile_img from '../../assets/img/profile.png'
import { Link } from 'react-router-dom'
import Btn from '../../css/candDash.module.css';
import CanNav from '../../css/App3.module.css';

export default function NavBar(props) {
    return (
        <div className={`${Btn.mainNavBar} px-5`}>
            <div className="d-flex align-items-center justify-content-between" >
                <img src={company_img} alt="internuer logo" height="50px" width="150px" />
                <div className={`d-flex ${props.displayClass}`}>
                    <button className={`${Btn.navBarbtn} mx-1`}>Dashboard</button>
                    <button className={`${Btn.navBarbtn} mx-1`}>Opportunities</button>
                    <button className={`${Btn.navBarbtn} mx-1`}>Interviews </button>
                    <button className={`${Btn.navBarbtn} mx-1`}>Offers </button>
                </div>
                <div className={`d-flex px-2 ${props.displayClass}`}>
                    <div>
                        <Link to="#">
                            <img src={profile_img} alt="internuer logo" height="50px" width="70px" />
                        </Link>
                    </div>
                    <div className={`d-flex flex-column `}>
                        <strong>Muhammad Ahmed</strong>
                        <p>Web Developer</p>
                    </div>
                </div>
                <div className={`d-flex gap-3 ${props.displayClass2}`}>
                    <Link to='Login'>
                        <button type="button" className={`button btn ${CanNav.signUpButton}
                        sidebar-btn`}>Login</button>
                    </Link>
                    <Link to='EmpSignUp'>
                        <button type="button" className={`button btn ${CanNav.signUpButton}
                        sidebar-btn`}>Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
