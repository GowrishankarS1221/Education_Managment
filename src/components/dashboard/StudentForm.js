import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const StudentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: '',
    section: '',
    studentId: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    phoneNumber: '',
    parentName: '',
    parentEmail: '',
    parentPhone: ''
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  useEffect(() => {
    if (isEditMode) {
      // In a real app, fetch student data from API
      // For now, we'll use mock data
      if (id === '1') {
        setFormData({
          name: 'Alex Johnson',
          email: 'alex.j@example.com',
          grade: '10',
          section: 'A',
          studentId: 'S10001',
          dateOfBirth: '2006-05-15',
          gender: 'Male',
          address: '123 Main St, Anytown',
          phoneNumber: '555-123-4567',
          parentName: 'Robert Johnson',
          parentEmail: 'robert.j@example.com',
          parentPhone: '555-987-6543'
        });
      }
    }
  }, [id, isEditMode]);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.grade || !formData.section || !formData.studentId) {
      setError('Please fill in all required fields');
      return;
    }
    
    // In a real app, send data to API
    // For now, just show success message
    setSuccess(isEditMode ? 'Student profile updated successfully!' : 'Student profile created successfully!');
    
    // Redirect after a delay
    setTimeout(() => {
      navigate('/dashboard/students');
    }, 2000);
  };
  
  return (
    <div className="student-form-container">
      <div className="page-header">
        <h1>{isEditMode ? 'Edit Student Profile' : 'Create Student Profile'}</h1>
        <p>{isEditMode ? 'Update student information' : 'Add a new student to the system'}</p>
      </div>
      
      <div className="card">
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
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
              
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">Email Address*</label>
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
            </div>
            
            <div className="row">
              <div className="col-md-4 mb-3">
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
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </select>
              </div>
              
              <div className="col-md-4 mb-3">
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
              
              <div className="col-md-4 mb-3">
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
            </div>
            
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
              
              <div className="col-md-4 mb-3">
                <label htmlFor="gender" className="form-label">Gender</label>
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="col-md-4 mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                rows="2"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <h5 className="mt-4 mb-3">Parent/Guardian Information</h5>
            
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="parentName" className="form-label">Parent Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                />
              </div>
              
              <div className="col-md-4 mb-3">
                <label htmlFor="parentEmail" className="form-label">Parent Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="parentEmail"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleChange}
                />
              </div>
              
              <div className="col-md-4 mb-3">
                <label htmlFor="parentPhone" className="form-label">Parent Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="parentPhone"
                  name="parentPhone"
                  value={formData.parentPhone}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="mt-4 d-flex justify-content-between">
              <Link to="/dashboard/students" className="btn btn-outline-secondary">Cancel</Link>
              <button type="submit" className="btn btn-primary">
                {isEditMode ? 'Update Student' : 'Create Student'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;