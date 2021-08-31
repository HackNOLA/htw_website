import Layout from "../../components/Layout";
import Header from "../../components/Header";
import AboutContent from '../../components/About';
import Footer from '../../components/Footer';


const About = () => {
  return (
    <Layout pageTitle="Hack the World">
      <Header />
        <AboutContent />
        <Footer />
    </Layout>
  )
}

export default About;
