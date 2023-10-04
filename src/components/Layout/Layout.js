import React from "react";
import { ThemeProvider } from "styled-components";

import { useIsMobile } from "@helpers";
import { getTheme } from "@utils/theme";

import { Footer } from "./Footer";
import { Main, SidebarToggleButton, Wrapper } from "./LayoutStyles";
import { MainStyles } from "./MainStyles";
import { MarkdownStyles } from "./MarkdownStyles";
import { Menu } from "./Menu";
import { SEO } from "./SEO";

let loaded = false;

export function Layout({
  as,
  children,
  description,
  title,
  sidebar = false,
  ...props
}) {
  // Font correction. This should run exactly once on each page, to fix CLS
  // (cumulative layout shift) SEO issues
  const [hasFonts, setHasFonts] = React.useState(loaded);
  React.useLayoutEffect(() => {
    const handler = () => {
      setHasFonts(true);
      loaded = true;
    };
    if (!loaded) {
      document.fonts.addEventListener("loadingdone", handler);
      return () => document.fonts.removeEventListener("loadingdone", handler);
    }
  }, [hasFonts]);

  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleIsOpen = () => setIsOpen((prev) => !prev);
  React.useEffect(() => {
    if (isOpen && isMobile) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [isOpen, isMobile]);

  return (
    <ThemeProvider theme={getTheme({ isMobile })}>
      <Wrapper className={hasFonts ? "fonts-loaded" : "fonts-fallback"}>
        <MainStyles />
        <MarkdownStyles />
        <Menu />
        <Main largeTitle as={as} {...props} isOpen={isOpen} sidebar={sidebar}>
          <SEO title={title} description={description} />
          {typeof children === "function" ? children(setIsOpen) : children}
          {sidebar ? (
            <SidebarToggleButton isOpen={isOpen} onClick={toggleIsOpen} fixed />
          ) : null}
        </Main>
        {sidebar ? (
          <SidebarToggleButton isOpen={isOpen} onClick={toggleIsOpen} />
        ) : null}
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}
