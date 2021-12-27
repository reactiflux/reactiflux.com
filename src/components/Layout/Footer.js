import React from "react";

import { Discord, Github, Twitter } from "@assets/logos";
import { Link } from "@components";
import Image from "@components/Image";

import { Footer as FooterElement } from "./FooterStyles";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <FooterElement>
      <p className="social">
        <Link href="https://github.com/reactiflux/reactiflux.com">
          <Image {...Github} alt="Github" />
        </Link>
        <Link href="https://discord.gg/reactiflux">
          <Image {...Discord} alt="Discord" />
        </Link>
        <Link href="https://twitter.com/reactiflux">
          <Image {...Twitter} alt="Twitter" />
        </Link>
      </p>
      <p>
        <span>
          Hosted on <Link href="https://www.netlify.com/">Netlify</Link>
        </span>{" "}
        • <span>© {year} Reactiflux</span>
      </p>
    </FooterElement>
  );
}
