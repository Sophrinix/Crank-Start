import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProjectCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img id='carousel-1'
        height={575}
        alt="oodles of NOTHIN"
        src="https://i.ytimg.com/vi/99k-EAMBuM8/hqdefault.jpg"/>
      <Carousel.Caption>
        <h3 className="carousel-h3">Make way for duckilgngs</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img id='carousel-2'
        height={575}
        alt="boo!"
        src="http://dingo.care2.com/pictures/causes/2952/2951970.large.jpg"/>
      <Carousel.Caption>
        <h3 className="carousel-h3">Make way!</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img id='carousel-3'
        height={575}
        alt="oops!"
        src="https://s-media-cache-ak0.pinimg.com/736x/4f/09/2e/4f092ed5d7666f35aae9e8e58d5435be.jpg"/>
      <Carousel.Caption>
        <h3 className="carousel-h3">Make waaaay for ducklings!</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default ProjectCarousel;
