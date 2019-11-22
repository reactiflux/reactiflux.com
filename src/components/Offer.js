import React from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { Tag } from '@components';
import { addLinks, extractTags } from '@utils/string';
import { pink } from '@utils/theme';

const Wrapper = styled.div`
  ${(props) =>
    props.last
      ? ''
      : css`
          border-bottom: 2px solid ${pink};
          margin-bottom: 4rem;
          padding-bottom: 2rem;
        `}

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Pre = styled.pre`
  font-family: inherit;
  white-space: pre-wrap;
`;


const GetInTouch = styled.p`
  flex-grow: 1;
  margin-bottom: 0;
  padding-left: 1rem;
  text-align: right;

  button {
    background: none;
    border: none;
    color: ${(props) => transparentize(0.5, pink(props))};
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    padding: 0;
  }
`;

export const Offer = ({ author, date, last, message, onClickGetInTouch }) => {
  const [tags, content] = extractTags(message);
  return (
    <Wrapper last={last}>
      <p>
        {tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </p>
      {content.trim() ? (
        <>
          <Pre>{addLinks(content)}</Pre>
          <hr />
        </>
      ) : null}
      <div>
        <p>
          Posted by <strong>{author.name}</strong> on{' '}
          {moment(date).format('MMMM Do YYYY')}
        </p>
        {onClickGetInTouch ? (
          <GetInTouch>
            <button onClick={onClickGetInTouch}>How can I get in touch?</button>
          </GetInTouch>
        ) : null}
      </div>
    </Wrapper>
  );
};
