import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BannerImg from "../../assets/banner-03.png"
import "./story.css"

const Story = () => {
  return (
    <section>
        <Container>
            <Row className="story_main">
                <Col lg={5}>
                <div className="story_text">
              <h3>Best Reliable Solution For Your Business</h3>
              <p>We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing.</p>
              <h6>Get Started Now</h6>
            </div>
                </Col>
                <Col lg={{span:6,offset:1}}>
                    <div className="story_img">
                    <img src={BannerImg} alt="" />
                    </div>
                </Col>
                <Col lg={3}>
                <div className="story_write">
            <h4>First-class investment solutions</h4>
            <p>We can help you with your business strategy, architecture, mapping, and optimisation. </p>
            </div>
                </Col>
                <Col lg={3}>
                <div className="story_writte">
              <h4>Building the idea of future</h4>
              <p>Offering Performance Driven Partnerships CIBA Specializes In Business Process Outsourcing.</p>
            </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Story