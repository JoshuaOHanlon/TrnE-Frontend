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

  let username, userData;
  if (!isLoading && isAuthenticated) {
    username = user['https://myapp.example.com/username'];
    userData = user['https://myapp.example.com/user_metadata'];
  }

  return (
    isAuthenticated && (
      <ProfileStyle>
        <div className='profCont'>
          <div className='imgCont'>
            <img src={`https://avatars.dicebear.com/api/human/${username}.svg`} alt={user.name} />
          </div>
          <div className='usernameCont'>
            <span>Username</span>
            <h2>{username}</h2>
            <span>Name</span>
            <p>{userData.firstName} {userData.lastName}</p>
          </div>
        </div>
        <div>
          <h3>{username}'s Tournaments</h3>
        </div>
        <hr />
        <div className='userTrneBar'>
          <p>Total Tournaments: {userTournaments.length}</p>
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
