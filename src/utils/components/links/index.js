import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { MenuIcon } from '../../../assets/logos';
import { getAnchor } from '../../anchor';

export const StyledLink = styled(Link)`
  color: #dd1d64;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledAnchor = StyledLink.withComponent('a');

export const NavigationLink = styled(StyledLink)`
  padding-bottom: 6px;
  margin-right: 40px;
  border-bottom: solid 4px rgba(255, 255, 255, 0);
  transition: all 175ms cubic-bezier(0.65, 0.05, 0.36, 1);
  &:hover {
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 4px solid #02d8ff;
  }
  &:last-child {
    margin-right: 0px;
  }
  @media (max-width: 768px) {
    margin-right: 0px;
    font-size: 30px;
    line-height: 30px;
  }
`;

export const LinkList = styled.ul`
  margin-left: 0;
  list-style: none;
  align-self: flex-start;
`;

export const Buttons = styled.div`
  display: inline-flex;
  min-height: 72px;
  @media (max-width: 425px) {
    flex-flow: column;
  }
`;

export const Button = styled(Link)`
  display: inline-block;
  height: ${72 / 19}rem;
  width: ${320 / 19}rem;
  border: 3px solid;
  margin-bottom: 20px;
  border-radius: 100px;
  border-color: #dd1d64;
  text-align: center;
  text-decoration: none;
  font-size: ${24 / 19}rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  line-height: ${66 / 19}rem;
  color: ${(props) => (props.primary ? '#ffffff' : '#dd1d64')};
  background-color: ${(props) => (props.primary ? '#dd1d64' : '#ffffff')};
  transition: all 175ms ease;
  &:hover {
    color: ${(props) => (props.primary ? '#ffffff' : '#ffffff')};
    background-color: ${(props) => (props.primary ? '#ba1853' : '#dd1d64')};
  }
  &:first-child {
    margin-right: 32px;
  }
  @media (max-width: 425px) {
    &:first-child {
      margin-right: 0;
    }
  }
`;

export const MovedLink = styled.a`
  display: inline-block;
  vertical-align: middle;
  line-height: 0;
  position: relative;
  overflow: hidden;
  img {
    margin-bottom: 0;
  }
`;

export const IconLink = ({ to, title, src, alt, target }) => (
  <MovedLink href={to} title={title} target={target}>
    <img src={src} alt={alt} />
  </MovedLink>
);

export const Toggle = ({ onClick, active }) => (
  <Arrow
    onClick={onClick}
    style={{ transform: active ? 'rotate(180deg)' : 'rotate(0deg)' }}
  />
);

export const SocialLinks = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
`;

export const Arrow = styled.div`
  display: none;
  width: 28px;
  height: 20px;
  color: #dd1d64;
  z-index: 1;
  background: url(${MenuIcon});
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    display: inline;
  }
`;

export const HeadingLink = ({ value }) => (
  <StyledAnchor href={getAnchor(value)}>{value}</StyledAnchor>
);
