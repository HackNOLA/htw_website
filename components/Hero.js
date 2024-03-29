import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Our mission</p> 
              <h1 className="mb-4 font-weight-normal line-height-1_4">Bettering lives through <span className="text-primary font-weight-medium">tech</span></h1>
              <p className="text-muted mb-4 pb-2">Hack the World is a tech ecosystem, helping thousands of underserved people worldwide in building a community of tech and blockchain enthusiasts. Our ecosystem encompasses our techincal training program, <span className="text-primary font-weight-medium">HTW Univeristy</span>, and our partners.</p>
              <a href="/info/signup" className="btn btn-warning">
              Book a meeting <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/herohtw.svg" alt="" className="img-fluid mx-auto d-block" style={{width: 300, height: 300}}/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;