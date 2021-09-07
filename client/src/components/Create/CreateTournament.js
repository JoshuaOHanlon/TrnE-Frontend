import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { CreateContainer, FormContStyle } from '../../styles/Create/CreateTournamentStyle';

const CreateTournament = () => {
  const [method, setMethod] = useState('upload');

  const handleRadioChange = (e) => {
    setMethod(e.target.value);
  };

  let photo;

  if (method === 'upload') {
    photo = (
      <Form.Control type='file' />
    );
  } else if (method === 'link') {
    photo = (
      <Form.Control placeholder='Image link' />
    );
  }

  return (
    <CreateContainer>
      <h1>Create Tournament</h1>
      <FormContStyle>
        <Form className='formStyling'>
          <Row className='mb-3'>
            <Form.Group as={Col} className='mb-3'>
              <FloatingLabel label='Tournament Name'>
                <Form.Control placeholder='Enter tournament name' />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} className='mb-3'>
              <FloatingLabel label='Game'>
                <Form.Select>
                  <option>Select game</option>
                  <option value='valorant'>Valorant</option>
                  <option value='league'>League of Legends</option>
                  <option value='smash'>Super Smash Ultimate</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Row className='mb-3'>
            <FloatingLabel label='Description' className='mb-3'>
              <Form.Control as='textarea' placeholder='Description' />
            </FloatingLabel>
          </Row>

          <Row className='mb-3'>
            <FloatingLabel label='Rules' className='mb-3'>
              <Form.Control as='textarea' placeholder='Rules' />
            </FloatingLabel>
          </Row>

          <Row className='mb-3'>
            <Form.Group as={Col} className='mb-3'>
              <FloatingLabel label='Date'>
                <Form.Control type='date' placeholder='Date' />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} className='mb-3'>
              <FloatingLabel label='Prize'>
                <Form.Control placeholder='Prize' />
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

          <Button variant='primary' type='button'>
            Create
          </Button>

        </Form>
      </FormContStyle>
    </CreateContainer>

  );
};

export default CreateTournament;
