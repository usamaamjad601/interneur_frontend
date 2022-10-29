import React from 'react'
import CompDetails from '../components/EmpForms/CompDetails'
import InternshipDetail from '../components/EmpForms/InternshipDetail'
import InternshipMeta from '../components/EmpForms/InternshipMeta'
import EForm from '../css/App.module.css'

const EmpForms = () => {

    return (
        <div>
            <div className='col-md-12 d-flex'>
                <div className="col-md-2"></div>
                <div className={`col-md-8  ${EForm.EFormWrapper}`}>
                    {/* <CompDetails /> */}
                    {/* <InternshipMeta /> */}
                    <InternshipDetail /></div>
                <div className="col-md-2"></div>



            </div>
        </div>
    )
}

export default EmpForms