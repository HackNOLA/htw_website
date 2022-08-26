import React from "react";
import { Media, Col } from "reactstrap";
import Avatar from "react-avatar";

const Team = () => {
  return (
    <div>
      <Media style={{flexDirection: "column"}} className="mt-1">
        <Col md={10} style={{ padding: 10 }}>
          <Media body>
              <img
                width={250}
                facebook-id="invalidfacebookusername"
                src="https://avatars.githubusercontent.com/u/33336793?v=4"
              />
              <h5 className="text-dark font-weight-light f-20 mb-3">
                CEO, Eric O'Neal
              </h5>
              Originally from New Orleans, relocated to Atlanta during Hurricane
              Katrina, but I am born and raised a NOLA kid. I attended Xavier
              university of Louisiana and graduated from Operation Spark, a local
              software development bootcamp. I worked on projects for GE, Revelry
              Labs, Krit, Tulane University, and Virginia Tech. My main interests revolve around
              family, tech, and sports. Other than being with friends in family I
              enjoy most things tech. Video games are a big pass time for me, i
              enjoy RPG's games where i can be my own character and just explore
              the world.
          </Media>
        </Col>
        <Col md={10} style={{ padding: 10 }}>
          <Media body>
            <img
              width={370}
              height={250}
              facebook-id="invalidfacebookusername"
              src="https://res.cloudinary.com/https-pilot-tune-herokuapp-com/image/upload/v1661276786/1_mceia5.jpg"
            />
            <h5 className="text-dark font-weight-light f-20 mb-3">
              CTO, Akintunde Pounds
            </h5>
            Originally from the Midwest, I moved to New Orleans when I was a
            child. As a kid, although I wanted to make videos games, I believed
            I could not learn the programmming knowledge neccessary to be a
            video game developer. That all changed when I was engrossed myself
            in a network of software engineers. Like my partner Eric, I also
            graduated from Operation Spark. I was an instructor at Operation for
            two years and also worked on various projects for Revelry Labs. I
            also enjoy exploring blockchain technology, especially open source.
            Some of my favorite hobbies include spending time with my family and
            making electronic music.
          </Media>
        </Col>
        <Col md={10} style={{ padding: 10 }}>
          <Media body>
            <img
              width={300}
              height={400}
              facebook-id="invalidfacebookusername"
              src="https://res.cloudinary.com/https-pilot-tune-herokuapp-com/image/upload/v1661276947/portraitparty006_294_cic3j2.jpg"
            />
            <h5 className="text-dark font-weight-light f-20 mb-3">
              CMO, Osarumwense Adun
            </h5>
            My personal mission is to transform New Orleans into a regional innovation engine fueled by art and culture, using emerging technology. I am currently leading several ventures to make this happen, media, entertainment, education, professional networking events, conferences, fashion, meta-verse art, blockchain architecture research and historic preservation. I have 6 years research experience and 3 years research experience in the WEB3.0.
          </Media>
        </Col>
      </Media>
      <br />
    </div>
  );
};

export default Team;
