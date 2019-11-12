import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { Reactiflux } from '../../assets/logos';
import { MarkdownContainer } from './structure/';

export const ReadMore = styled.div`
  display: none;
  width: 100%;
  margin-bottom: 20px;
  color: #dd1d64;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

export const Copyright = styled.p`
  color: #52244f;
  line-height: 19px;
  margin-bottom: 6px;
`;
export const Credits = styled.p`
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 6px;
  color: #52244f;
  font-family: 'Space Mono', monospace;
`;

export const PublishDate = styled.time`
  font-size: 0.8rem;
  font-style: italic;
`;

export const Transcript = ({ article }) => (
  <MarkdownContainer transcript className="markdown">
    <PublishDate>Transcript from {article.date}</PublishDate>
    <div dangerouslySetInnerHTML={{ __html: article.body }} />
  </MarkdownContainer>
);

export const Logo = styled(Link)`
  display: inline-block;
  width: 59px;
  height: 52px;
  background: url(${Reactiflux});
  text-indent: -9999px;
  z-index: 3;
`;
