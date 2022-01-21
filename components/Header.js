import React, { useState, useEffect } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row
} from 'reactstrap';
import { SocialIcon } from 'react-social-icons';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand className="d-block" href="/">
          <img src="/images/htwbanner.svg" alt="" className="img-fluid mx-auto d-block" style={{width: 270, height: 120}}/>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="/#service">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/info">About</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="https://hacknola.github.io/metaplex#/">NFT Collection</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="/info/signup">HTW Univesity</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/info/signup">Sign up</NavLink>
              </NavItem>
              <div style={{paddingLeft: 25}}>
                <SocialIcon network="twitter" url={"https://twitter.com/HacktheWorld13"} bgColor="#20cd5f" style={{margin: 10}}/>
                <SocialIcon network="discord" url={"https://discord.gg/GGX5ZkvA4V"} style={{margin: 0}}/>
              </div>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;