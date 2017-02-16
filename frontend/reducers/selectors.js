import { values } from 'lodash';

export const selectProjects = ({ projects }) => (
  values(projects)
);
