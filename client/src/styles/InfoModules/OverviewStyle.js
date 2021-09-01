import styled from 'styled-components';

const OverviewStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  img {
    width: 100%;
    margin: 15px;
  }

  hr {
    width: 100%;
    border-bottom: 1px solid #28303f;
    height: 2px;
  }

  h3 {
    font-size: 16px;
    font-weight: 300;
  }

  .aboutContainer {
    justify-content: flex-start;
    width: 100%;
  }

  .aboutTourn {
    font-size: 12px;
    text-transform: uppercase;
    color: #7e838c;
  }

`;

export { OverviewStyle };
