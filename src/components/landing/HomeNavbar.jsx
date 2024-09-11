import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/logo.svg"
function HomeNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  fixed='top'>
      <Container fluid>
        <Navbar.Brand  to="/">
        <img src={logo} alt="logo" loading='lazy' style={{height:"50px", width:"100px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 mx my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#appointment">Appointment</Nav.Link>
           
          </Nav>
          <Button className="d-flex">
           Patient Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HomeNavbar