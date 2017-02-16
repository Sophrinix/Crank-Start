import React from 'react';
import { Link } from 'react-router';

const ProjectIndexItem = ({ project, router }) => (
  <li>
    <Link to={`/project/${project.id}`}>
      <span>{project.id}</span>
      <span>{project.title}</span>
      <span>{project.description}</span>
    </Link>
  </li>
);

export default ProjectIndexItem;
