import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import "./menu.css"
import LogoImg from "../../assets/logo.png"

const Menu = () => {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">
            <img src={LogoImg} alt="" />
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
          </Nav>
          <div className="free">
            <a href="#">Free    Consultation</a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu