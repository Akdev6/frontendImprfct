import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Leaderboard from './components/leaderboard';
import Home from './home';
import NoPage from './components/NoPage';
import Register from './components/Register';
import Login from './components/login';
import Profile from './components/profile';
import ReferralSystem from './components/referalSystem'; 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/referralSystem/:referralCode" element={<ReferralSystem />} /> 
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
