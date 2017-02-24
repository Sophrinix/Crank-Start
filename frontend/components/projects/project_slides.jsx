import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProjectCarousel = () => (
  <Carousel className="carousel-slides">
    <Carousel.Item>
      <img id='carousel-1'
        height={575}
        alt="oodles of NOTHIN"
        src="http://www.dannyewers.com/Photos/960x600/Birds/Ducks/Mandarin_Duck/Mandarin_Duck_2.jpg"/>
      <Carousel.Caption>
        <h3 className="carousel-h3">Make way for duckilgngs</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img id='carousel-2'
        height={575}
        alt="boo!"
        src="http://curacaozoo.com/wp-content/uploads/2016/01/6951531-mandarin-duck.jpg"/>
      <Carousel.Caption>
        <h3 className="carousel-h3">Make way!</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img id='carousel-3'
        height={575}
        alt="oops!"
        src="https://i.ytimg.com/vi/8FjCDU1aAog/maxresdefault.jpg"/>
      <Carousel.Caption>
        <h3 className="carousel-h3">Make waaaay for ducklings!</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default ProjectCarousel;
