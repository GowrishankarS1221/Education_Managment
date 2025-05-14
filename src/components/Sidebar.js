import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate('/signin');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>EduManage</h3>
        <div className="user-info">
          <div className="user-avatar">
            {user.name.charAt(0)}
          </div>
          <div className="user-details">
            <h5>{user.name}</h5>
            <p>{user.role}</p>
          </div>
        </div>
      </div>
      
      <ul className="sidebar-menu">
        <li className={location.pathname === '/dashboard' ? 'active' : ''}>
          <Link to="/dashboard">
            <i className="bi bi-house-door"></i> Dashboard
          </Link>
        </li>
        
        {/* Add Academics option for students */}
        {user.role === 'student' && (
          <li className={location.pathname === '/dashboard/academics' ? 'active' : ''}>
            <Link to="/dashboard/academics">
              <i className="bi bi-calendar3"></i> Academics
            </Link>
          </li>
        )}
        <li className={location.pathname === '/dashboard/courses' ? 'active' : ''}>
          <Link to="/dashboard/courses">
            <i className="bi bi-book"></i> Courses
          </Link>
        </li>
        <li className={location.pathname === '/dashboard/students' ? 'active' : ''}>
          <Link to="/dashboard/students">
            <i className="bi bi-people"></i> Students
          </Link>
        </li>
        <li className={location.pathname === '/dashboard/reports' ? 'active' : ''}>
          <Link to="/dashboard/reports">
            <i className="bi bi-bar-chart"></i> Reports
          </Link>
        </li>
        <li className={location.pathname === '/dashboard/settings' ? 'active' : ''}>
          <Link to="/dashboard/settings">
            <i className="bi bi-gear"></i> Settings
          </Link>
        </li>
      </ul>
      
      <div className="sidebar-footer">
        <button onClick={handleLogout} className="btn btn-outline-danger w-100">
          <i className="bi bi-box-arrow-right"></i> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;