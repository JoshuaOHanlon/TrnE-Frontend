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
  }

`;

export { NavContainer };
