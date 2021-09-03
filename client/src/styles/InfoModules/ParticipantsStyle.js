import styled from 'styled-components';

const ParticipantsStyle = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;

  .countCont {
    width: 100%;
    color: #d0d0d0;
    font-size: 14px;
  }

  #modalStyle {
    background-color: grey;
    color: black;
  }

`;

const ParticipantContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;


  &:after {
    content: "";
    flex: 0 0 38.7%;
    max-width: 480px;
  }
`;



const ParticipantModule = styled.div`
  width: 150px;
  height: 180px;
  border-radius: 4px;
  border: 2px solid #28303f;
  margin-bottom: 50px;

  .nameCont {
    margin: 5px 0 0 10px;
  }

  .userInfoCont {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

  }

  .profileCont {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
`;

export { ParticipantsStyle, ParticipantContainer, ParticipantModule };
