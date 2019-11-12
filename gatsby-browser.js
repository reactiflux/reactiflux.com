import ReactGA from 'react-ga';

ReactGA.initialize('UA-68559005-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};
