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
          <img src="/images/bot1.png" alt="" className="img-fluid mx-auto d-block"/>
          <h6 style={{fontWeight: "bold"}}>Hack the World</h6>
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
                <NavLink href="/info/signup">Sign up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;