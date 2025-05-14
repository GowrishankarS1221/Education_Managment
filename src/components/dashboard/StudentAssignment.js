import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import '../../styles/Assignment.css';

const StudentAssignment = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [assignments] = useState([
    {
      id: 1,
      title: 'Mathematics Assignment 1',
      description: 'Complete exercises from Chapter 3',
      deadline: '2024-02-20T23:59',
      grade: '10',
      section: 'A',
      status: 'pending'
    },
    {
      id: 2,
      title: 'English Essay',
      description: 'Write an essay on Shakespeare',
      deadline: '2024-02-25T23:59',
      grade: '10',
      section: 'A',
      status: 'completed'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="assignment-container">
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Assignment submitted successfully!
        </Alert>
      )}

      <div className="page-header">
        <h1>My Assignments</h1>
        <p>View and submit your assignments</p>
      </div>

      <div className="row">
        {assignments.map(assignment => (
          <div key={assignment.id} className="col-md-12 mb-4">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h3>{assignment.title}</h3>
                <span className={`badge ${assignment.status === 'completed' ? 'bg-success' : 'bg-warning'}`}>
                  {assignment.status === 'completed' ? 'Completed' : 'Pending'}
                </span>
              </div>
              <div className="card-body">
                <p>{assignment.description}</p>
                <p><strong>Deadline:</strong> {new Date(assignment.deadline).toLocaleString()}</p>
                <p><strong>Class:</strong> Grade {assignment.grade} Section {assignment.section}</p>
                
                {assignment.status === 'pending' && (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Upload Your Work</label>
                      <input
                        type="file"
                        className="form-control"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit Assignment
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentAssignment;