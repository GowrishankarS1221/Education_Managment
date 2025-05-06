import React, { useState, useEffect } from 'react';
import '../../styles/Auth.css';

const UserSettings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    department: '',
    password: '',
    confirmPassword: ''
  });
  
  // Remove unused avatar state since we're not implementing image upload yet
  // const [avatar, setAvatar] = useState(null);
  
  useEffect(() => {
    // Load user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    setFormData(prevState => ({
      ...prevState,
      name: userData.name || '',
      email: userData.email || '',
      subject: userData.subject || '',
      department: userData.department || ''
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate passwords if both are provided
    if (formData.password && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Get current user data
    const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    
    // Update user data
    const updatedUser = {
      ...currentUser,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      department: formData.department
    };

    // Update password if provided
    if (formData.password) {
      updatedUser.password = formData.password;
    }

    // Save to localStorage
    localStorage.setItem('user', JSON.stringify(updatedUser));
    alert('Settings updated successfully');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-container">
          <div className="auth-header">
            <h2>User Settings</h2>
            <p>Update your profile information</p>
          </div>
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="department" className="form-label">Department</label>
              <input
                type="text"
                className="form-control"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="password" className="form-label">New Password (leave blank to keep current)</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
  
            <button type="submit" className="auth-button btn-primary w-100">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
