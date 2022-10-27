import './bootstrap/css/bootstrap.css'
import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import DashDeclined from './Pages/DashDeclined';
import DashShortlisted from './Pages/DashShortlisted';
import DashSubmited from './Pages/DashSubmited';
import './css/Styles.css'
import JobLive from './Pages/JobLive';
import EmpDash from './Pages/EmpDash';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="DashDeclined" element={<DashDeclined />} />
        <Route path="DashShortlisted" element={<DashShortlisted />} />
        <Route path='DashSubmited' element={<DashSubmited />} />
        <Route path='joblive' element={<JobLive />} />
        <Route path='EmpDash' element={<EmpDash />} />
      </Routes>
    </div>
  );
}

export default App;
