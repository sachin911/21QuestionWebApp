import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app/App';
import Login from './containers/login';
import DashBoard from './containers/dashBoard';
import Game from './containers/game';
import collapsibleRow from './components/collapsibleRow';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="census" component={collapsibleRow} />
		<Route path="login" component={Login} />
		<Route path="dashboard" component={DashBoard} />
		<Route path="game" component={Game} />
  </Route>
);
