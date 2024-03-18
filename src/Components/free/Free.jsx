import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./free.css"
import LogoOne from "../../assets/logo-01.png"
import LogoTwo from "../../assets/logo-02.png"
import LogoThree from "../../assets/logo-03.png"
import LogoFour from "../../assets/logo-04.png"

const Free = () => {
    return (
        <section id="free">
            <Container>
                <Row className="free_main">
                    <Col lg={4}>
                        <div className="free_text">
                            <h3>Trusted by the world’s leading companies</h3>
                        </div>
                    </Col>
                    <Col lg={{ span: 2, offset: 2 }}>
                        <div className="free_text">
                            <h4>150+</h4>
                            <h5>Finished Session</h5>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="free_text">
                            <h4>100%</h4>
                            <h5>Satisfiction Rate</h5>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="free_text">
                            <h4>350+</h4>
                            <h5>Trusted Clients</h5>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="free_logo">
                            <h6>Free Consultation</h6>
                        </div>
                    </Col>
                    <Col lg={{span:2,offset:1}}>
                        <div className="free_logo">
                            <img src={LogoOne} alt="" />
                        </div>
                    </Col>
                    <Col log={2}>
                        <div className="free_logo">
                            <img src={LogoTwo} alt="" />
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="free_logo">
                            <img src={LogoThree} alt="" />
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="free_logo">
                            <img src={LogoFour} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Free