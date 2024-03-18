import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LogoImg from "../../assets/logo-13.png"
import LogoOne from "../../assets/logo-14.png"
import LogoTwo from "../../assets/logo-15.png"
import "./help.css"


const Help = () => {
    return (
        <section id="our">
            <Container>
                <Row className="our_main">
                    <Col lg={{ span: 2, offset: 5 }}>
                        <div class="our_text">
                            <h6>Our process</h6>
                        </div>
                    </Col>
                    <Row>
                        <Col lg={{span:4, offset:4}}>
                            <div class="our_text">
                                <h3>How can we help?</h3>
                            </div>
                        </Col>
                        <Col lg={{span:3,offset:2}}>
                            <div className="our_icone">
                                <img src={LogoImg} alt="" />
                                <h6>Real time analytics</h6>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="our_logo">
                                <img src={LogoOne} alt="" />
                                <h6>Social media stragedy</h6>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="our_men">
                                <img src={LogoTwo} alt="" />
                                <h6>Media management</h6>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </section>
    )
}

export default Help