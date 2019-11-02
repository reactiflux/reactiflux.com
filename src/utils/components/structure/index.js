import React from "react";
import styled from "styled-components";
import { ReadMore } from "../misc";
import { Toggle, LinkList } from "../links/";

export const Header = styled.header`
  display: flex;
  padding: 24px 32px;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 2;
  @media (max-width: 1020px) {
    padding: 14.625px;
  }
`;

export const Navigation = styled.nav`
  @media (max-width: 768px) {
    position: absolute;
    top: -100vh;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    overflow-y: hidden;
    transition: all 0.3s ease;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SideBarInner = styled.div`
  display: inline-flex;
  flex-flow: column;
  flex-basis: 30%;
  width: 100%;
  padding-left: 0;
  padding-right: 20px;
  @media (max-width: 768px) {
    flex-basis: auto;
    max-width: 300px;
    align-items: center;
    align-self: flex-start;
  }
`;

export const FrontPage = styled.main`
  display: flex;
  flex-flow: column nowrap;
  @media (max-width: 425px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: #02d8ff;
  font-size: 200px;
  line-height: 200px;
  letter-spacing: -13px;
  font-family: "Space Mono", monospace;
  align-self: flex-start;
  flex-basis: 100%;
  min-height: 60px;
  @media (max-width: 1200px) {
    font-size: 180px;
    line-height: 180px;
  }
  @media (max-width: 1020px) {
    font-size: 140px;
    line-height: 140px;
  }
  @media (max-width: 700px) {
    font-size: 80px;
    line-height: 80px;
    letter-spacing: -8px;
  }
  @media (max-width: 420px) {
    font-size: 55px;
    line-height: 55px;
    letter-spacing: -6px;
  }
`;

export const Subtitle = styled.span`
  position: absolute;
  color: #dd1d64;
  font-size: 36px;
  font-family: "Poppins", sans-serif;
  line-height: 0.8;
  font-weight: 600;
  right: -40px;
  top: 37px;
  letter-spacing: 0px;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    right: -60px;
    top: 34px;
  }
  @media (max-width: 1020px) {
    font-size: 26px;
    line-height: 26px;
    top: 23px;
    right: -40px;
  }
  @media (max-width: 760px) {
    font-size: 20px;
    line-height: 20px;
    right: 0px;
  }
  @media (max-width: 700px) {
    font-size: 15px;
    line-height: 15px;
    top: 12px;
    right: -30px;
  }
  @media (max-width: 420px) {
    font-size: 12px;
    line-height: 12px;
    top: 10px;
    ${"" /* right: -24px; */}
  }
`;

export const Footer = styled.footer`
  flex-basis: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 0 24px;
  max-width: 1240px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-flow: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  @media (max-width: 768px) {
    flex-flow: column wrap;
    align-items: center;
  }
`;

export const MarkdownContainer = styled.div`
  display: inline-flex;
  flex-flow: column;
  flex-basis: ${props => (props.transcript ? "70%" : "70%")};
  max-width: ${props => (props.transcript ? "1192px" : "800px")};
  @media (max-width: 768px) {
    flex-basis: auto;
  }
`;

export const SideBar = ({ children, active, toggle, isToc, toc }) => (
  <SideBarInner>
    <ReadMore onClick={toggle}>
      Read {active ? "less" : "more"} <Toggle active={active} />
    </ReadMore>
    {isToc ? (
      <div
        style={{ display: active ? "block" : "none", alignSelf: "flex-start" }}
        dangerouslySetInnerHTML={{ __html: toc }}
      />
    ) : (
      <LinkList>{children}</LinkList>
    )}
  </SideBarInner>
);

export const TitleBox = styled.div`
  position: relative;
  align-self: flex-start;
`;

export const SmallTitle = styled.h1`
  font-size: 4rem;
  line-height: 4rem;
  color: #02d8ff;
  letter-spacing: -4px;
  font-family: "Space Mono", monospace;
  align-self: flex-start;
  width: 100%;
  min-height: 4rem;
`;

export const Text = styled.p`
  font-size: ${32 / 19}rem;
  font-weight: 500;
  line-height: 1.5;
  color: #52244f;
  letter-spacing: -1px;
  @media (max-width: 425px) {
    font-size: 19px;
  }
`;
