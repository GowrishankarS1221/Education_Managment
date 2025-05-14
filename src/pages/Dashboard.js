import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHome from '../components/dashboard/DashboardHome';
import Courses from '../components/dashboard/Courses';
import Students from '../components/dashboard/Students';
import Assignment from '../components/dashboard/Assignment';
import Settings from '../components/dashboard/Settings';
import StudentCourses from '../components/dashboard/StudentCourses';
import StudentReport from '../components/dashboard/StudentReport';
import '../styles/Dashboard.css';
import Academics from '../components/dashboard/Academics';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    if (!isAuthenticated) {
      navigate('/signin');
      return;
    }
    
    // Get user data
    const userData = localStorage.getItem('user');
    
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // If no user data, redirect to sign in
      navigate('/signin');
    }
  }, [navigate]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  if (!user) {
    return <div className="loading">Loading...</div>;
  }
  
  return (
    <div className={`dashboard-container ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>
      <Sidebar 
        user={user} 
        isOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar} 
      />
      
      <div className="dashboard-content">
        <div className="dashboard-header">
          <button 
            className="sidebar-toggle" 
            onClick={toggleSidebar}
          >
            <i className={`bi ${sidebarOpen ? 'bi-arrow-left' : 'bi-arrow-right'}`}></i>
          </button>
          
          <div className="user-menu dropdown">
            <button 
              className="btn dropdown-toggle" 
              type="button" 
              id="userMenuDropdown" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              <span className="user-name">{user.name}</span>
              <span className="user-avatar">
                <i className="bi bi-person-circle"></i>
              </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenuDropdown">
              <li><button className="dropdown-item">Profile</button></li>
              <li><button className="dropdown-item">Settings</button></li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <button 
                  className="dropdown-item" 
                  onClick={() => {
                    localStorage.removeItem('isAuthenticated');
                    localStorage.removeItem('user');
                    navigate('/signin');
                  }}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="dashboard-main">
          <Routes>
            <Route path="/" element={<DashboardHome user={user} />} />
            <Route path="/assignments/*" element={<Assignment />} />
            <Route path="/courses/*" element={<Courses />} />
            <Route path="/academics/*" element={<Academics />} />
            <Route path="/my-courses/*" element={<StudentCourses />} />
            <Route path="/students/*" element={<Students />} />
            <Route path="/settings/*" element={<Settings user={user} />} />
            <Route path="/reports/*" element={<StudentReport />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;