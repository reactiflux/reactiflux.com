import React from "react";

import { Children, Toggle, Wrapper } from "./MobileNavStyles";

export const MobileNav = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <Wrapper onClick={toggle}>
      <Toggle>{isOpen ? "Hide" : "Show"} Menu</Toggle>
      <Children isOpen={isOpen}>
        {isOpen
          ? children
          : React.Children.map(children, (child) =>
              React.cloneElement(child, { tabIndex: -1 }),
            )}
      </Children>
    </Wrapper>
  );
};
