import React from "react";
import Headroom from "react-headroom";

import { Reactiflux } from "@assets/logos";
import { Link } from "@components";
import { useIsMobile } from "@helpers";

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
          <Link href="/">
            <Logo src={Reactiflux} alt="Reactiflux" />
          </Link>
          <Space />
          <MobileNavIfMobile>
            <Link href="/learning/">Learning</Link>
            <Link href="/tips/">Tips</Link>
            <Link href="/schedule/">Q&A Schedule</Link>
            <Link href="/transcripts/">Transcripts</Link>
            <Link href="/conduct/">Code of Conduct</Link>
            <Link href="/jobs/">Jobs</Link>
            <Link href="/contact/">Contact</Link>
          </MobileNavIfMobile>
        </Nav>
      </Wrapper>
    </HeadroomIfDesktop>
  );
}
