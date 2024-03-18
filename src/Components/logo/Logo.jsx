import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaRegStar,FaArrowLeft,FaEllipsisH,FaArrowRight } from "react-icons/fa";
import BannerImg from "../../assets/banner-05.png"
import "./logo.css"

const Logo = () => {
    return (
        <section id="our">
            <Container>
                <Row className="our_main">
                    <Col lg={5}>
                        <div className="our_text">
                            <h3>What our customers are saying about us</h3>
                        </div>
                    </Col>
                    <Row>
                        <Col lg={7}>
                            <div className="our_icone">
                                <p>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. So impressed by the knowledge, and sincerity. Thank you Mrs victoria for your amazing company.</p>
                                <h1></h1>
                                <h5>Jenny Wilson</h5>
                                <h6>Digital Marketer</h6>
                                <span><FaRegStar />  <FaRegStar />  <FaRegStar />  <FaRegStar />  <FaRegStar /></span>
                                </div>
                        </Col>
                        <Col lg={5}>
                            <div className="our_logo">
                                <img src={BannerImg} alt="" />
                            </div>
                        </Col>
                        <Col lg={{span:2,offset:5}}>
                            <div className="our_vector">
                                <span><FaArrowLeft />  <FaEllipsisH />  <FaArrowRight /></span>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </section>
    )
}

export default Logo