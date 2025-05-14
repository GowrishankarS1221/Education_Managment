import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import '../../styles/Assignment.css';

const TeacherAssignment = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    grade: '',
    section: '',
    file: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
    setFormData({
      title: '',
      description: '',
      deadline: '',
      grade: '',
      section: '',
      file: null
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  return (
    <div className="assignment-container">
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Assignment created successfully!
        </Alert>
      )}

      <div className="page-header">
        <h1>Create Assignment</h1>
        <p>Create new assignments for your students</p>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Create New Assignment</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Assignment Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="row mb-3">
                  <div className="col-md-4">
                    <label className="form-label">Grade/Class</label>
                    <select
                      className="form-select"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Grade</option>
                      <option value="8">Grade 8</option>
                      <option value="9">Grade 9</option>
                      <option value="10">Grade 10</option>
                      <option value="11">Grade 11</option>
                      <option value="12">Grade 12</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Section</label>
                    <select
                      className="form-select"
                      name="section"
                      value={formData.section}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Section</option>
                      <option value="A">Section A</option>
                      <option value="B">Section B</option>
                      <option value="C">Section C</option>
                      <option value="D">Section D</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Deadline</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Attachment</label>
                  <input
                    type="file"
                    className="form-control"
                    name="file"
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Create Assignment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherAssignment;