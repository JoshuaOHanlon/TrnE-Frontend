import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

import { TournamentStyle } from '../../styles/TournamentStyle';
import InformationModule from './InformationModule';
import { deleteTournament, getTournamentById } from '../../requests/Request';

import Overview from './InfoModules/Overview';
import Participants from './InfoModules/Participants';

const TournamentListing = () => {
  const [tournament, setTournament] = useState({});

  const { user, isAuthenticated } = useAuth0();

  let { id } = useParams();

  useEffect(() => {
    getTournamentById(id, (res) => {
      setTournament(res.data);
    });
  });

  let currentUsername;
  if (isAuthenticated) {
     currentUsername = user['https://myapp.example.com/username'];
  }

  const [currentInfoModule, setCurrentInfoModule] = useState('OVERVIEW');

  let history = useHistory();

  const handleDelete = (e) => {
    deleteTournament(tournament.id, (res) => {
      console.log(res);
      history.push('/browse');
    });
  };

  const handleChange = (selectedModule) => {
    setCurrentInfoModule(selectedModule);
  };

  if (currentInfoModule === 'OVERVIEW') {
    return(
      <TournamentStyle>
        {
          isAuthenticated && tournament.owner === currentUsername ? <div className='trneNameDeleteCont'>
            <h1>{tournament.name}</h1>
            <Button variant='outline-danger' type='button' onClick={handleDelete}>DELETE</Button>
          </div> : <h1>{tournament.name}</h1>
        }
        <InformationModule onChange={handleChange} />
        <hr />
        <Overview tournament={tournament} />

      </TournamentStyle>
    );
  } else if (currentInfoModule === 'PARTICIPANTS') {
    return(
      <TournamentStyle>
        <h1>{tournament.name}</h1>
        <InformationModule onChange={handleChange} />
        <hr />
        <Participants tournament={tournament} />

      </TournamentStyle>
    );
  }
};

export default TournamentListing;
