import React from 'react';
import { Container, Row, Col, Media } from "reactstrap";
import Team from './Team'

const About = () => {

  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">About <span className="text-warning">Us</span></h3>
              <p className="font-weight-normal text-dark">Hack the World is birthing a new generation of tech enthusiasts</p>
            </div>
          </Col>
        </Row>
        <Row>
          {/* <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4"></h2>
          </Col> */}
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={10} style={{padding: 10}}>
                <h4 className="text-dark font-weight-light f-20 mb-3">Our Vision</h4>
                <Media body>Hack the World envisions a future where the youth and underserved population have equal opportunity to financial and digital equity</Media>
              </Col>
              <Col md={10} style={{padding: 10}}>
                <h4 className="text-dark font-weight-light f-20 mb-3">Who we serve</h4>
                <Media body>As of now, Hack the World is available for high school education. We are in the proccess of creating partnerships with local charters to educate high school students in Louisiana virtually. If the student body that you intend us to serve is special needs, we limit our partnerships with high schools and non-profit organizations specifically in the New Orleans area to provide our best support.</Media>
              </Col>
              <Col md={10} style={{padding: 10}}>
                <h4 className="text-dark font-weight-light f-20 mb-3">Team</h4>
                <Team/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;