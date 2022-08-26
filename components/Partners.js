import next from 'next';
import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { useRouter } from "next/router";
import { route } from 'next/dist/next-server/server/router';
var Carousel = require('react-responsive-carousel').Carousel;
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Avatar from 'react-avatar';




const Example = ({ register, setFirstName, setLastName, setEmail, setPhone, setInfo_session }) => {

  const router = useRouter();

  return (
    <section className="section bg-light" id="partners">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Our Partners</span></h3>
              <p className="text-muted"><span className="text-primary font-weight-medium"></span>We partner with businesses that align
                with our mission to create software products that are impactful and provide <span className="text-primary font-weight-medium">digital equity</span>. We also partner with high schools
                in the local <span className="text-primary font-weight-medium">New Orleans area</span> to teach students the basics
                of <span className="text-primary font-weight-medium">Web3</span> and computer programming skills</p>
            </div>
          </Col>
        </Row>
        <Carousel infiniteLoop={true} autoPlay={true} showArrows={true} >
          <div>
            <Avatar round={true} size="200" src="https://res.cloudinary.com/https-pilot-tune-herokuapp-com/image/upload/v1661524219/JAMMICON_xhxmha.jpg" />
            <p>JammAround</p>
            <br />
          </div>
          <div>
            <Avatar round={true} size="200" src="https://iglfoundation.org/wp-content/uploads/2020/09/static1.squarespace.png" />
            <p>IGL</p>
          </div>
          <div>
            <Avatar round={true} size="200" src="https://pbs.twimg.com/profile_images/1349196975288311810/TXOlesIQ_400x400.jpg" />
            <p>NoirLands</p>
          </div>
          <div>
            <Avatar round={true} size="200" src="https://nolauniforms.s3.amazonaws.com/wp-content/uploads/LOGO-WE_white.png" />
            <p>Warren Easton High School</p>
          </div>
          <div>
            <Avatar round={true} size="200" src="https://fhfnola.org/wp-content/uploads/2020/08/FHF-NOLA-LOGO.png" />
            <p>Families Helping Families NOLA</p>
          </div>
        </Carousel>
      </Container>
    </section>
  );
}

export default Example;