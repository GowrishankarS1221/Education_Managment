import React from 'react';
import '../../styles/DashboardHome.css';

const DashboardHome = ({ user }) => {
  // Render different dashboard based on user role
  const renderRoleBasedDashboard = () => {
    switch(user?.role) {
      case 'student':
        return renderStudentDashboard();
      case 'teacher':
        return renderTeacherDashboard();
      default:
        return renderStudentDashboard();
    }
  };

  const renderStudentDashboard = () => {
    return (
      <>
        <div className="dashboard-header">
          <h1>Welcome, {user.name}!</h1>
          <p>Here's your student dashboard at Sunshine Valley School.</p>
        </div>
        
        <div className="stats-cards">
          <div className="row">
            <div className="col-md-3">
              <div className="stat-card">
                <div className="stat-card-body">
                  <h5>Attendance</h5>
                  <h2>92%</h2>
                  <p className="text-success">Good standing</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="stat-card">
                <div className="stat-card-body">
                  <h5>Current GPA</h5>
                  <h2>3.7</h2>
                  <p className="text-success">A-</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="stat-card">
                <div className="stat-card-body">
                  <h5>Assignments</h5>
                  <h2>5</h2>
                  <p className="text-warning">2 due this week</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="stat-card">
                <div className="stat-card-body">
                  <h5>Upcoming Tests</h5>
                  <h2>2</h2>
                  <p className="text-warning">Math & Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Today's Schedule</h5>
                <button className="btn btn-sm btn-outline-primary">View Full Timetable</button>
              </div>
              <div className="card-body">
                <ul className="schedule-list">
                  <li className="schedule-item">
                    <div className="schedule-time">8:00 AM - 9:30 AM</div>
                    <div className="schedule-content">
                      <h6>Mathematics</h6>
                      <p>Room 203 • Mrs. Sarah Johnson</p>
                    </div>
                  </li>
                  <li className="schedule-item">
                    <div className="schedule-time">9:45 AM - 11:15 AM</div>
                    <div className="schedule-content">
                      <h6>English Literature</h6>
                      <p>Room 105 • Mr. Robert Williams</p>
                    </div>
                  </li>
                  <li className="schedule-item">
                    <div className="schedule-time">11:30 AM - 12:30 PM</div>
                    <div className="schedule-content">
                      <h6>Lunch Break</h6>
                      <p>Cafeteria</p>
                    </div>
                  </li>
                  <li className="schedule-item">
                    <div className="schedule-time">12:45 PM - 2:15 PM</div>
                    <div className="schedule-content">
                      <h6>Physics</h6>
                      <p>Room 301 • Dr. Michael Chen</p>
                    </div>
                  </li>
                  <li className="schedule-item">
                    <div className="schedule-time">2:30 PM - 4:00 PM</div>
                    <div className="schedule-content">
                      <h6>Physical Education</h6>
                      <p>Gymnasium • Coach Thompson</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Upcoming Events</h5>
              </div>
              <div className="card-body">
                <ul className="event-list">
                  <li className="event-item">
                    <div className="event-date">
                      <span className="day">15</span>
                      <span className="month">Jun</span>
                    </div>
                    <div className="event-content">
                      <h6>Math Quiz</h6>
                      <p>Chapters 5-7</p>
                    </div>
                  </li>
                  <li className="event-item">
                    <div className="event-date">
                      <span className="day">18</span>
                      <span className="month">Jun</span>
                    </div>
                    <div className="event-content">
                      <h6>Science Fair</h6>
                      <p>Main Hall</p>
                    </div>
                  </li>
                  <li className="event-item">
                    <div className="event-date">
                      <span className="day">22</span>
                      <span className="month">Jun</span>
                    </div>
                    <div className="event-content">
                      <h6>Sports Day</h6>
                      <p>School Grounds</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  
  const renderTeacherDashboard = () => {
    return (
      <>
        <div className="dashboard-header">
          <h1>Welcome, {user?.name || 'Teacher'}!</h1>
          <p>Here's your teacher dashboard at Sunshine Valley School.</p>
        </div>
        
        <div className="stats-cards">
          <div className="row">
            <div className="col-md-3">
              <div className="stat-card">
                <div className="stat-card-body">
                  <h5>Total Students</h5>
                  <h2>142</h2>
                  <p className="text-success">Across 5 classes</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="stat-card">
                <div className="stat-card-body">
                  <h5>Assignments</h5>
                  <h2>8</h2>
                  <p className="text-warning">3 need grading</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="stat-card">
                <div className="stat-card-body">
                  <h5>Class Average</h5>
                  <h2>B+</h2>
                  <p className="text-success">Up from B last term</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="stat-card">
                <div className="stat-card-body">
                  <h5>Pending Forms</h5>
                  <h2>5</h2>
                  <p className="text-warning">Need review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Today's Classes</h5>
                <button className="btn btn-sm btn-outline-primary">View Full Schedule</button>
              </div>
              <div className="card-body">
                <ul className="schedule-list">
                  <li className="schedule-item">
                    <div className="schedule-time">8:00 AM - 9:30 AM</div>
                    <div className="schedule-content">
                      <h6>Mathematics - Grade 10A</h6>
                      <p>Room 203 • 32 students</p>
                    </div>
                    <div className="schedule-action">
                      <button className="btn btn-sm btn-outline-primary">Take Attendance</button>
                    </div>
                  </li>
                  <li className="schedule-item">
                    <div className="schedule-time">9:45 AM - 11:15 AM</div>
                    <div className="schedule-content">
                      <h6>Mathematics - Grade 11B</h6>
                      <p>Room 105 • 28 students</p>
                    </div>
                    <div className="schedule-action">
                      <button className="btn btn-sm btn-outline-primary">Take Attendance</button>
                    </div>
                  </li>
                  <li className="schedule-item">
                    <div className="schedule-time">11:30 AM - 12:30 PM</div>
                    <div className="schedule-content">
                      <h6>Lunch Break</h6>
                      <p>Staff Room</p>
                    </div>
                  </li>
                  <li className="schedule-item">
                    <div className="schedule-time">12:45 PM - 2:15 PM</div>
                    <div className="schedule-content">
                      <h6>Mathematics - Grade 9C</h6>
                      <p>Room 201 • 35 students</p>
                    </div>
                    <div className="schedule-action">
                      <button className="btn btn-sm btn-outline-primary">Take Attendance</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Academic Progress</h5>
              </div>
              <div className="card-body">
                <div className="progress-summary">
                  <p><strong>Current GPA:</strong> 3.7/4.0</p>
                  <p><strong>Completed Credits:</strong> 42/120</p>
                  <p><strong>Standing:</strong> Good</p>
                </div>
                <button className="btn btn-outline-primary btn-sm w-100 mt-3">View Full Report</button>
              </div>
            </div>
          </div>
          
     
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Student Performance</h5>
              </div>
              <div className="card-body">
                <div className="performance-summary">
                  <p><strong>Class Average:</strong> B+ (85%)</p>
                  <p><strong>Top Performer:</strong> Alex Johnson (Grade 10A)</p>
                  <p><strong>Needs Attention:</strong> 5 students below 70%</p>
                </div>
                <button className="btn btn-outline-primary btn-sm w-100 mt-3">View Detailed Analytics</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                
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
                        <th>Progress</th>
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
                          
                        </td>
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
                          
                        </td>
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
                         
                        </td>
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
                         
                        </td>
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
      </>
    );
  };

  // Return the dashboard based on user role
  return (
    <div className="dashboard-home">
      {renderRoleBasedDashboard()}
    </div>
  );
};

export default DashboardHome;
