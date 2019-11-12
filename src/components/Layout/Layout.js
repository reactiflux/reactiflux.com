import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useIsMobile } from '@hooks';
import { getTheme } from '@utils/theme';

import { Footer } from './Footer';
import { Main, Wrapper } from './LayoutStyles';
import { MainStyles } from './MainStyles';
import { MarkdownStyles } from './MarkdownStyles';
import { Menu } from './Menu';
import { SEO } from './SEO';

import 'minireset.css';
import 'typeface-poppins';
import 'typeface-work-sans';
import 'typeface-space-mono';

export function Layout({ as, children, title, description, ...props }) {
  const isMobile = useIsMobile();

  return (
    <ThemeProvider theme={getTheme({ isMobile })}>
      <Wrapper>
        <MainStyles />
        <MarkdownStyles />
        <Menu />
        <Main as={as} {...props}>
          <SEO title={title} description={description} />
          {children}
        </Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}
