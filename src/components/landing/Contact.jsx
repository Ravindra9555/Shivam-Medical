import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { BsFillTelephoneFill, BsFillGeoAltFill, BsFillEnvelopeFill } from 'react-icons/bs'; // Boxicons equivalents

const Contact = () => {
  return (
    <Container className="contact-us-section " id="contact" >
      
      {/* Contact Form Section */}
      <Row className=" align-items-center" data-aos="fade-up">
        <Col md={6}>
          <h2>Get in Touch</h2>
          <p>Have questions or need more information? Fill out the form below, and we will get back to you as soon as possible.</p>
          <Form className='border rounded p-2'> 
            <Row  >
              <Col md={6} className="mb-3">
                <Form.Group controlId="formName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formEmail">
                  <Form.Label>  Last Name</Form.Label>
                  <Form.Control  placeholder='last name'/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="tel" placeholder="Your Phone Number" />
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Your Message" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                <BsFillGeoAltFill className="icon" />
                 Address
              </Card.Title>
              <Card.Text>
                123 Health Avenue, City, State, ZIP
              </Card.Text>
              
              <div className="map-iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.155675867297!2d-122.4194183846814!3d37.77492927975956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e5c9e39d5%3A0x4857f5a60e0d1f0b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1630616431177!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Hospital Location"
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      {/* Contact Information Section */}
      <Row className="mt-5" data-aos="fade-up">
        <Col md={12}>
          <h3>Contact Information</h3>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <BsFillTelephoneFill className=" icon fs-3 text-primary" />
                  <Card.Title>General Inquiries</Card.Title>
                  <Card.Text>(123) 456-7890</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <BsFillTelephoneFill className=" icon fs-3 text-primary" />
                  <Card.Title>Emergency Contact</Card.Title>
                  <Card.Text>(123) 456-7891</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <BsFillEnvelopeFill className=" icon fs-3 text-primary" />
                  <Card.Title>Email</Card.Title>
                  <Card.Text>contact@shivammedical.com</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
