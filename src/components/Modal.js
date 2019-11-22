import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { transparentize } from 'polished';

import { background, foreground, pink } from '@utils/theme';

const Backdrop = styled.div`
  background: ${(props) => transparentize(0.2, background(props))};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
`;

const CloseIcon = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 0 1rem;
  color: inherit;
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  height: 3rem;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 3rem;

  :after {
    content: '×';
  }

  :focus,
  :hover {
    background: ${pink};
    color: ${background};
    outline: none;
  }
`;

const Overlay = styled.div`
  background: ${background};
  box-shadow: 0 0 4px ${foreground};
  border-radius: 1rem;
  left: 50%;
  min-width: 240px;
  overflow: hidden;
  padding: 2rem;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;

  > :last-child {
    margin-bottom: 0;
  }
`;

const ReturnFocusOnUnMount = ({ children }) => {
  const previousFocus = React.useRef(document.activeElement);

  React.useEffect(
    () => () => {
      previousFocus.current.focus();
    },
    [],
  );

  return children;
};

export const Modal = ({ children, close, isOpen }) =>
  isOpen
    ? createPortal(
        <ReturnFocusOnUnMount>
          <Backdrop onClick={close} />
          <Overlay>
            <CloseIcon onClick={close} autoFocus />
            {children}
          </Overlay>
        </ReturnFocusOnUnMount>,
        document.getElementById('modals'),
      )
    : null;