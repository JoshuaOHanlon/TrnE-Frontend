import React from 'react';
import { OverviewStyle } from '../../../styles/InfoModules/OverviewStyle';

const Overview = (props) => {
  const { tournament } = props;

  return(
    <OverviewStyle>
      <img src={tournament.picture} alt={tournament.name} />
      <hr />
      <div className='aboutContainer'>
        <h2 className='aboutTourn'>About This Tournament</h2>
        <h3>
          <p>
            {tournament.desc}
          </p>
          <p><br /></p>
          <p>
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p><br /></p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </p>
          <p><br /></p>
          <p>
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </h3>
      </div>
    </OverviewStyle>
  );

};

export default Overview;
