import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useHistory } from 'react-router-dom';

import { postUser } from '../../requests/Request';

import { SignUpStyle, SignUpForm } from '../../styles/Create/SignUpStyle';

const SignUp = () => {
  const [method, setMethod] = useState('upload');
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const newUser = user;
    newUser[e.target.name] = e.target.value;
    if (e.target.name === 'username') {
      newUser.ign = e.target.value;
    }
    setUser(newUser);
  };

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    postUser(user, (res) => {
      console.log(res);
      history.push('/');
    });

  };

  const handleRadioChange = (e) => {
    setMethod(e.target.value);
  };

  let photo;

  if (method === 'upload') {
    photo = (
      <Form.Control name='profilePic' onChange={handleChange} type='file' />
    );
  } else if (method === 'link') {
    photo = (
      <Form.Control name='profilePic' onChange={handleChange} placeholder='Image link' />
    );
  }

  return (
    <SignUpStyle>
      <div className='signUpTitle'>
        <h1>Sign Up</h1>
      </div>
      <SignUpForm>
        <Form className='signUpFormStyling'>
          <Row className='mb-3'>
            <Form.Group as={Col} className='mb-3'>
              <FloatingLabel label='First Name'>
                <Form.Control name='firstName' onChange={handleChange} placeholder='Enter first name' />
              </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col} className='mb-3'>
              <FloatingLabel label='Last Name'>
                <Form.Control name='lastName' onChange={handleChange} placeholder='Enter last name' />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Row className='mb-3'>
            <Form.Group as={Col} className='mb-3'>
              <FloatingLabel label='Username'>
                <Form.Control name='username' onChange={handleChange} placeholder='Enter username' />
              </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col} className='mb-3'>
              <FloatingLabel label='Password'>
                <Form.Control name='password' onChange={handleChange} type='password' placeholder='Enter password' />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Form.Label className='photoStyle'>Profile Picture</Form.Label>
          <Row className='mb-3'>
            <Form.Group as={Col} className='mb-3 photoStyle'>
              <Form.Check
                value='upload'
                inline
                label='Upload'
                name='group1'
                type='radio'
                defaultChecked
                onChange={handleRadioChange.bind(this)}
              />
              <Form.Check
                value='link'
                inline
                label='Link'
                name='group1'
                type='radio'
                onChange={handleRadioChange.bind(this)}
              />
            </Form.Group>
          </Row>

          <Row className='mb-3'>
            <Form.Group as={Col} className='mb-3'>
              { photo }
            </Form.Group>
          </Row>

          <Button variant='primary' type='button' onClick={handleSubmit}>
            Sign Up
          </Button>
        </Form>
      </SignUpForm>
    </SignUpStyle>
  );

};

export default SignUp;
