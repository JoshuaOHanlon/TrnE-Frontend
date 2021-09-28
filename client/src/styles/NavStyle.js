import styled from 'styled-components';

const NavContainer = styled.div`
  .navChanges {
    background-color: black;
    height: 80px;
    text-transform: uppercase;

    .navbar-brand {
      padding-right: 40px;
      border-right: 2px solid #292d31;
    }


    a {
      margin-left: 15px;

    }
    span {
      color: #8ea2b0;
    }
    span:hover {
      color: white;
    }

    button {
      text-transform: uppercase;
      color: #8ea2b0;
      border: none;
      margin-left: 15px;
    }
    button:hover {
      background-color: unset !important;
      color: white;
    }
  }

`;

export { NavContainer };
