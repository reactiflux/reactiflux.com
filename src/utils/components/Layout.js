import React from 'react';
import { Container } from './index';
import { TypographyStyle } from 'react-typography';

// Add our typefaces.
import 'typeface-poppins';
import 'typeface-work-sans';
import 'typeface-space-mono';

import NavBar from './NavBar';
import Footer from './Footer';

import typography from '../typography';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    const undef = typeof window !== 'undefined';
    this.state = {
      menu: false,
      transcript: undef ? (window.innerWidth < 768 ? false : true) : false,
      toc: true,
      width: undef ? window.innerWidth : null,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    if (this.onMobile()) {
      const { transcript, toc } = this.state;
      if (!transcript || !toc) {
        this.setState({
          transcript: true,
          toc: true,
        });
      }
    }
  };

  onMobile = () => window.innerWidth <= 768;

  toggle = (item) => () => {
    this.setState((prevState) => ({
      [item]: !prevState[item],
    }));
  };

  close = (item) => () => {
    if (this.onMobile()) {
      this.setState({
        [item]: false,
      });
    }
  };

  render() {
    const { transcript, toc } = this.state;

    const children = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, {
        transcript,
        toc,
        toggle: this.toggle,
        close: this.close,
      }),
    );

    return (
      <div>
        <TypographyStyle typography={typography} />
        <NavBar />
        <Container
          style={{
            maxWidth: 1192,
            padding: `0 ${typography.rhythm(3 / 4)} ${typography.rhythm(
              1,
            )} ${typography.rhythm(3 / 4)}`,
            margin: '0 auto',
            marginBottom: 70,
          }}
        >
          {children}
        </Container>
        <Footer />
      </div>
    );
  }
}
