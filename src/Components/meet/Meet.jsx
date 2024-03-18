import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BannerImg from "../../assets/banner-04.png"
import "./meet.css"
import Accordion from 'react-bootstrap/Accordion';

const Meet = () => {
  return (
    <section>
      <Container>
        <Row className="for_main">
          <Col lg={6}>
            <div className="banner_one">
              <img src={BannerImg} alt="" />
            </div>
          </Col>
          <Col lg={{ span: 5, offset: 1 }}>
            <div className="for_text" >
            <h3>Startup digital platform for investing</h3>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Securing Digital Payment</Accordion.Header>
                <Accordion.Body>
                  Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Building the  idea of future</Accordion.Header>
                <Accordion.Body>
                  Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Accurate and friendly support</Accordion.Header>
                <Accordion.Body>
                  Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Meet