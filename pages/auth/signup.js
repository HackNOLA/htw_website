import Layout from "../../components/Layout";
import Header from "../../components/Header";
import SignupContent from '../../components/Signup';
import Footer from '../../components/Footer';


const Signup = () => {
  return (
    <Layout pageTitle="Hack the World">
      <Header />
        <SignupContent />
        <Footer />
    </Layout>
  )
}

export default Signup;
