import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/LandingPage.css';
import heroImage from '../assets/school-hero.jpeg'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>Welcome to Sunshine Valley School</h1>
              <p className="lead">Nurturing Minds, Building Futures - Excellence in Education Since 1985</p>
              <p>We provide a comprehensive educational experience that focuses on academic excellence, character development, and preparing students for future success.</p>
              <div className="cta-buttons">
                <Link to="/signin" className="btn btn-primary me-3">Sign In</Link>
                <Link to="/signup" className="btn btn-outline-primary">Register</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-image-container">
                {heroImage ? (
                  <img src={heroImage} alt="Sunshine Valley School" className="img-fluid hero-image" />
                ) : (
                  <div className="placeholder-image" style={{ 
                    height: '600px', 
                    background: '#f0f0f0', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    borderRadius: '8px'
                  }}>
                    <div className="text-center">
                      <h3>Sunshine Valley School</h3>
                      <p>School Building Image</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="features-section py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2>Why Choose Sunshine Valley School?</h2>
              <p className="lead">Providing quality education and holistic development for your child</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <div className="feature-icon text-primary">
                  <i className="bi bi-book"></i>
                </div>
                <h3>Academic Excellence</h3>
                <p>Our curriculum is designed to challenge students and foster a love for learning. Our experienced teachers provide personalized attention to help each student reach their full potential.</p>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <div className="feature-icon text-primary">
                  <i className="bi bi-people"></i>
                </div>
                <h3>Supportive Community</h3>
                <p>We believe in creating a nurturing environment where students, parents, and teachers work together. Our strong community values collaboration and mutual respect.</p>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <div className="feature-icon text-primary">
                  <i className="bi bi-trophy"></i>
                </div>
                <h3>Extracurricular Activities</h3>
                <p>We offer a wide range of sports, arts, and clubs to help students discover their passions and develop important life skills outside the classroom.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonials-section py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2>What Our Community Says</h2>
              <p className="lead">Hear from our students, parents, and teachers</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">"My children have thrived at Sunshine Valley School. The teachers are dedicated and the curriculum is challenging yet engaging."</p>
                  <p className="card-text"><small className="text-muted">- Sarah Johnson, Parent</small></p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">"I've been teaching at Sunshine Valley for 10 years, and I'm continually impressed by our students' achievements and our supportive community."</p>
                  <p className="card-text"><small className="text-muted">- Robert Williams, Teacher</small></p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">"The opportunities I've had at Sunshine Valley have prepared me well for college. I've made lifelong friends and memories here."</p>
                  <p className="card-text"><small className="text-muted">- Emily Chen, Student</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section py-5 bg-primary text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h2>Ready to Join Our Community?</h2>
              <p className="lead">Take the first step towards providing your child with an exceptional education</p>
              <Link to="/signup" className="btn btn-light btn-lg mt-3">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="footer py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Sunshine Valley School</h5>
              <p>123 Education Lane<br />Sunshine City, SC 12345<br />Phone: (123) 456-7890</p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Academics</a></li>
                <li><a href="#">Admissions</a></li>
                <li><a href="#">Calendar</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Connect With Us</h5>
              <div className="social-icons">
                <a href="#" className="me-2"><i className="bi bi-facebook"></i></a>
                <a href="#" className="me-2"><i className="bi bi-twitter"></i></a>
                <a href="#" className="me-2"><i className="bi bi-instagram"></i></a>
                <a href="#" className="me-2"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 text-center">
              <p className="mb-0">&copy; 2023 Sunshine Valley School. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
