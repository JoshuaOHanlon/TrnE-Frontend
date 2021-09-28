import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

import { ProfileStyle } from '../../styles/Create/ProfileStyle';

const Profile = (props) => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading && isAuthenticated) {
    return <div>Loading ...</div>;
  };

  if (!isAuthenticated) {
    loginWithRedirect();
    return (
      <div>Loading ...</div>
    );
  }

  return (
    isAuthenticated && (
      <ProfileStyle>
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.nickname}</p>
          <p>{user.family_name}</p>
          <p>{user.given_name}</p>
          <p>{user.username}</p>
        </div>
      </ProfileStyle>
    )
  );

};

export default Profile;
