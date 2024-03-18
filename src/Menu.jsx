import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import Logo from "./assets/logo.png"
import "./menu.css"

const Menu = () => {
  return (
    <Navbar expand="lg" className="menu-bg">
      <Container>
        <Navbar.Brand href="#home">
        <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Service</Nav.Link>
            <Nav.Link href="#link">Pages</Nav.Link>
            <Nav.Link href="#link">News</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="free">
            <a href="#">Free    Consultation</a>
        </div>
      </Container>
    </Navbar>
  )
}

export default Menu