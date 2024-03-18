import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import IconeImg from "../../assets/icone-04.png"
import "./our.css"

const Our = () => {
  return (
    <section id="meet">
        <Container>
            <Row>
                <Col lg={3}>
            <div className="meet_img">
              <img src={IconeImg} alt=""/>
            </div>
                </Col>
                <Col lg={4}>
                <div className="meet_text">
              <h6>Our Team</h6>
              <h4>Meet With Expert</h4>
            </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Our