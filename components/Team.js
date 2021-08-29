import React from 'react';
import { Media } from "reactstrap";
import Avatar from 'react-avatar';

const Team = () => {


    return(
    <div>
        <Media>
          
            <Media body>
                <Avatar size="250" facebook-id="invalidfacebookusername" src="https://avatars.githubusercontent.com/u/33336793?v=4" />
                <h5 className="text-dark font-weight-light f-20 mb-3">Eric O'neal</h5>
                    Originally from New Orleans, relocated to Atlanta during Hurricane Katrina, but I am born and raised a NOLA kid. I attended Xavier university of Louisiana and graduated from Operation Spark, a local software development bootcamp. I worked on projects for GE, Revelry Labs, Krit, and Tulane University.
                    My main interests revolve around family, tech, and sports. Other than being with friends in family I enjoy most things tech. Video games are a big pass time for me, i enjoy RPG's games where i can be my own character and just explore the world. 
                </Media>
        </Media>
        <br />
        <Media className="mt-1">
            <Media body>
                <Avatar size="250" facebook-id="invalidfacebookusername" src="https://avatars.githubusercontent.com/u/42776703?s=400&u=3108ae3a708ef0219e72e93e9f5788ed3813b8d4&v=4" />
                <h5 className="text-dark font-weight-light f-20 mb-3">Akintunde Pounds</h5>
                Originally from the Midwest, I moved to New Orleans when I was a child. As a kid, although I wanted to make videos games, I believed I could not learn the programmming knowledge neccessary to be a video game developer. That all changed when I was engrossed myself in a network of software engineers. Like my partner Eric, I also graduated from Operation Spark. I was an instructor at Operation for two years and also worked on various projects for Revelry Labs. I also enjoy exploring blockchain technology, especially open source. Some of my favorite hobbies include spending time with my family and making electronic music.
            </Media>
        </Media>
    </div>
    )
}

export default Team;