import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { HeroStyle, HeroText, CarouselCont } from '../../styles/HomeModules/HeroStyle';

const Hero = () => {

  return(
    <HeroStyle>
      <div className='hTextImageCont'>
        <HeroText>
          <h2>Join.</h2>
          <h2>Play.</h2>
          <h2>Create.</h2>
          <p>Building community through Esports competitions, one tournament at a time.</p>
        </HeroText>
        <CarouselCont>
          <Carousel controls={false} indicators={false} >
            <Carousel.Item>
              <div className='slideContainer'>
                <img src="https://wp.stanforddaily.com/wp-content/uploads/2020/08/image-2.png" alt="First slide" className='slideImg' />
                <a href='/browse'>
                  <div className='slideEffect' />
                </a>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='slideContainer'>
                <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt45d6c2043ff36e28/5e21837f146ca8115b2d3332/Champion-List.jpg" alt="Second slide" className='slideImg' />
                <a href='/browse'>
                  <div className='slideEffect' />
                </a>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='slideContainer'>
                <img src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_SuperSmashBrosUltimate_02_image1600w.jpg" alt="Third slide"  className='slideImg' />
                <a href='/browse'>
                  <div className='slideEffect' />
                </a>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='slideContainer'>
                <img src="https://i0.wp.com/thegamehaus.com/wp-content/uploads/2020/10/super-smash-bros-melee-banner.jpg?fit=960%2C539&ssl=1" alt="Fourth slide"  className='slideImg' />
                <a href='/browse'>
                  <div className='slideEffect' />
                </a>
              </div>
            </Carousel.Item>

          </Carousel>
        </CarouselCont>
      </div>
      <hr />

    </HeroStyle>
  );

};

export default Hero;
