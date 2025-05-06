import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student', // Default role
    grade: '',
    section: '',
    studentId: '',
    subject: '',
    department: ''
  });
  
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Role-specific validation
    if (formData.role === 'student' && (!formData.grade || !formData.section || !formData.studentId)) {
      setError('Please fill in all student information');
      return;
    }
    
    if (formData.role === 'teacher' && (!formData.subject || !formData.department)) {
      setError('Please fill in all teacher information');
      return;
    }

    // Store user data in localStorage
    const userData = {
      name: formData.name,
      email: formData.email,
      role: formData.role,
      // Store role-specific data
      ...(formData.role === 'student' && {
        grade: formData.grade,
        section: formData.section,
        studentId: formData.studentId,
        // Add student-specific functionality data
        permissions: [
          'view_assignments',
          'view_academic_progress',
          'view_timetable',
          'view_academic_plan',
          'edit_profile',
          'submit_feedback'
        ]
      }),
      ...(formData.role === 'teacher' && {
        subject: formData.subject,
        department: formData.department
      })
    };

    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', JSON.stringify(userData));
    
    // Navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-container">
          <h2 className="text-center mb-4">Create an Account</h2>
          <h4 className="text-center mb-3">Sunshine Valley School</h4>
          {error && <div className="alert alert-danger">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name*</label>
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
            
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address*</label>
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
            
            <div className="mb-3">
              <label htmlFor="role" className="form-label">I am a*</label>
              <select
                className="form-select"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            
            {/* Student-specific fields */}
            {formData.role === 'student' && (
              <>
                <div className="mb-3">
                  <label htmlFor="grade" className="form-label">Grade*</label>
                  <select
                    className="form-select"
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Grade</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                  </select>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="section" className="form-label">Section*</label>
                  <select
                    className="form-select"
                    id="section"
                    name="section"
                    value={formData.section}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Section</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="studentId" className="form-label">Student ID*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}
            
            {/* Teacher-specific fields */}
            {formData.role === 'teacher' && (
              <>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject*</label>
                  <select
                    className="form-select"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                    <option value="Social Studies">Social Studies</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Physical Education">Physical Education</option>
                    <option value="Art">Art</option>
                    <option value="Music">Music</option>
                  </select>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="department" className="form-label">Department*</label>
                  <select
                    className="form-select"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                    <option value="Social Studies">Social Studies</option>
                    <option value="Technology">Technology</option>
                    <option value="Arts">Arts</option>
                    <option value="Physical Education">Physical Education</option>
                  </select>
                </div>
              </>
            )}
            
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password*</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password*</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>
          
          <div className="mt-3 text-center">
            <p>Already have an account? <Link to="/signin">Sign In</Link></p>
            <p><Link to="/">Back to Home</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;