import React from 'react'
import CompDetails from '../components/EmpForms/CompDetails'
import InternshipDetail from '../components/EmpForms/InternshipDetail'
import InternshipMeta from '../components/EmpForms/InternshipMeta'
import EForm from '../css/App.module.css'

const EmpForms = () => {

    return (
        <div>
            <div className={EForm.EFormWrapper}>
                {/* <CompDetails /> */}
                {/* <InternshipMeta /> */}
                <InternshipDetail />

            </div>
        </div>
    )
}

export default EmpForms