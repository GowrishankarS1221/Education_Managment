import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const AssignmentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    grade: '',
    section: '',
    subject: '',
    dueDate: '',
    dueTime: '23:59',
    totalMarks: '',
    attachments: []
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  useEffect(() => {
    if (isEditMode) {
      // In a real app, fetch assignment data from API
      // For now, we'll use mock data
      if (id === '1') {
        setFormData({
          title: 'Mathematics Quiz - Chapter 5',
          description: 'This quiz covers all topics from Chapter 5 including quadratic equations and factorization.',
          grade: '10',
          section: 'A',
          subject: 'Mathematics',
          dueDate: '2023-06-15',
          dueTime: '14:30',
          totalMarks: '50',
          attachments: []
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
  
  const handleFileChange = (e) => {
    // In a real app, you would handle file uploads
    // For now, just store the file names
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      attachments: [...formData.attachments, ...files]
    });
  };
  
  const removeAttachment = (index) => {
    const updatedAttachments = [...formData.attachments];
    updatedAttachments.splice(index, 1);
    setFormData({
      ...formData,
      attachments: updatedAttachments
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.grade || !formData.section || !formData.subject || !formData.dueDate) {
      setError('Please fill in all required fields');
      return;
    }
    
    // In a real app, send data to API
    // For now, just show success message
    setSuccess(isEditMode ? 'Assignment updated successfully!' : 'Assignment created successfully!');
    
    // Redirect after a delay
    setTimeout(() => {
      navigate('/dashboard/assignments');
    }, 2000);
  };
  
  return (
    <div className="assignment-form-container">
      <div className="page-header">
        <h1>{isEditMode ? 'Edit Assignment' : 'Create Assignment'}</h1>
        <p>{isEditMode ? 'Update assignment details' : 'Create a new assignment for your students'}</p>
      </div>
      
      <div className="card">
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Assignment Title*</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
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
                </select>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="dueDate" className="form-label">Due Date*</label>
                <input
                  type="date"
                  className="form-control"
                  id="dueDate"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="col-md-6 mb-3">
                <label htmlFor="dueTime" className="form-label">Due Time</label>
                <input
                  type="time"
                  className="form-control"
                  id="dueTime"
                  name="dueTime"
                  value={formData.dueTime}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="mb-3">
              <label htmlFor="totalMarks" className="form-label">Total Marks</label>
              <input
                type="number"
                className="form-control"
                id="totalMarks"
                name="totalMarks"
                value={formData.totalMarks}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="attachments" className="form-label">Attachments</label>
              <input
                type="file"
                className="form-control"
                id="attachments"
                onChange={handleFileChange}
                multiple
              />
              
              {formData.attachments.length > 0 && (
                <div className="mt-2">
                  <p>Attached Files:</p>
                  <ul className="list-group">
                    {formData.attachments.map((file, index) => (
                      <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {file.name}
                        <button 
                          type="button" 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => removeAttachment(index)}
                        >
                          <i className="bi bi-x"></i>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="mt-4 d-flex justify-content-between">
              <Link to="/dashboard/assignments" className="btn btn-outline-secondary">Cancel</Link>
              <button type="submit" className="btn btn-primary">
                {isEditMode ? 'Update Assignment' : 'Create Assignment'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignmentForm;