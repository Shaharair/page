import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import IconeImg from "../../assets/icone.png"
import IconeOne from "../../assets/icone-01.png"
import IconeTwo from "../../assets/icone-02.png"
import IconeThree from "../../assets/icone-03.png"
import "./blog.css"

const Service = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg={4}>
                <div className="Service_text">
              <h6>Service</h6>
              <h3>Find The Service We provide</h3>
            </div>
                </Col>
                <Col lg={{span:5,offset:3}}>
                <div className="Service_text">
              <p>Our consultants have years of experience on the  in success. ​Through the provision of our services.</p>
          </div>
                </Col>
                <Col lg={3}>
                <div className="service_logo">
              <img src={IconeImg} alt=""/>
              <h4>Grow Your Brand And Business</h4>
              <p>That community can of course lend to sales - that's how brand and business go hand-in-hand</p>
            </div>
            </Col>
                <Col lg={3}>
                <div className="Service_icone">
              <img src={IconeOne} alt=""/>
              <h4>Increase Your Conversion Rate</h4>
              <p>There are two ways to increase your conversion rate: increase their motivation and make it easier</p>
            </div>
                </Col>
                <Col lg={3}>
                <div className="Service_icone">
              <img src={IconeTwo} alt=""/>
              <h4>Business Plan Consulting</h4>
              <p>A business plan consultant provides strategic direction by creating on methodically pressure </p>
            </div>
                </Col>
                <Col lg={3}>
                <div className="Service_icone">
              <img src={IconeThree} alt=""/>
              <h4>Business Startup Analysis</h4>
              <p>You must do different kinds of research for your startup. However, before you make any new decision</p>
            </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Service