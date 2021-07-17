import styled from "styled-components";

import { background, boxShadow, mobilePadding, pink } from "@utils/theme";

export const Children = styled.div`
  background: white;
  bottom: 0;
  box-shadow: ${boxShadow};
  left: 0;
  padding-bottom: ${mobilePadding};
  position: absolute;
  right: 0;
  transform: translateY(${(props) => (props.isOpen ? "0" : "100%")});
  transition: all 0.4s ease;
  z-index: -1;
`;

export const Toggle = styled.button`
  background: white;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  height: ${mobilePadding};
  outline: none;
  width: 100%;

  :focus,
  :hover {
    background: ${pink};
    color: white;
  }
`;

export const Wrapper = styled.div`
  background: ${background};
  bottom: 0;
  box-shadow: ${boxShadow};
  display: flex;
  flex-wrap: nowrap;
  font-size: 1.6rem;
  justify-content: space-around;
  line-height: 42px;
  position: fixed;
  width: 100%;
  z-index: 999;

  a {
    padding: 0 6px;

    :nth-child(2n) {
      background: #fafafa;
    }

    &:after {
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;
