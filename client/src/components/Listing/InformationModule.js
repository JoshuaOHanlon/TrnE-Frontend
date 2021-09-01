import React from 'react';
import { InformationContainer } from '../../styles/TournamentStyle';
import Button from 'react-bootstrap/Button';

const InformationModule = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.textContent)
  };

  return(
    <InformationContainer>
      <div className="InformationBar">
        <p onClick={handleChange}>OVERVIEW</p>
        <p onClick={handleChange}>PARTICIPANTS</p>
        <p onClick={handleChange}>BRACKETS</p>
        <p onClick={handleChange}>MEDIA</p>
        <p onClick={handleChange}>ANNOUNCEMENTS</p>
        <Button variant="outline-light" onClick={handleChange}>CONTACT</Button>
      </div>
    </InformationContainer>
  );
};

export default InformationModule;
