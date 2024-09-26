import HomeNavbar from "../landing/HomeNavbar";
import React, { useState, useEffect } from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { BsEye, BsEyeSlash } from "react-icons/bs"; // Eye icons
import Aos from "aos";
import { Link } from "react-router-dom";
 import signupimg  from  "../../assets/signup.svg"

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: ""});

  // AOS initialization
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log(formData);
  };

  return (
    <>
      <HomeNavbar />
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Row
          className="justify-content-center"
          data-aos="fade-up"
          style={{
            width: "100vw",
          }}
        >
          <Col md={10} lg={8}>
            <div className="shadow-lg">
              <Row noGutters>
                {/* Image Section */}
                <Col
                  md={6}
                  className="d-flex align-items-center justify-content-center  rounded  secondary-background"
                >
                  <img src={signupimg} loading="lazy" className="img-fluid" alt="" />
                </Col>

                {/* Login Form Section */}
                <Col md={6} className="p-2 ">
                  <Card.Body className="p-4">
                    <h3 className="mb-4 text-start">Signup</h3>
                    <Form onSubmit={handleLogin} className="text-start">
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        controlId="formPassword"
                        className="position-relative"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type={passwordVisible ? "text" : "password"}
                          placeholder="Enter password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                        <span
                          className="position-absolute"
                          style={{
                            right: "10px",
                            top: "38px",
                            cursor: "pointer",
                          }}
                          onClick={handlePasswordVisibility}
                        >
                          {passwordVisible ? <BsEyeSlash /> : <BsEye />}
                        </span>
                      </Form.Group>
                      <Form.Group
                        controlId="formPassword"
                        className="position-relative"
                      >
                        <Form.Label>Confirm Password </Form.Label>
                        <Form.Control
                          type={passwordVisible ? "text" : "password"}
                          placeholder="Enter Confirm Password"
                          name="password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                        />
                        <span
                          className="position-absolute"
                          style={{
                            right: "10px",
                            top: "38px",
                            cursor: "pointer",
                          }}
                          onClick={handlePasswordVisibility}
                        >
                          {passwordVisible ? <BsEyeSlash /> : <BsEye />}
                        </span>
                      </Form.Group>

                      <Button
                        variant="primary"
                        type="submit"
                        className="mt-2"
                        block
                      >
                        Signup
                      </Button>
                    </Form>
                    <hr />
                
                    <div className="text-center">
                      Already have a account <Link to="/login">Login</Link>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
