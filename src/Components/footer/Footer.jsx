import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LogoImg from "../../assets/logo.png"
import { FaGoogle, FaTwitter, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import "./footer.css"

const Footer = () => {
    return (
        <section id="footer">
            <Container>
                <Row className="footer_main">
                    <Col lg={2}>
                        <div className="footer_logo">
                            <img src={LogoImg} alt="" />
                            <p>Build a modern and creative website with Innovate.</p>
                            <span><FaGoogle />  <FaTwitter />   <FaInstagramSquare />   <FaLinkedinIn /></span>
                        </div>
                    </Col>
                    <Col lg={{ span: 2, offset: 1 }}>
                        <div class="footer_text">
                            <h5>Product</h5>
                            <ul>
                                <li>Landingpages</li>
                                <li>Pricing</li>
                                <li>Benefits</li>
                                <li>Features</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div class="footer_text">
                            <h5>Company</h5>
                            <ul>
                                <li>About</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Partners</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div class="footer_text">
                            <h5>Resources</h5>
                            <ul>
                                <li>Gui and Resources</li>
                                <li>Blog</li>
                                <li>Tools</li>
                                <li>Support</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div class="footer_get">
                            <h5>Get Latest Updates</h5>
                            <p>Subscribe to our newsletter and get many interesting things every week</p>
                            <input type="text" placeholder="Enter Your Email" size="30" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer