import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getTournamentByUserUsername } from '../../requests/Request';

import { ProfileStyle } from '../../styles/Create/ProfileStyle';
import TournamentCard from '../Browse/TournamentCard';
import { TCardListStyle } from '../../styles/BrowseModules/BrowseStyle';

const Profile = (props) => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [userTournaments, setUserTournaments] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      const currentUsername = user['https://myapp.example.com/username'];

      getTournamentByUserUsername(currentUsername, (res) => {
        setUserTournaments(res.data);
      });

    }
  });

  if (isLoading && isAuthenticated) {
    return <div>Loading ...</div>;
  };

  if (!isLoading && !isAuthenticated) {
    loginWithRedirect();
    return (
      <div>Loading ...</div>
    );
  }

  let username;
  if (!isLoading && isAuthenticated) {
    username = user['https://myapp.example.com/username'];
  }

  //  TODO: Import tournament card component

  return (
    isAuthenticated && (
      <ProfileStyle>
        <div className='profCont'>
          <div className='imgCont'>
            <img src={user.picture} alt={user.name} />
          </div>
          <div className='nameCont'>
            <span>Username</span>
            <h2>{username}</h2>
            <p>{user.email}</p>
          </div>
        </div>
        <TCardListStyle>
          {
            userTournaments.map((trne, i) => {
              return (
                <TournamentCard key={i} trne={trne} />
              );
            })
          }
        </TCardListStyle>
      </ProfileStyle>
    )
  );

};

export default Profile;
