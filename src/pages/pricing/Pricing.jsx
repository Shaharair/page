import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BannerOne from "../../assets/banner-11.png"
import "./pricing.css"

const Pricing = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg={2}>
                <div class="view_text">
                        <h6>Our works</h6>
                        <h3>Our case </h3>
                    </div>
                </Col>
                <Col lg={{span:2,offset:8}}>
                <div class="view_text">
                        <h5>View all</h5>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="view_img">
                        <img src={BannerOne} alt="" />
                    <h4>Search marketer</h4>
                        <p>Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="view_img">
                        <img src={BannerOne} alt="" />
                        <h4>Watching for trends</h4>
                        <p>Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="view_img">
                        <img src={BannerOne} alt="" />
                        <h4>Cross over benifits</h4>
                        <p>Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Pricing