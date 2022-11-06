import React from 'react';
import jCard from '../css/App3.module.css';
import profile_img from '../assets/img/verification.png'
import { Link } from 'react-router-dom';


export default function EmpSignUpVerification() {
    const enabled = false;
    const enableTrue = (enabled) => {
        enabled = true
        return enabled;
    }
    console.log(setTimeout(enableTrue(enabled), 120000));
    return (
        <div className="d-flex justify-content-center" style={{ marginTop: "15%" }} >
            <div className={`${jCard.textBody} p-4`}>
                <div className="d-flex justify-content-center">
                    <img
                        src={profile_img}
                        alt="Sorry"
                    />
                </div >
                <p className="p-3 text-center">Great! We have sent you an email for verification.Please click on the verification link sent at <strong style={{ color: "#1F8EE4" }}>name@example.com</strong> to proceed. Check your spam folder if not found in inbox.</p>
                <h4 className="text-center" style={{ color: "#1F8EE4" }}>Have queries?</h4>
                <p className="text-center pt-1">Email us at</p>
                <div className="d-flex justify-content-center">
                    <Link to="#" style={{ color: "#1F8EE4" }}>employer@interneur.pk</Link>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <button className={`${enabled ? jCard.edbutton2 : jCard.edbutton3}`}>Resend verification code</button>
                        <p style={{ fontSize: '12px' }} className="mx-2">in 1 min 59 sec</p>
                    </div>
                    <button className={`${jCard.edbutton2}`}>Close</button>

                </div>
            </div>
        </div>

    )
}
