import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useHistory } from 'react-router-dom';

import { LoginStyle, LoginContainer, LoginForm } from '../../styles/Create/LoginStyle';

const Login = () => {
  const [user, setUser] = useState({});



  const handleChange = (e) => {
    const newUser = user;
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const handleSubmit = (e) => {
    //  TODO: Handle Auth
    e.preventDefault();

  };

  return(
    <LoginStyle>
      <LoginContainer>
        <div className='loginTitle'>
          <h1>Login</h1>
        </div>
        <LoginForm>
          <Form className='loginFormStyling'>
            <Row className='mb-3'>
              <Form.Group as={Col} className='mb-3'>
                <FloatingLabel label='Username'>
                  <Form.Control name='username' onChange={handleChange} placeholder='Enter username' />
                </FloatingLabel>
              </Form.Group>
            </Row>

            <Row className='mb-3'>
              <Form.Group as={Col} className='mb-3'>
                <FloatingLabel label='Password'>
                  <Form.Control name='password' onChange={handleChange} placeholder='Enter password' />
                </FloatingLabel>
              </Form.Group>
            </Row>

            <Button variant='primary' type='button' onClick={handleSubmit}>
              Login
            </Button>
          </Form>
        </LoginForm>
      </LoginContainer>
    </LoginStyle>
  );
};

export default Login;
