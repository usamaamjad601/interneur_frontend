import './bootstrap/css/bootstrap.css'
import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import DashDeclined from './Pages/DashDeclined';
import DashShortlisted from './Pages/DashShortlisted';
import DashSubmited from './Pages/DashSubmited';
import './css/Styles.css'
import JobLive from './Pages/JobLive';
import JobDisapproved from './Pages/JobDisapproved';
import JobInReview from './Pages/JobInReview';
import JobClosed from './Pages/JobClosed';
import JobPost from './Pages/JobPost';
import EmpForms from './Pages/EmpForms';
import ClientReg1 from './Pages/Registration/ClientReg1';
import ClientReg2 from './Pages/Registration/ClientReg2';
import EmpDash from './Pages/EmpDash';
import Input2 from './components/InputTags/Input2';
import OpenJobs from './Pages/ManageJobs/OpenJobs';
import ClosedJobs from './Pages/ManageJobs/ClosedJobs';
import PendingJobs from './Pages/ManageJobs/PendingJobs';
import EmpSignUp from './Pages/EmpSignUp';
import EmpSignUpError from './Pages/EmpSignUpError';
import EmpSignUpVerification from './Pages/EmpSignUpVerification';
import AfterApply from './Pages/AfterApply/AfterApply';
<<<<<<< HEAD
import InterviewRecord from './Pages/InterviewRecord';
=======
import CanDashboard from './Pages/Candidate_Pages/CanDashboard';
>>>>>>> 9c815226f89d007f0e7da88437214db5cc94ec0b


function App() {
  return (
    <div>
      <Routes>
        {/* //Forms// */}
        <Route path='/' element={<EmpSignUp />} />

        <Route path='ClientReg1' element={<ClientReg1 />} />
        <Route path='ClientReg2' element={<ClientReg2 />} />
        <Route path='EmpForms' element={<EmpForms />} />

        <Route path='AfterApply' element={<AfterApply />} />

        <Route path='EmpSignUpError' element={<EmpSignUpError />} />
        <Route path='EmpSignUpVerification' element={<EmpSignUpVerification />} />



        <Route path='EmpDash' element={<EmpDash />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="DashDeclined" element={<DashDeclined />} />
        <Route path="DashShortlisted" element={<DashShortlisted />} />
        <Route path='DashSubmited' element={<DashSubmited />} />

        <Route path='joblive' element={<JobLive />} />
        <Route path='jobDisapproved' element={<JobDisapproved />} />
        <Route path='JobInReview' element={<JobInReview />} />
        <Route path='JobClosed' element={<JobClosed />} />

        <Route path='JobPost' element={<JobPost />} />

        <Route path='OpenJobs' element={<OpenJobs />} />
        <Route path='ClosedJobs' element={<ClosedJobs />} />
        <Route path='PendingJobs' element={<PendingJobs />} />
        <Route path='Input2' element={<Input2 />} />

        {/* ///Candidate Section//// */}
        <Route path="InterviewRecord" element={<InterviewRecord />} />

      </Routes>
    </div>
  );
}

export default App;