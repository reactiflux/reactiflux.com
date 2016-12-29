import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { Reactiflux } from '../assets/logos';

export const Header = styled.header`
  display: flex;
  padding: 24px 32px;
  max-width: 1440px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

export const Navigation = styled.nav`
`;

export const Logo = styled(Link)`
  display: inline-block;
  width: 59px;
  height: 52px;
  background: url(${Reactiflux});
  text-indent: -9999px;
`;


export const StyledLink = styled(Link)`
  color: #dd1d64;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const NavigationLink = styled(StyledLink)`
  padding-bottom: 6px;
  margin-right: 40px;
  border-bottom: solid 4px rgba(255, 255, 255, 0);
  transition: all 175ms cubic-bezier(0.65, 0.05, 0.36, 1);
  &:hover {
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 6px solid #02d8ff;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

export const LinkList = styled.ul`
  flex-basis: 30%;
  margin-left: 0;
`;

export const Title = styled.h1`
  color: #02d8ff;
  font-size: 200px;
  position: relative;
  font-size: ${props => props.secondary ? '8.4rem' : '10.5rem'};
  line-height: ${props => props.secondary ? '8.4rem' : '10.5rem'};
  letter-spacing: -13px;
  font-family: 'Space Mono', monospace;
  flex-basis: 100%;
`;

export const Subtitle = styled.span`
  position: absolute;
  color: #dd1d64;
  font-size: 36px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  right: 100px;
  top: -45px;
  letter-spacing: 0px;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-size: ${32/19}rem;
  font-weight: 500;
  line-height: 1.5;
  color: #52244f;
  letter-spacing: -1px;
`;

export const Button = styled(Link)`
  display: inline-block;
  height: ${72/19}rem;
  width: ${320/19}rem;
  margin-right: 32px;
  border: 3px solid;
  border-radius: 100px;
  border-color: #dd1d64;
  text-align: center;
  text-decoration: none;
  font-size: ${24/19}rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  line-height: ${66/19}rem;
  color: ${props => props.primary ? '#ffffff' : '#dd1d64'};
  background-color: ${props => props.primary ? '#dd1d64' : '#ffffff'};
  transition: all 175ms ease;
  &:hover {
    color: ${props => props.primary ? '#ffffff' : '#ffffff'};
    background-color: ${props => props.primary ? '#ba1853' : '#dd1d64'};
  }
`;

const MovedLink = styled.a`
  display: inline-block;
  vertical-align: middle;
  line-height: 0;
  position: relative;
  overflow: hidden;
  img {
    margin-bottom: 0;
  }
`;

export const IconLink = ({ to, title, src, alt }) =>
  <MovedLink href={to} title={title}>
    <img src={src} alt={alt}/>
  </MovedLink>

export const Footer = styled.footer`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  margin-bottom: 60px;
  max-width: 1192px;
  justify-content: space-between;
  align-items: center;
`;

export const Copyright = styled.p`
  color: #52244f;
  line-height: 19px;
  margin-bottom: 6px;
`;
export const Credits = styled.p`
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 0;
  color: #52244f;
  font-family: 'Space Mono', monospace;
`;

export const SocialLinks = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const MarkdownContainer = styled.div`
  display: inline-flex;
  flex-flow: column;
  max-width: 100%;
`;
