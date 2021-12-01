import React from "react";
import Headroom from "react-headroom";

import { Reactiflux } from "@assets/logos";
import { Link } from "@components";
import { useIsMobile } from "@hooks";

import { Logo, Space, Wrapper, Nav, BlackLivesMatter } from "./MenuStyles";
import { MobileNav } from "./MobileNav";

export function Menu() {
  const isMobile = useIsMobile();

  const HeadroomIfDesktop = isMobile ? React.Fragment : Headroom;
  const MobileNavIfMobile = isMobile ? MobileNav : React.Fragment;

  return (
    <HeadroomIfDesktop>
      <Wrapper>
        <BlackLivesMatter>
          Black Lives Matter.{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://support.eji.org/give/153413/#!/donation/checkout"
          >
            Support&nbsp;the&nbsp;Equal&nbsp;Justice&nbsp;Initiative.
          </a>
        </BlackLivesMatter>
        <Nav>
          <Link to="/">
            <Logo src={Reactiflux} alt="Reactiflux" />
          </Link>
          <Space />
          <MobileNavIfMobile>
            <Link to="/learning/">Learning</Link>
            <Link to="/tips/">Tips</Link>
            <Link to="/schedule/">Q&A Schedule</Link>
            <Link to="/transcripts/">Transcripts</Link>
            <Link to="/conduct/">Code of Conduct</Link>
            <Link to="/jobs/">Jobs</Link>
            <Link to="/contact/">Contact</Link>
          </MobileNavIfMobile>
        </Nav>
      </Wrapper>
    </HeadroomIfDesktop>
  );
}
