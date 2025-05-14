// import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Tutoron from './pages/tutoron';
import Dashboard from './component/Dashboard';
// import  from './component/Navbar';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tutoron" element={<Tutoron />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/Navbar" element={<Navbar />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
