
import { Container, Row, Col, Media } from "reactstrap";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';




const RoadMap = () => {

return (
    <section className="section bg-light" id="about">
        <Container>
        <h3 className="font-weight-normal text-dark">Our <span className="text-warning">Roadmap</span></h3>
<VerticalTimeline>
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April, 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h4 className="vertical-timeline-element-title">Launch our NFT collection on the <span className="text-primary font-weight-medium">Solana</span> network</h4>
    <p>
      We plan to utilize the <a className="text-primary font-weight-medium" href="https://solana.com/">Solana network</a> for our NFT collection. We will be launching our NFT collection on the Solana network in the near future. The HTW Hackbots will allow us to raise funds for future scholarships, team members, and metaverse game. It will also help us to build a community of developers and blockchain enthusiasts.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h4 className="vertical-timeline-element-title">Launch <span className="text-primary font-weight-medium">HackNOLA</span></h4>
    <p>
      In partnership with <a className="text-primary font-weight-medium" href="https://fhfofgno.org/">Families Helping Familes NOLA</a>, we are having our first class for our Intro to Software Engineering course, specifically for ASD individuals near the New Orleans area, on April 2022. There are a limited number of seats available for our first cohort. Applicants after the deadline will be considered for the next cohort in the spring of 2022.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April, 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h4 className="vertical-timeline-element-title">Intergrate our <span className="text-primary font-weight-medium">Web 3.0</span> course</h4>
    <p>
        Our plan is for HackNOLA to teach the software development skills necessary to build a decentralized application using the Ethereum and Solana blockchain. 
    </p>
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April, 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h4 className="vertical-timeline-element-title">Launch <span className="text-primary font-weight-medium">My Little Dino</span></h4>
    <p>
        Amongst our educational projects, we are releasing our first game, <a className="text-primary font-weight-medium" href="https://mylildino-beta.herokuapp.com/">My Little Dino</a>. My Little Dino is a multiplayer, play-to-earn game that will be available on the Solana network.
    </p>
  </VerticalTimelineElement> */}
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Summer, 2022"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h4 className="vertical-timeline-element-title">Hire internally-trained engineers and blockchain experts</h4>
    <p>
      Since we are techincally training a community of people, we want to give those folks the opportunity to carry on our mission and be apart of the Hack the World team!
    </p>
  </VerticalTimelineElement>
</VerticalTimeline> 
        </Container>
    </section>
  )
}

export default RoadMap;