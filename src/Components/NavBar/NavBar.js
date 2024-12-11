import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import './NavBar.css';

import '../../stylings/fonts.css';
import '../../stylings/buttons.css';

function CustomNavbar() {
  const sectionDetails = [
    { id: 'bio', name: 'Bio' },
    { id: 'work-experience', name: 'Work Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'uni', name: 'Uni' },
    { id: 'technicalSkillsSection', name : 'Tech Skills'}
  ];

  const navBarLinks = sectionDetails.map((detail) => (
    <Nav.Link
      key={detail.id}
      href={`#${detail.id}`}
      className="robotoRegular paragraphText"
    >
      {detail.name}
    </Nav.Link>
  ))

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className = "navbar"
    >
      <Container className="navbarContainer">
        <Navbar.Brand href="#header" className="robotoRegular subtitleText">George Jopson</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav>
            {navBarLinks}
            <Nav.Link
              href="https://github.com/GeorgeJopson"
              target="_blank"
              rel="noreferrer"
              className="robotoRegular paragraphText"
            >
              Github
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
