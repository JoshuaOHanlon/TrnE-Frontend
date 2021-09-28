import styled from 'styled-components';

const HeroStyle = styled.section`
  margin-top: 5vh;
  height: 50vh;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .hTextImageCont {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  hr {
    width: 100%;
    border-bottom: 1px solid #8a929b;
    height: 3px;
  }
`;

const HeroText = styled.div`
  margin-top: 5%;
  width: 25vw;

  h2 {
    text-transform: uppercase;
  }

  p {
    color: #8ea2b0;
  }
`;

const CarouselCont = styled.div`
  .carousel {
    width: 30vw;
    height: 35vh;
    margin: auto;
  }

  img {
    width: 100%;
    height: 35vh;
  }
`;

export { HeroStyle, HeroText, CarouselCont };
