import React from "react";

import { Discord, Github, Twitter } from "@assets/logos";
import { Link } from "@components";

import { Footer as FooterElement } from "./FooterStyles";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <FooterElement>
      <p className="social">
        <Link to="https://github.com/reactiflux/reactiflux.com">
          <img src={Github} alt="Github" />
        </Link>
        <Link to="https://discord.gg/reactiflux">
          <img src={Discord} alt="Discord" />
        </Link>
        <Link to="https://twitter.com/reactiflux">
          <img src={Twitter} alt="Twitter" />
        </Link>
      </p>
      <p>
        <span>
          Hosted on <Link to="https://www.netlify.com/">Netlify</Link>
        </span>{" "}
        • <span>© {year} Reactiflux</span>
      </p>
    </FooterElement>
  );
}
