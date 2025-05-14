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
              {/* Empty stat card slot */}
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
