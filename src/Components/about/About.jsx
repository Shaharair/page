import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BannerImg from "../../assets/banner-02.png"
import "./about.css"
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    
        <Container>
            <Row className="banner_main">
                <Col lg={6}>
                    <div className="banner_img">
                    <img src={BannerImg} alt="" />
                    </div>
                </Col>
                <Col lg={5}>
                <div className="banner_text">
                <h6>About us</h6>
                <h3>Welcome to World Best Business Company</h3>
                <p>We partner with experienced and qualified Accountants, Financial Advisors and Chartered Secretaries to provide</p>
                <span><FaCheckCircle />  Monthly assesment report</span>
                <br/>
                <span><FaCheckCircle />  Text Planning Consultation</span>
                <br/>
                <span><FaCheckCircle />  Monthly Rent Problem Solution</span>
                <h5>Free Consultation</h5>
              </div>
              
                </Col>
            </Row>
        </Container>
  )
}

export default About