import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import RoadMap from '../components/Roadmap'

const Index = () => {
  return (
    <Layout pageTitle="Hack the World">
      <Header />
      <Hero />
      <Feature/>
      <Service />
      <Partners />
      {/* <RoadMap /> */}
      <Footer />
    </Layout>
  )
}

export default Index;
