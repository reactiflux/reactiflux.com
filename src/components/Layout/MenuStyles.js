import styled from 'styled-components';

import { background, blue, boxShadow, pink } from '@utils/theme';

export const Logo = styled.img`
  padding: 6px;
`;

export const Space = styled.span`
  flex-grow: 1;
`;

export const Wrapper = styled.menu`
  background: ${background};
  display: flex;
  height: 64px;
  padding: 0 calc((100vw - 1440px) / 2);

  .headroom--scrolled & {
    box-shadow: ${boxShadow};
  }

  a {
    align-items: center;
    color: ${pink};
    display: flex;
    position: relative;
    text-decoration: none !important;
    white-space: nowrap;
  }

  a:first-child {
    flex-shrink: 0;
  }

  a {
    &:after {
      background: ${blue};
      content: '';
      display: block;
      height: 0;
      position: absolute;
      transition: all 0.3s ease;
    }

    &[aria-current='page']:after,
    &:focus:after,
    &:hover:after {
      height: 4px;
    }

    &[aria-current='page']:after {
      background: ${pink};
    }
  }

  /* direct children means desktop menu only */
  > a:not(:first-child) {
    font-size: 1.6rem;
    padding: 0 8px;

    &[aria-current='page']:after,
    &:after {
      bottom: 12px;
      left: 8px;
      right: 8px;
    }
  }

  @media (min-width: 930px) {
    & > a:not(:first-child) {
      font-size: 1.9rem;
      margin-left: 16px;
      padding: 0 12px;

      &[aria-current='page']:after,
      &:after {
        left: 12px;
        right: 12px;
      }
    }
  }
`;
