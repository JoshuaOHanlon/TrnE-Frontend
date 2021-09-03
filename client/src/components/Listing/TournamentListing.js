import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TournamentStyle } from '../../styles/TournamentStyle';
import InformationModule from './InformationModule';
import { getTournamentById } from '../../requests/Request';

import Overview from './InfoModules/Overview';
import Participants from './InfoModules/Participants';

const TournamentListing = () => {
  const [tournament, setTournament] = useState({});

  let { id } = useParams();

  useEffect(() => {
    getTournamentById(id, (res) => {
      setTournament(res.data);
    });
  });

  const [currentInfoModule, setCurrentInfoModule] = useState('OVERVIEW');

  const handleChange = (selectedModule) => {
    setCurrentInfoModule(selectedModule);
  };

  if (currentInfoModule === 'OVERVIEW') {
    return(
      <TournamentStyle>
        <h1>{tournament.name}</h1>
        <InformationModule onChange={handleChange} />
        <Overview tournament={tournament} />

      </TournamentStyle>
    );
  } else if (currentInfoModule === 'PARTICIPANTS') {
    return(
      <TournamentStyle>
        <h1>{tournament.name}</h1>
        <InformationModule onChange={handleChange} />
        <Participants />

      </TournamentStyle>
    );
  }
};

export default TournamentListing;
