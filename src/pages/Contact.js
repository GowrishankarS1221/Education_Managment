import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Global.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="container py-5">
        <h1 className="text-center mb-5">Contact Us</h1>
        
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="h3 mb-4">Send us a Message</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject" required />
              </div>
              
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          
          <div className="col-md-6">
            <h2 className="h3 mb-4">Contact Information</h2>
            
            <div className="mb-4">
              <h3 className="h5">Address</h3>
              <p>
                Sunshine Valley School<br />
                123 Education Lane<br />
                Sunshine City, SC 12345
              </p>
            </div>
            
            <div className="mb-4">
              <h3 className="h5">Phone</h3>
              <p>
                Main Office: (91) 944-656-7890<br />
                Admissions: (91) 944-656-7891
              </p>
            </div>
            
            <div className="mb-4">
              <h3 className="h5">Email</h3>
              <p>
                General Inquiries: info@sunshinevalley.edu<br />
                Admissions: admissions@sunshinevalley.edu
              </p>
            </div>
            
            <div className="mb-4">
              <h3 className="h5">Office Hours</h3>
              <p>
                Monday - Friday: 8:00 AM - 4:00 PM<br />
                Saturday: 9:00 AM - 12:00 PM<br />
                Sunday: Closed
              </p>
            </div>
            
            <div className="social-links">
              <h3 className="h5 mb-3">Connect With Us</h3>
              <a href="#" className="btn btn-outline-primary me-2"><i className="bi bi-facebook"></i></a>
              <a href="#" className="btn btn-outline-primary me-2"><i className="bi bi-twitter"></i></a>
              <a href="#" className="btn btn-outline-primary me-2"><i className="bi bi-instagram"></i></a>
              <a href="#" className="btn btn-outline-primary"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;