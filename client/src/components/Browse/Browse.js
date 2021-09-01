import React, { useState, useEffect } from 'react';
import { BrowseStyle, BrowseCont, TCardListStyle } from '../../styles/BrowseModules/BrowseStyle';
import { getTournaments } from '../../requests/Request';
import TournamentCard from './TournamentCard';


const Browse = () => {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    getTournaments((res) => {
      setTournaments(res.data);
    });
  });

  return (
    <BrowseStyle>
      <BrowseCont>
        <h1>Browse</h1>
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
