import React from 'react';

const StudentReport = () => {
  return (
    <div className="student-report">
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Student Performance Report</h5>
              <button className="btn btn-sm btn-outline-primary">Export Data</button>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Grade</th>
                      <th>Section</th>
                      <th>Attendance</th>
                      <th>Current Grade</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alex Johnson</td>
                      <td>10</td>
                      <td>A</td>
                      <td>98%</td>
                      <td>A</td>
                      
                      <td>
                        <button className="btn btn-sm btn-outline-primary me-1">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Notes</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Emma Davis</td>
                      <td>10</td>
                      <td>A</td>
                      <td>95%</td>
                      <td>A-</td>
                      
                      <td>
                        <button className="btn btn-sm btn-outline-primary me-1">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Notes</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Michael Smith</td>
                      <td>10</td>
                      <td>A</td>
                      <td>85%</td>
                      <td>B</td>
                      
                      <td>
                        <button className="btn btn-sm btn-outline-primary me-1">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Notes</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Sophia Chen</td>
                      <td>10</td>
                      <td>A</td>
                      <td>80%</td>
                      <td>C+</td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary me-1">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Notes</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentReport;