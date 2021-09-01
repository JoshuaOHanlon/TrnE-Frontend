import React from 'react';
import { HomeStyle } from '../../styles/HomeModules/HomeStyle';
import Hero from './Hero';
import About from './About';

const Home = () => {

  return(
    <HomeStyle>
      <Hero />
      <About />
    </HomeStyle>
  );

};

export default Home;
