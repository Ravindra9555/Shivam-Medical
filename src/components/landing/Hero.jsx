import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
function Hero() {
  return (
    <Container
      
      className="hero-section mt-2 container"
      id="home"
    
    >
      <Row className="align-items-center">
        <Col md={6} data-aos="fade-right">
          <h1>Welcome to Shivam Medical</h1>
          <p>
            At Shivam Medical, we are dedicated to providing compassionate,
            high-quality healthcare services. Our state-of-the-art facilities
            and expert medical staff are here to support your health and
            well-being.
          </p>
          <Button variant="primary" href="#appointment" className="me-3">
            Book an Appointment
          </Button>
          <Button variant="outline-primary" href="#contact">
            Contact Us
          </Button>
        </Col>
        <Col md={6} data-aos="fade-left">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Shivam Medical Facility"
            className="img-fluid rounded"
          />
        </Col>
      </Row>

      <Row className="mt-5" data-aos="fade-up">
        <Col md={4}>
          <h3>Comprehensive Services</h3>
          <p>
            From emergency care to specialized treatments, we offer a full range
            of medical services to meet your needs.
          </p>
        </Col>
        <Col md={4}>
          <h3>Expert Team</h3>
          <p>
            Our team of experienced doctors and healthcare professionals are
            committed to your care.
          </p>
        </Col>
        <Col md={4}>
          <h3>Patient-Centered Care</h3>
          <p>
            We focus on personalized care to ensure the best outcomes for our
            patients.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
