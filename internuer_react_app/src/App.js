import './bootstrap/css/bootstrap.css'
import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Dashboard1 from './Pages/Dashboard1';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="Dashboard1" element={<Dashboard1 />} />
      </Routes>
    </div>
  );
}

export default App;
