import React from 'react';
import Headroom from 'react-headroom';

import { Reactiflux } from '@assets/logos';
import { Link } from '@components';
import { useIsMobile } from '@hooks';

import { Logo, MobileNav, Space, Wrapper } from './MenuStyles';

export function Menu() {
  const isMobile = useIsMobile();

  const HeadroomIfDesktop = isMobile ? React.Fragment : Headroom;
  const MobileNavIfMobile = isMobile ? MobileNav : React.Fragment;

  return (
    <HeadroomIfDesktop>
      <Wrapper>
        <Link to="/">
          <Logo src={Reactiflux} alt="Reactiflux" />
        </Link>
        <Space />
        <MobileNavIfMobile>
          <Link to="/tips/">Tips</Link>
          <Link to="/guidelines/">Guidelines</Link>
          <Link to="/schedule/">Q&A Schedule</Link>
          <Link to="/transcripts/">Transcripts</Link>
          <Link to="/jobs/">Jobs</Link>
          <Link to="/learning/">Learning</Link>
          <Link to="/contact/">Contact</Link>
        </MobileNavIfMobile>
      </Wrapper>
    </HeadroomIfDesktop>
  );
}
