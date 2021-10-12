import styled from "styled-components";

const ProfileStyle = styled.section`
  width: 50vw;

  hr {
    width: 100%;
    border-bottom: 1px solid #28303f;
    height: 2px;
    margin-bottom: 20px;
  }

  .userTrneBar {
    color: #7e838c;
  }

  .profCont {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    width: 15vw;

  }

  .usernameCont {
    margin-left: 15px;

    span {
      text-transform: uppercase;
      color: #7e838c;
      font-size: 12px;
    }
  }

`;

export { ProfileStyle };