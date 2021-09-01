import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { HeroStyle, CarouselCont } from '../../styles/HomeModules/HeroStyle';

const Hero = () => {

  return(
    <HeroStyle>
      <CarouselCont>
        <Carousel>

          <Carousel.Item>
            <img src="https://wp.stanforddaily.com/wp-content/uploads/2020/08/image-2.png" alt="First slide" />
            <Carousel.Caption>
              <h3>First Slide</h3>
              <p>To be pulled from db</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt45d6c2043ff36e28/5e21837f146ca8115b2d3332/Champion-List.jpg" alt="Second slide" />
            <Carousel.Caption>
              <h3>Second Slide</h3>
              <p>To be pulled from db</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_SuperSmashBrosUltimate_02_image1600w.jpg" alt="Third slide" />
            <Carousel.Caption>
              <h3>Third Slide</h3>
              <p>To be pulled from db</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </CarouselCont>
    </HeroStyle>
  );

};

export default Hero;
