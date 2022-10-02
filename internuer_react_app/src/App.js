import './bootstrap/css/bootstrap.css'
import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import DashDeclined from './Pages/DashDeclined';
import DashShortlisted from './Pages/DashShortlisted';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="DashDeclined" element={<DashDeclined />} />
        <Route path="DashShortlisted" element={<DashShortlisted />} />
      </Routes>
    </div>
  );
}

export default App;
