import React, { useState } from 'react';
import { InformationContainer } from '../../styles/TournamentStyle';
import Button from 'react-bootstrap/Button';

const InformationModule = (props) => {

  const [current, setCurrent] = useState('OVERVIEW');

  const handleChange = (event) => {
    props.onChange(event.target.textContent);
    setCurrent(event.target.textContent);
  };

  return(
    <InformationContainer>
      <div className="InformationBar">
        <p onClick={handleChange} style={
          current === 'OVERVIEW' ? {color: "white"} : {color: "#7e838c"}
          } >OVERVIEW</p>
        <p onClick={handleChange} style= {
          current === 'PARTICIPANTS' ? {color: "white"} : {color: "#7e838c"}
        } >PARTICIPANTS</p>
        <p onClick={handleChange} style= {
          current === 'BRACKETS' ? {color: "white"} : {color: "#7e838c"}
        } >BRACKETS</p>
        <p onClick={handleChange} style= {
          current === 'MEDIA' ? {color: "white"} : {color: "#7e838c"}
        } >MEDIA</p>
        <p onClick={handleChange} style= {
          current === 'ANNOUNCEMENTS' ? {color: "white"} : {color: "#7e838c"}
        } >ANNOUNCEMENTS</p>
        <Button variant="outline-light" onClick={handleChange}>CONTACT</Button>
      </div>
    </InformationContainer>
  );
};

export default InformationModule;
