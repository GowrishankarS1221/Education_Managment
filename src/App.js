import './styles/Global.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Pages
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import UserSettings from './components/dashboard/UserSettings';
import Assignment from './components/dashboard/Assignment';
import Students from './components/dashboard/Students';
import Courses from './components/dashboard/Courses';
import Settings from './components/dashboard/Settings';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Protected Dashboard Routes */}
        <Route path="/dashboard/*" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          {/* Student Routes */}
          <Route path="assignments" element={
            <PrivateRoute allowedRoles={['student', 'teacher']}>
              <Assignment />
            </PrivateRoute>
          } />
          
          {/* Teacher Routes */}
          <Route path="students" element={
            <PrivateRoute allowedRoles={['teacher']}>
              <Students />
            </PrivateRoute>
          } />
          <Route path="courses" element={
            <PrivateRoute allowedRoles={['teacher']}>
              <Courses />
            </PrivateRoute>
          } />
          
          {/* Common Routes */}
          <Route path="settings" element={
            <PrivateRoute allowedRoles={['student', 'teacher']}>
              <Settings />
            </PrivateRoute>
          } />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;