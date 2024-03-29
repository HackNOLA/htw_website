import React from 'react';
import { Container, Row, Col } from "reactstrap";


const Footer = () => {
  const links = [
    { id : 1, title : "Phone:",
      child : [
          { title : "+1(504)339-0763"},
          { title : "+1(504)515-6588"},
      ]
    }
  ];
  
  return (
    <section className="footer section">
      <Container>
        <Row  style={{flexDirection: "row"}}>
          <Col lg={4}>
              <div className="mb-4">
                <p className="text-muted mt-4 mb-2"></p>
                <h6 className="text-muted font-weight-normal"></h6>
              </div>
          </Col>
          <Col lg={8}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="text-dark mb-3">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}>{fLink.title}</li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }
              
              <Col md={4}>
                <p className="text-muted f-14"></p>
                <h6 className="text-muted pb-2">Email: thehacknola@email.com</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin"></i></a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">2022 © HackNOLA, LLC. Design by Akintunde Pounds</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;