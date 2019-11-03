import React from "react";
import styled from "styled-components";
import Headroom from "react-headroom";
import Styles from "../../css/styles";

// Add our typefaces.
import "typeface-poppins";
import "typeface-work-sans";
import "typeface-space-mono";

import { Header, Navigation, Toggle, Logo, NavigationLink } from "./index";

const HeaderEl = styled(Header)`
  width: 100%;
`;

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

  onMobile = () => window.innerWidth <= 768;

  toggle = item => () => {
    this.setState(prevState => ({
      [item]: !prevState[item]
    }));
  };

  close = item => () => {
    if (this.onMobile()) {
      this.setState({
        [item]: false
      });
    }
  };

  render() {
    const { menu } = this.state;
    const closeMenu = this.close("menu");

    return (
      <Headroom disableInlineStyles>
        <Styles />
        <HeaderEl>
          <Logo to="/" onClick={closeMenu}>
            Reactiflux
          </Logo>
          <Navigation role="navigation" style={{ top: menu ? 0 : "-100vh" }}>
            <NavigationLink to="/tips/" title="Tips" onClick={closeMenu}>
              Tips
            </NavigationLink>
            <NavigationLink
              to="/guidelines/"
              title="Community Guidelines"
              onClick={closeMenu}
            >
              Community Guidelines
            </NavigationLink>
            <NavigationLink
              to="/schedule/"
              title="Q&A Schedule"
              onClick={closeMenu}
            >
              Q&A Schedule
            </NavigationLink>
            <NavigationLink
              to="/transcripts/"
              title="Transcripts"
              onClick={closeMenu}
            >
              Transcripts
            </NavigationLink>
            <NavigationLink
              as="a"
              href="http://jobs.reactiflux.com"
              title="Jobs"
              target="_blank"
              onClick={closeMenu}
            >
              Jobs
            </NavigationLink>
            <NavigationLink
              to="/learning/"
              title="Learning"
              onClick={closeMenu}
            >
              Learning
            </NavigationLink>
          </Navigation>
          <Toggle onClick={this.toggle("menu")} active={menu} />
        </HeaderEl>
      </Headroom>
    );
  }
}
