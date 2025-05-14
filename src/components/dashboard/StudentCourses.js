import React, { useState } from 'react';
import '../../styles/Courses.css';

const StudentCourses = () => {
  const [courses] = useState([
    {
      id: 1,
      title: 'Mathematics',
      instructor: 'Mrs. Sarah Johnson',
      grade: '8',
     
    },
    {
      id: 2,
      title: 'English',
      instructor: 'Mr. Robert Williams',
      grade: '9',
    },
    {
      id: 3,
      title: 'Science',
      instructor: 'Dr. Michael Chen',
      grade: '10',
      
    },
    {
      id: 4,
      title: 'Social Science',
      instructor: 'Ms. Emily Rodriguez',
      grade: '7.5',
    },
    {
      id: 5,
      title: 'Language',
      instructor: 'Mr. David Kumar',
      grade: '8.5',
    }
  ]);

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1>My Courses</h1>
      </div>
      
      <div className="courses-table-container">
        <table className="table courses-table">
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Instructor</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.title}</td>
                <td>{course.instructor}</td>
                <td>{course.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentCourses;