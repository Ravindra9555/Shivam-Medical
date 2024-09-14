// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import logo from "../../assets/logo.svg"
// import { useNavigate } from 'react-router-dom';
// function HomeNavbar() {
//    const [loginpage, setloginPage] = useState(true);
//    const navigate = useNavigate();

//    const handleLoginClick = () => {
//       setloginPage(false);
//       navigate("/login"); // Navigate to the login page
//    }
   
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary"  fixed='top'>
//       <Container fluid>
//         <Navbar.Brand  to="/">
//         <img src={logo} alt="logo" loading='lazy' style={{height:"50px", width:"100px"}} />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="ms-auto my-2 mx my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#about">About us</Nav.Link>
//             <Nav.Link href="#services">Services</Nav.Link>
//             <Nav.Link href="#appointment">Appointment</Nav.Link>
           
//           </Nav>
//           {
//             loginpage?
//             <Button className="d-flex" variant='outline-primary' onClick={handleLoginClick}>
//                Patient Login
//             </Button>
//             : null
//           }
           
         
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }

// export default HomeNavbar

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.svg";
import { useNavigate, useLocation } from 'react-router-dom';

function HomeNavbar() {
   const [loginpage, setloginPage] = useState(true);
   const navigate = useNavigate();
   const location = useLocation();
   
   // Function to navigate to the home page with a section
   const handleNavClick = (sectionId) => {
      if (location.pathname !== '/') {
         // Navigate to home with section hash
         navigate(`/#${sectionId}`);
      } else {
         // If already on the homepage, just scroll to section
         document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
      }
   };

   const handleLoginClick = () => {
      setloginPage(false);
      navigate("/login"); // Navigate to the login page
   };
   
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
      <Container fluid>
        <Navbar.Brand onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="logo" loading='lazy' style={{height:"50px", width:"100px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 mx my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={() => handleNavClick('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('about')}>About us</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('services')}>Services</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('appointment')}>Appointment</Nav.Link>
          </Nav>
          {
            loginpage ?
            <Button className="d-flex" variant='outline-primary' onClick={handleLoginClick}>
               Patient Login
            </Button>
            : null
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;
