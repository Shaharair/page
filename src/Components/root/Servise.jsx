import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LogoImg from "../../assets/logo-05.png"
import LogoOne from "../../assets/logo-06.png"
import LogoTwo from "../../assets/logo-07.png"
import LogoThree from "../../assets/logo-08.png"
import IconeImg from "../../assets/logo-09.png"
import BannerImg from "../../assets/banner-08.png"
import LogoFour from "../../assets/logo-11.png"
import LogoFive from "../../assets/logo12.png"
import "./servise.css"


const Servise = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={2}>
            <div className="servise_logo">
              <img src={LogoImg} alt="" />
            </div>
          </Col>
          <Col lg={{ span: 2, offset: 1 }}>
            <div className="servise_logo">
              <img src={LogoOne} alt="" />
            </div>
          </Col>
          <Col lg={{ span: 2, offset: 1 }}>
            <div className="servise_logo">
              <img src={LogoTwo} alt="" />
            </div>
          </Col>
          <Col lg={{ span: 2, offset: 1 }}>
            <div className="servise_logo">
              <img src={LogoThree} alt="" />
            </div>
          </Col>
          <Col lg={{ span: 2, offset: 5 }}>
            <div class="servise_text">
              <h6>Core feature</h6>
            </div>
          </Col>
          <Col lg={{ span: 6, offset: 3 }}>
            <div class="servise_text">
              <h3>Provide awsome service with our tools</h3>
            </div>
          </Col>
          <Col lg={6}>
            <div class="servise_text">
              <p>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.</p>
            </div>
          </Col>
          <Col lg={2}>
            <div className="servise_icone">
              <img src={IconeImg} alt="" />
            </div>
          </Col>
          <Col lg={4}>
            <div class="servise_icone">
              <h5>SEO Consultancy</h5>
              <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="servise_img">
              <img src={BannerImg} alt="" />
            </div>
          </Col>
          <Col lg={2}>
            <div className="servise_log">
              <img src={LogoFour} alt="" />
            </div>
          </Col>
          <Col lg={4}>
            <div class="servise_log">
              <h5>Competitor analysis</h5>
              <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
            </div>
          </Col>
          <Col lg={{span:2,offset:6}}>
            <div className="servise_ban">
              <img src={LogoFive} alt="" />
            </div>
          </Col>
          <Col lg={4}>
            <div class="servise_ban">
              <h5>Social media marketing</h5>
              <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Servise