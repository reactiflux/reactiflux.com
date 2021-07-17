import React from "react";
import styled, { css } from "styled-components";

import {
  Community,
  Console,
  Facebook,
  GraphQL,
  Jest,
  ReactNative,
  ReactLogo,
  Redux,
  Relay,
} from "@assets/logos";
import { ButtonLink, Layout, Link } from "@components";
import { isMobile } from "@utils/theme";

const P = styled.p`
  ${(props) =>
    isMobile(props)
      ? css`
          align-items: center;
          display: flex;
          flex-direction: column;

          ${ButtonLink} {
            margin-right: 0;
          }
        `
      : ""}
`;

const Index = () => {
  return (
    <Layout title="Welcome" homepage>
      <h1>
        <span>Welcome to</span>
        Reactiflux
      </h1>
      <p>
        We&rsquo;re a chat community of 147,000+ React&nbsp;JS&nbsp;
        <Link to="https://github.com/facebook/react" title="React JS">
          <img src={ReactLogo} alt="React JS" />
        </Link>
        , React&nbsp;Native&nbsp;
        <Link
          to="https://github.com/facebook/react-native"
          title="React Native"
        >
          <img src={ReactNative} alt="React Native" />
        </Link>
        , Redux&nbsp;
        <Link to="https://github.com/reactjs/redux" title="Redux">
          <img src={Redux} alt="Redux" />
        </Link>
        , Jest&nbsp;
        <Link to="https://github.com/facebook/jest" title="Jest">
          <img src={Jest} alt="Jest" />
        </Link>
        , Relay&nbsp;
        <Link to="https://github.com/facebook/relay" title="Relay">
          <img src={Relay} alt="Relay" />
        </Link>{" "}
        and GraphQL&nbsp;
        <Link to="https://github.com/facebook/graphql" title="GraphQL">
          <img src={GraphQL} alt="GraphQL" />
        </Link>{" "}
        developers. We hold Q&amp;A&rsquo;s with Facebook Engineers&nbsp;
        <Link to="https://github.com/facebook" title="Facebook Organization">
          <img src={Facebook} alt="Facebook Organization" />
        </Link>{" "}
        and other developers&nbsp;
        <Link to="https://github.com/reactiflux" title="Reactiflux Developers">
          <img src={Console} alt="Reactiflux Developers" />
        </Link>{" "}
        in the community&nbsp;
        <Link to="https://discord.gg/reactiflux" title="Reactiflux Discord">
          <img src={Community} alt="Reactiflux Discord" />
        </Link>
        . Come chat about tech related to React & JavaScript or ask for help!
      </p>
      <P>
        <ButtonLink
          to="https://discord.gg/reactiflux"
          title="Reactiflux Discord"
        >
          Join Reactiflux
        </ButtonLink>
        <ButtonLink to="/schedule/" title="Q&A Schedule" secondary>
          Q&A Schedule
        </ButtonLink>
      </P>
    </Layout>
  );
};

export default Index;
