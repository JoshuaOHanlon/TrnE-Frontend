import React from 'react';
import { AboutStyle } from '../../styles/HomeModules/AboutStyle';

const About = () => {
  return (
    <AboutStyle>
      <div>
        <h2>Get Involved</h2>
        <div className='aboutText'>
          <p>Signup.</p>
          <p>Browse tournaments.</p>
          <p>Join your favorites or create your own.</p>
        </div>
      </div>
      <div>
        <h2>Supported Games</h2>
        <div className='aboutText'>
          <p>Valorant</p>
          <p>League of Legends</p>
          <p>Super Smash Bros. Ultimate</p>
          <p>Super Smash Bros. Melee</p>
        </div>
      </div>
    </AboutStyle>
  );
};

export default About;
