import styled from 'styled-components';

import { background, blue, pink } from '@utils/theme';

export const Logo = styled.img`
  padding: 6px;
`;

export const MobileNav = styled.div`
  background: ${background};
  bottom: 0;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: nowrap;
  font-size: 12px;
  justify-content: space-around;
  line-height: 42px;
  position: fixed;
  width: 100%;
  z-index: 999;

  a {
    padding: 0 6px;

    &:after {
      top: 0;
      left: 6px;
      right: 6px;
    }
  }
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
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
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

  @media (min-width: 820px) {
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
