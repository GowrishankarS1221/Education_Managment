import React, { useState } from 'react';
import '../../styles/Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Mathematics ',
      instructor: 'Mrs. Sarah Johnson',
      department: 'Mathematics',
      students: 32,
      status: 'active'
    },
    {
      id: 2,
      title: 'English Literature ',
      instructor: 'Mr. Robert Williams',
      department: 'English',
      students: 28,
      status: 'active'
    },
    {
      id: 3,
      title: 'Physics ',
      instructor: 'Dr. Michael Chen',
      department: 'Science',
      students: 24,
      status: 'active'
    },
    {
      id: 4,
      title: 'World History',
      instructor: 'Ms. Emily Rodriguez',
      department: 'Social Studies',
      students: 35,
      status: 'active'
    },
    {
      id: 5,
      title: 'Computer Science ',
      instructor: 'Mr. David Kumar',
      department: 'Technology',
      students: 22,
      status: 'inactive'
    }
  ]);

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1>Class Management</h1>
        <button className="btn btn-primary">
          <i className="bi bi-plus"></i> Add New Class
        </button>
      </div>
      
      <div className="courses-filters">
        <div className="row">
          <div className="col-md-3">
            <select className="form-select">
              <option value="">All Departments</option>
              <option value="Mathematics">Mathematics</option>
              <option value="English">English</option>
              <option value="Science">Science</option>
              <option value="Social Studies">Social Studies</option>
              <option value="Technology">Technology</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="col-md-6">
            <div className="input-group">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search classes..." 
              />
              <button className="btn btn-outline-secondary" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="courses-table-container">
        <table className="table courses-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Class Name</th>
              <th>Teacher</th>
              <th>Department</th>
              <th>Students</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.title}</td>
                <td>{course.instructor}</td>
                <td>{course.department}</td>
                <td>{course.students}</td>
                <td>
                  <span className={`status-badge ${course.status}`}>
                    {course.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="btn btn-sm btn-outline-primary me-1">
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="courses-pagination">
        <nav>
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">Previous</a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Courses;
