import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  
  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const mockStudents = [
      { id: 1, name: 'Alex Johnson', grade: '10', section: 'A', studentId: 'S10001', email: 'alex.j@example.com', attendance: '95%', gpa: '3.8' },
      { id: 2, name: 'Emma Davis', grade: '10', section: 'A', studentId: 'S10002', email: 'emma.d@example.com', attendance: '92%', gpa: '3.6' },
      { id: 3, name: 'Michael Smith', grade: '10', section: 'A', studentId: 'S10003', email: 'michael.s@example.com', attendance: '88%', gpa: '3.2' },
      { id: 4, name: 'Sophia Chen', grade: '10', section: 'A', studentId: 'S10004', email: 'sophia.c@example.com', attendance: '97%', gpa: '3.9' },
      { id: 5, name: 'William Brown', grade: '10', section: 'B', studentId: 'S10005', email: 'william.b@example.com', attendance: '90%', gpa: '3.5' },
    ];
    
    setStudents(mockStudents);
  }, []);
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleGradeFilter = (e) => {
    setSelectedGrade(e.target.value);
  };
  
  const handleSectionFilter = (e) => {
    setSelectedSection(e.target.value);
  };
  
  const handleDeleteStudent = (id) => {
    if (window.confirm('Are you sure you want to delete this student profile?')) {
      setStudents(students.filter(student => student.id !== id));
    }
  };
  
  // Filter students based on search and filters
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          student.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = selectedGrade === '' || student.grade === selectedGrade;
    const matchesSection = selectedSection === '' || student.section === selectedSection;
    
    return matchesSearch && matchesGrade && matchesSection;
  });
  
  return (
    <div className="students-container">
      <div className="page-header d-flex justify-content-between align-items-center">
        <div>
          <h1>Student Management</h1>
          <p>View, create, and manage student profiles</p>
        </div>
        <Link to="/dashboard/students/create" className="btn btn-primary">
          <i className="bi bi-plus"></i> Create Student
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
                  placeholder="Search by name or ID..." 
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
                value={selectedSection}
                onChange={handleSectionFilter}
              >
                <option value="">All Sections</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
                <option value="D">Section D</option>
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
                  <th>ID</th>
                  <th>Name</th>
                  <th>Grade</th>
                  <th>Section</th>
                  <th>Email</th>
                  <th>Attendance</th>
                  <th>GPA</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map(student => (
                    <tr key={student.id}>
                      <td>{student.studentId}</td>
                      <td>{student.name}</td>
                      <td>{student.grade}</td>
                      <td>{student.section}</td>
                      <td>{student.email}</td>
                      <td>{student.attendance}</td>
                      <td>{student.gpa}</td>
                      <td>
                        <div className="btn-group">
                          <Link to={`/dashboard/students/${student.id}`} className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-eye"></i>
                          </Link>
                          <Link to={`/dashboard/students/${student.id}/edit`} className="btn btn-sm btn-outline-secondary">
                            <i className="bi bi-pencil"></i>
                          </Link>
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDeleteStudent(student.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                          <Link to={`/dashboard/students/${student.id}/report`} className="btn btn-sm btn-outline-info">
                            <i className="bi bi-file-earmark-text"></i>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">No students found</td>
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

export default Students;