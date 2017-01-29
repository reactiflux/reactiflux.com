import ReactGA from 'react-ga'

ReactGA.initialize('UA-89925304-2');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname)
}
