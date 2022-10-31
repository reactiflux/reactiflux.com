import React from "react";
import styled, { css } from "styled-components";
import Image from "@components/Image";

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

const Index = ({ userCount }) => {
  return (
    <Layout title="Welcome" homepage>
      <h1>
        <span>Welcome to</span>
        Reactiflux
      </h1>
      <p>
        We’re a chat community of{" "}
        {new Intl.NumberFormat("en-US").format(userCount)} React&nbsp;JS&nbsp;
        <Link href="https://github.com/facebook/react" title="React JS">
          <Image {...ReactLogo} alt="React JS" />
        </Link>
        , React&nbsp;Native&nbsp;
        <Link
          href="https://github.com/facebook/react-native"
          title="React Native"
        >
          <Image {...ReactNative} alt="React Native" />
        </Link>
        , Redux&nbsp;
        <Link href="https://github.com/reactjs/redux" title="Redux">
          <Image {...Redux} alt="Redux" />
        </Link>
        , Jest&nbsp;
        <Link href="https://github.com/facebook/jest" title="Jest">
          <Image {...Jest} alt="Jest" />
        </Link>
        , Relay&nbsp;
        <Link href="https://github.com/facebook/relay" title="Relay">
          <Image {...Relay} alt="Relay" />
        </Link>{" "}
        and GraphQL&nbsp;
        <Link href="https://github.com/facebook/graphql" title="GraphQL">
          <Image {...GraphQL} alt="GraphQL" />
        </Link>{" "}
        developers. We hold Q&amp;A&rsquo;s with Facebook Engineers&nbsp;
        <Link href="https://github.com/facebook" title="Facebook Organization">
          <Image {...Facebook} alt="Facebook Organization" />
        </Link>{" "}
        and other developers&nbsp;
        <Link
          href="https://github.com/reactiflux"
          title="Reactiflux Developers"
        >
          <Image {...Console} alt="Reactiflux Developers" />
        </Link>{" "}
        in the community&nbsp;
        <Link href="https://discord.gg/reactiflux" title="Reactiflux Discord">
          <Image {...Community} alt="Reactiflux Discord" />
        </Link>
        . Come chat about tech related to React & JavaScript or ask for help!
      </p>
      <P>
        <ButtonLink
          href="https://discord.gg/reactiflux"
          title="Reactiflux Discord"
        >
          Join Reactiflux
        </ButtonLink>
        <ButtonLink href="/schedule/" title="Q&A Schedule" secondary>
          Q&A Schedule
        </ButtonLink>
      </P>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const fallbackUserCount = 200000;

  try {
    const r = await fetch(
      `https://discord.com/api/v9/invites/reactiflux?with_counts=true&with_expiration=true`,
      { method: "get" },
    );
    const data = await r.json();

    return {
      revalidate: 60,
      props: {
        userCount: data?.approximate_member_count || fallbackUserCount,
      },
    };
  } catch {
    return {
      revalidate: 60,
      props: {
        userCount: fallbackUserCount,
      },
    };
  }
};

export default Index;
