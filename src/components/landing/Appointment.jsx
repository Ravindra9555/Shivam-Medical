import React from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import appoint from "../../assets/appointment.svg";
function Appointment() {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate("/login"); // Navigate to the login page on button click
  };

  return (
    <Container
      className="appointments-section mb-5"
      style={{ padding: "50px 0" }}
      id="appointment"
    >
      {/* Book an Appointment Section with Boxicons */}
      <Row className="mb-5 align-items-center" data-aos="fade-up">
        <Col md={6}>
          <h2 className="mb-4">
            <i className="bx bx-calendar-check icon"></i> Book an Appointment
          </h2>
          <p>
            Schedule your visit online with our convenient booking system.
            Choose your preferred date and time, and complete the necessary
            details.
          </p>
          <h3>
            <i className="bx bx-phone icon"></i> Booking Information
          </h3>
          <p>
            <strong>Phone Appointments:</strong> Call +91 6394323760 to schedule
            by phone.
          </p>
          <Button variant="outline-primary" size="lg" onClick={handleBookAppointment}>
            Book an Appointment
          </Button>
        </Col>
        <Col md={6}>
          <img
            src={appoint} // Placeholder image for demonstration
            alt="Book an Appointment"
            className="img-fluid"
          />
        </Col>
      </Row>

      {/* Accordion Section */}

      {/* FAQs */}
      <Row className="mb-4">
        <Col md={12} data-aos="fade-up">
          <h3>Frequently Asked Questions</h3>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>How do I book an appointment?</Accordion.Header>
              <Accordion.Body>
                You can use our online booking system or call us directly at
               +91 6394323760.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What should I bring to my appointment?
              </Accordion.Header>
              <Accordion.Body>
                Please bring your insurance information and any relevant medical
                records.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default Appointment;
