import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';
import Signup from '../components/Signup';

const Index = () => {
  return (
    <Layout pageTitle="Hack the World">
      <Header />
      <Hero />
      <Feature/>
      <Service />
      <Signup />
      <About />
      <Footer />
    </Layout>
  )
}

export default Index;
