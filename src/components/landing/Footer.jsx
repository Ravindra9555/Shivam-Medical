import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'; // Boxicons equivalents

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#f8f9fa', padding: '40px 0' }}>
      <Container>
        <Row data-aos="fade-up">
          <Col md={4} className="mb-4">

            <h5>Developer</h5>
            <div className="developer-info d-flex align-items-center justify-content-start mt-2">
              <img
                src="https://avatars.githubusercontent.com/u/69795113?v=4"  // Replace with actual image URL
                alt="Developer"
                className="rounded-circle me-3"
                style={{ width: '100px', height: '100px' }}
              />
              <div>
                <p className="mb-0"><strong>Ravindra Kumar</strong></p>  {/* Developer Name */}
                <p className="mb-0">Full Stack Developer ( MERN )</p>  {/* Developer Designation */}
               
              </div>
            </div>
            <div className="social-icons">
              <a href="https://www.github.com/ravindra9555" target="_blank" rel="noopener noreferrer">
                <BsGithub className="icon" />
              </a>
              <a href="https://linkedin.com/in/ravindra-kumar-99a1301b2/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin className="icon" />
              </a>
              <a href="https://www.facebook.com/RavindraPrajapati9648/" target="_blank" rel="noopener noreferrer">
                <BsFacebook className="icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <BsTwitter className="icon" />
              </a>
            </div>
        
          </Col>
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <ListGroup className='bg-light'>
              <ListGroupItem action href="#home" className="border-0 bg-light m-0 p-1">Home</ListGroupItem>
              <ListGroupItem action href="#about" className="border-0 bg-light m-0 p-1">About Us</ListGroupItem>
              <ListGroupItem action href="#services" className="border-0 bg-light m-0 p-1">Services</ListGroupItem>
              <ListGroupItem action href="#appointment" className="border-0 bg-light m-0 p-1">Appointments</ListGroupItem>
              <ListGroupItem action href="#contact" className="border-0 bg-light m-0 p-1">Contact Us</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Contact Information</h5>
            <p><strong>Address:</strong> Kakrahwa Bazar (Sabji Mandi ), Uttar Pradesh  ( 272206)</p>
            <p><strong>Phone:</strong> +91 7379429626</p>
            <p><strong>Email:</strong> contact@shivammedical.com</p>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <BsFacebook className="icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <BsTwitter className="icon" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <BsInstagram className="icon" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <BsLinkedin className="icon" />
              </a>
            </div>
          </Col>
        </Row>

        

        <Row className="text-center mt-3">
          <Col>
            <p className="mb-0">© 2024 Shivam Medical. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
