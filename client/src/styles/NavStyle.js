import styled from 'styled-components';

const NavContainer = styled.div`
  background-color: #28303f;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  flex-wrap: wrap;

  hr {
    width: 85%;
    border-bottom: 1px solid #28303f;
    height: 2px;
  }

  .navCont {
    width: 100%;
  }

  .logoContainer {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .menuContainer {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-left: 30px;

    a {
      color: #7e838c;
      text-decoration: none;
    }
    a:hover {
      color: white;
    }
  }

  .ruleCont {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

`;

export { NavContainer };
