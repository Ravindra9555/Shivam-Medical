import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import jp from "../../assets/jp.jpg"

const About = () => {
  
const leadershipTeam = [
    {
      name: 'Mr. Jagdish ',
      title: 'CEO',
      description: 'An experienced leader with a passion for improving healthcare systems.',
      image: jp, // Placeholder image
      social: {
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
      },
    },
    {
      name: 'Dr. IT Khan',
      title: 'Chief Medical Officer',
      description: 'A dedicated physician overseeing our clinical operations and patient care.',
      image: 'https://via.placeholder.com/150', // Placeholder image
      social: {
        twitter: 'https://twitter.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith',
      },
    },
  ];
  const generalServices = [
    {
      title: 'Emergency Care',
      description: 'Immediate care for urgent medical conditions.',
      icon: 'bx bxs-ambulance',
    },
    {
      title: 'Outpatient Services',
      description: 'Consultations and treatments that don’t require an overnight stay.',
      icon: 'bx bx-health',
    },
  ];

  return (
    <Container className="about-section" style={{ padding: "50px 0" }} id="about">
      {/* Overview Section */}
      <Row className="mb-5">
        <Col md={12}>
          <h2>About Shivam Medical</h2>
          <p>
            Founded with a mission to provide exceptional healthcare, Shivam
            Medical has been serving the community for over [X] years. Our
            commitment to excellence in patient care and medical innovation sets
            us apart.
          </p>
        </Col>
      </Row>

      {/* Mission and Vision Section */}
      <Row className="mb-5">
        <Col md={6} data-aos="fade-right">
         
          <h3 className="d-flex align-items-center"> <i className="bx bxs-heart about-icon  primary-color fs-1"></i>Our Mission</h3>
          <p>
            To deliver compassionate, high-quality medical care with a focus on
            patient well-being and advanced treatments.
          </p>
        </Col>
        <Col md={6} data-aos="fade-left">
       
          <h3 className="d-flex align-items-center">    <i className="bx bxs-bullseye about-icon align-items-center primary-color fs-1"></i>Our Vision</h3>
          <p>
            To be a leader in healthcare excellence, continuously improving to
            meet the evolving needs of our patients.
          </p>
        </Col>
      </Row>

      {/* Leadership Team Section */}
      <Row className="mb-4">
        <Col md={12} data-aos="fade-up">
          <h3>Leadership Team</h3>
        </Col>
      </Row>
      <Row>
        {leadershipTeam.map((leader, index) => (
          <Col xs={12} md={6} lg={4} key={index} className="mb-4" data-aos="fade-up">
            <Card className="shadow-sm h-100 secondary-background">
              <Card.Img
                variant="top"
                className="mt-2"
                src={leader.image}
                alt={leader.name}
                style={{ maxHeight: '150px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{leader.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{leader.title}</Card.Subtitle>
                <Card.Text>{leader.description}</Card.Text>

                {/* Social Media Links */}
                <div className="social-links mt-3">
                  {leader.social.twitter && (
                    <a href={leader.social.twitter} target="_blank" rel="noopener noreferrer">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  )}
                  {leader.social.linkedin && (
                    <a href={leader.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mb-2" id="services">
        <Col md={12} data-aos="fade-up">
          <h2>Our Services</h2>
          <p>At Shivam Medical, we offer a wide range of services to meet your healthcare needs, including:</p>
        </Col>
      </Row>

      <Row className="mb-5">
        {generalServices.map((service, index) => (
          <Col md={6} key={index} className="mb-4" data-aos="fade-up">
            <Card className="shadow-sm">
              <Card.Body>
                <div className="service-icon mb-3 fs-3 text-primary">
                  <i className={`bx ${service.icon} about-icon primary-color fs-1`}></i>
                </div>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

   
      {/* Patient Care Standards */}
      <Row className="mb-5">
        <Col md={12} data-aos="fade-up">
          <h3>Patient Care Standards</h3>
          <p>
            We are dedicated to providing personalized care with a focus on comfort, respect, and effective treatment.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
