import React from 'react';
import Navbar from '../components/Navbar';
import { Carousel } from 'react-bootstrap';
import '../styles/Global.css';

const About = () => {
  // Array of image data for dynamic carousel with external images
  const carouselImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
      alt: "Modern School Building"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
      alt: "Library"
    },
    {
      id: 3,
      src: "https://c8.alamy.com/comp/P3P5N9/colorful-children-playground-park-in-udaipur-india-P3P5N9.jpg",
      alt: "Sports Complex"
    },
    {
      id: 4,
      src: "https://www.shutterstock.com/image-photo/nagpur-maharashtra-india-9-april-260nw-525364510.jpg",
      alt: "Science Lab"
    },
    {
      id: 5,
      src: "https://th.bing.com/th/id/OIP.DcgRjAecM-3-J8kMiadfNAHaEH?w=328&h=186&c=7&r=0&o=5&cb=iwc2&pid=1.7",
      alt: "Computer Lab"
    }
  ];

  return (
    <div className="about-page">
      <Navbar />
      <div className="container py-5">
        <section className="mb-5">
          <h1 className="text-center mb-4">About Sunshine Valley School</h1>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p className="lead text-center mb-5">
                Founded in 1985, Sunshine Valley School has been a beacon of educational excellence,
                nurturing young minds and shaping future leaders for over three decades.
              </p>
            </div>
          </div>
        </section>

        {/* Infrastructure Carousel */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Our Infrastructure</h2>
          <div className="col-lg-10 mx-auto"> {/* Added container for wider carousel */}
            <Carousel interval={5000} controls={true} indicators={true}>
              {carouselImages.map((image) => (
                <Carousel.Item key={image.id}>
                  <img
                    className="d-block mx-auto"
                    src={image.src}
                    alt={image.alt}
                    style={{
                      height: '400px', // Doubled from 200px to 400px
                      width: '100%', // Changed to full width
                      objectFit: 'cover',
                      borderRadius: '8px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Rest of the About page content */}
        <section className="mb-5">
          <h2 className="mb-4">Our History</h2>
          <div className="row">
            <div className="col-md-12">
              <p>
                Established with a vision to provide quality education, Sunshine Valley School
                has grown from a small institution to one of the region's most respected educational
                establishments. Our journey has been marked by continuous innovation in teaching
                methods and unwavering commitment to academic excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Keep the rest of your existing sections */}
        <section className="mb-5">
          <h2 className="mb-4">Our Mission</h2>
          <div className="row">
            <div className="col-md-12">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  To provide comprehensive, high-quality education that develops both academic
                  excellence and character strength
                </li>
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  To foster a love for learning and intellectual curiosity in our students
                </li>
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  To prepare students for future success in an ever-changing global environment
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="mb-4">Our Values</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h5">Excellence</h3>
                  <p className="card-text">Striving for the highest standards in everything we do</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h5">Integrity</h3>
                  <p className="card-text">Maintaining strong moral principles and honesty</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h5">Innovation</h3>
                  <p className="card-text">Embracing new ideas and methods in education</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="mb-4">Our Facilities</h2>
          <div className="row">
            <div className="col-md-12">
              <div className="row g-4">
                <div className="col-md-6">
                  <h3 className="h5">Academic Facilities</h3>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-building me-2"></i>Modern Classrooms</li>
                    <li><i className="bi bi-laptop me-2"></i>Computer Labs</li>
                    <li><i className="bi bi-book me-2"></i>Library</li>
                    <li><i className="bi bi-flask me-2"></i>Science Laboratories</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h3 className="h5">Sports Facilities</h3>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-trophy me-2"></i>Indoor Sports Complex</li>
                    <li><i className="bi bi-bicycle me-2"></i>Outdoor Sports Fields</li>
                    <li><i className="bi bi-water me-2"></i>Swimming Pool</li>
                    <li><i className="bi bi-heart me-2"></i>Fitness Center</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">School Leadership</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h5">Dr. Sarah Johnson</h3>
                  <p className="card-text text-muted">Principal</p>
                  <p className="card-text">Ph.D. in Education Leadership with 20 years of experience in education management</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h5">Mr. David Wilson</h3>
                  <p className="card-text text-muted">Vice Principal</p>
                  <p className="card-text">Masters in Education with expertise in curriculum development and student affairs</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h5">Ms. Emily Chen</h3>
                  <p className="card-text text-muted">Academic Coordinator</p>
                  <p className="card-text">Specialized in implementing innovative teaching methodologies and student assessment</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;