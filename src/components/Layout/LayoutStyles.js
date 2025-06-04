import React from "react";
import styled, { css } from "styled-components";

import { pink } from "@utils/theme";

export const mainPadding = css`
  padding: 10px;

  @media (min-width: 1200px) {
    padding: 10px calc(10px + ((100vw - 1200px) / 2));
  }
`;

const title = {
  responsive: (size) => `${size * 0.9}vw`,
  static: (size) => `${size * 11.75}px`,
};

const homeLayout = css`
  display: block;

  h1 {
    overflow: hidden;
  }

  p {
    font-size: calc(1.7rem + 1vw);
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 1.5;
  }
  .fonts-fallback p {
    letter-spacing: 0.1rem !important;
  }

  a {
    display: inline-block;
    vertical-align: middle;
  }

  p a {
    display: inline-flex;
  }

  p a img {
    padding-bottom: 2px;
  }
`;

const standardLayout = css`
  > * {
    z-index: 2;
  }

  > h1 {
    z-index: 1;
  }

  details {
    margin-bottom: 1rem;

    & summary {
      cursor: pointer;
    }

    &:last-of-type {
      margin-bottom: 2rem;
    }
  }

  blockquote {
    font-size: 0.75em;
    max-width: 40em;
    margin-left: 1rem;
    padding-left: 0.75rem;
    border-left: 0.2rem solid #0003;
  }

  @media (max-width: 819px) {
    display: grid;
    grid-template-rows: fit-content fit-content auto;
    grid-template-columns: 60% 100%;
    transform: translateX(
      ${(props) => (props.isOpen ? "0" : "calc(10px - 60%)")}
    );
    transition: 0.4s ease transform;

    > * {
      grid-column: 2;
      grid-row: 2;
    }

    > h1:first-child {
      grid-column: 2;
      grid-row: 1;
    }

    > nav,
    > form {
      grid-column: 1;
      grid-row: 2;
      ${(props) =>
        props.sidebar &&
        css`
          padding-right: 1rem;
        `}
    }

    ${(props) =>
      props.sidebar &&
      css`
        > div {
          padding-left: 4rem;
        }
      `}
  }

  @media (min-width: 820px) {
    display: grid;
    grid-template-rows: fit-content fit-content auto;
    grid-template-columns: 1fr 2fr;

    > * {
      grid-column: 2;
      grid-row: 2 / span 2;
      min-width: calc(200% / 3);
    }

    > :not(nav):last-child {
      transform: translateX(-25%);
    }

    > h1:first-of-type {
      grid-column: 1 / span 2;
      grid-row: 1;
    }

    > nav,
    > form {
      grid-column: 1;
      grid-row: 2;
      min-width: calc(100% / 3);
      padding-right: 2rem;
    }
  }
`;

const homeTitle = css`
  h1 {
    font-size: ${title.responsive(18)};
    letter-spacing: ${title.responsive(-1.3)};

    span {
      position: absolute;
      font-size: ${title.responsive(3.6)};
      left: ${title.responsive(69)};
      top: ${title.responsive(3)};
    }
  }
  .fonts-fallback h1 {
    letter-spacing: ${title.responsive(-1.5)};
  }

  @media (min-width: 1300px) {
    h1 {
      font-size: ${title.static(18)};
      letter-spacing: ${title.static(-1.3)};

      span {
        position: absolute;
        font-size: ${title.static(3.6)};
        left: ${title.static(69)};
        top: ${title.static(3)};
      }
    }
  }
`;

const largeTitle = css`
  h1 {
    font-family: "Space Mono", monospace;
    font-size: ${title.responsive(5)};
    letter-spacing: ${title.responsive(-0.4)};
    line-height: 1;
    position: relative;
  }
  .fonts-fallback h1 {
    letter-spacing: ${title.responsive(-0.48)};
  }

  @media (min-width: 1300px) {
    h1 {
      font-size: ${title.static(5)};
    }
    .fonts-fallback h1 {
      letter-spacing: ${title.static(-0.48)};
    }
  }
`;

export const Main = styled.main`
  flex-grow: 1;

  ${mainPadding}

  ${(props) => (!props.homepage && props.largeTitle ? largeTitle : "")}
  ${(props) => (props.homepage ? homeTitle : "")}
  ${(props) => (props.homepage ? homeLayout : standardLayout)}
`;

const fixedSidebarButton = css`
  font-size: 3rem;
  left: 0;
  position: fixed;
  top: 0;
  transform: rotate(90deg) translateX(-30px);
  transform-origin: bottom left;

  &:focus {
    border: 3px solid ${pink};
    margin: -9px -3px;
  }
`;

export const SidebarButton = styled.button`
  background: none;
  border: none;
  color: ${pink};
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 1.9rem;
  line-height: 1;
  outline: none;
  padding: 0 3px;
  white-space: nowrap;

  @media (min-width: 820px) {
    display: none;
  }

  ${(props) => props.fixed && fixedSidebarButton}
`;

export function SidebarToggleButton(props) {
  return (
    <SidebarButton {...props}>
      {props.isOpen ? "Hide" : "Show"} Menu
    </SidebarButton>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${(props) =>
    props.theme.mobilePadding
      ? `calc(100vh - ${props.theme.mobilePadding})`
      : "100vh"};

  .headroom-wrapper {
    position: relative;
    z-index: 4;
  }
`;
