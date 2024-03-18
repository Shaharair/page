import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BannerImg from "../../assets/banner-07.png"
import "./text.css"

const Text = () => {
  return (
    <section id="banner">
        <Container>
            <Row className="banner_main">
                <Col lg={{span:4,offset:3}}>
                <div className="banner_text">
                        <ul>
                            <li>SEO</li>
                            <li>SMM</li>
                            <li>SEO</li>
                        </ul>
                    </div>
                </Col>
                <Col lg={{span:9,offset:1}}>
                <div className="banner_text">
                        <h3>Guaranteed increase of your website sales</h3>
                    </div>
                </Col>
                <Col lg={{span:8,offset:1}}>
                <div className="banner_text">
                        <p>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.</p>
                    </div>
                </Col>
                <Col lg={{span:6,offset:4}}>
                <div class="banner_wite">
                            <h5>paste your website links</h5>
                            <h6>Analyze website</h6>
                    </div>
                </Col>
                <Col lg={12}>
                    <div className="banner_img">
                        <img src={BannerImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Text