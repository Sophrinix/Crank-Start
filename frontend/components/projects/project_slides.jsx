import React from 'react';
import { Link, hashHistory} from 'react-router';
import { Carousel } from 'react-bootstrap';

const ProjectCarousel = (props) => {
  const {projects, children } = props;
  const projectsSlice = projects.slice(0,3);
  return (
  <Carousel className="carousel-slides">
    {projectsSlice.map(project =>
      <Carousel.Item>
        <img id='carousel-1'
          height={575}
          alt="oodles of NOTHIN"
          src={project.img_url}/>
        <Carousel.Caption>
          <h3><Link to={`projects/${project.id}`} className="carousel-h3">{project.title}</Link></h3>
        </Carousel.Caption>
      </Carousel.Item>
    )}
  </Carousel>
);
}

export default ProjectCarousel;
