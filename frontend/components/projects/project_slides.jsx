import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProjectCarousel = (
  <Carousel>
    <Carousel.Item>
      <img id='carousel-1'
        height={575}
        alt="oodles of NOTHIN"
        src="https://i.ytimg.com/vi/99k-EAMBuM8/hqdefault.jpg"/>
    </Carousel.Item>
    <Carousel.Caption>
      <h3 className="carousel-h3">Make way for duckilgngs</h3>}
    </Carousel.Caption>
    <Carousel.Item>
      <img id='carousel-2'
        height={575}
        alt="boo!"
        src="https://i.ytimg.com/vi/99k-EAMBuM8/hqdefault.jpg"/>
    </Carousel.Item>
    <Carousel.Caption>
      <h3 className="carousel-h3">Make way for these too!</h3>
    </Carousel.Caption>
    <Carousel.Item>
      <img id='carousel-3'
        height={575}
        alt="oops!"
        src="http://i1043.photobucket.com/albums/b435/perrypiepolish/Picture%20of%20the%20Moment/HappyEgg.jpg"/>
    </Carousel.Item>
    <Carousel.Caption>
      <h3 className="carousel-h3">One day a duckling</h3>
    </Carousel.Caption>
  </Carousel>
);

export default ProjectCarousel;
