import styled from 'styled-components';

const TCardStyle = styled.div`
  background-color: #1c222b;
  border-radius: 4px;
  border: 2px solid #28303f;
  height: 360px;
  width: 350px;
  overflow: hidden;

`;

const TCSImageCont = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
`;

const TCSInfoCont = styled.div`
  padding-top: 10px;

  .gameCont {
    width: 40%;
    border-radius: 15px;
    border: 1px solid #28303f;
    font-size: 9px;
    text-align: center;
    text-transform: uppercase;
    color: #7e838c;
    padding: 5px;
    margin-left: 10px;
  }

  .nameCont {
    padding: 8px 5px 5px 10px;
    font-size: 20px;

    a {
      color: white;
      text-decoration: none;
    }
    a:hover {
      color: #e3e1e1;
    }
  }

  .dateCont {
    display: flex;
    flex-wrap: wrap;

    p {
      padding-left: 10px;
      font-size: 12px;
      color: #7e838c;
      margin: 0px;
    }
  }
`;

export { TCardStyle, TCSImageCont, TCSInfoCont };
