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
import CanDashboard from './Pages/Candidate_Pages/CanDashboard';
import InterviewRecord from './Pages/Candidate_Pages/InterviewRecord'
import MyContext from './Context/MyContext';
import Login from './Pages/Login';
import InterviewQuestions from './Pages/Candidate_Pages/InterviewQuestions';

function App() {
  return (
    <div>
      <Routes>
        {/* //Forms// */}
        <Route path='EmpSignUp' element={<EmpSignUp />} /> // Signup
        <Route path='Login' element={<Login />} />

        <Route path='ClientReg1' element={<ClientReg1 />} /> //Emp Section
        <Route path='ClientReg2' element={<ClientReg2 />} />
        <Route path='EmpForms' element={<EmpForms />} />

        <Route path='EmpSignUpError' element={<EmpSignUpError />} />
        <Route path='EmpSignUpVerification' element={<EmpSignUpVerification />} />

        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="DashDeclined" element={<DashDeclined />} />
        <Route path="DashShortlisted" element={<DashShortlisted />} />
        <Route path='DashSubmited' element={<DashSubmited />} />

        <Route path='AfterApply' element={<AfterApply />} /> // Candidate Section



        <Route path='EmpDash' element={<EmpDash />} />



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
        <Route path="InterviewQuestions" element={<InterviewQuestions />} />
        <Route path="/" element={<CanDashboard />} />

        <Route path='MyContext' element={<MyContext />} />

      </Routes>
    </div>
  );
}

export default App;