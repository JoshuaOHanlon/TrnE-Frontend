import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import { getUserByUsername, postUser } from '../../requests/Request';

const UserSignup = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  let history = useHistory();

  /*
    - Redirect here after signup
    - Check if user exists
    - POST user data to db
    - Redirect to '/'

  */

  if (isLoading) {
    return <div>Loading ...</div>
  } else {
    if (isAuthenticated) {
      getUserByUsername(user.nickname, (res) => {
        if (res.data === '') {
          const username = user['https://myapp.example.com/username'];
          const newUser = {
            username: username,
            password: user.password,
            firstName: user.given_name || username,
            lastName: user.family_name || username,
            ign: username
          };

          postUser(newUser, (res) => {
            console.log(res);
            history.push('/');
          });
        }
      });
      return (
        isAuthenticated && (
          <div>Loaded</div>
        )
      );
    }
    if (!isLoading) {
      history.push('/');

      return (
        <div>Loaded</div>
      );
    }
  }



};

export default UserSignup;
