import React from "react";
import Headroom from "react-headroom";

import { Reactiflux } from "@assets/logos";
import { Link } from "@components";
import { useIsMobile } from "@helpers";

import { Logo, Space, Wrapper, Nav } from "./MenuStyles";
import { MobileNav } from "./MobileNav";

export function Menu() {
  const isMobile = useIsMobile();

  const HeadroomIfDesktop = isMobile ? React.Fragment : Headroom;
  const MobileNavIfMobile = isMobile ? MobileNav : React.Fragment;

  return (
    <HeadroomIfDesktop>
      <Wrapper>
        <Nav>
          <Link href="/">
            <Logo {...Reactiflux} alt="Reactiflux" />
          </Link>
          <Space />
          <MobileNavIfMobile>
            <Link href="/learning">Learning</Link>
            <Link href="/tips">Tips</Link>
            <Link href="/schedule">Q&A Schedule</Link>
            <Link href="/transcripts">Transcripts</Link>
            <Link href="/conduct">Code of Conduct</Link>
            <Link href="/jobs">Jobs</Link>
            <Link href="/contact">Contact</Link>
          </MobileNavIfMobile>
        </Nav>
      </Wrapper>
    </HeadroomIfDesktop>
  );
}
