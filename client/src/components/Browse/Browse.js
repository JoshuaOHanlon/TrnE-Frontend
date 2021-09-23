import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { BrowseStyle, BrowseCont, BrowseTitle, BrowseNav, TCardListStyle } from '../../styles/BrowseModules/BrowseStyle';
import { getTournaments } from '../../requests/Request';
import TournamentCard from './TournamentCard';


const Browse = () => {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    getTournaments((res) => {
      setTournaments(res.data);
    });
  }, [tournaments]);

  let history = useHistory();

  const createRedirect = () => {
    history.push('/create');
  }

  return (
    <BrowseStyle>
      <BrowseCont>
        <BrowseTitle>
          <h1>Browse Tournaments</h1>
          <hr />
          <BrowseNav>
            <div className='browseBar'>
              <p>Total Tournaments: {tournaments.length}</p>
            </div>
            <Button variant='outline-light' onClick={createRedirect} >Create</Button>
          </BrowseNav>
        </BrowseTitle>
        <TCardListStyle>
          {
            tournaments.map((trne, i) => {
              return (
                <TournamentCard key={i} trne={trne} />
              );
            })
          }
        </TCardListStyle>
      </BrowseCont>
    </BrowseStyle>
  );
};

export default Browse;
