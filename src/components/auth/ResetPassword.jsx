import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';
 import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ResetPassword = () => {
  const {resetToken} = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);


  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Password matching validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      // Make a POST request to update the password
      const response = await axios.post(`${import.meta.env.VITE_BASEURL}/v1/api/users/changepassword`, {
        password: formData.password,
        resetToken : resetToken
      });
        if(response.status ==200){
          Swal.fire({
            icon:'success',
            title: 'Success',
            text: response.data.message,
          }).then(()=>{

            navigate('/');
          })
        }
      // Handle success response
      setSuccess('Your password has been reset successfully.');
      setFormData({ password: '', confirmPassword: '' });
    } catch (err) {
      console.log(err)
      setError(err?.response.data.message);
    } finally { 
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row className="justify-content-center" data-aos="fade-up" style={{ minWidth:"100vw"}}>
        <Col md={8} lg={6}>
          <Card className="shadow-lg p-4">
            <h3 className="mb-4 text-start">Reset Password</h3>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  minLength={8}
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword" className="mt-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm new password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  minLength={6}
                />
              </Form.Group>

              <Button variant="primary" type="submit" block disabled={loading} className="mt-4">
                {loading ? 'Resetting Password...' : 'Reset Password'}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
