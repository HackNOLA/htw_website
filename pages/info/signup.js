import { useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import SignupContent from '../../components/Signup';
import Footer from '../../components/Footer';
import useSWR from "swr";
import axios from "axios";

const fetcher = (url, body) => axios.post(url,JSON.stringify(body)).then((res) => res.data);
const getFetcher = (url, body) => axios.get(url).then((res) => res.data);


const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [info_session, setInfo_session] = useState("");
  // const [signee, setSignee] = useState("");
  // const { data } = useSWR("/api/applicant", getFetcher);

  return (
    <Layout pageTitle="Hack the World">
      <Header />
      {typeof signee === "object" ?  <h4>Thank you for signing up!</h4> : null}
        <SignupContent 
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setPhone={setPhone}
          setInfo_session={setInfo_session}
          />
        <Footer />
    </Layout>
  )
}

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const applicant = await fetcher("/api/applicant", {first: firstName, last: lastName, email: email, phone: phone, info_session: info_session});
   
//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       applicant,
//     },
//   };
// }

export default Signup;
