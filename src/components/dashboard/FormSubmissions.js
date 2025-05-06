import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FormSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  
  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const mockSubmissions = [
      { id: 1, title: 'Feedback Form', student: 'Alex Johnson', type: 'Feedback', date: '2023-06-10', status: 'Pending' },
      { id: 2, title: 'Leave Application', student: 'Emma Davis', type: 'Leave', date: '2023-06-08', status: 'Pending' },
      { id: 3, title: 'Project Extension Request', student: 'Michael Smith', type: 'Extension', date: '2023-06-05', status: 'Pending' },
      { id: 4, title: 'Complaint Form', student: 'Sophia Chen', type: 'Complaint', date: '2023-06-03', status: 'Approved' },
      { id: 5, title: 'Feedback Form', student: 'William Brown', type: 'Feedback', date: '2023-06-01', status: 'Rejected' },
    ];
    
    setSubmissions(mockSubmissions);
  }, []);
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleTypeFilter = (e) => {
    setSelectedType(e.target.value);
  };
  
  const handleStatusFilter = (e) => {
    setSelectedStatus(e.target.value);
  };
  
  const handleUpdateStatus = (id, newStatus) => {
    setSubmissions(submissions.map(submission => 
      submission.id === id ? { ...submission, status: newStatus } : submission
    ));
  };
  
  // Filter submissions based on search and filters
  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = submission.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          submission.student.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === '' || submission.type === selectedType;
    const matchesStatus = selectedStatus === '' || submission.status === selectedStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });
  
  return (
    <div className="form-submissions-container">
      <div className="page-header">
        <h1>Form Submissions</h1>
        <p>View and respond to student form submissions</p>
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
                  placeholder="Search submissions..." 
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <select 
                className="form-select" 
                value={selectedType}
                onChange={handleTypeFilter}
              >
                <option value="">All Types</option>
                <option value="Feedback">Feedback</option>
                <option value="Leave">Leave</option>
                <option value="Extension">Extension</option>
                <option value="Complaint">Complaint</option>
              </select>
            </div>
            <div className="col-md-3">
              <select 
                className="form-select"
                value={selectedStatus}
                onChange={handleStatusFilter}
              >
                <option value="">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
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
                  <th>Student</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubmissions.length > 0 ? (
                  filteredSubmissions.map(submission => (
                    <tr key={submission.id}>
                      <td>{submission.title}</td>
                      <td>{submission.student}</td>
                      <td>{submission.type}</td>
                      <td>{new Date(submission.date).toLocaleDateString()}</td>
                      <td>
                        <span className={`badge ${
                          submission.status === 'Approved' ? 'bg-success' : 
                          submission.status === 'Rejected' ? 'bg-danger' : 
                          'bg-warning'
                        }`}>
                          {submission.status}
                        </span>
                      </td>
                      <td>
                        <div className="btn-group">
                          <Link to={`/dashboard/forms/${submission.id}`} className="btn btn-sm btn-outline-primary">
                            <i className="bi bi-eye"></i>
                          </Link>
                          {submission.status === 'Pending' && (
                            <>
                              <button 
                                className="btn btn-sm btn-outline-success"
                                onClick={() => handleUpdateStatus(submission.id, 'Approved')}
                              >
                                <i className="bi bi-check"></i>
                              </button>
                              <button 
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => handleUpdateStatus(submission.id, 'Rejected')}
                              >
                                <i className="bi bi-x"></i>
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">No submissions found</td>
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

export default FormSubmissions;