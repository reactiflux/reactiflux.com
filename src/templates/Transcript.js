import React from "react";
import { graphql } from "gatsby";
import MarkdownStyles from "../css/markdown-styles";

// Add our typefaces.
import "typeface-poppins";
import "typeface-work-sans";
import "typeface-space-mono";

import typography from "../utils/typography";
import NavBar from "../utils/components/NavBar";
import {
  StyledLink,
  Footer,
  Copyright,
  Credits,
  IconLink,
  SocialLinks
} from "../utils/components/";
import { Discord, Twitter, Github } from "../assets/logos.js";

export default class Template extends React.Component {
  constructor(props) {
    super(props);
    const undef = typeof window !== "undefined";
    this.state = {
      menu: false,
      transcript: undef ? (window.innerWidth < 768 ? false : true) : false,
      toc: true,
      width: undef ? window.innerWidth : null
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    if (this.onMobile()) {
      const { transcript, toc } = this.state;
      if (!transcript || !toc) {
        this.setState({
          transcript: true,
          toc: true
        });
      }
    }
  };

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
    const { transcript, toc } = this.state;

    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        transcript,
        toc,
        toggle: this.toggle,
        close: this.close
      })
    );

    return (
      <div>
        <MarkdownStyles />
        <NavBar />
        <div
          style={{
            maxWidth: 1192,
            padding: `0 ${typography.rhythm(3 / 4)} ${typography.rhythm(
              1
            )} ${typography.rhythm(3 / 4)}`,
            marginBottom: 70
          }}
        >
          {children}
        </div>
        <Footer>
          <div>
            <Copyright>© {new Date().getFullYear()} Reactiflux</Copyright>
            <Credits>
              {"Designed in "}
              <StyledLink href="https://www.sketchapp.com/" title="Sketch">
                Sketch
              </StyledLink>
              {". Coded in "}
              <StyledLink href="https://atom.io/" title="Atom">
                Atom
              </StyledLink>
              {". Built using "}
              <StyledLink
                href="https://github.com/gatsbyjs/gatsby"
                title="Gatsby"
              >
                Gatsby.js
              </StyledLink>
              {". Hosted on "}
              <StyledLink href="https://www.netlify.com/" title="Netlify">
                Netlify
              </StyledLink>
              .
            </Credits>
          </div>
          <SocialLinks>
            <IconLink
              to="https://github.com/reactiflux/reactiflux.com"
              tittle="Reactiflux web repository"
              src={Github}
              alt="Github"
              target="_blank"
            />
            <IconLink
              to="https://discord.gg/reactiflux"
              tittle="Reactiflux Discord"
              src={Discord}
              alt="Discord"
              target="_blank"
            />
            <IconLink
              to="https://twitter.com/reactiflux"
              title="Reactiflux Twitter"
              src={Twitter}
              alt="Twitter"
              target="_blank"
            />
          </SocialLinks>
        </Footer>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
