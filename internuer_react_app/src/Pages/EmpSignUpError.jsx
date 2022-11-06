import React from 'react'
import jCard from '../css/App3.module.css';
import profile_img from '../assets/img/Sorry.png'
import { Link } from 'react-router-dom';

export default function EmpSignUpError() {

    return (
        <div className="d-flex justify-content-center" style={{ marginTop: "15%" }} >
            <div className={`${jCard.textBody} p-4`}>
                <div className="d-flex justify-content-center">
                    <img
                        src={profile_img}
                        alt="Sorry"
                    />
                </div >
                <p className="p-3 text-center">This email is not registered with us. If you are anemployee, click <Link to="#" style={{ textDecoration: "none" }}>here</Link> to register. Not an employee? Click <Link to="#" style={{ textDecoration: "none" }}>here</Link> if you are an applicant.</p>
                <div className="d-flex justify-content-center">
                    <button className={`${jCard.edbutton2}`}>Close</button>
                </div>
            </div>
        </div>
    )
}
