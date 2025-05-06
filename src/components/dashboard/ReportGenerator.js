import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ReportGenerator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [student, setStudent] = useState(null);
  const [reportData, setReportData] = useState({
    term: 'Term 1',
    academicYear: '2022-2023',
    comments: '',
    subjects: [
      { name: 'Mathematics', marks: '', grade: '', comments: '' },
      { name: 'English', marks: '', grade: '', comments: '' },
      { name: 'Science', marks: '', grade: '', comments: '' },
      { name: 'Social Studies', marks: '', grade: '', comments: '' },
      { name: 'Computer Science', marks: '', grade: '', comments: '' }
    ]
  });
  
  const [success, setSuccess] = useState('');
  
  // Fetch student data
  useEffect(() => {
    // In a real app, fetch student data from API
    // For now, we'll use mock data
    if (id === '1') {
      setStudent({
        id: 1,
        name: 'Alex Johnson',
        grade: '10',
        section: 'A',
        studentId: 'S10001',
        email: 'alex.j@example.com',
        attendance: '95%',
        gpa: '3.8'
      });
    } else if (id) {
      // Fetch other student data based on ID
      // ...
    }
  }, [id]);
  
  const handleChange = (e) => {
    setReportData({
      ...reportData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubjectChange = (index, field, value) => {
    const updatedSubjects = [...reportData.subjects];
    updatedSubjects[index] = {
      ...updatedSubjects[index],
      [field]: value
    };
    
    setReportData({
      ...reportData,
      subjects: updatedSubjects
    });
  };
  
  const calculateGrade = (marks) => {
    const numMarks = parseFloat(marks);
    if (isNaN(numMarks)) return '';
    
    if (numMarks >= 90) return 'A+';
    if (numMarks >= 80) return 'A';
    if (numMarks >= 70) return 'B';
    if (numMarks >= 60) return 'C';
    if (numMarks >= 50) return 'D';
    return 'F';
  };
  
  const handleMarksChange = (index, value) => {
    const grade = calculateGrade(value);
    handleSubjectChange(index, 'marks', value);
    handleSubjectChange(index, 'grade', grade);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, send report data to API
    // For now, just show success message
    setSuccess('Report generated successfully!');
    
    // Redirect after a delay
    setTimeout(() => {
      navigate('/dashboard/students');
    }, 2000);
  };
  
  if (!student && id) {
    return <div className="text-center p-5">Loading student data...</div>;
  }
  
  return (
    <div className="report-generator-container">
      <div className="page-header">
        <h1>{student ? `Generate Report for ${student.name}` : 'Generate Student Report'}</h1>
        <p>Create academic performance reports for students</p>
      </div>
      
      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Student Information</h5>
        </div>
        <div className="card-body">
          {student ? (
            <div className="row">
              <div className="col-md-3">
                <p><strong>Name:</strong> {student.name}</p>
              </div>
              <div className="col-md-3">
                <p><strong>ID:</strong> {student.studentId}</p>
              </div>
              <div className="col-md-3">
                <p><strong>Grade:</strong> {student.grade}</p>
              </div>
              <div className="col-md-3">
                <p><strong>Section:</strong> {student.section}</p>
              </div>
            </div>
          ) : (
            <div className="alert alert-info">
              Please select a student to generate a report.
            </div>
          )}
        </div>
      </div>
      
      {student && (
        <form onSubmit={handleSubmit}>
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Report Details</h5>
            </div>
            <div className="card-body">
              {success && <div className="alert alert-success">{success}</div>}
              
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="term" className="form-label">Term</label>
                  <select
                    className="form-select"
                    id="term"
                    name="term"
                    value={reportData.term}
                    onChange={handleChange}
                    required
                  >
                    <option value="Term 1">Term 1</option>
                    <option value="Term 2">Term 2</option>
                    <option value="Final">Final</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="academicYear" className="form-label">Academic Year</label>
                  <select
                    className="form-select"
                    id="academicYear"
                    name="academicYear"
                    value={reportData.academicYear}
                    onChange={handleChange}
                    required
                  >
                    <option value="2022-2023">2022-2023</option>
                    <option value="2023-2024">2023-2024</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Subject Grades</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Marks (out of 100)</th>
                      <th>Grade</th>
                      <th>Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.subjects.map((subject, index) => (
                      <tr key={index}>
                        <td>{subject.name}</td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            min="0"
                            max="100"
                            value={subject.marks}
                            onChange={(e) => handleMarksChange(index, e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={subject.grade}
                            readOnly
                          />
                        </td>
                        <td>
                          <textarea
                            className="form-control"
                            rows="2"
                            value={subject.comments}
                            onChange={(e) => handleSubjectChange(index, 'comments', e.target.value)}
                          ></textarea>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Overall Assessment</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="comments" className="form-label">Teacher's Comments</label>
                <textarea
                  className="form-control"
                  id="comments"
                  name="comments"
                  rows="4"
                  value={reportData.comments}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
          
          <div className="d-flex justify-content-between">
            <button 
              type="button" 
              className="btn btn-outline-secondary"
              onClick={() => navigate('/dashboard/students')}
            >
              Cancel
            </button>
            <div>
              <button 
                type="button" 
                className="btn btn-outline-primary me-2"
                onClick={() => window.print()}
              >
                <i className="bi bi-printer"></i> Print Report
              </button>
              <button type="submit" className="btn btn-primary">
                Generate Report
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReportGenerator;