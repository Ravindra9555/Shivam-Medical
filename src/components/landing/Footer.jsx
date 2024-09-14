import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'; // Boxicons equivalents


const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#f8f9fa', padding: '40px 0' }}>
      <Container>
        <Row data-aos="fade-up">
          <Col md={4} className="mb-4">
            <h4>Shivam Medical</h4>
            <p>Your trusted partner in healthcare. Providing compassionate and high-quality medical services to meet your needs.</p>
          </Col>
          <Col md={4} className="mb-4">
            <h4>Quick Links</h4>
            <ListGroup className='bg-light'>
              <ListGroupItem action href="#home" className="border-0">Home</ListGroupItem>
              <ListGroupItem action href="#about" className="border-0">About Us</ListGroupItem>
              <ListGroupItem action href="#services" className="border-0">Services</ListGroupItem>
              <ListGroupItem action href="#appointment" className="border-0">Appointments</ListGroupItem>
              <ListGroupItem action href="#contact" className="border-0">Contact Us</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4} className="mb-4">
            <h4>Contact Information</h4>
            <p><strong>Address:</strong> Kakrahwa Bazar (Sabji Mandi ) , Uttar Pradesh  ( 272206)</p>
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
        <Row className="text-center">
          <Col>
            <p className="mb-0">© 2024 Shivam Medical. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
