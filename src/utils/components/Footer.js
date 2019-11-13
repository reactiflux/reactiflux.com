import React from 'react';

// Add our typefaces.
import 'typeface-poppins';
import 'typeface-work-sans';
import 'typeface-space-mono';

import {
  StyledLink,
  Footer as FooterBox,
  Copyright,
  Credits,
  IconLink,
  SocialLinks,
} from './index';
import { Discord, Twitter, Github } from '../../assets/logos.js';

export default function Footer() {
  return (
    <FooterBox>
      <div>
        <Copyright>© {new Date().getFullYear()} Reactiflux</Copyright>
        <Credits>
          {'Designed in '}
          <StyledLink as="a" href="https://www.sketchapp.com/" title="Sketch">
            Sketch
          </StyledLink>
          {'. Coded in '}
          <StyledLink as="a" href="https://atom.io/" title="Atom">
            Atom
          </StyledLink>
          {'. Built using '}
          <StyledLink
            as="a"
            href="https://github.com/gatsbyjs/gatsby"
            title="Gatsby"
          >
            Gatsby.js
          </StyledLink>
          {'. Hosted on '}
          <StyledLink as="a" href="https://www.netlify.com/" title="Netlify">
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
    </FooterBox>
  );
}
