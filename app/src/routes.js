import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import store, { history } from './store';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import App from 'components/App';
import * as Pages from 'pages';

const RouterApp = (props) => (
  <ApolloProvider {...props} client={client} store={store}>
    <Router
      history={history} // Scroll to top on route transitions
      onUpdate={() => window.scrollTo(0, 0)} // eslint-disable-line
    >
      <Route path="/" component={App}>
        <IndexRoute component={Pages.LandingPage} />
        <Route path="*" component={Pages.NotFoundPage} />
      </Route>
    </Router>
  </ApolloProvider>
);

export default RouterApp;
