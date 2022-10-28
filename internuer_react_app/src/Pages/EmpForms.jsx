import React from 'react'
import CompDetails from '../components/EmpForms/CompDetails'
import EForm from '../css/App.module.css'

const EmpForms = () => {
    return (
        <div>
            <div className={EForm.EFormWrapper}>
                <CompDetails />
            </div>
        </div>
    )
}

export default EmpForms