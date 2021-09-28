import React from 'react';
import { AboutStyle } from '../../styles/HomeModules/AboutStyle';

import Profile from '../Auth/Profile';

const About = () => {
  return (
    <AboutStyle>
      <h1>About</h1>
      <Profile />

    </AboutStyle>
  );
};

export default About;
