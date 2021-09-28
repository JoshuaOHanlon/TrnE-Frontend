import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { NavContainer } from '../styles/NavStyle';
import LoginButton from './Auth/LoginButton';
import LogoutButton from './Auth/LogoutButton';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

const NavComp = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  };

  return (
    <NavContainer>
      <Navbar fixed='top' variant='dark' className='navChanges'>
        <Container>
          <Navbar.Brand href='/'>TrnE</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="/"><span>Home</span></Nav.Link>
            <Nav.Link href="/browse"><span>Browse Tournaments</span></Nav.Link>
            <Nav.Link href="/create"><span>Create Tournament</span></Nav.Link>
            <Nav.Link href="/profile"><span>Profile</span></Nav.Link>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}

          </Nav>
        </Container>
        <Container>

        </Container>
      </Navbar>
    </NavContainer>
  );
}

export default NavComp;
