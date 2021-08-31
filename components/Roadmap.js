
import { Container, Row, Col, Media } from "reactstrap";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';




const RoadMap = () => {

return (
    <section className="section bg-light" id="about">
        <Container>

<VerticalTimeline>
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="September 6, 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h4 className="vertical-timeline-element-title">Launch our Token on the Fantom network</h4>
    <p>
      We plan to utilize the Famtom network for scalable and secure, low-cost transactions
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="October 4, 2021 - November 22, 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h4 className="vertical-timeline-element-title">Launch HackNOLA</h4>
    <p>
      We are having our first class for our Intro to Software Development course in October, 2021. There are a limited number of seats available for our first cohort; therefore, if you're applicant number is #31 and above, you will be enrolled in our waitlist for our upcoming cohort(s)  
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="February, 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h4 className="vertical-timeline-element-title">Intergrate our IOT Blockchain Development course</h4>
    <p>
        Our plan is to teach opportunity youth and underserved adults software development skills for agricultural engineering. Our participants will be able to build automated gardening systems to introduce the importance of growing your own food
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Spring, 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h4 className="vertical-timeline-element-title">Get our token listed on an exchange</h4>
    <p>
        A HTW token listing on a major international digital currency exchange usually results in a price boost for the token. This will also help grow the Hack the World community and utility 
    </p>
  </VerticalTimelineElement>
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