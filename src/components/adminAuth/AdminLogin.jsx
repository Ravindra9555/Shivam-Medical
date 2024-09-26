import HomeNavbar from "../landing/HomeNavbar";
import React, { useState, useEffect } from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { BsEye, BsEyeSlash } from "react-icons/bs"; // Eye icons

import { Link, useNavigate } from "react-router-dom";
import loginimg from "../../assets/login.svg";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../loader/Loader";
import { useAdmin } from "../../context/AdminContext";
const AdminLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loding, setLoding] = useState(false);
  const navigate = useNavigate();
  const { setAdmin } = useAdmin();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoding(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BASEURL}/v1/api/admin/login`,
        formData
      );
      if (res.status === 200 && res.data.statusCode === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          
          text: res.data.message,
        });

        const data = res.data.data.admin;
        setAdmin({
          id: data._id,
          name: data.name,
          email: data.email,
          role: data.role,
          isActive: data.isActive,
          profilePic: data.profilePic,
        });
        sessionStorage.setItem("adminToken", res.data.data.accessToken);

        // Set flag to true after successful login
        setIsLoginSuccessful(true);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
    } finally {
      setLoding(false);
    }
  };

  // Use useEffect to navigate after admin state is updated
  useEffect(() => {
    if (isLoginSuccessful) {
      navigate("/dashboard");
    }
  }, [isLoginSuccessful, navigate]);

  if (loding) {
    return <Loader />;
  }
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
                  <img
                    src={loginimg}
                    loading="lazy"
                    alt=""
                    className="img-fluid"
                  />
                </Col>

                {/* Login Form Section */}
                <Col md={6} className="p-2 ">
                  <Card.Body className="p-4">
                    <h3 className="mb-4 text-start">Admin Login</h3>
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
                          // minLength={8}
                          // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                          title="Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"
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
                        Login
                      </Button>
                    </Form>
                    <hr />
                    {/* <div className="text-start">
  
                        <Link to="/forgot-password" className="text-primary text-start">
                          Forgot password?
                        </Link>
                      </div> */}

                    {/* <div className="text-center">
                       Don,t have a account <Link to="/signup">
                         Signup 
                        </Link>
                       </div> */}
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

export default AdminLogin;
