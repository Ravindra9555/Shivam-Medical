import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import Loader from "../loader/Loader";
import axios from "axios";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      // Make a POST request to the backend to send the reset password link
      const response = await axios.post(`${import.meta.env.VITE_BASEURL}/v1/api/users/resetlink`, { email });
      if (response.status === 200) {
        setMessage( response.data.message);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: message ,
        })
      } else {
        throw new Error("Failed to send reset link. Please try again.");
      }
     
    } catch (error) {
      setError(error?.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading){
    return <Loader />
  }
    return (
      <>
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Row
            className="justify-content-center"
            data-aos="fade-up"
            style={{ width: "100vw" }}
          >
            <Col md={8} lg={6}>
              <Card className="shadow-lg p-4">
                <h3 className="mb-4 text-start">Forgot Password</h3>

                {message && <Alert variant="success">{message}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      
                      value={email}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    className="mt-2"
                    type="submit"
                    block
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Reset Link"}
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
};

export default ForgetPassword;
