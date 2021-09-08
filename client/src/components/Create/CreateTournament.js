import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { getUsers } from '../../requests/Request';

import { CreateContainer, FormContStyle } from '../../styles/Create/CreateTournamentStyle';

const CreateTournament = () => {
  const [method, setMethod] = useState('upload');
  const [tournament, setTournament] = useState({});

  const handleRadioChange = (e) => {
    setMethod(e.target.value);
  };

  const handleChange = (e) => {
    const newTournament = tournament;
    newTournament[e.target.name] = e.target.value;
    setTournament(newTournament);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(tournament);

  };

  let photo;

  if (method === 'upload') {
    photo = (
      <Form.Control onChange={handleChange} name='picture' type='file' />
    );
  } else if (method === 'link') {
    photo = (
      <Form.Control onChange={handleChange} name='picture' placeholder='Image link' />
    );
  }

  return (
    <CreateContainer>
      <div className='createTournamentTitle'>
        <h1>Create Tournament</h1>
      </div>
      <FormContStyle>
        <Form className='formStyling'>
          <Row className='mb-3'>
            <Form.Group as={Col} className='mb-3'>
              <FloatingLabel label='Tournament Name'>
                <Form.Control name='name' onChange={handleChange} placeholder='Enter tournament name' />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} className='mb-3'>
              <FloatingLabel label='Game'>
                <Form.Select name='game' onChange={handleChange}>
                  <option>Select game</option>
                  <option value='Valorant'>Valorant</option>
                  <option value='League of Legends'>League of Legends</option>
                  <option value='Smash Ultimate'>Super Smash Ultimate</option>
                  <option value='Smash Melee'>Super Smash Melee</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Row className='mb-3'>
            <FloatingLabel label='Description' className='mb-3'>
              <Form.Control name='desc' onChange={handleChange} as='textarea' placeholder='Description' />
            </FloatingLabel>
          </Row>

          <Row className='mb-3'>
            <FloatingLabel label='Rules' className='mb-3'>
              <Form.Control name='rules' onChange={handleChange} as='textarea' placeholder='Rules' />
            </FloatingLabel>
          </Row>

          <Row className='mb-3'>
            <Form.Group as={Col} className='mb-3'>
              <FloatingLabel label='Date'>
                <Form.Control name='tournamentDate' onChange={handleChange} type='date' placeholder='Date' />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} className='mb-3'>
              <FloatingLabel label='Prize'>
                <Form.Control name='prize' onChange={handleChange} placeholder='Prize' />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Form.Label className='photoStyle'>Photo</Form.Label>
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
              <Form.Check
                value='default'
                inline
                label='Default'
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

          <Row className='mb-3'>
            <Form.Group as={Col} className='mb-3'>
              { /*  TODO: Add Users option  */ }
            </Form.Group>
          </Row>

          <Button variant='primary' type='button' onClick={handleSubmit}>
            Create
          </Button>

        </Form>
      </FormContStyle>
    </CreateContainer>

  );
};

export default CreateTournament;
