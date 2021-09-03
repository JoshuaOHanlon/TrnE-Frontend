import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

import { ParticipantsStyle, ParticipantContainer, ParticipantModule } from '../../../styles/InfoModules/ParticipantsStyle';

const Participants = (props) => {
  const [show, setShow] = useState({
    status: false,
    user: {}
  });

  const handleClose = () => setShow({status: false});
  const handleShow = (event) => {
    const user = event.target.textContent
    setShow({ status: true, user})
  };

  return(
    <ParticipantsStyle>
      <h1>Participants TEMP</h1>

      <div className='countCont'>
        <p>PARTICIPANTS ({props.tournament.users.length})</p>
      </div>

      <ParticipantContainer>

        {
          props.tournament.users.map((user, i) => {
            return (
              <ParticipantModule key={i}>
                <div className='nameCont'>
                  <p onClick={handleShow} >{user.username}</p>
                </div>
                <div className='userInfoCont'>

                  <div className='profileCont'>
                    { /*  TODO - Replace img with User image in DB  */ }
                    <img src='https://www.meme-arsenal.com/memes/f1f805d5b57de55566c487ced9971fc2.jpg' alt='profile' />
                  </div>

                </div>

              </ParticipantModule>
            );
          })
        }

      </ParticipantContainer>

      <Modal show={show.status} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title id='modalStyle'>{show.user}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Temp Body</Modal.Body>
        <Modal.Footer>
          <Button variant='online-dark' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </ParticipantsStyle>
  );

};

export default Participants;
