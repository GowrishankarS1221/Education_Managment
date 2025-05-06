import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../styles/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(true);
  const [user, setUser] = useState({
    name: '',
    role: 'student' // default role
  });

  useEffect(() => {
    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    setUser(userData);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  // Define menu items based on user role
  const getMenuItems = () => {
    const commonItems = [
      {
        path: '/dashboard',
        icon: 'bi-speedometer2',
        label: 'Dashboard'
      },
      {
        path: '/dashboard/settings',
        icon: 'bi-gear',
        label: 'Settings'
      }
    ];
    
    // Role-specific items
    switch(user.role) {
      case 'student':
        return [
          ...commonItems,
          {
            path: '/dashboard/courses',
            icon: 'bi-book',
            label: 'My Courses'
          },
          {
            path: '/dashboard/assignments',
            icon: 'bi-file-earmark-text',
            label: 'Assignments'
          },
          {
            path: '/dashboard/grades',
            icon: 'bi-award',
            label: 'Grades'
          },
          {
            path: '/dashboard/calendar',
            icon: 'bi-calendar3',
            label: 'Calendar'
          }
        ];
      
      case 'parent':
        return [
          ...commonItems,
          {
            path: '/dashboard/child-progress',
            icon: 'bi-graph-up',
            label: 'Child Progress'
          },
          {
            path: '/dashboard/attendance',
            icon: 'bi-calendar-check',
            label: 'Attendance'
          },
          {
            path: '/dashboard/fees',
            icon: 'bi-cash',
            label: 'Fees & Payments'
          },
          {
            path: '/dashboard/events',
            icon: 'bi-calendar-event',
            label: 'School Events'
          }
        ];
      
      case 'teacher':
        return [
          ...commonItems,
          {
            path: '/dashboard/courses',
            icon: 'bi-book',
            label: 'Classes'
          },
          {
            path: '/dashboard/students',
            icon: 'bi-people',
            label: 'Students'
          },
          {
            path: '/dashboard/assignments',
            icon: 'bi-file-earmark-text',
            label: 'Assignments'
          },
          {
            path: '/dashboard/grades',
            icon: 'bi-award',
            label: 'Grades'
          },
          {
            path: '/dashboard/reports',
            icon: 'bi-file-earmark-bar-graph',
            label: 'Reports'
          }
        ];
      
      default:
        return commonItems;
    }
  };
  
  const menuItems = getMenuItems();
  
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h3 className="sidebar-brand">
          <span className="brand-text">SVS</span>
          {isOpen && <span className="ms-2">Portal</span>}
        </h3>
        <button className="sidebar-toggle d-md-none" onClick={toggleSidebar}>
          <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>
      </div>
      
      <div className="sidebar-user" onClick={() => navigate('/dashboard/settings')}>
        <div className="user-avatar" title={user.name}>
          {user.avatar ? (
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
          <div className="user-info">
            <div className="user-name" title={user.name}>{user.name || 'User'}</div>
            <div className="user-role" title={user.role}>
              {user.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'Guest'}
            </div>
          </div>
        )}
      </div>
      
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className={`sidebar-menu-item ${currentPath === item.path ? 'active' : ''}`}>
            <Link to={item.path} className="sidebar-menu-link">
              <i className={`bi ${item.icon}`}></i>
              {isOpen && <span>{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="sidebar-footer">
        {isOpen && (
          <div className="school-info">
            <p className="mb-0">Sunshine Valley School</p>
            <small>Learning Management System</small>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;