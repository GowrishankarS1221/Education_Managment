import React from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import '../../styles/Sidebar.css';

const Sidebar = ({ user, isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate('/signin');
  };

  return (
    <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
      <div className="sidebar-header">
        <h3 className="sidebar-brand">
          <span className="brand-text">SVS</span>
          {isOpen && <span className="ms-2">Portal</span>}
        </h3>
        <button className="sidebar-toggle d-md-none" onClick={toggleSidebar}>
          <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>
      </div>
      
      <div className="sidebar-user">
        <div className="user-avatar" title={user?.name}>
          {user?.avatar ? (
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="rounded-circle w-100 h-100"
            />
          ) : (
            <i className="bi bi-person-circle"></i>
          )}
        </div>
        {isOpen && (
          <div className="user-info dropdown">
            <div className="user-name" title={user?.name}>{user?.name || 'User'}</div>
            <div className="user-role" title={user?.role}>
              {user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'Guest'}
            </div>
            <div className="dropdown-menu">
              <Link to="/dashboard/profile" className="dropdown-item">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100" alt="Profile" />
                <span>Profile</span>
              </Link>
              <Link to="/dashboard/settings" className="dropdown-item">
                <img src="https://images.unsplash.com/photo-1646617747566-b7e784435a7d?w=100" alt="Settings" />
                <span>Settings</span>
              </Link>
              <button onClick={handleLogout} className="dropdown-item">
                <img src="https://images.unsplash.com/photo-1646617747566-b7e784435a7d?w=100" alt="Sign Out" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        )}
      </div>
      
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <NavLink to="/dashboard" className="sidebar-menu-link" end>
            <i className="bi bi-house-door"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>
        
        {user?.role === 'student' ? (
          <>
            <li className="sidebar-menu-item">
              <NavLink to="/dashboard/my-courses" className="sidebar-menu-link">
                <i className="bi bi-book"></i>
                <span>My Courses</span>
              </NavLink>
            </li>
            <li className="sidebar-menu-item">
              <NavLink to="/dashboard/assignments" className="sidebar-menu-link">
                <i className="bi bi-journal-text"></i>
                <span>Assignments</span>
              </NavLink>
            </li>
            <li className="sidebar-menu-item">
              <NavLink to="/dashboard/academics" className="sidebar-menu-link">
                <i className="bi bi-calendar3"></i>
                <span>Academic Calendar</span>
              </NavLink>
            </li>
            <li className="sidebar-menu-item">
              <NavLink to="/dashboard/settings" className="sidebar-menu-link">
                <i className="bi bi-gear"></i>
                <span>Settings</span>
              </NavLink>
            </li>
          </>
        ) : (
          <>
            {user?.role === 'teacher' && (
              <>
                <li className="sidebar-menu-item">
                  <NavLink to="/dashboard/students" className="sidebar-menu-link">
                    <i className="bi bi-people"></i>
                    <span>Students</span>
                  </NavLink>
                </li>
                <li className="sidebar-menu-item">
                  <NavLink to="/dashboard/courses" className="sidebar-menu-link">
                    <i className="bi bi-book"></i>
                    <span>Classes</span>
                  </NavLink>
                </li>
                <li className="sidebar-menu-item">
                  <NavLink to="/dashboard/reports" className="sidebar-menu-link">
                    <i className="bi bi-file-earmark-text"></i>
                    <span>Reports</span>
                  </NavLink>
                </li>
              </>
            )}
            <li className="sidebar-menu-item">
              <NavLink to="/dashboard/assignments" className="sidebar-menu-link">
                <i className="bi bi-journal-text"></i>
                <span>Assignments</span>
              </NavLink>
            </li>
            <li className="sidebar-menu-item">
              <NavLink to="/dashboard/settings" className="sidebar-menu-link">
                <i className="bi bi-gear"></i>
                <span>Settings</span>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;