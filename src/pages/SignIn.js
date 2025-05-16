import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Simple validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Dummy users
    const dummyUsers = [
      {
        email: 'student1@gmail.com',
        password: 'student1',
        name: 'Student One',
        role: 'student'
      },
      {
        email: 'teacher1@gmail.com',
        password: 'teacher1',
        name: 'Teacher One',
        role: 'teacher'
      }
    ];

    const user = dummyUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Simulate authentication
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-container">
          <h2 className="text-center mb-4">Sign In</h2>
          <h4 className="text-center mb-3">Sunshine Valley School</h4>
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

           <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            

            <button type="submit" className="btn btn-primary w-100">Sign In</button>
          </form>

          <div className="mt-3 text-center">
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            <p><Link to="/">Back to Home</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
