import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  
  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const mockAssignments = [
      { id: 1, title: 'Mathematics Quiz - Chapter 5', grade: '10', section: 'A', subject: 'Mathematics', dueDate: '2023-06-15', status: 'Active' },
      { id: 2, title: 'Algebra Homework - Polynomials', grade: '11', section: 'B', subject: 'Mathematics', dueDate: '2023-06-18', status: 'Active' },
      { id: 3, title: 'Geometry Project - 3D Models', grade: '9', section: 'C', subject: 'Mathematics', dueDate: '2023-06-25', status: 'Active' },
      { id: 4, title: 'Calculus Test - Derivatives', grade: '12', section: 'A', subject: 'Mathematics', dueDate: '2023-06-20', status: 'Active' },
      { id: 5, title: 'Statistics Assignment - Probability', grade: '11', section: 'A', subject: 'Mathematics', dueDate: '2023-06-22', status: 'Active' },
    ];
    
    setAssignments(mockAssignments);
  }, []);
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleGradeFilter = (e) => {
    setSelectedGrade(e.target.value);
  };
  
  const handleSubjectFilter = (e) => {
    setSelectedSubject(e.target.value);
  };
  
  const handleDeleteAssignment = (id) => {
    if (window.confirm('Are you sure you want to delete this assignment?')) {
      setAssignments(assignments.filter(assignment => assignment.id !== id));
    }
  };
  
  // Filter assignments based on search and filters
  const filteredAssignments = assignments.filter(assignment => {
    const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = selectedGrade === '' || assignment.grade === selectedGrade;
    const matchesSubject = selectedSubject === '' || assignment.subject === selectedSubject;
    
    return matchesSearch && matchesGrade && matchesSubject;
  });
  
  return (
    <div className="assignments-container">
      <div className="page-header d-flex justify-content-between align-items-center">
        <div>
          <h1>Assignments</h1>
          <p>Create and manage assignments for your classes</p>
        </div>
        <Link to="/dashboard/assignments/create" className="btn btn-primary">
          <i className="bi bi-plus"></i> Create Assignment
        </Link>
      </div>
      
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search assignments..." 
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <select 
                className="form-select" 
                value={selectedGrade}
                onChange={handleGradeFilter}
              >
                <option value="">All Grades</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
            </div>
            <div className="col-md-3">
              <select 
                className="form-select"
                value={selectedSubject}
                onChange={handleSubjectFilter}
              >
                <option value="">All Subjects</option>
                <option value="Mathematics">Mathematics</option>
                <option value="English">English</option>
                <option value="Science">Science</option>
                <option value="Social Studies">Social Studies</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Grade</th>
                  <th>Section</th>
                  <th>Subject</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssignments.length > 0 ? (
                  filteredAssignments.map(assignment => (
                    <tr key={assignment.id}>
                      <td>{assignment.title}</td>
                      <td>{assignment.grade}</td>
                      <td>{assignment.section}</td>
                      <td>{assignment.subject}</td>
                      <td>{new Date(assignment.dueDate).toLocaleDateString()}</td>
                      <td>
                        <span className={`badge ${assignment.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                          {assignment.status}
                        </span>
                      </td>
                      <td>
                        <div className="btn-group">
                          <Link to={`/dashboard/assignments/${assignment.id}`} className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-eye"></i>
                          </Link>
                          <Link to={`/dashboard/assignments/${assignment.id}/edit`} className="btn btn-sm btn-outline-secondary">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDeleteAssignment(assignment.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                          <Link to={`/dashboard/assignments/${assignment.id}/submissions`} className="btn btn-sm btn-outline-info">
                            <i className="bi bi-clipboard-check"></i>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">No assignments found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;