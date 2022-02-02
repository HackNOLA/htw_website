import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Service = () => {
  const services = [
    { title : "Our NFT Collection", desc : "HTW HackBots on Solana are our official NFT collection. HackBots will allow NFT holders to enroll into HTW University or contribute to the development of our Web3 curriculum." },
    { title : "Blockchain Education", desc : 'HTML, CSS, Javascript, Git, Solidity, Rust' },
    { title : "Web3 Accelerator", desc : "Assisting our partners create or utilize Web3 apps, NFT collections, and crypto-tokens" },
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Services</span></h3>
              <p className="text-muted"><span className="text-primary font-weight-medium"></span>Our technical training programs, HackNOLA and HTW Univeristy, teach the necessary skills to construct dapps (decentralized applications) and software development fundamentals. <span className="text-primary font-weight-medium">No prior experiance required.</span></p>
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