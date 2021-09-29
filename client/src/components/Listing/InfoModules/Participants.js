import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { ParticipantsStyle, ParticipantContainer, ParticipantModule } from '../../../styles/InfoModules/ParticipantsStyle';
import { getUserByUsername, updateTournament, updateUser } from '../../../requests/Request';

const Participants = (props) => {
  const [show, setShow] = useState({
    status: false,
    user: {}
  });
  const [joined, setJoined] = useState(false);

  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      const currentUsername = user['https://myapp.example.com/username'];
      props.tournament.users.forEach(i => {
        if (i.username === currentUsername) {
          setJoined(true);
        }
      });
    }
  }, []);

  const handleClose = () => setShow({status: false});
  const handleShow = (event) => {
    const user = event.target.textContent
    setShow({ status: true, user})
  };

  const handleJoin = (e) => {
    if (isAuthenticated) {
      const currentUsername = user['https://myapp.example.com/username'];
      let newUser = {};
      getUserByUsername(currentUsername, (res) => {
        console.log(res);
        newUser = res.data;
        const newTrne = props.tournament;
        newTrne.users.push(newUser);

        updateTournament(props.tournament.id, newTrne, (res) => {
          console.log(res);
        });
        updateUser(currentUsername, newUser, (res) => {
          console.log(res);
        });

      });

    } else {
      loginWithRedirect();
    }
  };

  const handleLeave = (e) => {
    console.log('Leave');
  };

  return(
    <ParticipantsStyle>
      <h1>Participants</h1>

      <div className='countCont'>
        <p>PARTICIPANTS ({props.tournament.users.length})</p>
        {
          joined ? <Button variant='outline-dark' onClick={handleLeave}>Leave</Button> : <Button variant='outline-dark' onClick={handleJoin}>Join</Button>
        }
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

      <Modal show={show.status} onHide={handleClose} className="modalStyle" centered >
        <Modal.Header closeButton>
          <Modal.Title >{show.user}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Temp Body</Modal.Body>
        <Modal.Footer>
          <Button variant='outline-dark' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </ParticipantsStyle>
  );

};

export default Participants;
