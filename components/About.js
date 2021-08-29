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
                <Media body>Hack the World foresees a future where the youth and underprviledged people around the world have equal opportunity to financial and digital freedom</Media>
              </Col>
              <Col md={10} style={{padding: 10}}>
                <h4 className="text-dark font-weight-light f-20 mb-3">Who we serve</h4>
                <Media body>As of now, HackNOLA is available for adults who have graduated high school. We are in the proccess of creating partnerships with local charters to educate high school students in the New Orleans, Louisiana area.</Media>
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