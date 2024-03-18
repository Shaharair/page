import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BannerImg from "../../assets/banner-09.png"
import "./get.css"

const Get = () => {
    return (
        <section>
            <Container>
                <Row className="get_main">
                    <Col lg={5}>
                        <div class="get_text">
                            <h6>Core feature</h6>
                            <h3>Get more traffic</h3>
                            <p>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.With over 25 years of experience, we have crafted thousands of strategic discovery process</p>
                        </div>
                    </Col>
                    <Col lg={{span:6,offset:1}}>
                        <div className="get_img">
                            <img src={BannerImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Get