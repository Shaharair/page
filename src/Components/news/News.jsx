import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BannerImg from "../../assets/banner-06.png"
import { FaCircle,FaCalendarCheck } from "react-icons/fa";
import "./news.css"

const News = () => {
    return (
        <section id="news">
            <Container>
                <Row className="news_main">
                    <Col lg={{ span: 2, offset: 5 }}>
                        <div className="news_text">
                            <h6>New Blog</h6>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div class="news_text">
                            <h3>Latest Updates and News</h3>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="news_img">
                            <img src={BannerImg} alt="" />
                            <h4>Simple Juice Recipes to boost your immune system</h4>
                            <p>Objectively restore stand-alone markets rather than enterprise-wide products. </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="news_img">
                            <img src={BannerImg} alt="" />
                            <h4>4 steps for measuring the impact of product</h4>
                            <p>Clearly, the rise of time spent on social media creates a strain on all of its users, and these effects</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="news_img">
                            <img src={BannerImg} alt="" />
                            <h4>The modern product manager’s tech stack</h4>
                            <p>The essential tools for the modern product manager for capturing feedback, prioritizing, ideating </p>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="news_logo">
                            <span><FaCircle />   Esther Howard</span>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="news_logo">
                            <span><FaCalendarCheck />   8 Sep, 2021</span>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="news_logo">
                            <span><FaCircle />   Leslie Alexander</span>
                        </div>
                    </Col>
                    <Col lg={2}>
                    <div className="news_logo">
                            <span><FaCalendarCheck />   24 May, 2021</span>
                        </div>
                    </Col>
                    <Col lg={2}>
                    <div className="news_logo">
                            <span><FaCircle />   Catherine Mark</span>
                        </div>
                    </Col>
                    <Col lg={2}>
                    <div className="news_logo">
                            <span><FaCalendarCheck />   30 Nov, 2021</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default News