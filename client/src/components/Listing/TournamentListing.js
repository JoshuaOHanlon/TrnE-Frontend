import React, { useState } from 'react';
import { TournamentStyle } from '../../styles/TournamentStyle';
import InformationModule from './InformationModule';

import Overview from './InfoModules/Overview';
import Participants from './InfoModules/Participants';

const TournamentListing = () => {
  const [currentInfoModule, setCurrentInfoModule] = useState('OVERVIEW');

  const handleChange = (selectedModule) => {
    setCurrentInfoModule(selectedModule);
  };

  if (currentInfoModule === 'OVERVIEW') {
    return(
      <TournamentStyle>
        <h1>Tournament Title</h1>
        <InformationModule onChange={handleChange} />
        <Overview />

      </TournamentStyle>
    );
  } else if (currentInfoModule === 'PARTICIPANTS') {
    return(
      <TournamentStyle>
        <h1>Tournament Title</h1>
        <InformationModule onChange={handleChange} />
        <Participants />

      </TournamentStyle>
    );
  }
};

export default TournamentListing;
