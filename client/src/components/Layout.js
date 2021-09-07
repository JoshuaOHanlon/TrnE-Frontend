import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Nav from './Nav';
import Home from './Home/Home';
import Browse from './Browse/Browse';
import TournamentListing from './Listing/TournamentListing';
import CreateTournament from './Create/CreateTournament';

import { LayoutStyle } from '../styles/LayoutStyle';

const Layout = () => {
  return (
    <Router>
      <LayoutStyle>
        <Nav />
        <Switch>
          <Route path='/browse'>
            <Browse />
          </Route>
          <Route path='/tournament/:id'>
            <TournamentListing />
          </Route>
          <Route path='/create'>
            <CreateTournament />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </LayoutStyle>
    </Router>
  );
};

export default Layout;