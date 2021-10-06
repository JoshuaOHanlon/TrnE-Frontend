import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavComp from './Nav';
import Home from './Home/Home';
import Browse from './Browse/Browse';
import TournamentListing from './Listing/TournamentListing';
import CreateTournament from './Create/CreateTournament';
import SignUp from './Create/SignUp';
import Login from './Create/Login';
import Profile from './Auth/Profile';

import { LayoutStyle } from '../styles/LayoutStyle';
import UserSignup from './Auth/UserSignup';

const Layout = () => {

  return (
    <Router>
      <LayoutStyle>
        <NavComp />
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
          <Route path='/userSignup'>
            <UserSignup />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/profile'>
            <Profile />
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