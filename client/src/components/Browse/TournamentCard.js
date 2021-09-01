import React from 'react';
import { TCardStyle, TCSImageCont, TCSInfoCont } from '../../styles/BrowseModules/TCardStyle';

const TournamentCard = (props) => {
  const tournDate = new Date(props.trne.tournamentDate);

  return (
    <TCardStyle>
      <TCSImageCont>
        <img src={props.trne.picture} alt={props.trne.name} />
      </TCSImageCont>
      <TCSInfoCont>
        <div className='gameCont'>
          <span>{props.trne.game}</span>
        </div>
        <div className='nameCont'>
          <p>{props.trne.name}</p>
        </div>
        <div className='dateCont'>
          <p>
            {new Intl.DateTimeFormat("en-US", {
              weekday: "short",
              month: "long",
              day: "2-digit",
            }).format(tournDate)}
          </p>
          <p>
            {new Intl.DateTimeFormat("en-US", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
              }).format(tournDate)}
          </p>
        </div>
        <hr />
        <div className = 'orgCont'>
            {
              //  TODO: Add Organizer information
            }
        </div>
      </TCSInfoCont>
    </TCardStyle>
  );
};

export default TournamentCard;
