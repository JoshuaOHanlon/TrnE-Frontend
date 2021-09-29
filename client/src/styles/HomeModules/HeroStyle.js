import styled from 'styled-components';

const HeroStyle = styled.section`
  margin-top: 5vh;
  height: 50vh;
  width: 100%;
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
  margin-right: 20px;
  width: 18vw;

  h2 {
    text-transform: uppercase;
  }

  p {
    color: #8ea2b0;
  }
`;

const CarouselCont = styled.div`
  .carousel {
    width: 35vw;
    height: 35vh;
    margin: auto;
  }

  .slideContainer:hover .slideEffect {
    opacity: 0.5;
  }

  .slideEffect {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    background-color: #ff4655;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
  }

  img {
    width: 100%;
    height: 35vh;
  }
`;

export { HeroStyle, HeroText, CarouselCont };
