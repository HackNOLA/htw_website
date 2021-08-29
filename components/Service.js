import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Service = () => {
  const services = [
    { title : "Our token", desc : "HTW token is the native currency of our ecosystem. It allows token holders to learn more, invest and also be part of the our growing community." },
    { title : "Intro to Software Development Course", desc : 'Includes: HTML, CSS, JavaScript, Git' },
    { title : "Mentorship", desc : "Assisting apsiring developers attain an ideal, personalized career path. We've helped employ over 20+ software developers and vow to help more!" },
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Services</span></h3>
              <p className="text-muted"><span className="text-primary font-weight-medium">HackNOLA</span>, is a technical training program, teaching the necessary skills to construct dapps (decentralized applications) and software development fundamentals. <span className="text-primary font-weight-medium">No prior experiance required.</span></p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}

export default Service;