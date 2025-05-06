import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const FormSubmissionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [submission, setSubmission] = useState(null);
  const [response, setResponse] = useState('');
  const [status, setStatus] = useState('');
  const [success, setSuccess] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  
  // Check if user is logged in and get user data - add event listener for user updates
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/signin', { replace: true });
      return;
    }
    
    // Get logged in user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    setLoggedInUser(userData);
    
    // Add event listener to update user data when it changes
    const handleUserUpdate = () => {
      const updatedUserData = JSON.parse(localStorage.getItem('user') || '{}');
      setLoggedInUser(updatedUserData);
    };
    
    window.addEventListener('userDataUpdated', handleUserUpdate);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('userDataUpdated', handleUserUpdate);
    };
  }, [navigate]);
  
  // Fetch submission data
  useEffect(() => {
    // Get registered students from localStorage or another source
    const registeredStudents = JSON.parse(localStorage.getItem('students') || '[]');
    
    // In a real app, fetch submission data from API
    // For now, we'll use mock data
    let submissionData = null;
    
    if (id === '1') {
      submissionData = {
        id: 1,
        title: 'Feedback Form',
        studentId: 'S10001',
        type: 'Feedback',
        date: '2023-06-10',
        status: 'Pending',
        content: {
          subject: 'Mathematics Class Feedback',
          rating: 4,
          strengths: 'Clear explanations of complex topics. Interactive teaching methods.',
          improvements: 'More practice problems would be helpful. Sometimes the pace is too fast.',
          additionalComments: 'Overall, I enjoy the class and find it very educational.'
        }
      };
    } else if (id === '2') {
      submissionData = {
        id: 2,
        title: 'Leave Application',
        studentId: 'S10002',
        type: 'Leave',
        date: '2023-06-08',
        status: 'Pending',
        content: {
          fromDate: '2023-06-20',
          toDate: '2023-06-22',
          reason: 'Family wedding',
          details: 'I need to attend my cousin\'s wedding in another city. I will complete all assignments before leaving.'
        }
      };
    } else if (id === '3') {
      submissionData = {
        id: 3,
        title: 'Project Extension Request',
        studentId: 'S10003',
        type: 'Extension',
        date: '2023-06-05',
        status: 'Pending',
        content: {
          assignment: 'Geometry Project - 3D Models',
          currentDeadline: '2023-06-25',
          requestedDeadline: '2023-06-30',
          reason: 'I am having difficulty finding the required materials for the 3D model.',
          additionalDetails: 'I have completed the design portion but need more time for the construction.'
        }
      };
    }
    
    if (submissionData) {
      // Find student in registered students or use default values
      const student = registeredStudents.find(s => s.id === submissionData.studentId) || {
        name: submissionData.studentId === 'S10001' ? 'Alex Johnson' : 
              submissionData.studentId === 'S10002' ? 'Emma Davis' : 
              submissionData.studentId === 'S10003' ? 'Michael Smith' : 'Unknown Student'
      };
      
      setSubmission({
        ...submissionData,
        student: student.name || 'Unknown Student'
      });
      setStatus(submissionData.status);
    }
  }, [id]);
  
  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };
  
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, send response data to API
    // For now, just show success message
    setSuccess('Response submitted successfully!');
    
    // Redirect after a delay
    setTimeout(() => {
      navigate('/dashboard/forms');
    }, 2000);
  };
  
  if (!submission) {
    return <div className="text-center p-5">Loading submission data...</div>;
  }
  
  return (
    <div className="form-submission-detail-container">
      <div className="page-header d-flex justify-content-between align-items-center">
        <div>
          <h1>{submission.title}</h1>
          <p>Submitted by {submission.student} on {new Date(submission.date).toLocaleDateString()}</p>
        </div>
        <span className={`badge ${
          submission.status === 'Approved' ? 'bg-success' : 
          submission.status === 'Rejected' ? 'bg-danger' : 
          'bg-warning'
        } fs-6`}>
          {submission.status}
        </span>
      </div>
      
      {loggedInUser && (
        <div className="alert alert-info mb-4">
          <p className="mb-0">
            <strong>Logged in as:</strong> {loggedInUser.name || 'Teacher'} 
            {loggedInUser.role && ` (${loggedInUser.role})`}
            {loggedInUser.subject && ` - ${loggedInUser.subject}`}
          </p>
        </div>
      )}
      
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Submission Details</h5>
            </div>
            <div className="card-body">
              {submission.type === 'Feedback' && (
                <div>
                  <div className="mb-3">
                    <strong>Subject:</strong> {submission.content.subject}
                  </div>
                  <div className="mb-3">
                    <strong>Rating:</strong> {submission.content.rating}/5
                  </div>
                  <div className="mb-3">
                    <strong>Strengths:</strong>
                    <p>{submission.content.strengths}</p>
                  </div>
                  <div className="mb-3">
                    <strong>Areas for Improvement:</strong>
                    <p>{submission.content.improvements}</p>
                  </div>
                  <div className="mb-3">
                    <strong>Additional Comments:</strong>
                    <p>{submission.content.additionalComments}</p>
                  </div>
                </div>
              )}
              
              {/* Rest of the submission type displays remain the same */}
              {submission.type === 'Leave' && (
                <div>
                  <div className="mb-3">
                    <strong>From Date:</strong> {new Date(submission.content.fromDate).toLocaleDateString()}
                  </div>
                  <div className="mb-3">
                    <strong>To Date:</strong> {new Date(submission.content.toDate).toLocaleDateString()}
                  </div>
                  <div className="mb-3">
                    <strong>Reason:</strong> {submission.content.reason}
                  </div>
                  <div className="mb-3">
                    <strong>Details:</strong>
                    <p>{submission.content.details}</p>
                  </div>
                </div>
              )}
              
              {submission.type === 'Extension' && (
                <div>
                  <div className="mb-3">
                    <strong>Assignment:</strong> {submission.content.assignment}
                  </div>
                  <div className="mb-3">
                    <strong>Current Deadline:</strong> {new Date(submission.content.currentDeadline).toLocaleDateString()}
                  </div>
                  <div className="mb-3">
                    <strong>Requested Deadline:</strong> {new Date(submission.content.requestedDeadline).toLocaleDateString()}
                  </div>
                  <div className="mb-3">
                    <strong>Reason:</strong> {submission.content.reason}
                  </div>
                  <div className="mb-3">
                    <strong>Additional Details:</strong>
                    <p>{submission.content.additionalDetails}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Student Information</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <strong>Name:</strong> {submission.student}
              </div>
              <div className="mb-3">
                <strong>ID:</strong> {submission.studentId}
              </div>
              <div className="mb-3">
                <Link to={`/dashboard/students/${submission.studentId}`} className="btn btn-outline-primary btn-sm">
                  View Student Profile
                </Link>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Teacher Response</h5>
            </div>
            <div className="card-body">
              {success && <div className="alert alert-success">{success}</div>}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="status" className="form-label">Status</label>
                  <select
                    className="form-select"
                    id="status"
                    value={status}
                    onChange={handleStatusChange}
                    required
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="response" className="form-label">Response</label>
                  <textarea
                    className="form-control"
                    id="response"
                    rows="5"
                    value={response}
                    onChange={handleResponseChange}
                    required
                  ></textarea>
                </div>
                
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Submit Response
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSubmissionDetail;