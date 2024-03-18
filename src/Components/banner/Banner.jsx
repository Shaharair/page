import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import ArrowImg from "../../assets/Arrrow.png"
import ElementImg from "../../assets/element.png"
import GroupImg from "../../assets/group.png"
import { CiStar } from "react-icons/ci";
import BannerImg from "../../assets/banner_01.png"
import BannerBan from "../../assets/banner.png"
import "./banner.css"

const Banner = () => {
  return (
    <section id="heading">
        <Container>
            <Row className="heading_main">
                <Col lg={6}>
                <div className="heading_text">
                        <h3>We Provi  Premium Consulting Service For your Business</h3>
                        <p>The Premium Consulting Service provides a faster way to process plans, register dealings and create titles.</p>
                        <h2>Get Started Now</h2>
                    </div>
                </Col>
                <Row>
                        <Col lg={3}>
                        <div className="heading_text">
                        <h6>Already Member Our Communty?</h6>
                    </div>
                        </Col>
                        <Col lg={1}>
                            <div className="banner_arr">
                            <img src={ArrowImg} alt="" />
                            </div>
                        </Col>
                        <Col lg={1}>
                        <div className="heading_sing">
                            <h5>sing in</h5>
                        </div>
                        </Col>
                        <Col lg={3}>
                            <div className="banner_element">
                            <img src={ElementImg} alt="" />
                            </div>
                        </Col>
                        <Row>
                        <Col lg={3}>
                            <div className="banner_group">
                            <img src={GroupImg} alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="banner_icone">
                            <i><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></i>
                            <h6>305k Total Review</h6>
                            </div>
                        </Col>
                        </Row>
                </Row>
            </Row>
        </Container>
        <div class="heading_content">
          <div className="heading_ban">
            <img src={BannerImg} alt=""/>
          </div>
          <div className="heading_man">
            <img src={BannerBan} alt=""/>
          </div>
        </div>


    </section>
  )
}

export default Banner