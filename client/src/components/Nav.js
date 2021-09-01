import React from 'react';
import { NavContainer } from '../styles/NavStyle';

const Nav = () => {
  return (
    <NavContainer>
      <div className='navCont'>
        <div className='logoContainer'>
          <p>Temp NavBar</p>
          <hr />
        </div>
        <div className='menuContainer'>
          <a href='/'>
            <span>Home</span>
          </a>
          <a href='/browse'>
            <span>Browse Tournaments</span>
          </a>
        </div>
        <div className='ruleCont'>
          <hr />
        </div>
      </div>
    </NavContainer>
  );
}

export default Nav;
