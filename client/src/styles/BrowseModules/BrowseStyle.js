import styled from 'styled-components';

const BrowseStyle = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BrowseCont = styled.div`
  margin-top: 15px;
  width: 50%;
`;

const BrowseTitle = styled.div`
  margin-bottom: 15px;

  hr {
    width: 100%;
    border-bottom: 1px solid #28303f;
    height: 2px;
  }
`;

const BrowseNav = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #7e838c;

  .browseBar {

  }
`;

const TCardListStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export { BrowseStyle, BrowseCont, BrowseTitle, BrowseNav, TCardListStyle };
