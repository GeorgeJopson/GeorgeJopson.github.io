import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import './NavBar.css';

import '../../stylings/fonts.css';
import '../../stylings/buttons.css';
import githubIcon from '../../images/github.svg';

function CustomNavbar() {
  const sectionDetails = [
    { id: 'bio', name: 'Bio' },
    { id: 'work-experience', name: 'Work Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'uni', name: 'Uni' },
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="navbarExtraStyling robotoRegular subtitleText"
    >
      <Container>
        <Navbar.Brand href="#header">George Jopson</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            {sectionDetails.map((detail) => (
              <Nav.Link
                key={detail.id}
                href={`#${detail.id}`}
                className="robotoRegular paragraphText"
              >
                {detail.name}
              </Nav.Link>
            ))}
            <Nav.Link
              href="https://github.com/GeorgeJopson"
              target="_blank"
              rel="noreferrer"
              className="robotoRegular paragraphText"
            >
              <img src={githubIcon} alt="Github Icon" className="githubIcon" />
              Github
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
