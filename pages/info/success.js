import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { Container, Row, Col } from 'reactstrap';
import Footer from '../../components/Footer';


const Registered = () => {
  return (
    <Layout pageTitle="Hack the World" id="registered">
      <Header />
      <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">All done!</p> 
              <h1 className="mb-4 font-weight-normal line-height-1_4">Thank you for registering for our <span className="text-primary font-weight-medium">info session</span></h1>
              <p className="text-muted mb-4 pb-2">Our team will reach out to you via email to confrim your attendance. If you have any questions or concerns, please contact us at <span className="text-primary font-weight-medium">thehacknola@gmail.com</span>.</p>
              <a href="/" className="btn btn-warning">
                Return Home <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="https://www.alsc.ala.org/blog/wp-content/uploads/2018/03/Earth-animated-globe-clipart-free-images.png" width={300} alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />
    </Layout>
  )
}

export default Registered;
