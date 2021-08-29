import React from 'react';
import { Container, Row, Col } from "reactstrap";


const About = () => {

  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">About <span className="text-warning">Us</span></h3>
              {/* <p className="text-muted"></p> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Hack the World is birthing a new generation of tech enthusiasts</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Our Vision</h6>
                <p className="text-muted font-weight-light">Hack the World foresees a future where the youth and underprviledged people around the world have equal opportunity to financial and digital freedom</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Who we serve</h6>
                <p className="text-muted font-weight-light">As of now, HackNOLA is available for adults who have graduated high school. We are in the proccess of creating partnerships with local charters to educate high school students in the New Orleans, Louisiana area.</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Team</h6>
                <p className="text-muted font-weight-light"></p>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;