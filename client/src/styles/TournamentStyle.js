import styled from 'styled-components';

const TournamentStyle = styled.div`
  width: 40%;
  padding-top: 15px;

  .trneNameDeleteCont {
    display: flex;
    justify-content: space-between;
  }

  hr {
    width: 100%;
    border-bottom: 1px solid #28303f;
    height: 2px;
  }
`;

const InformationContainer = styled.div`

  .InformationBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    font-size: 14px;

    p {
      cursor: pointer;
    }

  }
`;

export { TournamentStyle, InformationContainer };
