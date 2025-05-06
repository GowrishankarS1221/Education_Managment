import React from 'react';

const Reports = () => {
  return (
    <div className="reports-container">
      <div className="page-header">
        <h1>Reports</h1>
        <p>View and analyze academic performance data</p>
      </div>
      
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Performance Summary</h5>
              <div>
                <button className="btn btn-sm btn-outline-primary me-2">Export</button>
                <button className="btn btn-sm btn-outline-secondary">Print</button>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Current Grade</th>
                      <th>Class Average</th>
                      <th>Assignments Completed</th>
                      <th>Attendance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mathematics</td>
                      <td>A (92%)</td>
                      <td>B (85%)</td>
                      <td>18/20</td>
                      <td>95%</td>
                    </tr>
                    <tr>
                      <td>English</td>
                      <td>B+ (88%)</td>
                      <td>B (83%)</td>
                      <td>15/15</td>
                      <td>98%</td>
                    </tr>
                    <tr>
                      <td>Science</td>
                      <td>A- (90%)</td>
                      <td>B- (80%)</td>
                      <td>12/15</td>
                      <td>92%</td>
                    </tr>
                    <tr>
                      <td>History</td>
                      <td>B (85%)</td>
                      <td>C+ (78%)</td>
                      <td>10/12</td>
                      <td>90%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Attendance Summary</h5>
            </div>
            <div className="card-body">
              <div className="attendance-summary">
                <div className="attendance-stat">
                  <h3>95%</h3>
                  <p>Overall Attendance</p>
                </div>
                <div className="attendance-details">
                  <p><strong>Present:</strong> 85 days</p>
                  <p><strong>Absent:</strong> 4 days</p>
                  <p><strong>Late:</strong> 2 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Grade Distribution</h5>
            </div>
            <div className="card-body">
              <div className="grade-distribution">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Grade</th>
                      <th>Count</th>
                      <th>Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A (90-100%)</td>
                      <td>2</td>
                      <td>25%</td>
                    </tr>
                    <tr>
                      <td>B (80-89%)</td>
                      <td>4</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>C (70-79%)</td>
                      <td>1</td>
                      <td>12.5%</td>
                    </tr>
                    <tr>
                      <td>D (60-69%)</td>
                      <td>1</td>
                      <td>12.5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Academic Progress Notes</h5>
            </div>
            <div className="card-body">
              <div className="progress-notes">
                <div className="note-item">
                  <div className="note-date">May 15, 2023</div>
                  <div className="note-content">
                    <h6>Mathematics - Mr. Johnson</h6>
                    <p>Excellent progress in calculus. Consider joining the math competition team.</p>
                  </div>
                </div>
                <div className="note-item">
                  <div className="note-date">May 10, 2023</div>
                  <div className="note-content">
                    <h6>English - Ms. Davis</h6>
                    <p>Essay writing has improved significantly. Focus on citation formats.</p>
                  </div>
                </div>
                <div className="note-item">
                  <div className="note-date">May 5, 2023</div>
                  <div className="note-content">
                    <h6>Science - Dr. Smith</h6>
                    <p>Lab work is excellent. Needs to improve on theoretical concepts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;